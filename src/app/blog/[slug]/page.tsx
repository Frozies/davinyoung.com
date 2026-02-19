import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://davinyoung.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://davinyoung.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Davin Young"],
      tags: post.tags,
      siteName: "Davin Young",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://davinyoung.com/blog/${slug}`,
    author: {
      "@type": "Person",
      "@id": "https://davinyoung.com/#person",
      name: "Davin Young",
      url: "https://davinyoung.com",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://davinyoung.com/#person",
      name: "Davin Young",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://davinyoung.com/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-border" aria-hidden="true">|</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Post tags">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="inline-block px-2 py-0.5 text-xs font-mono text-amber/70 bg-amber/5 rounded border border-amber/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose max-w-none">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    [rehypeShiki, { theme: "github-dark-default" }],
                  ],
                },
              }}
              components={{ pre: CodeBlock }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
