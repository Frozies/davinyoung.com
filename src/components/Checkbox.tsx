"use client";

import { useState, useEffect, useRef } from "react";

function getStorageKey(pathname: string) {
  return `blog-checkboxes-${pathname}`;
}

function getCheckboxIndex(el: HTMLInputElement): number {
  const all = document.querySelectorAll('input[type="checkbox"]');
  return Array.from(all).indexOf(el);
}

export default function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { disabled, checked: defaultChecked, ...rest } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(defaultChecked ?? false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const index = getCheckboxIndex(el);
    const key = getStorageKey(window.location.pathname);
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      if (index in saved) {
        setChecked(saved[index]);
      }
    } catch {}
  }, []);

  const handleChange = () => {
    const el = ref.current;
    if (!el) return;

    const index = getCheckboxIndex(el);
    const newChecked = !checked;
    setChecked(newChecked);

    const key = getStorageKey(window.location.pathname);
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      saved[index] = newChecked;
      localStorage.setItem(key, JSON.stringify(saved));
    } catch {}
  };

  return (
    <input
      {...rest}
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className="mr-2 mt-0.5 h-4 w-4 shrink-0 appearance-none rounded border border-border bg-surface checked:bg-amber checked:border-amber cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-[10px] checked:after:font-bold checked:after:text-background"
    />
  );
}
