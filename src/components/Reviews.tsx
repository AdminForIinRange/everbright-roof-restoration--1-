import React from 'react';

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

const Reviews: React.FC<ReviewsProps> = ({ heading, reviews, sectionClassName = 'bg-navy-dark py-16 px-6 overflow-hidden' }) => {
  return (
    <section className={sectionClassName}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-white text-xl md:text-2xl font-medium mb-3 italic opacity-80">Don't Take Our Word for It</h4>
          <h3 className="text-brand-sky text-4xl md:text-6xl font-display font-bold tracking-tight uppercase leading-[0.9]">
            {heading}
          </h3>
        </div>

        <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-8 px-4 -mx-4 snap-x">
          {reviews.map((review, i) => (
            <div key={i} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-xl snap-center border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-brand-sky/15 border-2 border-brand-sky/20 flex items-center justify-center text-brand-sky font-bold text-sm uppercase">
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
              <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">"{review.reviewText}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
