// app/actions/leadActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { ID } from "node-appwrite";
import { createAdminClient } from "@lib/appwrite";
import { getAppwriteConfig } from "@lib/appwrite/config";
import { sendLeadNotification } from "@lib/notifications/sendLeadNotification";
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

    const leadPayload = {
      fullName,
      email,
      phone,
      address,
      roofType,
      roofCondition,
      whatTypeOfService,
      message,
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
