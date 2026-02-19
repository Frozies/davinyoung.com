import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a0a",
            color: "#fff",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          Davin Young
        </div>
      ),
      { ...size }
    );
  }

  const wordCount = post.content.split(/\s+/).length;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "40px",
              backgroundColor: "#f59e0b",
              borderRadius: "4px",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#f59e0b",
              letterSpacing: "-0.02em",
            }}
          >
            davinyoung.com
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: post.title.length > 60 ? 42 : 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "90%",
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#b4b4bd",
              lineHeight: 1.5,
              maxWidth: "80%",
            }}
          >
            {post.excerpt.length > 140
              ? post.excerpt.slice(0, 140) + "..."
              : post.excerpt}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "16px",
              color: "#b4b4bd",
            }}
          >
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span style={{ color: "#232328" }}>|</span>
            <span>{post.readingTime}</span>
            <span style={{ color: "#232328" }}>|</span>
            <span>{wordCount.toLocaleString()} words</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "14px",
                  color: "#f59e0b",
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
