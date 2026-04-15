"use server";

import { ID } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";
import { getOptionalEnvVariable } from "@lib/getEnvVariable";
import {
  buildDarkEmailDocument,
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

  const bodyContent = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-bg" bgcolor="#081722" style="width:100%;background-color:#081722;margin:0;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-card" bgcolor="#0b1e2b" style="width:100%;max-width:720px;background-color:#0b1e2b;border:1px solid #1e293b;border-top:6px solid #38bdf8;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px 18px;border-bottom:1px solid rgba(148,163,184,0.18);">
                <p class="text-accent" style="margin:0 0 10px;color:#38bdf8;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Website lead received</p>
                <h1 class="text-primary" style="margin:0;font-size:30px;line-height:1.1;color:#ffffff;font-weight:800;">New enquiry from ${renderFieldValue(lead.fullName)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px 28px;">
                <p class="text-body" style="margin:0 0 18px;font-size:15px;line-height:1.65;color:#cbd5e1;">A customer has submitted the website form. Lead details are below.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-panel" bgcolor="#0f172a" style="width:100%;background-color:#0f172a;border:1px solid #1e293b;border-radius:18px;overflow:hidden;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                        <tbody>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Lead ID</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.documentId ?? "Pending")}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Submitted</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${submittedAt}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Name</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.fullName)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Email</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.email)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.phone)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Address</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.address)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Roof type</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.roofType)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Condition</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.roofCondition)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Services</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${renderFieldValue(lead.whatTypeOfService)}</td></tr>
                          <tr><td style="width:34%;padding:10px 12px 0 0;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Message</td><td style="padding:10px 0 0;font-size:14px;color:#cbd5e1;text-align:left;">${message}</td></tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `.trim();

  return buildDarkEmailDocument({
    title: "New website lead received",
    previewText: `New lead from ${lead.fullName}`,
    bodyContent,
  });
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
