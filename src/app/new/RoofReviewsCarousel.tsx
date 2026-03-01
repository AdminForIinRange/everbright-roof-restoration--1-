'use client';

import { useEffect, useMemo, useState } from 'react';

import DragScroll from '@/components/DragScroll';
import { buildServiceReviews } from '@/services/shared/reviews';

function formatInitials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const initials = parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .filter(Boolean)
    .join('');

  return initials || 'R';
}

export default function RoofReviewsCarousel() {
  const reviews = useMemo(() => buildServiceReviews('roof restoration'), []);

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!media) return;

    const update = () => setReduceMotion(media.matches);
    update();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <DragScroll
      className="overflow-x-auto no-scrollbar pb-4 -mx-6 px-0"
      loop
      autoScroll={!reduceMotion}
      autoScrollSpeed={0.7}
    >
      <div className="flex flex-nowrap space-x-1 w-max">
        {reviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.date}`} review={review} />
        ))}
        {reviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.date}-dup`} review={review} />
        ))}
      </div>
    </DragScroll>
  );
}

function ReviewCard({
  review,
}: {
  review: { name: string; date: string; reviewText: string; stars: number };
}) {
  return (
    <div className="bg-primary flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
          {formatInitials(review.name)}
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white text-xs font-semibold">{review.name}</span>
          <span className="text-white/70 text-[10px]">{review.date}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-2">
        <span className="text-star-yellow font-bold text-sm">{review.stars.toFixed(1)}</span>
        <div className="flex text-star-yellow">
          {Array.from({ length: review.stars }).map((_, starIndex) => (
            <i key={starIndex} className="material-icons text-xs">
              star
            </i>
          ))}
        </div>
      </div>

      <p className="text-white text-xs leading-relaxed mb-1 font-light">“{review.reviewText}”</p>
    </div>
  );
}
