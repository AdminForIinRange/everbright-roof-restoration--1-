import Image from "next/image";
import Link from "next/link";
import { Clock3, ShieldCheck, UsersRound } from "lucide-react";
import DragScroll from "./DragScroll";
import Footer from "./Footer";
import Header from "./Header";
import LeadForm from "./LeadForm";
import Reviews from "./Reviews";

const heroBackgroundImage = "/genrealPhotos/lanidngpageimg.jpeg";

function GoogleIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 shadow-inner">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
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

const testimonials: Array<{
  name: string;
  date: string;
  reviewText: string;
  stars: number;
  platform: "google";
}> = [
  {
    name: "Isabell Hann",
    date: "a month ago",
    reviewText:
      "Shayal and his team were fantastic to deal with. He cleaned our terracotta roof and did an amazing job. Great communication the whole way through and we're very happy with the results. Highly recommend his service.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Mairi Ivy",
    date: "2 months ago",
    reviewText:
      "Shayal and his team did a great job cleaning our roof. They came on time, cleaned our roof that was covered in mould, and cleaned up after the job. Highly recommend the team!",
    stars: 5,
    platform: "google",
  },
  {
    name: "Andy",
    date: "3 months ago",
    reviewText:
      "From the moment I first dealt with Shayal he was polite and professional. Very easy to deal with, upfront and honest. Did an amazing job on pressure washing my roof.",
    stars: 5,
    platform: "google",
  },
  {
    name: "The Little Loaf",
    date: "5 months ago",
    reviewText:
      "We had our gutters cleaned and couldn't be happier with the service. Communication was clear, friendly, and professional from start to finish.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Maxine Taylor",
    date: "4 months ago",
    reviewText:
      "Shayal and David did an amazing job with our gutter cleaning. Friendly, professional, and the finish was excellent. I'd definitely call them again.",
    stars: 5,
    platform: "google",
  },
  {
    name: "David Wilson",
    date: "5 months ago",
    reviewText:
      "Great gutter clean on a two storey house. They took safety seriously, were friendly and professional, and did quality work.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Yama Amiri",
    date: "a month ago",
    reviewText:
      "Shayal and his team did an amazing job cleaning our roof that was covered in mould. The roof now looks new and refreshed.",
    stars: 5,
    platform: "google",
  },
  {
    name: "abbas habib",
    date: "6 months ago",
    reviewText:
      "Shayal offered me a great quote to clean my solar panels. The job was done quickly and well, and panel performance improved.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Pasty Strange",
    date: "5 months ago",
    reviewText:
      "These guys did the best job ever. My gutters are the cleanest they have ever been. Fantastic service and result.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Janice Croser",
    date: "7 months ago",
    reviewText:
      "Had my gutters cleaned and solar panels done too. Shayal was polite, courteous, and did a great job. Highly recommend.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Yogesh Mandavkar",
    date: "a month ago",
    reviewText:
      "Roof cleaning was done very professionally and all the mess was cleaned after work. Place looks clean and fresh.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Marie Mullins",
    date: "6 months ago",
    reviewText:
      "Shayal did an amazing job cleaning my gutters, and the clean-up afterwards was excellent too. Would highly recommend.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Eye Dropper Academy",
    date: "3 months ago",
    reviewText:
      "Highly recommend EverBright. They were polite, professional, and went above and beyond what we asked them to do.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Sudip Ramdam",
    date: "8 months ago",
    reviewText:
      "We had our roof soft-washed and the results were better than expected. Years of grime and moss were gone without damage.",
    stars: 5,
    platform: "google",
  },
  {
    name: "Jane M",
    date: "4 months ago",
    reviewText:
      "Great service, easy communication, cleaned our gutters and pressure washed driveway. Couldn't be happier.",
    stars: 5,
    platform: "google",
  },
  {
    name: "RHYS and TERESA",
    date: "3 months ago",
    reviewText:
      "First class job on our stained driveway. Great service from start to finish.",
    stars: 5,
    platform: "google",
  },
];

const comparisons = [
  {
    before: "/scrollerImage/1.webp",
    after: "/scrollerImage/2.webp",
    beforeAlt: "Exterior before cleaning result 1",
    afterAlt: "Exterior after cleaning result 1",
  },
  {
    before: "/scrollerImage/3.webp",
    after: "/scrollerImage/4.webp",
    beforeAlt: "Exterior before cleaning result 2",
    afterAlt: "Exterior after cleaning result 2",
  },
  {
    before: "/scrollerImage/5.webp",
    after: "/scrollerImage/6.webp",
    beforeAlt: "Exterior before cleaning result 3",
    afterAlt: "Exterior after cleaning result 3",
  },
];

