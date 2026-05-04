'use client';

import { useEffect } from 'react';

export default function TrackingScript() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const TRACKING_KEYS = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gclid', 'fbclid', 'msclkid', 'ttclid', 'twclid', 'li_fat_id',
    ];

    const existing: Record<string, string> = (() => {
      try {
        return JSON.parse(localStorage.getItem('tse_tracking') || '{}');
      } catch {
        return {};
      }
    })();

    const now = new Date().toISOString();

    const updated: Record<string, string> = {
      ...existing,
      last_touch_at: now,
      referrer: existing.referrer ?? document.referrer,
      landing_page: existing.landing_page ?? window.location.href,
      first_touch_at: existing.first_touch_at ?? now,
    };

    TRACKING_KEYS.forEach((key) => {
      const val = urlParams.get(key);
      if (val) updated[key] = val;
    });

    localStorage.setItem('tse_tracking', JSON.stringify(updated));

    (window as any).__tseTracking = () => {
      try {
        return JSON.parse(localStorage.getItem('tse_tracking') || '{}');
      } catch {
        return {};
      }
    };
  }, []);

  return null;
}
