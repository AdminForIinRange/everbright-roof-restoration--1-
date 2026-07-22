import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import PageFrame from "@/components/PageFrame";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { buildPageMetadata } from "@lib/seo";

function renderRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-black">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog",
      description: "EverBright blog.",
      path: "/blog",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageFrame>
      <article className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[430px] md:max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-everbright-blue hover:text-brand-sky"
          >
            <span className="material-icons text-[18px]">arrow_back</span>
            Back to Blog
          </Link>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">
            {post.category}
          </p>
          <h1 className="mb-4 font-display text-3xl uppercase leading-tight text-everbright-blue md:text-5xl">
            {post.title}
          </h1>
          <div className="mb-4 flex items-center gap-3 text-xs font-medium text-slate-400">
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          {post.heroImage && (
            <Image
              src={post.heroImage.src}
              alt={post.heroImage.alt}
              width={1080}
              height={675}
              unoptimized
              className="mb-10 h-auto w-full"
            />
          )}

          <div className="space-y-10">
            {post.sections.map((section, index) => (
              <div key={section.heading ?? index}>
                {section.heading && (
                  <h2 className="mb-4 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
                    {section.heading}
                  </h2>
                )}

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-base leading-relaxed text-black"
                    >
                      {renderRichText(paragraph)}
                    </p>
                  ))}

                  {section.image && (
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={576}
                      height={768}
                      unoptimized
                      className="mx-auto h-auto w-full max-w-[280px]"
                    />
                  )}

                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-3 text-base leading-relaxed text-black"
                        >
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sky"
                            aria-hidden
                          />
                          <span>{renderRichText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.closing && (
                    <p className="text-base leading-relaxed text-black">
                      {renderRichText(section.closing)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="mb-4 text-base font-semibold text-slate-900">
              Ready to get your property looking its best?
            </p>
            <Link
              href="/#form"
              className="inline-flex items-center justify-center rounded-full bg-brand-sky px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-sky/90"
            >
              Book a Free Quote
            </Link>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
