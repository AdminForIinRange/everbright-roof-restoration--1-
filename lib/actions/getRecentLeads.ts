// app/actions/getRecentLeads.ts
"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "@lib/appwrite";
import { appwriteConfig } from "@lib/appwrite/config";
import type { Lead } from "@lib/types/lead";

export type LeadsResult = {
  ok: boolean;
  error?: string;
  data?: Lead[];
};

export async function getRecentLeadsAction(
  _prev: LeadsResult,
  formData: FormData
): Promise<LeadsResult> {
  const pin = String(formData.get("pin") || "").trim();

  // Simple PIN check
  if (pin !== "12345") {
    return { ok: false, error: "Invalid PIN." };
  }

  try {
    const { databases } = await createAdminClient();

    // Pull latest 50 by creation time (newest first)
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.leadsCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(50)]
    );

    return { ok: true, data: res.documents as Lead[] };
  } catch (err: unknown) {
    console.error("getRecentLeadsAction error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to load leads";
    return { ok: false, error: message };
  }
}
