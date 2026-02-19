import Link from "next/link";

interface BlogPostCardProps {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
}

export default function BlogPostCard({
  slug,
  title,
  date,
  readingTime,
  excerpt,
  tags,
}: BlogPostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-amber/30 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]">
          <div className="flex items-center gap-3 text-xs text-muted font-mono">
            <time dateTime={date}>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span className="text-border">|</span>
            <span>{readingTime}</span>
          </div>

          <h3 className="mt-3 text-lg font-bold text-white group-hover:text-amber transition-colors">
            {title}
          </h3>

          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
            {excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 text-xs font-mono text-amber/70 bg-amber/5 rounded border border-amber/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
