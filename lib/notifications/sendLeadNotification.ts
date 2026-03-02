"use server";

import { createHash } from "node:crypto";
import { AppwriteException, ID, MessagingProviderType } from "node-appwrite";
import { createAdminClient } from "@lib/appwrite";
import { getOptionalEnvVariable } from "@lib/getEnvVariable";

type LeadNotificationPayload = {
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

type LeadNotificationSettings = {
  recipientEmail: string;
  recipientName: string;
  providerId?: string;
  userId: string;
  targetId: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildStableId(prefix: string, email: string) {
  const hash = createHash("sha256").update(email.toLowerCase()).digest("hex").slice(0, 18);
  return `${prefix}_${hash}`;
}

function getLeadNotificationSettings(): LeadNotificationSettings | null {
  const recipientEmail = getOptionalEnvVariable("APPWRITE_LEAD_NOTIFICATION_EMAIL");

  if (!recipientEmail) {
    return null;
  }

  if (!isEmail(recipientEmail)) {
    throw new Error("APPWRITE_LEAD_NOTIFICATION_EMAIL must be a valid email address.");
  }

  const recipientName = getOptionalEnvVariable("APPWRITE_LEAD_NOTIFICATION_NAME") ?? "Lead Notifications";

  return {
    recipientEmail,
    recipientName,
    providerId: getOptionalEnvVariable("APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID"),
    userId: buildStableId("lead_notify", recipientEmail),
    targetId: buildStableId("lead_target", recipientEmail),
  };
}

function isConflictError(error: unknown) {
  return error instanceof AppwriteException && error.code === 409;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderFieldValue(value: string) {
  const safeValue = value.trim() || "Not provided";
  return escapeHtml(safeValue).replaceAll("\n", "<br />");
}

function buildLeadEmailContent(lead: LeadNotificationPayload) {
  const submittedAt = renderFieldValue(lead.submittedAt ?? new Date().toISOString());
  const message = renderFieldValue(lead.message);

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6">
      <h2 style="margin:0 0 16px">New website lead received</h2>
      <p style="margin:0 0 20px">A customer has submitted the website lead form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        <tbody>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Lead ID</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.documentId ?? "Pending")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Submitted</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${submittedAt}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Name</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.fullName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.phone)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Address</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.address)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Roof type</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.roofType)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Roof condition</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.roofCondition)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Requested services</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${renderFieldValue(lead.whatTypeOfService)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Message</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${message}</td></tr>
        </tbody>
      </table>
    </div>
  `.trim();
}

async function ensureNotificationRecipient(settings: LeadNotificationSettings) {
  const { users } = await createAdminClient();

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
  }

  try {
    await users.createTarget({
      userId: settings.userId,
      targetId: settings.targetId,
      providerType: MessagingProviderType.Email,
      identifier: settings.recipientEmail,
      providerId: settings.providerId,
      name: settings.recipientName,
    });
  } catch (error) {
    if (!isConflictError(error)) {
      throw error;
    }
  }
}

export async function sendLeadNotification(lead: LeadNotificationPayload) {
  const settings = getLeadNotificationSettings();

  if (!settings) {
    return;
  }

  await ensureNotificationRecipient(settings);

  const { messaging } = await createAdminClient();

  await messaging.createEmail({
    messageId: ID.unique(),
    subject: `New lead from ${lead.fullName}`,
    content: buildLeadEmailContent(lead),
    targets: [settings.targetId],
    html: true,
  });
}
