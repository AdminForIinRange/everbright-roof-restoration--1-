// lib/getAppwriteConfig.ts
import { unstable_noStore as noStore } from "next/cache";

export function getAppwriteConfig() {
  // Prevent static caching
  noStore();

  const endpointUrl = process.env.APPWRITE_ENDPOINT;
  const projectId = process.env.APPWRITE_PROJECT;
  const databaseId = process.env.APPWRITE_DATABASE;
  const leadsCollectionId = process.env.APPWRITE_LEADS_COLLECTION;
  const secretKey = process.env.NEXT_APPWRITE_KEY;

  if (
    !endpointUrl ||
    !projectId ||
    !databaseId ||
    !leadsCollectionId ||
    !secretKey
  ) {
    throw new Error("One or more required Appwrite environment variables are missing.");
  }

  return {
    endpointUrl,
    projectId,
    databaseId,
    leadsCollectionId,
    secretKey,
  };
}
