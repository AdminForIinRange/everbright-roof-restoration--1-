'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

type AnalyticsPropertyValue = string | number | boolean | null;

const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

function getScrollPercent(): number {
  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) {
    return 100;
  }

  return Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
}

function getClickProperties(target: HTMLElement): Record<string, AnalyticsPropertyValue> {
  const properties: Record<string, AnalyticsPropertyValue> = {};

  if (target.dataset.analyticsLocation) {
    properties.location = target.dataset.analyticsLocation;
  }

  if (target.dataset.analyticsLabel) {
    properties.label = target.dataset.analyticsLabel;
  }

  if (target.dataset.analyticsType) {
    properties.type = target.dataset.analyticsType;
  }

  return properties;
}

export default function BehaviorAnalytics() {
  useEffect(() => {
    const firedMilestones = new Set<number>();
    let ticking = false;

    const sendScrollMilestones = () => {
      const percent = getScrollPercent();

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !firedMilestones.has(milestone)) {
          track('scroll_depth', {
            percent: milestone,
            path: window.location.pathname,
          });
          firedMilestones.add(milestone);
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        sendScrollMilestones();
        ticking = false;
      });
    };

    sendScrollMilestones();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        '[data-analytics-event]'
      ) as HTMLElement | null;

      if (!target) {
        return;
      }

      const eventName = target.dataset.analyticsEvent;

      if (!eventName) {
        return;
      }

      track(eventName, getClickProperties(target));
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
