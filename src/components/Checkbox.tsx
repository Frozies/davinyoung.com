"use client";

import { useState } from "react";

export default function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { disabled, checked: defaultChecked, ...rest } = props;
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <input
      {...rest}
      type="checkbox"
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
      className="mr-2 mt-0.5 h-4 w-4 shrink-0 appearance-none rounded border border-border bg-surface checked:bg-amber checked:border-amber cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-[10px] checked:after:font-bold checked:after:text-background"
    />
  );
}
