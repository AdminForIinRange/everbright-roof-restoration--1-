import type { Metadata } from "next";
import Link from "next/link";

import PageFrame from "@/components/PageFrame";
import { blogPosts } from "@/data/blogPosts";
import { buildPageMetadata } from "@lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Tips and guides on roof cleaning, gutter cleaning, pressure washing, and exterior maintenance for Adelaide homes.",
  path: "/blog",
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <PageFrame>
      <section className="bg-navy-dark px-6 py-8 text-center md:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-sky">
          Blog
        </p>
        <h1 className="mx-auto max-w-3xl font-display text-5xl uppercase leading-[1.1] tracking-[-0.02em] text-white md:text-7xl">
          Tips &amp; Guides
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          Practical advice on roof, gutter, and exterior cleaning from the
          EverBright team in Adelaide.
        </p>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[430px] gap-6 md:max-w-6xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:border-everbright-blue hover:shadow-lg"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">
                {post.category}
              </p>
              <h2 className="mb-3 font-display text-2xl uppercase leading-tight text-everbright-blue">
                {post.title}
              </h2>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-everbright-blue transition group-hover:gap-2">
                Read more
                <span className="material-icons text-[18px]">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
