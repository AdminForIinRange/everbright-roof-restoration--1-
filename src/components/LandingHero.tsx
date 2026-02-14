import Image from "next/image";
import Link from "next/link";
import DragScroll from "./DragScroll";
import Footer from "./Footer";
import Header from "./Header";
import LeadForm from "./LeadForm";
import MapSection from "./MapSection";

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

const testimonials = [
  {
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKZ256eJ4TY-oTkPAxVxgoFCsyDH2FaN4YR28JDo6f0UBvxKA45eqC2FGFQ1s6aoV48Q5c8AX00eYrw92dhRpW2fBmlUyMi9RKGA6wfrDV2MqZiJ5QFaDzb7X66h2L1TEGARGQsHh0bXHA3suIyfHmZ-n3McQnAXPx-0XAKYXbiIzyvpKpqsMlfrDxmUYuSsUN8dh9mJTDNooQ58b8zF66Z1-fLWx593peoCaXK2VUm9hjGmxewIIdUqiCz0Vz9lvnQCpC87ywuBnR",
    quote:
      "Shayal did an amazing job cleaning my gutters, very happy with the clean up afterwards too. Would highly recommend.",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpl0BfMyt8RCUTAOGwl_srvlhaNj1rqC58jdI-SbS4QJwMH1Ul0Mh4yRh7D1aZob22nl0iS3GzfOFG6EXg7aTFXLjfUe334Uv_tp_8Q6hEMPdDdoKf3rEdrNgSePf-08LZbOyQt_mbftJ9CUmSv93daS7mU7NGUTmb2EsrRiKjS_LbZp_MruNvFgHxwja6Bl87XTZCcLr1boaz2lmFJCaoyjhQVDnyrfbD8K1p4c7YRk_mAmLGhy3EK8yr4lp0az_tZx-NS0gM8bDy",
    quote:
      "The driveway looks brand new! Professional service and great communication throughout. Best in the area.",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1VOvn0UPVZWiis08gxAvCmXVkQPFuWaLry0i5WPeJljV-gIb3_X_nMoHr99lyfyzfuGSv7YvtebmFzNX1MO_vx32z6IWgBIAuSK1theijSXN-qihjm9k1jRj0RFB8R5Mjfz7wAnxsH2_mZg5cYWHXqUq0B8VXDo3GogKgq4pYJye2h9OJxbfq6lvQjz8PDxbBiBk6zZz5t3_KDRFOOhTG-iRdoTCIITAaH5EQ86DCsUaPtnOrirPQT8OgsPzC7bMgL6qSJ-4z5Bto",
    quote:
      "Excellent roof treatment. I was worried about the moss, but now it's completely gone. Thanks again!",
  },
];

const comparisons = [
  {
    before: "/scrollerImage/1.png",
    after: "/scrollerImage/2.png",
    beforeAlt: "Exterior before cleaning result 1",
    afterAlt: "Exterior after cleaning result 1",
  },
  {
    before: "/scrollerImage/3.png",
    after: "/scrollerImage/4.png",
    beforeAlt: "Exterior before cleaning result 2",
    afterAlt: "Exterior after cleaning result 2",
  },
  {
    before: "/scrollerImage/5.png",
    after: "/scrollerImage/6.png",
    beforeAlt: "Exterior before cleaning result 3",
    afterAlt: "Exterior after cleaning result 3",
  },
];

const comparisonSlides = comparisons.flatMap((comparison, index) => [
  {
    key: `comparison-${index}-before`,
    image: comparison.before,
    alt: comparison.beforeAlt,
    label: "Before",
  },
  {
    key: `comparison-${index}-after`,
    image: comparison.after,
    alt: comparison.afterAlt,
    label: "After",
  },
]);

