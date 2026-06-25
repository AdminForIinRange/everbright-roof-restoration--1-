"use client";

import { track } from "@vercel/analytics";
import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitLeadAction, type LeadState } from "@lib/actions/leadActions";

const initialState: LeadState = { ok: false };

type UsePressureWashingLeadActionParams = {
  formContext: string;
  selectedArea: string;
  serviceLabel: string;
  onSuccess?: () => void;
};

export function usePressureWashingLeadAction({
  formContext,
  selectedArea,
  serviceLabel,
  onSuccess,
}: UsePressureWashingLeadActionParams) {
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);
  const previousResultRef = useRef<{ ok: boolean; error?: string }>({ ok: false });
  const hasRedirectedRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const previousResult = previousResultRef.current;

    if (state.ok && !previousResult.ok) {
      track("lead_submit_success", {
        formContext,
        selectedArea,
        serviceLabel,
      });
      onSuccess?.();

      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        const returnPath = pathname && pathname.startsWith("/") ? pathname : "/";
        const confirmationSearchParams = new URLSearchParams({
          from: returnPath,
          service: serviceLabel,
        });

        router.replace(`/thank-you?${confirmationSearchParams.toString()}`);
      }
    } else if (state.error && state.error !== previousResult.error) {
      track("lead_submit_error", {
        formContext,
        serviceLabel,
      });
    }

    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formContext, onSuccess, pathname, router, selectedArea, serviceLabel, state.error, state.ok]);

  const handleSubmit = () => {
    track("lead_submit_attempt", {
      formContext,
      selectedArea,
      serviceLabel,
    });
    previousResultRef.current = { ok: false };
    hasRedirectedRef.current = false;
  };

  return {
    error: state.error,
    formAction,
    handleSubmit,
    pending,
    sourcePath: pathname ?? "",
  };
}
