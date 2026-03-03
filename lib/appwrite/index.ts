// lib/appwrite/index.ts
"use server";

import { Account, Client, Databases, Messaging, Users } from "node-appwrite";
import { getAppwriteConfig } from "@lib/appwrite/config";

export const createAdminClient = async () => {
  const appwriteConfig = getAppwriteConfig();
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
    get messaging() {
      return new Messaging(client);
    },
    get users() {
      return new Users(client);
    },
  };
};
