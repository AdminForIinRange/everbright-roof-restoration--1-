
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Winnie Taban",
      date: "2 weeks ago",
      reviewText:
        "Absolutely top tier customer service. Was able to enquire and received a reply not long after. Top quality service, would highly recommend.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Janice Croser",
      date: "2 months ago",
      reviewText:
        "Had my gutters cleaned and solar panels also. Shayal did a great job. Very polite and courteous. Was really pleased. Would highly recommend him.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Pasty Strange",
      date: "3 weeks ago",
      reviewText:
        "These guys did the best job EVER. My gutters are the cleanest they have ever been. They did a fantastic job. I would happily recommend them to everyone.",
      stars: 5,
      platform: "google",
    },
    {
      name: "abbas habib",
      date: "4 weeks ago",
      reviewText:
        "Shayal offered me a great quote to clean my solar panels. The job was done quickly and well. This will be a regular service for me from now on since my panels performance has increased since.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Marie Mullins",
      date: "1 month ago",
      reviewText:
        "Shayal did an amazing job cleaning my gutters, very happy with the clean up afterwards too. Would highly recommend",
      stars: 5,
      platform: "google",
    },
    {
      name: "Harry deakin",
      date: "3 months ago",
      reviewText:
        "Had our back area done for a birthday party. Shayal got everything looking fresh and clean just in time. Easy to deal with and very responsive.",
      stars: 5,
      platform: "google",
    },
    {
      name: "J D",
      date: "3 months ago",
      reviewText:
        "Got Shayal in to clean the solar panels. I hadn't done it in over two years and they were filthy. After he cleaned them, you could instantly see the difference.",
      stars: 5,
      platform: "google",
    },
    {
      name: "carl pernito",
      date: "3 months ago",
      reviewText:
        "Got my roof cleaned by these guys and honestly, I didn't think it'd make such a big difference but it really did. The roof was covered in crap from years of weather and now it looks fresh again. Shayal was easy to deal with, turned up on time.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Wendy Dobrucki",
      date: "1 month ago",
      reviewText:
        "They came on time. Did an excellent job. Left nice and clean. Would definitely recommend.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Oli Parashos",
      date: "3 months ago",
      reviewText:
        "Our solar panels were long overdue for a clean. Shayal came by and now they're spotless.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Sudip Ramdam",
      date: "3 months ago",
      reviewText:
        "We had our roof soft-washed by Shayal from EverBright. The results were honestly better than we expected. The roof had years of built-up grime, moss, and black streaks, now it looks clean and refreshed without any damage to the tiles.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Qasim ali",
      date: "3 months ago",
      reviewText:
        "Had Shayal come in to clean out gutter, he came on time and left our gutter looking super clean, thanks mate.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Zahir Najafi",
      date: "3 months ago",
      reviewText:
        "Big thanks to Shayal. Our patio was covered in grime and now it's spotless. Professional and hardworking guy.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Asghar Lalee",
      date: "3 months ago",
      reviewText:
        "My verandah was slippery and gross. Called Shayal, now it's clean, safe, and looks great for entertaining. Cheers Shayal, appreciate the effort you put in.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Janice Renfrey",
      date: "1 month ago",
      reviewText:
        "Flexible, responsive, punctual. I'm very happy with their work and price.",
      stars: 5,
      platform: "google",
    },
    {
      name: "David Wilson",
      date: "5 days ago",
      reviewText:
        "Shayal and his team did a great job cleaning my gutters. It was a big job on a two storey house and good to see them taking safety seriously. They were friendly and professional so I'm very happy to recommend them.",
      stars: 5,
      platform: "google",
    },
    {
      name: "Sita Khadka",
      date: "3 months ago",
      reviewText:
        "We had our roof cleaned by Shayal. Excellent results and very professional service.",
      stars: 5,
      platform: "google",
    }
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