const services = [
  {
    title: "Roof Cleaning",
    description:
      "Roof cleaning designed to remove harmful buildup without damaging your tiles.",
    detail: "",
    points: [
      "Remove mould, lichen & black streaks",
      "Restore colour and street appeal",
      "Protect tiles from long term deterioration",
    ],
    image: "/genrealPhotos/RoofcleaingServiceCard.webp",
    alt: "Professional worker cleaning a tiled roof with a pressure washer",
    href: "/new",
  },
  {
    title: "Pressure Washing",
    description:
      "Thorough cleaning for driveways, paths and outdoor areas using controlled pressure systems.",
    detail: "",
    points: [
      "Remove oil stains, algae & grime",
      "Improve street appeal instantly",
      "Reduce slippery surface buildup",
    ],
    image: "/genrealPhotos/Pressure%20WashingServiceCardImage.webp",
    alt: "Pressure washing a brick driveway",
    href: "/pressure-washing",
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "Maximise panel efficiency with safe, purified water cleaning.",
    detail: "",
    points: [
      "Remove dust, grime & bird droppings",
      "Improve solar performance",
      "Purified water systems (no harsh chemicals)",
    ],
    image: "/genrealPhotos/Solar%20CleaningServiceCard.webp",
    alt: "Cleaning solar panels on a sunny day",
    href: "/solar-cleaning",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Complete debris removal to keep water flowing properly and protect your home.",
    detail: "",
    points: [
      "Remove leaves, dirt & blockages",
      "Clear downpipes thoroughly",
      "Prevent overflow and water damage",
    ],
    image: "/genrealPhotos/Gutter%20CleaningServicePage.webp",
    alt: "Cleaning leaves out of a roof gutter",
    href: "/gutter-cleaning",
  },
  {
    title: "House Washing",
    description:
      "Soft exterior cleaning that helps protect your walls from mould and buildup while restoring a clean finish.",
    detail: "",
    points: [],
    image: "/genrealPhotos/House%20WASHINGSERVICECARD.webp",
    alt: "Soft washing the exterior walls of a modern house",
    href: "/house-washing",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Get Your Quote",
    description:
      "Fill out the quick form and we'll send you a clear, honest quote within 24 hours - no hidden costs.",
    italicNumber: false,
  },
  {
    number: "2",
    title: "We Assess Properly",
    description:
      "For larger jobs, we inspect your property to check surfaces, condition, and access. This ensures the right method and accurate pricing from the start.",
    italicNumber: false,
  },
  {
    number: "3",
    title: "We Clean & Finish Right",
    description:
      "Our team arrives on time, fully equipped, and completes the job using safe, surface-specific methods. We finish with a full clean-up and final check so your exterior looks properly restored.",
    italicNumber: false,
  },
];

const contactChecklist = [
  "Fully Certified & $10M Insured",
  "Surface-safe cleaning methods",
  "Premium approved products",
  "Experienced local exterior cleaning team",
];

const reliabilityPoints = [
  {
    title: "100% Satisfaction Guaranteed",
    description:
      "We stand behind every job. If you’re not completely satisfied, we’ll return and make it right, no questions.",
  },
  {
    title: "Experienced, Trusted & Local",
    description:
      "As a locally operated Adelaide team, we take pride in delivering professional results through experienced, highly trained technicians and clear communication from start to finish.",
  },
  {
    title: "Surface-Safe Cleaning Methods",
    description:
      "We use controlled, surface-specific methods designed to clean thoroughly without causing damage to tiles, concrete or exterior finishes.",
  },
  {
    title: "Fully Insured for Peace of Mind",
    description:
      "All exterior cleaning work is covered by public liability insurance, so your home is protected at every stage.",
  },
];

