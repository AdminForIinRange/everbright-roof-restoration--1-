// lib/appwrite/index.ts
"use server";

import { Account, Client, Databases } from "node-appwrite";
import { appwriteConfig } from "@lib/appwrite/config";

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};
