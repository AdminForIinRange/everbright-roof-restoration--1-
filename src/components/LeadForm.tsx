'use client';

import React, { useActionState, useState } from 'react';
import { submitLeadAction, type LeadState } from '@lib/actions/leadActions';

const initialState: LeadState = { ok: false };

const LeadForm: React.FC = () => {
  const [hasReset, setHasReset] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    roofType: 'Not sure',
    roofCondition: 'Not sure - needs inspection',
  });
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);
  const isSubmitted = state.ok && !hasReset;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (step === 1) {
      const form = e.currentTarget;
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      setStep(2);
      return;
    }

    setHasReset(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl p-10 form-shadow border-t-[6px] border-brand-sky text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons text-4xl">check_circle</span>
        </div>
        <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thanks <span className="font-bold">{formData.fullName}</span>, we've received your inquiry. One of our Adelaide specialists will contact you within the next 24 hours.
        </p>
        <button 
          onClick={() => {
            setHasReset(true);
            setStep(1);
            setFormData({
              fullName: '',
              email: '',
              message: '',
              roofType: 'Not sure',
              roofCondition: 'Not sure - needs inspection',
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
    <div className="max-w-md mx-auto w-full">
      <div className="bg-white rounded-xl p-6 md:p-7 form-shadow border-t-[6px] border-brand-sky">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-slate-500 mb-3">
          <span>Quiz {step} of 2</span>
          <span>~30 sec</span>
        </div>
        <h3 className="text-center font-display text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-5">
          Quick Eligibility Check For <span className="text-everbright-red uppercase underline decoration-brand-sky underline-offset-4">ELIGIBLE</span> Roofs
        </h3>
        
        <form action={formAction} onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="roofType" value={formData.roofType} />
          <input type="hidden" name="roofCondition" value={formData.roofCondition} />
          {step === 2 && (
            <>
              <input type="hidden" name="fullName" value={formData.fullName} />
              <input type="hidden" name="email" value={formData.email} />
            </>
          )}

          {state.error && !isSubmitted && !hasReset && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {state.error}
            </div>
          )}

          {step === 1 && (
            <>
              <div>
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
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
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
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  What type of roof do you have?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, roofType: type})}
                      className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                        formData.roofType === type 
                          ? 'bg-brand-sky border-brand-sky text-white shadow-md' 
                          : 'bg-white border-gray-200 text-slate-600 hover:border-brand-sky/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className="w-full bg-black hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-full transition-all text-sm uppercase tracking-widest shadow-lg transform active:scale-95 flex items-center justify-center" 
                type="submit"
              >
                Next
                <span className="material-icons ml-2 text-base">arrow_forward</span>
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  How would you describe your roof's current condition?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Light surface staining',
                    'Moderate mould / lichen',
                    'Heavy mould & build-up',
                    'Not sure - needs inspection',
                  ].map((condition) => (
                    <button
                      key={condition}
                      type="button"
                      onClick={() => setFormData({...formData, roofCondition: condition})}
                      className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                        formData.roofCondition === condition
                          ? 'bg-brand-sky border-brand-sky text-white shadow-md'
                          : 'bg-white border-gray-200 text-slate-600 hover:border-brand-sky/50'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="message">
                  Leave a message
                </label>
                <textarea 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none" 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your roof..." 
                  rows={3}
                  maxLength={255}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto sm:flex-1 border border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-full transition-all text-sm uppercase tracking-widest hover:border-slate-400"
                >
                  Back
                </button>
                <button 
                  className="w-full sm:w-auto sm:flex-1 bg-black hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-full transition-all text-sm uppercase tracking-widest shadow-lg transform active:scale-95 flex items-center justify-center" 
                  type="submit"
                  disabled={pending}
                >
                  {pending ? 'Submitting...' : 'Submit Quiz'}
                  <span className="material-icons ml-2 text-base">arrow_forward</span>
                </button>
              </div>
            </>
          )}
          
          <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-500 italic pt-2">
            <span className="material-icons text-xs">lock</span>
            <p>Your details are secured. Never submit passwords.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
