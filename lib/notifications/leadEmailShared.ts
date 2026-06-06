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
  formSource?: string;
  sourcePath?: string;
  roofConcern?: string;
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

export function isRoofRestorationV0Lead(lead: Pick<LeadEmailPayload, "formSource" | "sourcePath">) {
  const formSource = lead.formSource?.trim() ?? "";
  const sourcePath = lead.sourcePath?.trim() ?? "";

  return (
    formSource.startsWith("roof-restoration-") ||
    sourcePath === "/roof-restoration" ||
    sourcePath === "/new-roof-restoration"
  );
}

type DarkEmailDocumentParams = {
  title: string;
  previewText: string;
  bodyContent: string;
};

export function buildDarkEmailDocument({
  title,
  previewText,
  bodyContent,
}: DarkEmailDocumentParams) {
  const safeTitle = escapeHtml(title);
  const safePreviewText = escapeHtml(previewText);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <title>${safeTitle}</title>
        <style>
          :root {
            color-scheme: dark;
            supported-color-schemes: dark;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            min-width: 100% !important;
            width: 100% !important;
            background-color: #081722 !important;
            color: #e2e8f0 !important;
          }

          body,
          table,
          td,
          div,
          p,
          a,
          span {
            font-family: Arial, sans-serif !important;
          }

          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
          }

          .dark-bg {
            background-color: #081722 !important;
          }

          .dark-card {
            background-color: #0b1e2b !important;
          }

          .dark-panel {
            background-color: #0f172a !important;
          }

          .text-primary {
            color: #ffffff !important;
          }

          .text-body {
            color: #cbd5e1 !important;
          }

          .text-muted {
            color: #94a3b8 !important;
          }

          .text-accent,
          .text-accent a {
            color: #38bdf8 !important;
          }

          [data-ogsc] html,
          [data-ogsc] body,
          [data-ogsc] .dark-bg {
            background-color: #081722 !important;
            color: #e2e8f0 !important;
          }

          [data-ogsc] .dark-card {
            background-color: #0b1e2b !important;
          }

          [data-ogsc] .dark-panel {
            background-color: #0f172a !important;
          }

          [data-ogsc] .text-primary {
            color: #ffffff !important;
          }

          [data-ogsc] .text-body {
            color: #cbd5e1 !important;
          }

          [data-ogsc] .text-muted {
            color: #94a3b8 !important;
          }

          [data-ogsc] .text-accent,
          [data-ogsc] .text-accent a {
            color: #38bdf8 !important;
          }
        </style>
      </head>
      <body class="dark-bg" bgcolor="#081722" style="margin:0;padding:0;background-color:#081722;color:#e2e8f0;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
          ${safePreviewText}
        </div>
        ${bodyContent}
      </body>
    </html>
  `.trim();
}

function matchesEmailTarget(
  target: {
    $id: string;
    identifier: string;
    providerType: string;
  },
  settings: EmailRecipientSettings
) {
  if (target.providerType !== MessagingProviderType.Email) {
    return false;
  }

  if (target.identifier.toLowerCase() !== settings.recipientEmail.toLowerCase()) {
    return false;
  }

  return true;
}

function findReusableEmailTarget(
  targets: Array<{
    $id: string;
    identifier: string;
    providerType: string;
    providerId?: string;
  }>,
  settings: EmailRecipientSettings
) {
  const matchingEmailTargets = targets.filter((target) => matchesEmailTarget(target, settings));

  return (
    matchingEmailTargets.find((target) => !settings.providerId || target.providerId === settings.providerId) ??
    matchingEmailTargets[0]
  );
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
  const existingTarget = findReusableEmailTarget(currentTargets.targets, settings);

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
    const refreshedTarget = findReusableEmailTarget(refreshedTargets.targets, settings);

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
