"use server";

import { ID } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";
import { getOptionalEnvVariable } from "@lib/getEnvVariable";
import {
  buildStableId,
  ensureEmailTarget,
  isEmail,
  renderFieldValue,
  type EmailRecipientSettings,
  type LeadEmailPayload,
} from "@lib/notifications/leadEmailShared";

type LeadNotificationSettings = {
  recipientEmail: string;
  recipientName: string;
  providerId?: string;
  userId: string;
} & EmailRecipientSettings;

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
  };
}

function buildLeadEmailContent(lead: LeadEmailPayload) {
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

export async function sendLeadNotification(lead: LeadEmailPayload) {
  const settings = getLeadNotificationSettings();

  if (!settings) {
    console.warn("sendLeadNotification skipped: APPWRITE_LEAD_NOTIFICATION_EMAIL is not configured.");
    return;
  }

  const targetId = await ensureEmailTarget(settings);

  const { messaging } = await createAdminClient();

  await messaging.createEmail({
    messageId: ID.unique(),
    subject: `New lead from ${lead.fullName}`,
    content: buildLeadEmailContent(lead),
    targets: [targetId],
    html: true,
  });
}