const services = [
  {
    title: "Roof Restoration",
    description:
      "Restore roof appearance and protect against mould and lichen regrowth with a proven roof-safe cleaning and treatment process.",
    image: "/genrealPhotos/RoofcleaingServiceCard.png",
    alt: "Professional worker cleaning a tiled roof with a pressure washer",
    href: "/roof-restoration",
  },
  {
    title: "Pressure Washing",
    description:
      "Removes dirt, grime, and built-up stains, helping prevent surface damage and extending the life of your outdoor areas.",
    image: "/genrealPhotos/Pressure%20WashingServiceCardImage.jpeg",
    alt: "Pressure washing a brick driveway",
    href: "/pressure-washing",
  },
  {
    title: "Solar Cleaning",
    description:
      "Keep your system performing safely and efficiently with regular cleaning, protecting your investment with proven expertise.",
    image: "/genrealPhotos/Solar%20CleaningServiceCard.jpeg",
    alt: "Cleaning solar panels on a sunny day",
    href: "/solar-cleaning",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Removes leaves and debris, helping prevent water overflow, protecting your home from damage and keeping drainage working.",
    image: "/genrealPhotos/Gutter%20CleaningServicePage.png",
    alt: "Cleaning leaves out of a roof gutter",
    href: "/gutter-cleaning",
  },
  {
    title: "House Washing",
    description:
      "Helps remove built-up dirt and organic growth, improving your home's appearance and helping protect exterior surfaces.",
    image: "/genrealPhotos/House%20WASHINGSERVICECARD.png",
    alt: "Soft washing the exterior walls of a modern house",
    href: "/house-washing",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Get a Quote",
    description:
      "Fill out our form or give us a call, and we'll get back to you with a quote within 24 hours.",
    italicNumber: false,
  },
  {
    number: "2",
    title: "Site Visit",
    description:
      "If you prefer, we come to you, assess the job, and provide a quote on the spot. You're always in control and we tailor our services to fit your needs.",
    italicNumber: false,
  },
  {
    number: "3",
    title: "Schedule the Job",
    description:
      "Book a time that works for you. We offer flexible scheduling to accommodate your busy life. Our team arrives promptly, ready to work.",
    italicNumber: false,
  },
];

const contactChecklist = [
  "Fully Insured & Safety Focused",
  "Surface safe cleaning",
  "Premium Approved Treatments",
  "Highly Experienced Local Team",
];

const reliabilityIntro = {
  title: "Certified & Insured",
  description:
    "Full public liability insurance for all exterior cleaning work up to 10M",
};

