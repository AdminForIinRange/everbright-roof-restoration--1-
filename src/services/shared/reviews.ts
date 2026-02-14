type ServiceReview = {
  name: string;
  date: string;
  reviewText: string;
  stars: number;
  platform: 'google';
};

export function buildServiceReviews(serviceName: string): ServiceReview[] {
  return [
    {
      name: 'Isabell Hann',
      date: 'a month ago',
      reviewText: `Shayal and his team were fantastic to deal with. The ${serviceName} results were excellent and communication was clear from start to finish.`,
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Mairi Ivy',
      date: 'a month ago',
      reviewText: `Very happy with our ${serviceName} service. They arrived on time, did exactly what they said, and cleaned up properly.`,
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Andy',
      date: '3 months ago',
      reviewText: `Professional team and quality work. The ${serviceName} made a huge difference and the whole process felt easy.`,
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Yama Amiri',
      date: '2 weeks ago',
      reviewText: `Great result and great service quality. We would absolutely use them again for ${serviceName}.`,
      stars: 5,
      platform: 'google',
    },
    {
      name: 'Yogesh Mandavkar',
      date: 'a month ago',
      reviewText: `Skilled local team with strong attention to detail. The ${serviceName} was done properly and efficiently.`,
      stars: 5,
      platform: 'google',
    },
  ];
}
