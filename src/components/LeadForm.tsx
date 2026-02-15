'use client';

import React, { useActionState, useEffect, useRef, useState } from 'react';
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

type LeadFormProps = {
  serviceLabel?: string;
  typeQuestion?: string;
  typeOptions?: string[];
  conditionQuestion?: string;
  conditionOptions?: string[];
  messagePlaceholder?: string;
};

const LeadForm: React.FC<LeadFormProps> = ({
  serviceLabel = 'roof cleaning',
  typeOptions = defaultTypeOptions,
  conditionOptions = defaultConditionOptions,
  messagePlaceholder = 'How can we help?',
}) => {
  const resolvedTypeOptions = typeOptions.length > 0 ? typeOptions : defaultTypeOptions;
  const resolvedConditionOptions = conditionOptions.length > 0 ? conditionOptions : defaultConditionOptions;
  const defaultRoofType = resolvedTypeOptions[resolvedTypeOptions.length - 1] ?? 'Not sure';
  const defaultRoofCondition = resolvedConditionOptions[resolvedConditionOptions.length - 1] ?? 'Not sure - needs inspection';

  const [hasReset, setHasReset] = useState(false);
  const previousResultRef = useRef<{ ok: boolean; error?: string }>({ ok: false });
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    roofType: defaultRoofType,
    roofCondition: defaultRoofCondition,
  }));
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);
  const isSubmitted = state.ok && !hasReset;

  useEffect(() => {
    const previousResult = previousResultRef.current;

    if (state.ok && !previousResult.ok) {
      track('lead_submit_success', {
        serviceLabel,
        roofType: formData.roofType,
        roofCondition: formData.roofCondition,
      });
    } else if (state.error && state.error !== previousResult.error) {
      track('lead_submit_error');
    }

    previousResultRef.current = { ok: state.ok, error: state.error };
  }, [formData.roofCondition, formData.roofType, serviceLabel, state.error, state.ok]);

  const handleSubmit = () => {
    track('lead_submit_attempt', {
      serviceLabel,
      roofType: formData.roofType,
      roofCondition: formData.roofCondition,
    });
    previousResultRef.current = { ok: false };
    setHasReset(false);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-md animate-fade-in rounded-xl border-t-[6px] border-brand-sky bg-white p-10 text-center form-shadow md:max-w-2xl md:p-12 lg:max-w-3xl">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons text-4xl">check_circle</span>
        </div>
        <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thanks <span className="font-bold">{formData.fullName}</span>, we've received your inquiry for{' '}
          <span className="font-bold">{serviceLabel}</span>. One of our Adelaide specialists will contact you within the next 24 hours.
        </p>
        <button
          onClick={() => {
            previousResultRef.current = { ok: false };
            setHasReset(true);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              address: '',
              message: '',
              roofType: defaultRoofType,
              roofCondition: defaultRoofCondition,
            });
          }}
          className="text-brand-sky font-bold uppercase tracking-wider hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md md:max-w-2xl lg:max-w-3xl">
      <div className="rounded-xl border border-slate-200 border-t-[6px] border-t-brand-sky bg-white p-6 form-shadow md:p-10">
        <h3 className="text-center font-display text-xl md:text-3xl font-bold text-slate-900 leading-snug mb-5 md:mb-7">
          ORGANISE A FREE QUOTE IN JUST 30 SECONDS!
        </h3>

        <form action={formAction} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <input type="hidden" name="roofType" value={formData.roofType} />
          <input type="hidden" name="roofCondition" value={formData.roofCondition} />

          {state.error && !isSubmitted && !hasReset && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {state.error}
            </div>
          )}

          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="fullName">
                Full Name
              </label>
              <input
                required
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none"
                id="fullName"
                name="fullName"
                placeholder="e.g. John Doe"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="mt-4 md:col-span-1 md:mt-0">
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                required
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none"
                id="email"
                name="email"
                placeholder="your@email.com"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="mt-4 md:col-span-1 md:mt-0">
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="phone">
                Phone Number
              </label>
              <input
                required
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none"
                id="phone"
                name="phone"
                placeholder="e.g. 0412 345 678"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="mt-4 md:col-span-1 md:mt-0">
              <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="address">
                Address
              </label>
              <input
                required
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none"
                id="address"
                name="address"
                placeholder="Street address, suburb, postcode"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="message">
              Leave a message
            </label>
            <textarea
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none md:min-h-[120px]"
              id="message"
              name="message"
              placeholder={messagePlaceholder}
              rows={3}
              maxLength={255}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            className="w-full bg-black hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-full transition-all text-sm uppercase tracking-widest shadow-lg transform active:scale-95 flex items-center justify-center md:py-4 md:text-base"
            type="submit"
            disabled={pending}
          >
            {pending ? 'Submitting...' : 'Submit'}
            <span className="material-icons ml-2 text-base">arrow_forward</span>
          </button>

          <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-500 italic pt-2 md:text-xs">
            <span className="material-icons text-xs">lock</span>
            <p>Your details are secured. Never submit passwords.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
