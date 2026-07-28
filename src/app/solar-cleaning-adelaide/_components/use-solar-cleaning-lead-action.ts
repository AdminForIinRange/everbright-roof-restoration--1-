"use client";

import { track } from "@vercel/analytics";
import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitLeadAction, type LeadState } from "@lib/actions/leadActions";

const initialState: LeadState = { ok: false };

export function useSolarCleaningLeadAction({
  formContext,
  panelCondition,
  onSuccess,
}: {
  formContext: string;
  panelCondition: string;
  onSuccess?: () => void;
}) {
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);
  const previousResultRef = useRef({ ok: false, error: undefined as string | undefined });
  const hasRedirectedRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const previous = previousResultRef.current;
    if (state.ok && !previous.ok) {
      track("lead_submit_success", { formContext, panelCondition, serviceLabel: "solar cleaning" });
      onSuccess?.();
      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        router.replace(`/thank-you?${new URLSearchParams({ from: pathname ?? "/solar-cleaning-adelaide", service: "solar cleaning" }).toString()}`);
      }
    } else if (state.error && state.error !== previous.error) {
      track("lead_submit_error", { formContext, serviceLabel: "solar cleaning" });
    }
    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formContext, onSuccess, panelCondition, pathname, router, state.error, state.ok]);

  const handleSubmit = () => {
    track("lead_submit_attempt", { formContext, panelCondition, serviceLabel: "solar cleaning" });
    previousResultRef.current = { ok: false, error: undefined };
    hasRedirectedRef.current = false;
  };

  return { error: state.error, formAction, handleSubmit, pending, sourcePath: pathname ?? "/solar-cleaning-adelaide" };
}
