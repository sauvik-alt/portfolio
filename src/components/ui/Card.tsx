import type { ReactNode } from "react";

export function TagPill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
        dark
          ? "border-paper/20 text-paper/85 hover:border-paper/40"
          : "border-line text-ink/80 hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </span>
  );
}
