"use client";

import { track } from "@vercel/analytics";
import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitLeadAction, type LeadState } from "@lib/actions/leadActions";

const initialState: LeadState = { ok: false };

export function useGutterCleaningLeadAction({
  formContext,
  selectedStoreys,
  selectedTiming,
  onSuccess,
}: {
  formContext: string;
  selectedStoreys: string;
  selectedTiming: string;
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
      track("lead_submit_success", { formContext, selectedStoreys, selectedTiming, serviceLabel: "gutter cleaning" });
      onSuccess?.();
      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        router.replace(`/thank-you?${new URLSearchParams({ from: pathname ?? "/gutter-cleaning-adelaide", service: "gutter cleaning" }).toString()}`);
      }
    } else if (state.error && state.error !== previous.error) {
      track("lead_submit_error", { formContext, serviceLabel: "gutter cleaning" });
    }
    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formContext, onSuccess, pathname, router, selectedStoreys, selectedTiming, state.error, state.ok]);

  const handleSubmit = () => {
    track("lead_submit_attempt", { formContext, selectedStoreys, selectedTiming, serviceLabel: "gutter cleaning" });
    previousResultRef.current = { ok: false, error: undefined };
    hasRedirectedRef.current = false;
  };

  return { error: state.error, formAction, handleSubmit, pending, sourcePath: pathname ?? "/gutter-cleaning-adelaide" };
}
