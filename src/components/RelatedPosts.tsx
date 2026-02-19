import Link from "next/link";
import type { BlogPostMeta } from "@/lib/mdx";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-xl font-bold text-white mb-6">More from the blog</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]"
          >
            <div className="flex items-center gap-2 text-xs text-muted font-mono mb-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span className="text-border">|</span>
              <span>{post.readingTime}</span>
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-amber transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="mt-2 text-xs text-muted line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
