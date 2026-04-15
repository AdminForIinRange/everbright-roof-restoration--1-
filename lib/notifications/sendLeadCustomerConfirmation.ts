"use server";

import { ID } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";
import { getOptionalEnvVariable } from "@lib/getEnvVariable";
import {
  buildDarkEmailDocument,
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

  const bodyContent = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-bg" bgcolor="#081722" style="width:100%;background-color:#081722;margin:0;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-card" bgcolor="#0b1e2b" style="width:100%;max-width:640px;background-color:#0b1e2b;border:1px solid #1e293b;border-top:6px solid #38bdf8;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px 18px;border-bottom:1px solid rgba(148,163,184,0.18);text-align:center;">
                <img src="${COMPANY_LOGO_URL}" alt="EverBright logo" style="display:block;margin:0 auto 14px;max-width:210px;width:100%;height:auto;" />
                <p class="text-accent" style="margin:0;color:#38bdf8;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Exterior Cleaning Adelaide</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p class="text-body" style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#e2e8f0;">Hi ${customerFirstName},</p>
                <h1 class="text-primary" style="margin:0 0 14px;font-size:34px;line-height:1.05;color:#ffffff;font-weight:800;">You're booked in.</h1>
                <p class="text-body" style="margin:0 0 12px;font-size:16px;line-height:1.65;color:#cbd5e1;">
                  Thanks for contacting EverBright. We&rsquo;ll give you a quick call shortly during business hours to confirm the details.
                </p>
                <p class="text-body" style="margin:0 0 22px;font-size:16px;line-height:1.65;color:#cbd5e1;">
                  Need to add anything? Just reply to this email or call <a href="${COMPANY_PHONE_LINK}" class="text-accent" style="color:#38bdf8;font-weight:700;text-decoration:none;">${COMPANY_PHONE}</a>
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="dark-panel" bgcolor="#0f172a" style="width:100%;background-color:#0f172a;border:1px solid #1e293b;border-radius:18px;overflow:hidden;margin:0 0 20px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p class="text-accent" style="margin:0 0 12px;color:#38bdf8;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Booking summary</p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                        <tbody>
                          <tr>
                            <td class="text-primary" style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Service</td>
                            <td class="text-body" style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${requestedServices}</td>
                          </tr>
                          <tr>
                            <td class="text-primary" style="width:34%;padding:10px 12px 10px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Address</td>
                            <td class="text-body" style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#cbd5e1;text-align:left;">${address}</td>
                          </tr>
                          <tr>
                            <td class="text-primary" style="width:34%;padding:10px 12px 10px 0${hasMessage ? ';border-bottom:1px solid #1e293b' : ''};font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Phone</td>
                            <td class="text-body" style="padding:10px 0${hasMessage ? ';border-bottom:1px solid #1e293b' : ''};font-size:14px;color:#cbd5e1;text-align:left;">${phone}</td>
                          </tr>
                          ${
                            hasMessage
                              ? `
                          <tr>
                            <td class="text-primary" style="width:34%;padding:10px 12px 0 0;font-size:14px;font-weight:700;color:#ffffff;vertical-align:top;">Notes</td>
                            <td class="text-body" style="padding:10px 0 0;font-size:14px;color:#cbd5e1;text-align:left;">${message}</td>
                          </tr>`
                              : ""
                          }
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#112235" style="width:100%;background-color:#112235;border:1px solid rgba(56,189,248,0.22);border-radius:16px;overflow:hidden;margin:0 0 22px;">
                  <tr>
                    <td style="padding:16px 18px;">
                      <p class="text-body" style="margin:0;font-size:15px;line-height:1.6;color:#e2e8f0;">
                        <strong class="text-primary" style="color:#ffffff;">Next step:</strong> we&apos;ll give you a quick confirmation call, then guide you through the quote or booking.
                      </p>
                    </td>
                  </tr>
                </table>

                <p class="text-primary" style="margin:0;font-size:16px;line-height:1.7;color:#ffffff;font-weight:700;">The EverBright Team</p>
              </td>
            </tr>
            <tr>
              <td class="dark-bg" bgcolor="#081722" style="padding:18px 28px;background-color:#081722;border-top:1px solid #1e293b;text-align:center;">
                <p class="text-muted" style="margin:0 0 6px;font-size:12px;line-height:1.7;color:#94a3b8;">EverBright Exterior Cleaning, Adelaide SA</p>
                <p class="text-muted" style="margin:0;font-size:12px;line-height:1.7;color:#94a3b8;">
                  <a href="${SITE_URL}" class="text-accent" style="color:#38bdf8;text-decoration:none;">${SITE_URL}</a>
                  &nbsp;|&nbsp;
                  <a href="${COMPANY_PHONE_LINK}" class="text-accent" style="color:#38bdf8;text-decoration:none;">${COMPANY_PHONE}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `.trim();

  return buildDarkEmailDocument({
    title: "Your EverBright enquiry is booked in",
    previewText: "Your EverBright enquiry is booked in.",
    bodyContent,
  });
}

export async function sendLeadCustomerConfirmation(lead: LeadEmailPayload) {
  const targetId = await ensureEmailTarget({
    recipientEmail: lead.email,
    recipientName: lead.fullName,
    providerId: getCustomerConfirmationProviderId(),
    userId: buildStableId("lead_customer", lead.email),
  });

  const { messaging } = await createAdminClient();

  await messaging.createEmail({
    messageId: ID.unique(),
    subject: `Your EverBright enquiry is booked in`,
    content: buildCustomerEmailContent(lead),
    targets: [targetId],
    html: true,
  });
}
