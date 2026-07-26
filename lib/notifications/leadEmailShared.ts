import { createHash } from "node:crypto";
import { AppwriteException, ID, MessagingProviderType, Query } from "node-appwrite";

import { createAdminClient } from "@lib/appwrite";

export type LeadEmailPayload = {
  documentId?: string;
  submittedAt?: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  roofType: string;
  roofCondition: string;
  whatTypeOfService: string;
  message: string;
  formSource?: string;
  sourcePath?: string;
  roofConcern?: string;
};

export type EmailRecipientSettings = {
  recipientEmail: string;
  recipientName: string;
  providerId?: string;
  userId: string;
};

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function buildStableId(prefix: string, email: string) {
  const hash = createHash("sha256").update(email.toLowerCase()).digest("hex").slice(0, 18);
  return `${prefix}_${hash}`;
}

function isConflictError(error: unknown) {
  return error instanceof AppwriteException && error.code === 409;
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderFieldValue(value: string) {
  const safeValue = value.trim() || "Not provided";
  return escapeHtml(safeValue).replaceAll("\n", "<br />");
}

export function isRoofRestorationV0Lead(lead: Pick<LeadEmailPayload, "formSource" | "sourcePath">) {
  const formSource = lead.formSource?.trim() ?? "";
  const sourcePath = lead.sourcePath?.trim() ?? "";

  return (
    formSource.startsWith("roof-restoration-") ||
    sourcePath === "/roof-restoration" ||
    sourcePath === "/roof-cleaning" ||
    sourcePath === "/roof-cleaning-adelaide" ||
    sourcePath === "/new-roof-restoration"
  );
}

export function isPressureWashingV0Lead(
  lead: Pick<LeadEmailPayload, "formSource" | "sourcePath" | "whatTypeOfService">
) {
  const formSource = lead.formSource?.trim() ?? "";
  const sourcePath = lead.sourcePath?.trim() ?? "";
  const service = lead.whatTypeOfService?.trim().toLowerCase() ?? "";

  return (
    formSource.startsWith("newoage-pressure-washing-") ||
    ((sourcePath === "/newoage" || sourcePath === "/pressure-washing" || sourcePath === "/pressure-washing-adelaide") &&
      service.includes("pressure washing"))
  );
}

type DarkEmailDocumentParams = {
  title: string;
  previewText: string;
  bodyContent: string;
};

function hardenEmailTextColors(html: string) {
  return html.replace(
    /(^|[;"\s])color\s*:\s*(#[0-9a-fA-F]{3,8})\s*(!important)?\s*;/g,
    "$1color:$2 !important;-webkit-text-fill-color:$2 !important;"
  );
}

export function buildDarkEmailDocument({
  title,
  previewText,
  bodyContent,
}: DarkEmailDocumentParams) {
  const safeTitle = escapeHtml(title);
  const safePreviewText = escapeHtml(previewText);

  const document = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <title>${safeTitle}</title>
        <style>
          :root {
            color-scheme: light;
            supported-color-schemes: light;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            min-width: 100% !important;
            width: 100% !important;
            height: 100% !important;
            background-color: #081722 !important;
            background: #081722 !important;
            background-image: linear-gradient(#081722, #081722) !important;
            color: #dff6ff !important;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
          }

          body,
          table,
          td,
          div,
          p,
          a,
          span,
          strong,
          h1,
          h2,
          h3 {
            font-family: Arial, sans-serif !important;
          }

          body,
          table,
          td,
          div,
          p,
          span,
          strong,
          h1,
          h2,
          h3 {
            color: #dff6ff !important;
          }

          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
          }

          .dark-bg {
            background-color: #081722 !important;
            background: #081722 !important;
            background-image: linear-gradient(#081722, #081722) !important;
            color: #dff6ff !important;
          }

          .email-root,
          .email-root-cell,
          .email-outer,
          .email-outer-cell {
            background-color: #081722 !important;
            background: #081722 !important;
            background-image: linear-gradient(#081722, #081722) !important;
            color: #dff6ff !important;
          }

          .dark-card {
            background-color: #0b1e2b !important;
            background: #0b1e2b !important;
            background-image: linear-gradient(#0b1e2b, #0b1e2b) !important;
            color: #dff6ff !important;
          }

          .dark-panel {
            background-color: #0f172a !important;
            background: #0f172a !important;
            background-image: linear-gradient(#0f172a, #0f172a) !important;
            color: #dff6ff !important;
          }

          .text-primary {
            color: #dff6ff !important;
          }

          .text-body {
            color: #dff6ff !important;
          }

          .text-muted {
            color: #dff6ff !important;
          }

          .text-accent,
          .text-accent a {
            color: #38bdf8 !important;
          }

          [data-ogsc] html,
          [data-ogsc] body,
          [data-ogsc] .email-root,
          [data-ogsc] .email-root-cell,
          [data-ogsc] .email-outer,
          [data-ogsc] .email-outer-cell,
          [data-ogsc] .dark-bg {
            background-color: #081722 !important;
            background: #081722 !important;
            background-image: linear-gradient(#081722, #081722) !important;
            color: #dff6ff !important;
          }

          [data-ogsc] .dark-card {
            background-color: #0b1e2b !important;
            background: #0b1e2b !important;
            background-image: linear-gradient(#0b1e2b, #0b1e2b) !important;
            color: #dff6ff !important;
          }

          [data-ogsc] .dark-panel {
            background-color: #0f172a !important;
            background: #0f172a !important;
            background-image: linear-gradient(#0f172a, #0f172a) !important;
            color: #dff6ff !important;
          }

          @media (prefers-color-scheme: light) {
            html,
            body,
            .dark-bg,
            .email-bg,
            .email-root,
            .email-root-cell,
            .email-outer,
            .email-outer-cell {
              background-color: #081722 !important;
              background: #081722 !important;
              background-image: linear-gradient(#081722, #081722) !important;
              color: #dff6ff !important;
            }

            .dark-card {
              background-color: #0b1e2b !important;
              background: #0b1e2b !important;
              background-image: linear-gradient(#0b1e2b, #0b1e2b) !important;
              color: #dff6ff !important;
            }

            .dark-panel {
              background-color: #0f172a !important;
              background: #0f172a !important;
              background-image: linear-gradient(#0f172a, #0f172a) !important;
              color: #dff6ff !important;
            }
          }

          @media (prefers-color-scheme: dark) {
            html,
            body,
            .dark-bg,
            .email-bg,
            .email-root,
            .email-root-cell,
            .email-outer,
            .email-outer-cell {
              background-color: #081722 !important;
              background: #081722 !important;
              background-image: linear-gradient(#081722, #081722) !important;
              color: #dff6ff !important;
            }

            .dark-card {
              background-color: #0b1e2b !important;
              background: #0b1e2b !important;
              background-image: linear-gradient(#0b1e2b, #0b1e2b) !important;
              color: #dff6ff !important;
            }

            .dark-panel {
              background-color: #0f172a !important;
              background: #0f172a !important;
              background-image: linear-gradient(#0f172a, #0f172a) !important;
              color: #dff6ff !important;
            }

            .text-primary {
              color: #dff6ff !important;
            }

            .text-body {
              color: #dff6ff !important;
            }

            .text-muted {
              color: #dff6ff !important;
            }

            .text-accent,
            .text-accent a {
              color: #38bdf8 !important;
            }
          }

          [data-ogsc] .text-primary {
            color: #dff6ff !important;
          }

          [data-ogsc] .text-body {
            color: #dff6ff !important;
          }

          [data-ogsc] .text-muted {
            color: #dff6ff !important;
          }

          [data-ogsc] .text-accent,
          [data-ogsc] .text-accent a {
            color: #38bdf8 !important;
          }
        </style>
      </head>
      <body class="body dark-bg" bgcolor="#081722" style="margin:0;padding:0;width:100%;min-width:100%;height:100%;min-height:100vh;background-color:#081722;background:#081722;background-image:linear-gradient(#081722,#081722);color:#dff6ff;">
        <div class="email-bg dark-bg" style="display:block;width:100%;min-width:100%;height:100%;min-height:100vh;margin:0;padding:0;background-color:#081722;background:#081722;background-image:linear-gradient(#081722,#081722);color:#dff6ff;">
          <center class="email-bg dark-bg" style="display:block;width:100%;min-width:100%;height:100%;min-height:100vh;margin:0;padding:0;background-color:#081722;background:#081722;background-image:linear-gradient(#081722,#081722);">
            <table role="presentation" width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" class="email-root dark-bg" bgcolor="#081722" style="width:100%;min-width:100%;height:100%;min-height:100vh;background-color:#081722;background:#081722;background-image:linear-gradient(#081722,#081722);color:#dff6ff;margin:0;padding:0;border-spacing:0;border-collapse:collapse;">
              <tr>
                <td class="email-root-cell dark-bg" align="center" valign="top" bgcolor="#081722" style="width:100%;height:100%;min-height:100vh;background-color:#081722;background:#081722;background-image:linear-gradient(#081722,#081722);color:#dff6ff;margin:0;padding:0;">
                  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
                    ${safePreviewText}
                  </div>
                  ${bodyContent}
                </td>
              </tr>
            </table>
          </center>
        </div>
      </body>
    </html>
  `.trim();

  return hardenEmailTextColors(document);
}

function matchesEmailTarget(
  target: {
    $id: string;
    identifier: string;
    providerType: string;
  },
  settings: EmailRecipientSettings
) {
  if (target.providerType !== MessagingProviderType.Email) {
    return false;
  }

  if (target.identifier.toLowerCase() !== settings.recipientEmail.toLowerCase()) {
    return false;
  }

  return true;
}

function findReusableEmailTarget(
  targets: Array<{
    $id: string;
    identifier: string;
    providerType: string;
    providerId?: string;
  }>,
  settings: EmailRecipientSettings
) {
  const matchingEmailTargets = targets.filter((target) => matchesEmailTarget(target, settings));

  return (
    matchingEmailTargets.find((target) => !settings.providerId || target.providerId === settings.providerId) ??
    matchingEmailTargets[0]
  );
}

async function findUserIdByEmail(recipientEmail: string) {
  const { users } = await createAdminClient();
  const normalizedEmail = recipientEmail.trim().toLowerCase();
  const result = await users.list({
    queries: [Query.equal("email", normalizedEmail)],
  });

  return result.users[0]?.$id;
}

export async function ensureEmailTarget(settings: EmailRecipientSettings) {
  const { users } = await createAdminClient();
  let targetUserId = settings.userId;

  try {
    await users.create({
      userId: settings.userId,
      email: settings.recipientEmail,
      name: settings.recipientName,
    });
  } catch (error) {
    if (!isConflictError(error)) {
      throw error;
    }

    const existingUserId = await findUserIdByEmail(settings.recipientEmail);

    if (!existingUserId) {
      throw error;
    }

    targetUserId = existingUserId;
  }

  const currentTargets = await users.listTargets({
    userId: targetUserId,
  });
  const existingTarget = findReusableEmailTarget(currentTargets.targets, settings);

  if (existingTarget) {
    await users.updateTarget({
      userId: targetUserId,
      targetId: existingTarget.$id,
      identifier: settings.recipientEmail,
      providerId: settings.providerId,
      name: settings.recipientName,
    });

    return existingTarget.$id;
  }

  try {
    const createdTarget = await users.createTarget({
      userId: targetUserId,
      targetId: ID.unique(),
      providerType: MessagingProviderType.Email,
      identifier: settings.recipientEmail,
      providerId: settings.providerId,
      name: settings.recipientName,
    });

    return createdTarget.$id;
  } catch (error) {
    if (!isConflictError(error)) {
      throw error;
    }

    const refreshedTargets = await users.listTargets({
      userId: targetUserId,
    });
    const refreshedTarget = findReusableEmailTarget(refreshedTargets.targets, settings);

    if (refreshedTarget) {
      await users.updateTarget({
        userId: targetUserId,
        targetId: refreshedTarget.$id,
        identifier: settings.recipientEmail,
        providerId: settings.providerId,
        name: settings.recipientName,
      });

      return refreshedTarget.$id;
    }

    throw error;
  }
}
