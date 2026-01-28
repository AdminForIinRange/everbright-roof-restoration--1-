'use client';

import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    roofType: 'Not sure',
    roofCondition: 'Not sure - needs inspection',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to your backend or CRM
    console.log('Lead Captured:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl p-10 form-shadow border-t-[6px] border-brand-sky text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons text-4xl">check_circle</span>
        </div>
        <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thanks <span className="font-bold">{formData.name}</span>, we've received your inquiry. One of our Adelaide specialists will contact you within the next 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-brand-sky font-bold uppercase tracking-wider hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl p-8 form-shadow border-t-[6px] border-brand-sky">
        <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-8">
          Take our 30 Seconds Quiz To See If You're <span className="text-everbright-red uppercase underline decoration-brand-sky underline-offset-4">ELIGIBLE</span>
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="name">
              Full Name
            </label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none" 
              id="name" 
              name="name" 
              placeholder="e.g. John Doe" 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none" 
              id="email" 
              name="email" 
              placeholder="your@email.com" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              What type of roof do you have?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({...formData, roofType: type})}
                  className={`py-2 px-3 rounded-md text-sm font-semibold border transition-all ${
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

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
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
                  className={`py-2 px-3 rounded-md text-sm font-semibold border transition-all ${
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
            <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="message">
              Leave a message
            </label>
            <textarea 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky transition-all outline-none" 
              id="message" 
              name="message" 
              placeholder="Tell us about your roof..." 
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            className="w-full bg-black hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-full transition-all text-lg uppercase tracking-widest shadow-lg transform active:scale-95 flex items-center justify-center" 
            type="submit"
          >
            Submit Quiz
            <span className="material-icons ml-2">arrow_forward</span>
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-500 italic mt-4">
            <span className="material-icons text-xs">lock</span>
            <p>Your details are secured. Never submit passwords.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
