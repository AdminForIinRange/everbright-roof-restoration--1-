"use client";

import { track } from "@vercel/analytics";
import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitLeadAction, type LeadState } from "@lib/actions/leadActions";

const initialState: LeadState = { ok: false };

type UseV0LeadActionParams = {
  formContext: string;
  roofCondition: string;
  roofType?: string;
  serviceLabel: string;
  onSuccess?: () => void;
};

export function useV0LeadAction({
  formContext,
  roofCondition,
  roofType = "Not sure",
  serviceLabel,
  onSuccess,
}: UseV0LeadActionParams) {
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
        roofCondition,
        roofType,
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
  }, [formContext, onSuccess, pathname, roofCondition, roofType, router, serviceLabel, state.error, state.ok]);

  const handleSubmit = () => {
    track("lead_submit_attempt", {
      formContext,
      roofCondition,
      roofType,
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
