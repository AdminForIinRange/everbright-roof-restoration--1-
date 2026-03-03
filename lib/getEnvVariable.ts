export function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getOptionalEnvVariable(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}
