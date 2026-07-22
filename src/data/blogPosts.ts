export type BlogPostSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  closing?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: BlogPostSection[];
  heroImage?: {
    src: string;
    alt: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-roof-needs-a-professional-clean",
    title: "5 Signs Your Roof Needs a Professional Clean",
    excerpt:
      "Black streaks, moss, and sagging gutters aren't just cosmetic. Here's how to tell when your roof needs attention before small issues become expensive repairs.",
    date: "2026-06-02",
    readTime: "4 min read",
    category: "Roof Cleaning",
    sections: [
      {
        paragraphs: [
          "Adelaide roofs take a beating from sun, wind, and the occasional storm. Most homeowners only think about their roof when something goes wrong, but a few warning signs are easy to spot from the ground if you know what to look for.",
        ],
      },
      {
        heading: "1. Black or green streaks",
        paragraphs: [
          "Those dark streaks running down your tiles or colorbond sheeting are usually algae or lichen, not dirt. Left untreated, they trap moisture against the roof surface and can shorten its lifespan.",
        ],
      },
      {
        heading: "2. Moss building up in valleys and shaded areas",
        paragraphs: [
          "Moss holds water like a sponge. On tiled roofs especially, it can lift tiles slightly and create a path for water to get underneath, which is how small leaks start.",
        ],
      },
      {
        heading: "3. Gutters overflowing in light rain",
        paragraphs: [
          "If water is spilling over the edge of your gutters during ordinary rain, not just downpours, it's often a sign that debris, granules, or moss run-off from the roof has built up and is blocking the flow.",
        ],
      },
      {
        heading: "4. Visible granule loss on tiled or shingle roofs",
        paragraphs: [
          "A layer of grit collecting near your downpipes or in the gutters is a sign your roof coating is wearing away. Regular cleaning helps slow this process by removing the organic growth that accelerates it.",
        ],
      },
      {
        heading: "5. It's simply been a few years",
        paragraphs: [
          "Even without obvious problems, most Adelaide roofs benefit from a professional clean every 2-3 years. It's far cheaper than a restoration or replacement, and it keeps your home looking its best.",
          "If any of this sounds familiar, get in touch for a free quote and we'll take a look.",
        ],
      },
    ],
  },
  {
    slug: "how-often-should-you-clean-your-gutters-in-adelaide",
    title: "How Often Should You Clean Your Gutters in Adelaide?",
    excerpt:
      "Overflowing gutters and gum-leaf build-up aren't just a nuisance. Here's how often Adelaide homes really need gutter cleaning — and how to spot when yours are overdue.",
    date: "2026-07-22",
    readTime: "5 min read",
    category: "Gutter Cleaning",
    heroImage: {
      src: "/genrealPhotos/image.png",
      alt: "Gloved hand clearing a thick pile of fallen leaves out of a roof gutter",
    },
    sections: [
      {
        paragraphs: [
          "If you want the short answer: most Adelaide homes need their gutters cleaned **at least twice a year** — **once in autumn before the winter rains**, and **once in late spring before bushfire season**. Homes with heavy tree cover often need it done **every three months**.",
          "But \"twice a year\" is a starting point, not a rule. How often your gutters actually need clearing depends on where you live in Adelaide, what's growing around your roof, and what your gutters are protecting. Here's how to work out the right frequency for your home — and how to tell when they need doing right now.",
        ],
      },
      {
        heading: "Why Adelaide gutters fill up differently",
        paragraphs: [
          "A lot of generic advice online assumes autumn is the only time gutters clog, because it's written for places where deciduous trees drop their leaves once a year and that's the end of it. Adelaide isn't like that.",
          "Our streets and backyards are full of eucalypts and native gums, and they don't follow the neat autumn schedule. Gum trees shed leaves, bark, twigs and gumnuts **all year round**, with heavy drops after windy spells and hot, dry stretches. If you've got a gum anywhere near your roofline, your gutters are collecting debris in January just as much as they are in May.",
          "Add to that Adelaide's Mediterranean climate — long dry summers and a concentrated wet season through winter — and you get a specific problem. Debris builds up and bakes dry over summer, then the first solid winter downpours hit gutters that are already packed. That's when blocked gutters overflow, back up under the roofline, and start causing damage.",
          "So the two things driving your frequency are your **tree cover** (which is often year-round here, not seasonal) and the **timing of the winter rains** (which you want to be ready for, not caught out by).",
        ],
      },
      {
        heading: "The factors that change how often you need it",
        paragraphs: [
          "Two homes on the same street can need completely different cleaning schedules. Here's what moves the number:",
        ],
        list: [
          "**Trees near your roof** — the biggest factor by far. No overhanging trees and you might stretch to once a year. A large gum or pine directly above the gutter line and you may need it quarterly. Pine needles are especially bad — they knit together into a mat that water can't get through.",
          "**Where you are in Adelaide** — established suburbs with mature street trees (the leafy eastern and inner-northern suburbs) generally load up gutters faster than newer estates with young landscaping. Hills and foothills homes have both heavy tree cover and bushfire risk to think about.",
          "**Bushfire zone** — dry leaves and bark in your gutters are exactly what catches embers during a fire. The CFS recommends clearing gutters as part of preparing your property before each fire season, making a late-spring clean non-negotiable for Hills and foothills homes.",
          "**Gutter guard** — good guard reduces how often you need a full clean, but doesn't eliminate it. Fine debris and grit still get through, and the guard itself collects leaf matter on top. It stretches your interval; it doesn't end it.",
          "**Roof and gutter type** — low-pitch roofs and narrower gutter profiles clog and overflow faster than steep roofs with wide gutters, since debris moves off a steep roof more easily.",
        ],
      },
      {
        heading: "Signs your gutters need cleaning now",
        paragraphs: [
          "Don't wait for the calendar if you're seeing any of these:",
        ],
        list: [
          "**Water spilling over the edge** of the gutter during rain instead of running to the downpipe",
          "**Plants, weeds or grass growing** out of the gutter — a sure sign of packed, composting debris",
          "**Sagging gutters**, or gutters pulling away from the fascia under the weight",
          "**Staining or water marks** on the exterior wall below the gutter line",
          "**Birds nesting** in the gutter, or debris visibly poking over the top",
          "**Overflow pooling** around the base of the house near the foundations",
        ],
        closing:
          "Any one of these means the gutters are **already past due** — the question isn't when to book, it's how soon.",
      },
      {
        heading: "What happens if you leave it",
        paragraphs: [
          "Blocked gutters are one of those problems that stay invisible until they're expensive. When water can't get to the downpipe, it goes everywhere it shouldn't.",
          "It overflows back under the roof and into the eaves, **rotting timber and staining ceilings**. It runs down the exterior walls, marking render and brickwork. It pools around the foundations, which over time can **cause movement and cracking** — a genuine issue in Adelaide's reactive clay soils, which already shift with our wet-dry seasons. And packed, damp debris becomes a **fire hazard** in summer and a home for pests year-round.",
          "None of that is dramatic on day one. That's the trap. A **$200-ish clean** skipped for two years quietly turns into rotted eaves, a stained ceiling, or worse. The maths on regular cleaning is easy: it's cheap prevention against repairs that aren't.",
        ],
      },
      {
        heading: "The best times of year to clean gutters in Adelaide",
        paragraphs: [
          "For most Adelaide homes, two cleans a year hit the right moments:",
        ],
        list: [
          "**Autumn (March–May)** — the priority clean. You want your gutters clear before the winter rains arrive, so water actually reaches the downpipes instead of overflowing. This is the single most important clean of the year.",
          "**Late spring / early summer (November)** — clears out debris that's built up through winter and spring, and gets your gutters clean before bushfire season. Even outside a fire zone, going into a hot, dry summer with gutters full of dry leaves isn't worth the risk.",
        ],
        closing:
          "If you've got heavy tree cover, add a **mid-winter check** and a **late-summer clean**, effectively moving to a **quarterly rhythm**.",
      },
      {
        heading: "Should you do it yourself?",
        paragraphs: [
          "You can — but be honest about what it involves. Gutter cleaning means working at height, on a ladder, often reaching or leaning, frequently alone with no one to steady the base. **Falls from ladders during home maintenance send people to hospital every year in Australia**, and gutters are one of the most common culprits. It's not the debris that's dangerous; it's the ladder.",
          "If your gutters are single-storey, easily accessed, and you've got someone to foot the ladder, DIY is reasonable. If you're on a two-storey, on uneven ground, or working alone, **the risk isn't worth the saving**. A professional clean also gets you a proper check of the gutters, downpipes and roofline while they're up there — often catching a small problem before it becomes a big one.",
        ],
        image: {
          src: "/genrealPhotos/image copy 2.png",
          alt: "Person balanced on a ladder clearing wet leaves from a roof gutter",
        },
      },
      {
        heading: "Get it sorted before the rains",
        paragraphs: [
          "At Everbright, we clear gutters properly across Adelaide — debris out, downpipes flowing, and a check of the roofline while we're up there. If your gutters are overdue, or you just want them sorted before the next round of winter rain, tell us your suburb and we'll get you a **free quote**.",
          "Everbright — exterior cleaning done properly, Adelaide-wide.",
        ],
      },
    ],
  },
  {
    slug: "pressure-washing-vs-soft-washing-whats-the-difference",
    title: "Pressure Washing vs Soft Washing: What's the Difference?",
    excerpt:
      "Not every surface should be cleaned the same way. Here's when high-pressure cleaning is the right call, and when a gentler approach protects your property better.",
    date: "2026-04-22",
    readTime: "3 min read",
    category: "Pressure Washing",
    sections: [
      {
        paragraphs: [
          "\"Pressure washing\" gets used as a catch-all term, but a good exterior cleaner will actually use different methods depending on the surface. Using the wrong one can damage paint, mortar, or roofing material.",
        ],
      },
      {
        heading: "Pressure washing",
        paragraphs: [
          "This uses concentrated, high-pressure water to strip away grime, oil stains, and built-up dirt from hard, durable surfaces. It's ideal for driveways, concrete paths, pavers, and brickwork where the surface can handle the force.",
        ],
      },
      {
        heading: "Soft washing",
        paragraphs: [
          "Soft washing uses low pressure combined with a cleaning solution to break down algae, mould, and organic growth at the source, rather than blasting it off. It's the safer option for roofs, rendered walls, colorbond fencing, and solar panels, surfaces that can crack, chip, or scratch under high pressure.",
        ],
      },
      {
        heading: "Which one does your property need?",
        paragraphs: [
          "As a rule of thumb: driveways and paving usually call for pressure washing, while roofs, walls, and solar panels call for soft washing. If you're not sure, send us a photo and we'll recommend the right method, and give you a free quote either way.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
