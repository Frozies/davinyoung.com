"use client";

import { useState, useEffect } from "react";

interface ReadingStatsProps {
  wordCount: number;
  readingTime: string;
}

export default function ReadingStats({ wordCount, readingTime }: ReadingStatsProps) {
  const [minutesLeft, setMinutesLeft] = useState<number | null>(null);

  useEffect(() => {
    const totalMinutes = Math.ceil(wordCount / 230);

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = Math.min(scrollTop / docHeight, 1);
      const remaining = Math.max(Math.ceil(totalMinutes * (1 - progress)), 0);
      setMinutesLeft(remaining);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [wordCount]);

  return (
    <div className="flex items-center gap-3 text-xs text-muted font-mono">
      <span>{wordCount.toLocaleString()} words</span>
      <span className="text-border">|</span>
      <span>{readingTime}</span>
      {minutesLeft !== null && minutesLeft > 0 && (
        <>
          <span className="text-border">|</span>
          <span className="text-amber/70">{minutesLeft} min left</span>
        </>
      )}
    </div>
  );
}
