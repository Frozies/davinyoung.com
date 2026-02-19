"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  label: string;
  section: string;
  href: string;
  icon: "section" | "blog" | "external";
}

const staticItems: CommandItem[] = [
  { id: "home", label: "Home", section: "Navigation", href: "/", icon: "section" },
  { id: "projects", label: "Projects", section: "Navigation", href: "/#projects", icon: "section" },
  { id: "patents", label: "Patents", section: "Navigation", href: "/#patents", icon: "section" },
  { id: "about", label: "About", section: "Navigation", href: "/#about", icon: "section" },
  { id: "contact", label: "Contact", section: "Navigation", href: "/#contact", icon: "section" },
  { id: "blog", label: "Blog", section: "Navigation", href: "/blog", icon: "blog" },
  { id: "github", label: "GitHub", section: "External", href: "https://github.com/Frozies", icon: "external" },
  { id: "linkedin", label: "LinkedIn", section: "External", href: "https://linkedin.com/in/davin-young-engineer", icon: "external" },
  { id: "rss", label: "RSS Feed", section: "External", href: "/feed.xml", icon: "external" },
];

interface CommandPaletteProps {
  blogPosts: { slug: string; title: string }[];
}

export default function CommandPalette({ blogPosts }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allItems: CommandItem[] = [
    ...staticItems,
    ...blogPosts.map((post) => ({
      id: `blog-${post.slug}`,
      label: post.title,
      section: "Blog Posts",
      href: `/blog/${post.slug}`,
      icon: "blog" as const,
    })),
  ];

  const filtered = query
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const sections = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  const flatFiltered = Object.values(sections).flat();

  const execute = useCallback(
    (item: CommandItem) => {
      setOpen(false);
      setQuery("");
      if (item.icon === "external") {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(item.href);
      }
    },
    [router]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatFiltered[selectedIndex]) {
      execute(flatFiltered[selectedIndex]);
    }
  }

  if (!open) return null;

  const iconMap = {
    section: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    blog: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    external: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
  };

  let flatIndex = -1;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg mx-auto px-4">
        <div className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <svg className="w-5 h-5 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Search or jump to..."
              className="w-full py-4 bg-transparent text-sm text-white placeholder:text-muted outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-muted bg-background rounded border border-border">
              ESC
            </kbd>
          </div>

          <div className="max-h-72 overflow-y-auto p-2">
            {flatFiltered.length === 0 && (
              <p className="px-3 py-8 text-center text-sm text-muted">No results found.</p>
            )}
            {Object.entries(sections).map(([section, items]) => (
              <div key={section}>
                <p className="px-3 pt-3 pb-1 text-[11px] font-semibold text-muted uppercase tracking-wider">
                  {section}
                </p>
                {items.map((item) => {
                  flatIndex++;
                  const idx = flatIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => execute(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                        selectedIndex === idx
                          ? "bg-amber/10 text-amber"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {iconMap[item.icon]}
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border text-[11px] text-muted">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 font-mono bg-background rounded border border-border">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 font-mono bg-background rounded border border-border">↵</kbd>
              select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 font-mono bg-background rounded border border-border">esc</kbd>
              close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