const reliabilityPoints = [
  {
    title: "SurfaceSafe Cleaning Methods",
    description:
      "Controlled, surfaceappropriate pressure to clean without damage.",
  },
  {
    title: "100% satisfaction Guarantee",
    description:
      "Our reputation is built on quality workmanship and genuine customer reviews, with a clear focus on your satisfaction. If you're not happy, we'll make it right.",
  },
  {
    title: "Experienced &  Trusted Local Team",
    description:
      "Our trained team uses professionalgrade equipment to clean exterior surfaces safely and effectively, achieving highquality, longlasting results.",
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
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_100%)]" />
        </div>

        <div className="relative z-10">
          <Header />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-grow flex-col justify-end px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12 lg:px-12 lg:pb-20 xl:max-w-7xl">
          <div className="mb-6">
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:max-w-4xl md:text-8xl lg:text-[8.5rem] xl:text-[9rem]">
              Trusted
              <br />
              <span className="text-brand-sky">Exterior Cleaning</span>
              <br />
              in Adelaide
            </h1>
          </div>

          <p className="mb-8 max-w-sm text-lg leading-relaxed text-white/90 md:max-w-xl md:text-xl lg:max-w-2xl">
            Exterior cleaning systems tailored to safely restore, protect, and
            enhance your Adelaide home
          </p>

          <div className="mb-8 grid max-w-sm grid-cols-3 gap-3 md:max-w-xl md:gap-6">
            <div className="flex flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">
                schedule
              </span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                On Time
                <br />
                Service
              </span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">groups</span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                100% Works
                <br />
                Guaranteed
              </span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="material-icons mb-1 text-[28px] text-brand-sky">
                verified_user
              </span>
              <span className="text-sm font-bold uppercase leading-tight tracking-tight text-white md:text-base">
                Insured for
                <br />
                up to $10M
              </span>
            </div>
          </div>

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
            className="w-full rounded-2xl bg-brand-sky py-5 text-center font-display text-2xl uppercase tracking-wide text-white shadow-lg transition-transform hover:bg-brand-sky/90 active:scale-[0.98] md:w-auto md:min-w-[320px] md:px-12"
          >
            Book Your Free Quote
          </Link>
        </div>
      </section>

      <section id="form" className="bg-everbright-blue py-6 md:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-2xl px-4 md:max-w-5xl lg:max-w-6xl">
          <LeadForm />
        </div>
      </section>

      <section className="bg-everbright-blue py-12 md:py-16">
        <h2 className="mb-10 text-center font-display text-4xl uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
          Dirty Exterior?
        </h2>

        <DragScroll className="comparison-marquee hide-scrollbar">
          <div className="comparison-marquee-track">
            {[...comparisonSlides, ...comparisonSlides].map((slide, index) => (
              <article key={`${slide.key}-${index}`} className="comparison-marquee-item">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 220px, 180px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#003249]/95 px-5 py-2 font-display text-2xl uppercase leading-none tracking-tight text-white">
                  {slide.label}
                </span>
              </article>
            ))}
          </div>
        </DragScroll>
      </section>

      <section className="bg-white px-8 py-14 text-center md:px-12 md:py-20 lg:px-16">
        <h2 className="mb-6 font-display text-4xl uppercase leading-tight text-everbright-blue md:text-5xl lg:text-6xl">
          We&apos;ll Bring Your Exterior Back To Life
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-slate-500 md:max-w-3xl md:text-lg lg:text-xl">
          Say goodbye to mould-stained tiles and hello to a professionally
          cleaned and treated roof that stays cleaner for longer. Our proven
          roof cleaning and treatment process restores your roof&apos;s
          appearance, protects against regrowth, and enhances your home&apos;s
          value.
        </p>
        <p className="font-display text-xl font-bold uppercase text-everbright-blue md:text-2xl">
          Clean Today. Protected for Longer.
        </p>
      </section>

      <section className="bg-banner-dark px-5 py-12 text-center md:py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl uppercase leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Local Exterior Cleaners You Can{" "}
            <span className="text-brand-sky">Trust</span>
          </h1>

          <div className="mb-8 mt-4 flex flex-col items-center">
            <div className="mb-1 flex items-center gap-2">
              <GoogleIcon />
              <span className="text-2xl font-bold text-orange-500">5.0</span>
              <div className="flex text-orange-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="material-icons text-xl">
                    star
                  </span>
                ))}
              </div>
            </div>
            <p className="text-lg font-semibold text-white/90">
              Verified 5-Stars Reviews
            </p>
          </div>

          <DragScroll className="drag-scroll hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.avatar}
                className="w-[280px] flex-none snap-center rounded-2xl bg-white p-5 text-left lg:w-auto lg:min-h-[212px] lg:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt="Reviewer"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-brand-sky object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-orange-500">5.0</span>
                    <div className="flex text-[10px] text-orange-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="material-icons text-[14px]">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </DragScroll>
        </div>
      </section>

      <section id="services" className="bg-white ">
        <header className=" border-slate-200 bg-white px-6 py-8 text-center md:py-12">
          <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-everbright-blue md:text-4xl lg:text-5xl">
            Exterior Cleaning Services
            <span className="mt-1 block text-brand-sky">in Adelaide</span>
          </h2>
        </header>

        <div className="mx-auto max-w-md space-y-6 px-5 pb-24 pt-8 md:grid md:max-w-6xl md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl md:aspect-[5/6]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 768px) 448px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.9))]" />
              <div className="absolute inset-0 flex flex-col p-8 text-center md:p-7 lg:p-8">
                <div className="flex flex-1 flex-col items-center justify-center md:justify-start md:pt-6">
                  <h3 className="mb-4 font-display text-5xl uppercase tracking-tighter text-brand-sky md:text-[3.25rem] lg:text-6xl">
                    {service.title}
                  </h3>
                  <p className="max-w-xs text-lg leading-relaxed text-white md:max-w-sm md:text-xl">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="mx-auto rounded-full bg-brand-sky px-10 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-brand-sky/90 active:scale-95 md:mt-auto md:text-2xl"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-display text-4xl uppercase leading-tight tracking-tight text-brand-sky md:text-5xl lg:text-6xl">
            A Service You Can Rely On
          </h2>

          <div className="mb-6 flex items-start gap-3 md:mx-auto md:max-w-4xl">
            <span
              className="material-symbols-outlined shrink-0 text-3xl text-brand-sky"
              style={{
                fontVariationSettings:
                  "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24",
              }}
            >
              check_circle
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
              <h3 className="min-w-[160px] text-lg font-bold text-slate-800">
                {reliabilityIntro.title}
              </h3>
              <p className="mt-1 text-base text-slate-500 sm:mt-0 md:text-lg">
                {reliabilityIntro.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8 md:px-8 md:pb-16">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-10">
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
      </section>

      <section
        id="services-quiz"
        className="flex min-h-screen items-center justify-center bg-everbright-blue px-6 py-12 md:min-h-0 md:py-20"
      >
        <div className="w-full max-w-2xl">
          <LeadForm />
        </div>
      </section>

      <section id="process-contact" className="bg-white md:py-8 lg:py-12">
        <div className="relative mx-auto flex w-full max-w-[430px] flex-col overflow-hidden bg-white md:max-w-6xl md:flex-row md:rounded-[2rem] xl:max-w-7xl">
          <section className="bg-navy-dark px-6 pb-12 pt-16 text-center md:w-3/5 md:px-10 md:py-14 md:text-left lg:px-12">
            <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-[-0.02em] text-brand-sky md:text-6xl lg:text-7xl">
              Easy, no
              <br />
              stress, just fresh
            </h2>
            <p className="mx-auto mb-16 max-w-[320px] text-sm leading-relaxed text-white/80 md:mx-0 md:max-w-2xl md:pr-8 md:text-base">
              Great results matter, but we also make the process simple and
              stress-free. From booking to completion, we keep everything clear
              and easy with our straightforward 3-step process, so you can relax
              while we handle the hard work and deliver a beautifully cleaned
              property.
            </p>

            <div className="space-y-12 md:space-y-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
              {processSteps.map((step) => (
                <div key={step.number} className="flex flex-col items-center md:flex-row md:items-start md:gap-5 md:text-left lg:flex-col lg:items-center lg:rounded-2xl lg:bg-white/[0.04] lg:px-4 lg:py-5 lg:text-center">
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
                    <p className="px-8 text-sm leading-snug text-white/70 md:px-0 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-1 mb-1 rounded-t-3xl bg-white p-8 md:m-0 md:flex md:w-2/5 md:flex-col md:justify-center md:rounded-none md:p-10 lg:p-12">
            <h3 className="mb-4 font-display text-5xl uppercase leading-none text-everbright-blue md:text-[3.25rem]">
              Contact Us Today
            </h3>
            <p className="mb-8 text-base leading-snug text-slate-700 md:text-lg">
              Limited availability - restore and protect the exterior of your
              home with Adelaide&apos;s trusted specialists.
            </p>

            <div className="space-y-3">
              <h4 className="font-display text-lg uppercase text-everbright-blue">
                Trusted Roof Cleaning Specialists
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
          </section>
        </div>
      </section>

      <MapSection
        heading="Trusted Roof Restoration Specialists"
        sectionClassName="bg-white py-16 px-6 md:py-20 lg:py-24"
        checkPoints={[
          "Fully Insured & Safety Focused",
          "Roof-Safe Cleaning & Treatment",
          "Premium Approved Products",
          "Highly Experienced Local Team",
        ]}
      />

      <Footer />
    </main>
  );
}
