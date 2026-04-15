"use server";

import { ID } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";
import { getOptionalEnvVariable } from "@lib/getEnvVariable";
import {
  buildStableId,
  ensureEmailTarget,
  escapeHtml,
  renderFieldValue,
  type LeadEmailPayload,
} from "@lib/notifications/leadEmailShared";
import { SITE_URL } from "@lib/seo";

const COMPANY_PHONE = "0411 017 366";
const COMPANY_PHONE_LINK = "tel:0411017366";
const COMPANY_LOGO_URL = `${SITE_URL}/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png`;

function getCustomerConfirmationProviderId() {
  return (
    getOptionalEnvVariable("APPWRITE_CUSTOMER_CONFIRMATION_PROVIDER_ID") ??
    getOptionalEnvVariable("APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID")
  );
}

function getCustomerFirstName(fullName: string) {
  const normalizedFullName = fullName.trim();

  if (!normalizedFullName) {
    return "there";
  }

  return normalizedFullName.split(/\s+/)[0] ?? normalizedFullName;
}

function buildCustomerEmailContent(lead: LeadEmailPayload) {
  const customerFirstName = escapeHtml(getCustomerFirstName(lead.fullName));
  const requestedServices = renderFieldValue(lead.whatTypeOfService);
  const address = renderFieldValue(lead.address);
  const phone = renderFieldValue(lead.phone);
  const message = renderFieldValue(lead.message);
  const hasMessage = lead.message.trim().length > 0;

  return `
    <div style="margin:0;padding:32px 16px;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:24px;overflow:hidden;">
        <div style="padding:28px 32px;background:#0b1e2b;text-align:center;">
          <img src="${COMPANY_LOGO_URL}" alt="EverBright logo" style="display:block;margin:0 auto 16px;max-width:240px;width:100%;height:auto;" />
          <p style="margin:0;color:#cbd5e1;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;">Professional exterior cleaning in Adelaide</p>
        </div>

        <div style="padding:32px;">
          <p style="margin:0 0 16px;font-size:16px;">Hi ${customerFirstName},</p>
          <h1 style="margin:0 0 16px;font-size:28px;line-height:1.2;color:#0f172a;">Thank you. Your enquiry has been booked in.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#334155;">
            Thank you for contacting EverBright. We have booked in your request and one of our team will call you within 5 minutes during business hours to confirm the details and talk through the next step.
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#334155;">
            If you need to add anything before we call, you can reply to this email or phone us on <a href="${COMPANY_PHONE_LINK}" style="color:#0284c7;font-weight:700;text-decoration:none;">${COMPANY_PHONE}</a>.
          </p>

          <div style="margin:0 0 24px;padding:24px;border-radius:18px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0369a1;">What happens next</p>
            <ul style="margin:0;padding-left:20px;color:#334155;line-height:1.8;">
              <li>We review your enquiry details and preferred service.</li>
              <li>We give you a quick call to confirm access, timing, and any key property notes.</li>
              <li>We talk you through the next step for your quote or booking.</li>
            </ul>
          </div>

          <table style="width:100%;border-collapse:collapse;margin:0 0 24px;">
            <tbody>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:700;color:#0f172a;">Requested service</td>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#334155;text-align:right;">${requestedServices}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:700;color:#0f172a;">Property address</td>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#334155;text-align:right;">${address}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:700;color:#0f172a;">Best contact number</td>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#334155;text-align:right;">${phone}</td>
              </tr>
              ${
                hasMessage
                  ? `
              <tr>
                <td style="padding:12px 0 0;font-size:14px;font-weight:700;color:#0f172a;vertical-align:top;">Your notes</td>
                <td style="padding:12px 0 0;font-size:14px;color:#334155;text-align:right;">${message}</td>
              </tr>`
                  : ""
              }
            </tbody>
          </table>

          <p style="margin:0 0 8px;font-size:16px;line-height:1.7;color:#334155;">Regards,</p>
          <p style="margin:0;font-size:16px;line-height:1.7;color:#0f172a;font-weight:700;">The EverBright Team</p>
        </div>

        <div style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
          <p style="margin:0 0 6px;font-size:12px;line-height:1.7;color:#64748b;">EverBright Exterior Cleaning, Adelaide SA</p>
          <p style="margin:0;font-size:12px;line-height:1.7;color:#64748b;">
            <a href="${SITE_URL}" style="color:#0284c7;text-decoration:none;">${SITE_URL}</a>
            &nbsp;|&nbsp;
            <a href="${COMPANY_PHONE_LINK}" style="color:#0284c7;text-decoration:none;">${COMPANY_PHONE}</a>
          </p>
        </div>
      </div>
    </div>
  `.trim();
}

export async function sendLeadCustomerConfirmation(lead: LeadEmailPayload) {
  const targetId = await ensureEmailTarget({
    recipientEmail: lead.email,
    recipientName: lead.fullName,
    providerId: getCustomerConfirmationProviderId(),
    userId: buildStableId("lead_customer", lead.email),
  });

  const customerFirstName = getCustomerFirstName(lead.fullName);
  const { messaging } = await createAdminClient();

  await messaging.createEmail({
    messageId: ID.unique(),
    subject: `Thank you ${customerFirstName} - your EverBright enquiry is booked in`,
    content: buildCustomerEmailContent(lead),
    targets: [targetId],
    html: true,
  });
}
