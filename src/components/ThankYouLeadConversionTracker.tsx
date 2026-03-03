'use client';

import { useEffect } from 'react';

type GoogleAdsWindow = Window &
  typeof globalThis & {
    gtag?: (command: string, eventName: string, params: Record<string, string | number>) => void;
    setTimeout: Window['setTimeout'];
    clearTimeout: Window['clearTimeout'];
  };

export default function ThankYouLeadConversionTracker() {
  useEffect(() => {
    const googleAdsWindow = window as GoogleAdsWindow;
    let timeoutId: number | undefined;
    let attempts = 0;

    const fireConversion = () => {
      if (typeof googleAdsWindow.gtag === 'function') {
        googleAdsWindow.gtag('event', 'conversion', {
          send_to: 'AW-17805776719/T6I8CN2K-YEcEM-uuqpC',
          value: 1.0,
          currency: 'AUD',
        });
        return;
      }

      attempts += 1;

      if (attempts < 20) {
        timeoutId = googleAdsWindow.setTimeout(fireConversion, 250);
      }
    };

    fireConversion();

    return () => {
      if (typeof timeoutId === 'number') {
        googleAdsWindow.clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}
