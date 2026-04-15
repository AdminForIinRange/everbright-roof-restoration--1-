import { createHash } from "node:crypto";
import { AppwriteException, ID, MessagingProviderType, Query } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";

export type LeadEmailPayload = {
  documentId?: string;
  submittedAt?: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  roofType: string;
  roofCondition: string;
  whatTypeOfService: string;
  message: string;
};

export type EmailRecipientSettings = {
  recipientEmail: string;
  recipientName: string;
  providerId?: string;
  userId: string;
};

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function buildStableId(prefix: string, email: string) {
  const hash = createHash("sha256").update(email.toLowerCase()).digest("hex").slice(0, 18);
  return `${prefix}_${hash}`;
}

function isConflictError(error: unknown) {
  return error instanceof AppwriteException && error.code === 409;
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderFieldValue(value: string) {
  const safeValue = value.trim() || "Not provided";
  return escapeHtml(safeValue).replaceAll("\n", "<br />");
}

function matchesNotificationTarget(
  target: {
    $id: string;
    identifier: string;
    providerType: string;
    providerId?: string;
  },
  settings: EmailRecipientSettings
) {
  if (target.providerType !== MessagingProviderType.Email) {
    return false;
  }

  if (target.identifier.toLowerCase() !== settings.recipientEmail.toLowerCase()) {
    return false;
  }

  if (settings.providerId && target.providerId && target.providerId !== settings.providerId) {
    return false;
  }

  return true;
}

async function findUserIdByEmail(recipientEmail: string) {
  const { users } = await createAdminClient();
  const normalizedEmail = recipientEmail.trim().toLowerCase();
  const result = await users.list({
    queries: [Query.equal("email", normalizedEmail)],
  });

  return result.users[0]?.$id;
}

export async function ensureEmailTarget(settings: EmailRecipientSettings) {
  const { users } = await createAdminClient();
  let targetUserId = settings.userId;

  try {
    await users.create({
      userId: settings.userId,
      email: settings.recipientEmail,
      name: settings.recipientName,
    });
  } catch (error) {
    if (!isConflictError(error)) {
      throw error;
    }

    const existingUserId = await findUserIdByEmail(settings.recipientEmail);

    if (!existingUserId) {
      throw error;
    }

    targetUserId = existingUserId;
  }

  const currentTargets = await users.listTargets({
    userId: targetUserId,
  });
  const existingTarget = currentTargets.targets.find((target) => matchesNotificationTarget(target, settings));

  if (existingTarget) {
    await users.updateTarget({
      userId: targetUserId,
      targetId: existingTarget.$id,
      identifier: settings.recipientEmail,
      providerId: settings.providerId,
      name: settings.recipientName,
    });

    return existingTarget.$id;
  }

  try {
    const createdTarget = await users.createTarget({
      userId: targetUserId,
      targetId: ID.unique(),
      providerType: MessagingProviderType.Email,
      identifier: settings.recipientEmail,
      providerId: settings.providerId,
      name: settings.recipientName,
    });

    return createdTarget.$id;
  } catch (error) {
    if (!isConflictError(error)) {
      throw error;
    }

    const refreshedTargets = await users.listTargets({
      userId: targetUserId,
    });
    const refreshedTarget = refreshedTargets.targets.find((target) => matchesNotificationTarget(target, settings));

    if (refreshedTarget) {
      await users.updateTarget({
        userId: targetUserId,
        targetId: refreshedTarget.$id,
        identifier: settings.recipientEmail,
        providerId: settings.providerId,
        name: settings.recipientName,
      });

      return refreshedTarget.$id;
    }

    throw error;
  }
}
