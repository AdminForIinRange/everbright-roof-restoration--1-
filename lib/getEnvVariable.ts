// lib/getEnvVariable.ts
import { unstable_noStore as noStore } from "next/cache";

export function getEnvVariable(name: string): string {
  noStore(); // ensure runtime read (no static caching)
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}
