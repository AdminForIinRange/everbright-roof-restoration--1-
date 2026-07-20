"use server";

import { getOptionalEnvVariable } from "@lib/getEnvVariable";
import { isRoofRestorationV0Lead, isPressureWashingV0Lead, type LeadEmailPayload } from "@lib/notifications/leadEmailShared";

const CLICKSEND_SMS_ENDPOINT = "https://rest.clicksend.com/v3/sms/send";
const COMPANY_PHONE_DISPLAY = "0411 017 366";

function getClickSendCredentials() {
  const username = getOptionalEnvVariable("CLICKSEND_USERNAME");
  const apiKey = getOptionalEnvVariable("CLICKSEND_API_KEY");

  if (!username || !apiKey) {
    return null;
  }

  return { username, apiKey };
}

function normalizeAuPhoneNumber(rawPhone: string) {
  const trimmed = rawPhone.replace(/[^\d+]/g, "");

  if (trimmed.startsWith("+")) return trimmed;
  if (trimmed.startsWith("0")) return `+61${trimmed.slice(1)}`;
  if (trimmed.startsWith("61")) return `+${trimmed}`;
  return `+61${trimmed}`;
}

function getCustomerFirstName(fullName: string) {
  const normalized = fullName.trim();
  if (!normalized) return "there";
  return normalized.split(/\s+/)[0] ?? normalized;
}

async function sendClickSendSms(to: string, body: string) {
  const credentials = getClickSendCredentials();

  if (!credentials) {
    console.warn("ClickSend SMS skipped: CLICKSEND_USERNAME or CLICKSEND_API_KEY is not configured.");
    return;
  }

  const auth = Buffer.from(`${credentials.username}:${credentials.apiKey}`).toString("base64");

  const response = await fetch(CLICKSEND_SMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      messages: [
        {
          source: "everbright-website",
          body: body.slice(0, 459),
          to,
        },
      ],
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.response_code !== "SUCCESS") {
    throw new Error(`ClickSend SMS request failed: ${response.status} ${JSON.stringify(result)}`);
  }

  return result;
}

function buildLeadNotificationSmsBody(lead: LeadEmailPayload) {
  const serviceLabel = isRoofRestorationV0Lead(lead)
    ? "Roof restoration"
    : isPressureWashingV0Lead(lead)
      ? "Pressure washing"
      : lead.whatTypeOfService || "General";

  return `New lead: ${lead.fullName} (${serviceLabel}). Phone: ${lead.phone}. Address: ${lead.address}.`;
}

export async function sendLeadSms(lead: LeadEmailPayload) {
  const recipientPhone = getOptionalEnvVariable("CLICKSEND_NOTIFICATION_PHONE");

  if (!recipientPhone) {
    console.warn("sendLeadSms skipped: CLICKSEND_NOTIFICATION_PHONE is not configured.");
    return;
  }

  return sendClickSendSms(recipientPhone, buildLeadNotificationSmsBody(lead));
}

function buildCustomerConfirmationSmsBody(lead: LeadEmailPayload) {
  const firstName = getCustomerFirstName(lead.fullName);

  return (
    `Hi ${firstName}, thanks for contacting EverBright! We've received your enquiry and will call you during ` +
    `business hours. Questions in the meantime? Call us on ${COMPANY_PHONE_DISPLAY}.`
  );
}

export async function sendLeadCustomerSms(lead: LeadEmailPayload) {
  if (!lead.phone.trim()) {
    console.warn("sendLeadCustomerSms skipped: lead has no phone number.");
    return;
  }

  const recipientPhone = normalizeAuPhoneNumber(lead.phone);

  return sendClickSendSms(recipientPhone, buildCustomerConfirmationSmsBody(lead));
}
