type ServiceReview = {
  name: string;
  date: string;
  reviewText: string;
  stars: number;
  platform: 'google';
};

const serviceReviews: Record<string, ServiceReview[]> = {
  'roof restoration': [
    {
      name: 'Isabell Hann',
      date: 'a month ago',
      reviewText:
        "Shayal and his team were fantastic to deal with. He cleaned our terracotta roof and did an amazing job. Great communication the whole way through and we're very happy with the results. Highly recommend his service.",
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Mairi Ivy',
      date: '2 months ago',
      reviewText:
        'Shayal and his team did a great job cleaning our roof. They came on time, cleaned our roof that was covered in mould, and cleaned up after the job. Highly recommend the team!',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Yama Amiri',
      date: 'a month ago',
      reviewText:
        'Shayal and his team did an amazing job cleaning our roof that was covered in mould. The roof now looks new and refreshed.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Andy',
      date: '3 months ago',
      reviewText:
        'From the moment I first dealt with Shayal he was polite and professional. Very easy to deal with, upfront and honest. Did an amazing job on pressure washing my roof.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Yogesh Mandavkar',
      date: 'a month ago',
      reviewText:
        'Roof cleaning was done very professionally and all the mess was cleaned after work. Place looks clean and fresh.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Sudip Ramdam',
      date: '8 months ago',
      reviewText:
        'We had our roof soft-washed and the results were better than expected. Years of grime and moss were gone without damage.',
      stars: 5,
      platform: 'google',
    },
  ],
  'pressure washing': [
    {
      name: 'Andy',
      date: '3 months ago',
      reviewText:
        'Polite, professional, and easy to deal with. Pressure washing result was excellent and the process was smooth.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Al Bliss',
      date: '3 months ago',
      reviewText:
        'Great pressure wash result on old pavers. Clear communication, on time, and no surprises.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Navrose Dhaliwal',
      date: '4 months ago',
      reviewText:
        "Shayal did a great pressure washing job. Our driveway hasn't looked this good in years.",
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Jane M',
      date: '4 months ago',
      reviewText:
        "Easy communication and excellent pressure washing finish on our driveway. Couldn't be happier.",
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Inshaaf Bhattarai',
      date: '5 months ago',
      reviewText:
        'Driveway was left spotless. Great value, respectful team, and a very strong result.',
      stars: 5,
      platform: 'google',
    },
  ],
  'paver & concrete sealing': [
    {
      name: 'Al Bliss',
      date: '3 months ago',
      reviewText:
        'Great result on old pavers. Clear communication, on time, and no surprises.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Navrose Dhaliwal',
      date: '4 months ago',
      reviewText:
        "Great job on our driveway. It hasn't looked this good in years.",
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Jane M',
      date: '4 months ago',
      reviewText:
        "Easy communication and an excellent finish on our driveway. Couldn't be happier.",
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Inshaaf Bhattarai',
      date: '5 months ago',
      reviewText:
        'Driveway was left spotless. Great value, respectful team, and a very strong result.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Eye Dropper Academy',
      date: '3 months ago',
      reviewText:
        'Highly recommend EverBright. Professional team that went above and beyond and delivered a strong result.',
      stars: 5,
      platform: 'google',
    },
  ],
  'gutter cleaning': [
    {
      name: 'The Little Loaf',
      date: '5 months ago',
      reviewText:
        'We had our gutters cleaned and could not be happier. Friendly, clear communication and spotless clean-up.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Maxine Taylor',
      date: '4 months ago',
      reviewText:
        'Amazing gutter cleaning result. Friendly team, professional work, and we will definitely book again.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'David Wilson',
      date: '5 months ago',
      reviewText:
        'Two-storey gutter clean completed safely and professionally. Very happy with the service quality.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Pasty Strange',
      date: '5 months ago',
      reviewText:
        'Best gutter cleaning job we have had. Excellent result and great attention to detail.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Marie Mullins',
      date: '6 months ago',
      reviewText:
        'Fantastic gutter clean and great clean-up after the job. Highly recommend the team.',
      stars: 5,
      platform: 'google',
    },
  ],
  'solar cleaning': [
    {
      name: 'abbas habib',
      date: '6 months ago',
      reviewText:
        'Great quote and excellent solar panel cleaning. Fast, professional, and visible performance improvement.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'J D',
      date: '8 months ago',
      reviewText:
        'Solar panels had not been cleaned in over two years. Big difference immediately after service.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Janice Croser',
      date: '7 months ago',
      reviewText:
        'Had solar panels and gutters cleaned. Polite service and very good result overall.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Winnie Taban',
      date: '5 months ago',
      reviewText:
        'Quick responses, high-quality work, and very professional service from start to finish.',
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Kevin Daniels',
      date: '5 months ago',
      reviewText:
        'Great people and very easy to work with. Happy with the cleaning quality and outcome.',
      stars: 5,
      platform: 'google',
    },
  ],
};

const fallbackReviews: ServiceReview[] = [
  {
    name: 'Isabell Hann',
    date: 'a month ago',
    reviewText:
      'Fantastic communication, professional service, and a high-quality result from start to finish.',
    stars: 5,
    platform: 'google',
  },
  {
    name: 'Andy',
    date: '3 months ago',
    reviewText:
      'Very easy to deal with and delivered exactly what was promised. Highly recommended.',
    stars: 5,
    platform: 'google',
  },
  {
    name: 'Yama Amiri',
    date: 'a month ago',
    reviewText:
      'Excellent result and very professional team. We are really happy with the final finish.',
    stars: 5,
    platform: 'google',
  },
];

export function buildServiceReviews(serviceName: string): ServiceReview[] {
  const key = serviceName.trim().toLowerCase();
  const primaryReviews = serviceReviews[key];
  if (!primaryReviews) {
    return fallbackReviews;
  }

  const seen = new Set<string>();
  const merged = [...primaryReviews, ...fallbackReviews].filter((review) => {
    const signature = `${review.name}::${review.reviewText}`;
    if (seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });

  return merged;
}
