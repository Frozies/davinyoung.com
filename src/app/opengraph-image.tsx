import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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

        {/* Center content */}
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
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Davin Young
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#f59e0b",
              lineHeight: 1.4,
            }}
          >
            Staff Software Engineer, Founder & Patent Holder
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#b4b4bd",
              lineHeight: 1.5,
              maxWidth: "85%",
            }}
          >
            Building enterprise platforms, cloud infrastructure, e-commerce, and
            scalable full-stack systems.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {["Full-Stack", "Cloud", "E-Commerce", "Patents"].map((tag) => (
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
    ),
    { ...size }
  );
}
