// app/actions/leadActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { ID } from "node-appwrite";
import { createAdminClient } from "@lib/appwrite";
import { getAppwriteConfig } from "@lib/appwrite/config";
import { sendLeadCustomerConfirmation } from "@lib/notifications/sendLeadCustomerConfirmation";
import { sendLeadNotification } from "@lib/notifications/sendLeadNotification";
import { sendLeadCustomerSms, sendLeadSms } from "@lib/notifications/sendLeadSms";
import type { Lead } from "@lib/types/lead";

export type LeadState = {
  ok: boolean;
  error?: string;
  data?: Lead;
};

function sanitize(input: unknown) {
  if (typeof input !== "string") return "";
  return input.trim();
}

function isEmail(str: string) {
  // simple validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export async function submitLeadAction(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  try {
    const fullName = sanitize(formData.get("fullName"));
    const email = sanitize(formData.get("email"));
    const phone = sanitize(formData.get("phone"));
    const address = sanitize(formData.get("address"));
    const roofType = sanitize(formData.get("roofType")) || "Not sure";
    const roofCondition =
      sanitize(formData.get("roofCondition")) || "Not sure - needs inspection";
    const whatTypeOfService =
      sanitize(formData.get("whatTypeOfService")) || "Not specified";
    const message = sanitize(formData.get("message"));
    const formSource = sanitize(formData.get("formSource"));
    const sourcePath = sanitize(formData.get("sourcePath"));
    const roofConcern = sanitize(formData.get("roofConcern")) || roofCondition;

    if (!fullName) return { ok: false, error: "Full name is required" };
    if (!email || !isEmail(email)) return { ok: false, error: "Valid email is required" };
    if (!phone) return { ok: false, error: "Phone number is required" };
    if (!address) return { ok: false, error: "Address is required" };
    if (whatTypeOfService.length > 255) {
      return { ok: false, error: "Service selection must be 255 characters or less" };
    }
    if (message.length > 255) {
      return { ok: false, error: "Message must be 255 characters or less" };
    }
    if (formSource.length > 120) {
      return { ok: false, error: "Form source must be 120 characters or less" };
    }
    if (sourcePath.length > 160) {
      return { ok: false, error: "Source path must be 160 characters or less" };
    }
    if (roofConcern.length > 255) {
      return { ok: false, error: "Roof concern must be 255 characters or less" };
    }

    const leadPayload = {
      fullName,
      email,
      phone,
      address,
      roofType,
      roofCondition,
      whatTypeOfService,
      message,
      formSource,
      sourcePath,
      roofConcern,
    };

    const { databases } = await createAdminClient();
    const appwriteConfig = getAppwriteConfig();

    const doc = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.leadsCollectionId,
      ID.unique(),
      leadPayload
    );

    try {
      await sendLeadNotification({
        ...leadPayload,
        documentId: doc.$id,
        submittedAt: doc.$createdAt,
      });
    } catch (notificationError) {
      console.error("sendLeadNotification error:", {
        error: notificationError,
        hasRecipientEmail: Boolean(process.env.APPWRITE_LEAD_NOTIFICATION_EMAIL),
        providerId: process.env.APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID ?? null,
      });
    }

    try {
      await sendLeadCustomerConfirmation({
        ...leadPayload,
        documentId: doc.$id,
        submittedAt: doc.$createdAt,
      });
    } catch (customerNotificationError) {
      console.error("sendLeadCustomerConfirmation error:", {
        error: customerNotificationError,
        customerEmail: email,
        providerId:
          process.env.APPWRITE_CUSTOMER_CONFIRMATION_PROVIDER_ID ??
          process.env.APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID ??
          null,
      });
    }

    try {
      await sendLeadSms({
        ...leadPayload,
        documentId: doc.$id,
        submittedAt: doc.$createdAt,
      });
    } catch (smsNotificationError) {
      console.error("sendLeadSms error:", {
        error: smsNotificationError,
        hasRecipientPhone: Boolean(process.env.CLICKSEND_NOTIFICATION_PHONE),
      });
    }

    try {
      await sendLeadCustomerSms({
        ...leadPayload,
        documentId: doc.$id,
        submittedAt: doc.$createdAt,
      });
    } catch (customerSmsError) {
      console.error("sendLeadCustomerSms error:", {
        error: customerSmsError,
        customerPhone: phone,
      });
    }

    // so the page shows the latest confirmation if you re-render
    revalidatePath("/");

    return { ok: true, data: doc as Lead };
  } catch (err: unknown) {
    console.error("submitLeadAction error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to submit quote request";
    return { ok: false, error: message };
  }
}
