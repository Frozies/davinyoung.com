"use client";

import { useState, useEffect, useRef } from "react";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed bottom-8 left-8 z-40 p-3 rounded-full bg-surface border border-border text-muted hover:text-amber hover:border-amber/30 transition-all duration-300 shadow-lg"
        aria-label="Toggle table of contents"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h12M4 18h8" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/60" onClick={() => setIsOpen(false)}>
          <nav
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background border-r border-border p-6 pt-20 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
              On this page
            </p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-1.5 text-sm transition-colors ${
                      item.level === 3 ? "pl-4" : item.level === 4 ? "pl-8" : ""
                    } ${
                      activeId === item.id
                        ? "text-amber font-medium"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <nav
        className="hidden xl:block fixed top-28 right-[max(2rem,calc((100vw-768px)/2-320px))] w-64 max-h-[calc(100vh-10rem)] overflow-y-auto"
        aria-label="Table of contents"
      >
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          On this page
        </p>
        <ul className="space-y-0.5 border-l border-border">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 text-[13px] leading-snug transition-colors ${
                  item.level === 3 ? "pl-6" : item.level === 4 ? "pl-9" : "pl-3"
                } ${
                  activeId === item.id
                    ? "text-amber border-l-2 border-amber -ml-px"
                    : "text-muted hover:text-white"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
