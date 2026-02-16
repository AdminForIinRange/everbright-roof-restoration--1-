'use client';

import React, { useActionState } from 'react';
import { getRecentLeadsAction, type LeadsResult } from '@lib/actions/getRecentLeads';

const initialState: LeadsResult = { ok: false };

function formatDate(value?: string) {
  if (!value) return '-';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-AU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function valueOrDash(value?: string) {
  const cleanValue = value?.trim();
  return cleanValue ? cleanValue : '-';
}

type LeadFieldProps = {
  label: string;
  value: string;
};

const LeadField: React.FC<LeadFieldProps> = ({ label, value }) => {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-sm text-slate-800 break-words whitespace-pre-wrap">{value}</p>
    </div>
  );
};

const ShowcaseLeadsPage: React.FC = () => {
  const [state, formAction, pending] = useActionState(getRecentLeadsAction, initialState);
  const leads = state.data ?? [];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Showcase Leads</h1>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Enter PIN to view all lead entries stored in Appwrite.
          </p>

          <form action={formAction} className="mt-6 flex flex-col gap-3 md:flex-row md:items-end">
            <label className="flex-1">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">PIN</span>
              <input
                type="password"
                name="pin"
                required
                minLength={5}
                maxLength={32}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-sky"
                placeholder="Enter PIN"
              />
            </label>
            <button
              type="submit"
              disabled={pending}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? 'Checking...' : 'View Leads'}
            </button>
          </form>

          {state.error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              {state.error}
            </div>
          )}
        </section>

        {state.ok && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">Lead Entries</h2>
              <p className="text-sm font-semibold text-slate-600">
                {leads.length} {leads.length === 1 ? 'entry' : 'entries'}
              </p>
            </div>

            {leads.length === 0 ? (
              <p className="text-sm text-slate-600">No leads found in Appwrite yet.</p>
            ) : (
              <div className="space-y-4">
                {leads.map((lead, index) => (
                  <article
                    key={lead.$id ?? `lead-${index}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">
                        Lead #{leads.length - index}
                      </p>
                      <p className="text-xs font-medium text-slate-600">{formatDate(lead.$createdAt)}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <LeadField label="Name" value={valueOrDash(lead.fullName)} />
                      <LeadField label="Phone" value={valueOrDash(lead.phone)} />
                      <LeadField label="Email" value={valueOrDash(lead.email)} />
                      <LeadField label="Address" value={valueOrDash(lead.address)} />
                      <LeadField label="Services Needed" value={valueOrDash(lead.whatTypeOfService)} />
                      <LeadField label="Roof Type" value={valueOrDash(lead.roofType)} />
                      <LeadField label="Roof Condition" value={valueOrDash(lead.roofCondition)} />
                      <LeadField label="Message" value={valueOrDash(lead.message)} />
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export default ShowcaseLeadsPage;
