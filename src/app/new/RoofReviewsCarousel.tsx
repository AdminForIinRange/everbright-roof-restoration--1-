'use client';

import { useMemo } from 'react';

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

  return (
    <DragScroll
      className="drag-scroll hide-scrollbar -mx-6 overflow-x-auto overflow-y-hidden pb-4 px-0"
      loop
      autoScroll
      autoScrollSpeed={1.8}
    >
      <div className="flex flex-nowrap space-x-1 w-max">
        {reviews.map((review) => (
          <ReviewCard key={buildReviewKey(review)} review={review} />
        ))}
        {reviews.map((review) => (
          <ReviewCard key={`${buildReviewKey(review)}-dup`} review={review} />
        ))}
      </div>
    </DragScroll>
  );
}

function buildReviewKey(review: {
  name: string;
  date: string;
  reviewText: string;
  stars: number;
}) {
  return `${review.name}-${review.date}-${review.stars}-${hashString(review.reviewText)}`;
}

function hashString(input: string) {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
}

function ReviewCard({
  review,
}: {
  review: { name: string; date: string; reviewText: string; stars: number };
}) {
  return (
    <div className="bg-[#003249] flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
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
