"use client";

import { track } from "@vercel/analytics";
import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitLeadAction, type LeadState } from "@lib/actions/leadActions";

const initialState: LeadState = { ok: false };

export function usePaverSealingLeadAction({
  formContext,
  surfaceType,
  onSuccess,
}: {
  formContext: string;
  surfaceType: string;
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
      track("lead_submit_success", { formContext, surfaceType, serviceLabel: "paver & concrete sealing" });
      onSuccess?.();
      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        router.replace(`/thank-you?${new URLSearchParams({ from: pathname ?? "/paver-concrete-sealing-adelaide", service: "paver & concrete sealing" }).toString()}`);
      }
    } else if (state.error && state.error !== previous.error) {
      track("lead_submit_error", { formContext, serviceLabel: "paver & concrete sealing" });
    }
    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formContext, onSuccess, pathname, router, state.error, state.ok, surfaceType]);

  const handleSubmit = () => {
    track("lead_submit_attempt", { formContext, surfaceType, serviceLabel: "paver & concrete sealing" });
    previousResultRef.current = { ok: false, error: undefined };
    hasRedirectedRef.current = false;
  };

  return { error: state.error, formAction, handleSubmit, pending, sourcePath: pathname ?? "/paver-concrete-sealing-adelaide" };
}
