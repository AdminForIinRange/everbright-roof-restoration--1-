import React from 'react';
import DragScroll from './DragScroll';

type ReviewItem = {
  name: string;
  date: string;
  reviewText: string;
  stars: number;
  platform: 'google';
};

type ReviewsProps = {
  heading: string;
  reviews: ReviewItem[];
  sectionClassName?: string;
  showTrustBadge?: boolean;
};

function GoogleIcon() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1.5 shadow-inner">
      <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    </div>
  );
}

const Reviews: React.FC<ReviewsProps> = ({
  heading,
  reviews,
  sectionClassName = 'overflow-hidden bg-navy-dark px-6 py-16 md:py-20',
  showTrustBadge = false,
}) => {
  const hasEnoughItemsToLoop = reviews.length > 1;
  const renderedReviews = hasEnoughItemsToLoop ? [...reviews, ...reviews] : reviews;

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <h4 className="mb-3 text-xl font-medium italic text-white opacity-80 md:text-2xl">Don't Take Our Word for It</h4>
          <h3 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-brand-sky md:text-6xl lg:text-7xl">
            {heading}
          </h3>
          {showTrustBadge ? (
            <div className="mt-5 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <GoogleIcon />
                <span className="text-[2rem] font-bold leading-none text-[#FBBF24] md:text-[2.25rem]">5.0</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-3xl leading-none text-[#FF8A00] md:text-4xl">★</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-3xl font-semibold leading-none text-white md:text-4xl">
                Verified 5-Stars Reviews
              </p>
            </div>
          ) : null}
        </div>

        <DragScroll
          className="drag-scroll hide-scrollbar -mx-4 overflow-x-auto overflow-y-hidden px-4 pb-8 lg:mx-0 lg:px-0"
          loop={hasEnoughItemsToLoop}
          autoScroll={hasEnoughItemsToLoop}
          autoScrollSpeed={0.65}
        >
          <div className="flex w-max gap-6">
            {renderedReviews.map((review, i) => (
              <div
                key={`${review.name}-${review.date}-${i}`}
                className="w-80 flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:w-[380px] lg:w-[420px]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-sky/20 bg-brand-sky/15 text-sm font-bold uppercase text-brand-sky">
                    {review.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-base leading-tight">{review.name}</div>
                    <div className="flex items-center">
                      <span className="mr-1.5 text-lg font-bold text-orange-500">{review.stars.toFixed(1)}</span>
                      <div className="flex text-orange-400">
                        {Array.from({ length: review.stars }).map((_, j) => (
                          <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{review.date}</div>
                  </div>
                </div>
                <p className="text-sm italic leading-relaxed text-slate-700 md:text-base">"{review.reviewText}"</p>
              </div>
            ))}
          </div>
        </DragScroll>
      </div>
    </section>
  );
};

export default Reviews;
