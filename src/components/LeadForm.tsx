'use client';

import React, { useActionState, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { track } from '@vercel/analytics';
import { submitLeadAction, type LeadState } from '@lib/actions/leadActions';

const initialState: LeadState = { ok: false };

const defaultTypeOptions = ['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure'];
const defaultConditionOptions = [
  'Light surface staining',
  'Moderate mould / lichen',
  'Heavy mould & build-up',
  'Not sure - needs inspection',
];
const defaultServiceNeededOptions = [
  'Roof Cleaning',
  'Pressure Washing',
  'Solar Cleaning',
  'Gutter Cleaning',
  'Paver & Concrete Sealing',
];

type LeadFormProps = {
  serviceLabel?: string;
  typeQuestion?: string;
  typeOptions?: string[];
  conditionQuestion?: string;
  conditionOptions?: string[];
  serviceNeededOptions?: string[];
  messagePlaceholder?: string;
};

const LeadForm: React.FC<LeadFormProps> = ({
  serviceLabel = 'roof cleaning',
  typeOptions = defaultTypeOptions,
  conditionOptions = defaultConditionOptions,
  serviceNeededOptions = defaultServiceNeededOptions,
  messagePlaceholder = 'How can we help?',
}) => {
  const resolvedTypeOptions = typeOptions.length > 0 ? typeOptions : defaultTypeOptions;
  const resolvedConditionOptions = conditionOptions.length > 0 ? conditionOptions : defaultConditionOptions;
  const resolvedServiceNeededOptions =
    serviceNeededOptions.length > 0 ? serviceNeededOptions : defaultServiceNeededOptions;
  const defaultRoofType = resolvedTypeOptions[resolvedTypeOptions.length - 1] ?? 'Not sure';
  const defaultRoofCondition = resolvedConditionOptions[resolvedConditionOptions.length - 1] ?? 'Not sure - needs inspection';

  const [hasReset, setHasReset] = useState(false);
  const previousResultRef = useRef<{ ok: boolean; error?: string }>({ ok: false });
  const hasRedirectedRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    roofType: defaultRoofType,
    roofCondition: defaultRoofCondition,
    requestedServices: [] as string[],
  }));
  const whatTypeOfService =
    formData.requestedServices.length > 0
      ? resolvedServiceNeededOptions.filter((option) => formData.requestedServices.includes(option)).join(', ')
      : serviceLabel;
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);
  const isSubmitted = state.ok && !hasReset;

  const handleServiceToggle = (service: string) => {
    setFormData((previousFormData) => {
      const isSelected = previousFormData.requestedServices.includes(service);

      return {
        ...previousFormData,
        requestedServices: isSelected
          ? previousFormData.requestedServices.filter((selectedService) => selectedService !== service)
          : [...previousFormData.requestedServices, service],
      };
    });
  };

  useEffect(() => {
    const previousResult = previousResultRef.current;

    if (state.ok && !previousResult.ok) {
      track('lead_submit_success', {
        serviceLabel,
        roofType: formData.roofType,
        roofCondition: formData.roofCondition,
        whatTypeOfService,
      });
    } else if (state.error && state.error !== previousResult.error) {
      track('lead_submit_error');
    }

    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formData.roofCondition, formData.roofType, serviceLabel, state.error, state.ok, whatTypeOfService]);

  useEffect(() => {
    if (!isSubmitted || hasRedirectedRef.current) {
      return;
    }

    hasRedirectedRef.current = true;
    const returnPath = pathname && pathname.startsWith('/') ? pathname : '/';
    const confirmationSearchParams = new URLSearchParams({
      from: returnPath,
      service: serviceLabel,
    });

    router.replace(`/thank-you?${confirmationSearchParams.toString()}`);
  }, [isSubmitted, pathname, router, serviceLabel]);

  const handleSubmit = () => {
    track('lead_submit_attempt', {
      serviceLabel,
      roofType: formData.roofType,
      roofCondition: formData.roofCondition,
      whatTypeOfService,
    });
    previousResultRef.current = { ok: false };
    hasRedirectedRef.current = false;
    setHasReset(false);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-md animate-fade-in rounded-xl border-t-[6px] border-brand-sky bg-white p-10 text-center form-shadow md:max-w-2xl md:p-12 lg:max-w-3xl">
        <div className="mx-auto mb-6 h-12 w-12 animate-pulse rounded-full border-4 border-brand-sky/20 border-t-brand-sky" />
        <h3 className="mb-3 font-display text-2xl font-bold text-slate-900 md:text-3xl">Sending you to confirmation...</h3>
        <p className="text-slate-600">Your request has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md md:max-w-2xl lg:max-w-3xl">
      <div className="rounded-xl border border-slate-200 border-t-[6px] border-t-brand-sky bg-white p-6 form-shadow md:p-10">
        <h3 className="mb-5 text-center font-display text-xl font-bold leading-snug text-slate-900 md:mb-7 md:text-3xl">
          ORGANISE A FREE QUOTE IN JUST 30 SECONDS!
        </h3>
          <h3 className="mb-5 text-center font-display text-sm font-light  leading-snug text-slate-900 md:mb-7 md:text-3xl">
         Fill in the form below and one of our team will reach out within 24 hours
        </h3>

        <form action={formAction} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <input type="hidden" name="roofType" value={formData.roofType} />
          <input type="hidden" name="roofCondition" value={formData.roofCondition} />
          <input type="hidden" name="whatTypeOfService" value={whatTypeOfService} />

          {state.error && !isSubmitted && !hasReset && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {state.error}
            </div>
          )}

          <div className="space-y-0 md:space-y-5">
            <input
              required
              maxLength={255}
              className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition-all outline-none focus:border-brand-sky"
              id="fullName"
              name="fullName"
              aria-label="Full Name"
              placeholder="Full Name"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />

            <input
              required
              maxLength={255}
              className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition-all outline-none focus:border-brand-sky"
              id="email"
              name="email"
              aria-label="Email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <input
              required
              maxLength={255}
              className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition-all outline-none focus:border-brand-sky"
              id="phone"
              name="phone"
              aria-label="Mobile"
              placeholder="Mobile"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <input
              required
              maxLength={255}
              className="w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition-all outline-none focus:border-brand-sky"
              id="address"
              name="address"
              aria-label="address"
              placeholder="address"
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <fieldset className="border-0 border-b border-gray-300 px-4 py-2.5">
            <legend className="mb-2 px-0 text-sm text-slate-500" style={{ textAlign: 'start' }}>What services are needed?</legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {resolvedServiceNeededOptions.map((serviceOption) => (
                <label
                  key={serviceOption}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-900"
                >
                  <input
                    type="checkbox"
                    checked={formData.requestedServices.includes(serviceOption)}
                    onChange={() => handleServiceToggle(serviceOption)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-sky focus:ring-brand-sky"
                  />
                  <span>{serviceOption}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <textarea
            className="w-full resize-none rounded-none border-0 border-b border-gray-300 bg-transparent px-4 py-0 text-sm text-slate-900 placeholder:text-slate-500 transition-all outline-none focus:border-brand-sky md:min-h-[120px]"
            id="message"
            name="message"
            aria-label="How can we help?"
            placeholder={messagePlaceholder}
            rows={3}
            maxLength={255}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            className="flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-slate-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 md:py-4 md:text-base"
            type="submit"
            disabled={pending}
          >
            {pending ? 'Submitting...' : 'Submit'}
            <span className="material-icons ml-2 text-base">arrow_forward</span>
          </button>

          <div className="flex items-center justify-center space-x-2 pt-2 text-[10px] italic text-gray-500 md:text-xs">
            <span className="material-icons text-xs">lock</span>
            <p>Your details are secured. Never submit passwords.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
