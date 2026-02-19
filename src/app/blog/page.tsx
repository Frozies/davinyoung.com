import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on blockchain, DevOps, infrastructure, Shopify, startup life, and engineering from Davin Young.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="animate-fade-up">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Blog</h1>
            <p className="mt-4 text-muted max-w-xl">
              Writing about blockchain, DevOps, home lab experiments, startup lessons,
              and engineering.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-muted">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="mt-12 space-y-6">
              {posts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  readingTime={post.readingTime}
                  excerpt={post.excerpt}
                  tags={post.tags}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
