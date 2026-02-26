'use client';

import { useEffect } from 'react';

export default function ForceLightMode() {
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains('dark');

    const ensureLight = () => {
      root.classList.remove('dark');
    };

    ensureLight();

    const observer = new MutationObserver(() => {
      ensureLight();
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();

      if (hadDark) {
        root.classList.add('dark');
      }
    };
  }, []);

  return null;
}
