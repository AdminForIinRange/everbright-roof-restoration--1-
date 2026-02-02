
import React from 'react';

const Reviews: React.FC = () => {
const reviews = [
  {
    name: "Isabell Hann",
    date: "a month ago",
    reviewText:
      "Shayal and his team were fantastic to deal with. He cleaned our terracotta roof and did an amazing job. Great communication the whole way through and we’re very happy with the results. Highly recommend his service.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Mairi Ivy",
    date: "a month ago",
    reviewText:
      "Shayal and his team did a great job cleaning our roof. They came on time, cleaned our roof that was covered in mould, and cleaned up after the job. Highly recommend the team!",
    stars: 5,
    platform: "google",
  },
  {
    name: "Andy",
    date: "3 months ago",
    reviewText:
      "From the moment I first dealt with Shayal he was polite and professional. Very easy to deal with upfront and honest. Did an amazing job on pressure washing my roof. I would highly recommend the boys as your first point of contact if you need pressure washing done. Extremely happy.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Yama Amiri",
    date: "2 weeks ago",
    reviewText:
      "Shayal and his team did an amazing job cleaning our roof that was covered in mould. The roof now looks new and refreshed.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Yogesh Mandavkar",
    date: "a month ago",
    reviewText:
      "Roof cleaning job was done very professionally and cleaned all the mess after work. Looking place nice and clean. Very polite and respectful.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Sudip Ramdam",
    date: "8 months ago",
    reviewText:
      "We had our roof soft-washed by Shayal from EverBright. The results were honestly better than we expected. The roof had years of built-up grime, moss, and black streaks, now it looks clean and refreshed without any damage to the tiles.",
    stars: 5,
    platform: "google",
  },
  {
    name: "carl pernito",
    date: "8 months ago",
    reviewText:
      "Got my roof cleaned by these guys and honestly, I didn’t think it’d make such a big difference but it really did. The roof was covered in crap from years of weather and now it looks fresh again. Shayal was easy to deal with.",
    stars: 5,
    platform: "google",
  },
];

  return (
    <section className="bg-navy-dark py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-white text-xl md:text-2xl font-medium mb-3 italic opacity-80">Don't Take Our Word for It</h4>
          <h3 className="text-brand-sky text-4xl md:text-6xl font-display font-bold tracking-tight uppercase leading-[0.9]">
            See What Adelaide Homeowners Are Saying
          </h3>
        </div>
        
        <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-8 px-4 -mx-4 snap-x">
          {reviews.map((review, i) => (
            <div key={i} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-xl snap-center border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-brand-sky/15 border-2 border-brand-sky/20 flex items-center justify-center text-brand-sky font-bold text-sm uppercase">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-base leading-tight">
                    {review.name}
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-500 font-bold text-lg mr-1.5">
                      {review.stars.toFixed(1)}
                    </span>
                    <div className="flex text-orange-400">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{review.date}</div>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                "{review.reviewText}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
