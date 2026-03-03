// lib/appwrite/config.ts
import { getEnvVariable } from "@lib/getEnvVariable";

export function getAppwriteConfig() {
  return {
    endpointUrl: getEnvVariable("APPWRITE_ENDPOINT"),
    projectId: getEnvVariable("APPWRITE_PROJECT"),
    databaseId: getEnvVariable("APPWRITE_DATABASE"),
    leadsCollectionId: getEnvVariable("APPWRITE_LEADS_COLLECTION"),
    secretKey: getEnvVariable("NEXT_APPWRITE_KEY"),
  };
}