export default function LandingHero() {
  return (
    <main
      id="top"
      className="bg-white font-body text-slate-900 [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold"
    >
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-brand-dark md:min-h-[92vh] lg:min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackgroundImage}
            alt="Exterior cleaning service in progress"
            fill
            priority
            sizes="100vw"
            quality={72}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,1)_100%)]" />
        </div>

        <div className="relative z-[1000]">
          <Header />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-grow-1 flex-col justify-end px-6 pb-0 pt-8 md:px-10 md:pb-0 md:pt-12 lg:px-12 lg:pb-0 xl:max-w-7xl">
          <div className="mb-6 ">
            <h1 className="animate__animated animate__fadeInDown font-display text-[45px]  font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:max-w-4xl md:text-8xl lg:text-[8.5rem] xl:text-[9rem]">
              Exterior Cleaning,
              <br />
              <span className="text-brand-sky">Done Properly </span>
              <br />
            </h1>
          </div>

          <p className="mb-8 max-w-sm text-lg leading-snug text-white/90 md:max-w-xl md:text-xl lg:max-w-2xl">
            Adelaide’s trusted exterior cleaning team delivering safe, precise
            methods that restore appearance and protect your home.
          </p>

          <ul className="mb-8 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-3 text-left sm:gap-x-8 sm:gap-y-4">
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="material-icons text-[24px] leading-none text-brand-sky sm:text-[30px]">
                check_circle
              </span>
              <span className="font-body text-lg leading-none text-white sm:text-2xl">
                Roof Cleaning
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="material-icons text-[24px] leading-none text-brand-sky sm:text-[30px]">
                check_circle
              </span>
              <span className="font-body text-lg leading-none text-white sm:text-2xl">
                Solar Cleaning
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="material-icons text-[24px] leading-none text-brand-sky sm:text-[30px]">
                check_circle
              </span>
              <span className="font-body text-lg leading-none text-white sm:text-2xl">
                Gutter Cleaning
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="material-icons text-[24px] leading-none text-brand-sky sm:text-[30px]">
                check_circle
              </span>
              <span className="font-body text-lg leading-none text-white sm:text-2xl">
                Pressure Washing
              </span>
            </li>
          </ul>

          {/*
          <div className="mb-8 flex max-w-sm gap-2 md:max-w-xl md:gap-6">
            <div className="flex min-w-0 flex-1 flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">
                schedule
              </span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                On Time
                <br />
                Service
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">groups</span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                100% Works
                <br />
                Guaranteed
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">
                verified_user
              </span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                Fully 
                <br />
               Insured
              </span>
            </div>
          </div>
          */}

          <div className="mb-8 flex flex-col">
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <span className="text-2xl font-bold text-[#FBBF24]">5.0</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="material-icons text-lg text-[#FBBF24]"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-1 font-semibold text-white">
              Verified 5-Stars Reviews
            </p>
          </div>

          <Link
            href="#form"
            className="w-full rounded-2xl bg-brand-sky py-5 text-center font-display text-2xl  tracking-wide text-white shadow-lg transition-transform hover:bg-brand-sky/90 active:scale-[0.98] md:w-auto md:min-w-[320px] md:px-12"
          >
            Book Your FREE Quote
          </Link>

          <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 bg-everbright-blue py-5 md:py-6">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-3 px-6 sm:gap-4 md:gap-6 md:px-10 lg:px-12">
              <div className="flex min-w-0 flex-col items-start text-left">
                <Clock3
                  className="mb-2 h-8 w-8 text-brand-sky sm:h-14 sm:w-14 md:h-16 md:w-16"
                  strokeWidth={2.5}
                />
                <span className="font-display text-[0.9rem] leading-[0.95] text-white sm:text-[1.2rem] md:text-[1.6rem]">
                  On Time Service
                </span>
              </div>
              <div className="flex min-w-0 flex-col items-start text-left">
                <UsersRound
                  className="mb-2 h-8 w-8 text-brand-sky sm:h-14 sm:w-14 md:h-16 md:w-16"
                  strokeWidth={2.5}
                />
                <span className="font-display text-[0.8rem]  leading-[0.95] text-white sm:text-[1.2rem] md:text-[1.6rem]">
                  100% Satisfaction
                  <br />
                  Guarantee
                </span>
              </div>
              <div className="flex min-w-0 flex-col items-start text-left">
                <ShieldCheck
                  className="mb-2 h-8 w-8 text-brand-sky sm:h-14 sm:w-14 md:h-16 md:w-16"
                  strokeWidth={2.5}
                />
                <span className="font-display text-[0.8rem]  leading-[0.95] text-white sm:text-[1.2rem] md:text-[1.6rem]">
                  Fully INSURED FOR All
                  <br />
                  Jobs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="bg-white pt-4 pb-6 md:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-2xl px-4 md:max-w-5xl lg:max-w-6xl">
          <div className="overflow-hidden rounded-xl border border-black">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-everbright-blue pt-12 pb-0 md:pt-16 md:pb-0">
        <h2 className="mb-10 text-center font-display text-4xl uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
          Dirty Exterior?
        </h2>

        <DragScroll
          className="comparison-marquee drag-scroll hide-scrollbar"
          loop
          autoScroll
          autoScrollSpeed={1}
        >
          <div className="comparison-marquee-track">
            {[...comparisons, ...comparisons].map((comparison, index) => (
              <article
                key={`comparison-pair-${index}`}
                className="comparison-marquee-pair"
              >
                <div className="comparison-marquee-half">
                  <Image
                    src={comparison.before}
                    alt={comparison.beforeAlt}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 280px, 210px"
                    quality={58}
                    className="pointer-events-none object-cover"
                  />
                  <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#003249]/95 px-5 py-2 font-display text-2xl uppercase leading-none tracking-tight text-white">
                    Before
                  </span>
                </div>

                <div className="comparison-marquee-half">
                  <Image
                    src={comparison.after}
                    alt={comparison.afterAlt}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 280px, 210px"
                    quality={58}
                    className="pointer-events-none object-cover"
                  />
                  <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#003249]/95 px-5 py-2 font-display text-2xl uppercase leading-none tracking-tight text-white">
                    After
                  </span>
                </div>
              </article>
            ))}
          </div>
        </DragScroll>
      </section>

      <section className="bg-white px-8 py-14 text-center md:px-12 md:py-20 lg:px-16">
        <h2 className="mb-6 font-display text-4xl uppercase leading-tight text-everbright-blue md:text-5xl lg:text-6xl">
          We&apos;ll Bring Your Exterior Back To Life
        </h2>
        <div className="mx-auto mb-10 max-w-lg space-y-6 text-base leading-relaxed text-black md:max-w-3xl md:text-lg lg:text-xl">
          <p>
            Mould, lichen and grime don’t just affect how your home looks,over
            time, they can weaken surfaces and shorten the life of your roof,
            gutters and outdoor areas.
          </p>
          <p>
            Our surface-specific exterior cleaning systems are designed to
            remove buildup thoroughly without causing damage. No excessive
            pressure. No shortcuts. Just controlled, professional cleaning done
            the right way.
          </p>
        </div>
        <p className="font-display text-md font-bold uppercase text-everbright-blue md:text-2xl">
          Clean Today. Protected for Longer.
        </p>
      </section>

      <section id="services" className="bg-navy-dark">
        <header className="px-6 py-8 text-center md:py-12">
          <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-white md:text-4xl lg:text-5xl">
            Exterior Cleaning Services
            <span className="mt-1 block text-brand-sky">in Adelaide</span>
          </h2>
        </header>

        <div className="mx-auto max-w-md space-y-6 px-5 pb-24 pt-8 md:grid md:max-w-6xl md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative aspect-[3.5/5] overflow-hidden rounded-[2rem] shadow-2xl md:aspect-[5/6]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 31vw, (min-width: 768px) 47vw, 92vw"
                quality={62}
                className={`object-cover transition-transform duration-500 ${
                  service.title === "Roof Cleaning"
                    ? "scale-[1.2] object-[52%_44%] group-hover:scale-[1.26]"
                    : "group-hover:scale-110"
                }`}
              />
              <div
                className={`absolute inset-0 ${
                  service.title === "Roof Cleaning"
                    ? "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),rgba(0,0,0,0.94))]"
                    : "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.9))]"
                }`}
              />
              <div className="absolute inset-0 flex flex-col p-8 text-left md:p-7 lg:p-8">
                <div className="flex flex-1 flex-col items-start justify-start md:justify-start md:pt-4">
                  <h3 className="mb-4 font-display text-5xl uppercase tracking-tighter text-brand-sky md:text-[3.25rem] lg:text-6xl">
                    {service.title}
                  </h3>
                  <p className="max-w-xs text-md leading-relaxed text-white md:max-w-sm md:text-xl">
                    {service.description}
                  </p>
                  {service.detail ? (
                    <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed text-white/95 md:max-w-sm md:text-base">
                      {service.detail}
                    </p>
                  ) : null}
                  {service.points.length > 0 ? (
                    <ul className="mt-8 space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm leading-snug text-white md:text-base"
                        >
                          <span className="material-symbols-outlined shrink-0 text-base leading-none text-brand-sky">
                            check_circle
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="mt-auto grid w-full grid-cols-2 gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand-sky px-4 py-3 text-center text-base font-bold uppercase whitespace-nowrap text-white shadow-lg transition-all hover:bg-brand-sky/90 active:scale-95 md:text-lg"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#form"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-4 py-3 text-center text-base font-bold uppercase whitespace-nowrap text-everbright-blue shadow-lg transition-all hover:bg-white/90 active:scale-95 md:text-lg"
                  >
                    Get My Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center mt-10 font-display text-4xl uppercase leading-tight tracking-tight text-brand-sky md:text-5xl lg:text-6xl">
            A Service You Can Rely On
          </h2>
        </div>
      </section>

      <section className="bg-white px-6 py-8 md:px-8 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-10">
            {reliabilityPoints.map((point) => (
              <div
                key={point.title}
                className="mb-8 flex items-start gap-3 last:mb-0 md:mb-0 md:rounded-2xl md:border md:border-slate-200 md:p-6"
              >
                <span
                  className="material-symbols-outlined shrink-0 text-3xl text-brand-sky"
                  style={{
                    fontVariationSettings:
                      "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  check_circle
                </span>
                <div className="grid grid-cols-1 gap-x-6">
                  <h3 className="mb-1 text-lg font-bold leading-tight text-slate-800">
                    {point.title}
                  </h3>
                  <p className="text-base text-slate-500 md:text-lg">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="#services-quiz"
              className="rounded-full bg-brand-sky px-10 py-4 text-center font-display text-2xl uppercase tracking-wide text-white shadow-lg transition-transform hover:bg-brand-sky/90 active:scale-[0.98] md:px-12"
            >
              Book Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Reviews
        heading="Local Exterior Cleaners You Trust"
        reviews={testimonials}
        showTrustBadge
        highlightWord="Trust"
      />

      <section
        id="process-contact"
        className="bg-navy-dark px-6 pb-12 pt-16 md:py-14 lg:py-16"
      >
        <div className="mx-auto w-full max-w-[430px] md:max-w-6xl xl:max-w-7xl">
          <section className="bg-navy-dark text-center md:px-6 md:text-left lg:px-8">
            <h2 className="mb-6 font-display text-4xl uppercase leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              SIMPLE. CLEAR.
              <br />
              DONE RIGHT.
            </h2>
            <p className="mx-auto mb-16 max-w-[320px] text-sm leading-relaxed text-white md:mx-0 md:max-w-2xl md:pr-8 md:text-base">
              From your first enquiry to the final clean-up, we keep everything
              straightforward and professional. Clear pricing. Safe methods. No
              surprises.
            </p>

            <div className="space-y-12 md:space-y-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center md:flex-row md:items-start md:gap-5 md:text-left lg:flex-col lg:items-center lg:rounded-2xl lg:bg-white/[0.04] lg:px-4 lg:py-5 lg:text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-sky shadow-lg shadow-brand-sky/20 md:mb-0">
                    <span
                      className={`text-3xl font-black text-white ${step.italicNumber ? "italic" : ""}`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-2xl uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="px-8 text-sm leading-snug text-white md:px-0 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section
        id="services-quiz"
        className="bg-everbright-blue px-6 py-6 md:py-10"
      >
        <div className="w-full max-w-2xl">
          <LeadForm />
        </div>
      </section>

      <section className="bg-white px-6 pb-4 pt-12 md:pb-6 md:pt-14 lg:pb-8 lg:pt-16">
        <div className="mx-auto w-full max-w-[430px] md:max-w-6xl xl:max-w-7xl">
          <div className="bg-white p-8 md:max-w-[620px] md:p-10 lg:p-12">
            <h3 className="mb-4 font-display text-5xl uppercase leading-none text-everbright-blue md:text-[3.25rem]">
              Contact Us Today
            </h3>
            <p className="mb-8 text-base leading-snug text-slate-700 md:text-lg">
              Limited availability - refresh and protect your home with
              Adelaide&apos;s trusted exterior cleaning specialists.
            </p>

            <div className="space-y-3">
              <h4 className="font-display text-lg uppercase text-everbright-blue">
                Trusted Exterior Cleaning Specialists
              </h4>
              <ul className="space-y-1.5">
                {contactChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <span className="material-icons text-sm">check</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 pt-2 md:pb-20 md:pt-4 lg:pb-24">
        <div className="mx-auto w-full max-w-[430px] md:max-w-6xl xl:max-w-7xl">
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
            <iframe
              title="Google Maps - Adelaide SA"
              className="h-72 w-full border-0 md:h-[420px] lg:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps?q=Adelaide%20SA&output=embed"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
