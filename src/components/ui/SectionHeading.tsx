import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className = "" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      )}
      <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${dark ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-paper/70" : "text-mute"}`}>{description}</p>
      )}
    </Reveal>
  );
}
