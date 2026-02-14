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
};

const Reviews: React.FC<ReviewsProps> = ({ heading, reviews, sectionClassName = 'overflow-hidden bg-navy-dark px-6 py-16 md:py-20' }) => {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <h4 className="mb-3 text-xl font-medium italic text-white opacity-80 md:text-2xl">Don't Take Our Word for It</h4>
          <h3 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-brand-sky md:text-6xl lg:text-7xl">
            {heading}
          </h3>
        </div>

        <DragScroll className="drag-scroll hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-8 lg:mx-0 lg:px-0">
          {reviews.map((review, i) => (
            <div key={i} className="w-80 flex-shrink-0 snap-start rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:w-[380px] lg:w-[420px]">
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
                    <span className="text-orange-500 font-bold text-lg mr-1.5">{review.stars.toFixed(1)}</span>
                    <div className="flex text-orange-400">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{review.date}</div>
                </div>
              </div>
              <p className="text-sm italic leading-relaxed text-slate-700 md:text-base">"{review.reviewText}"</p>
            </div>
          ))}
        </DragScroll>
      </div>
    </section>
  );
};

export default Reviews;
