import type { CSSProperties, ReactNode } from "react";
import Shot from "./Shot";

interface TiltShotProps {
  label: string;
  src?: string;
  rotate: number;
  overlay: ReactNode;
  aspect?: string;
  frame?: "browser" | "plain";
  fit?: "cover" | "contain";
  contentBg?: string;
}

export default function TiltShot({
  label,
  src,
  rotate,
  overlay,
  aspect = "aspect-video",
  frame = "browser",
  fit = "cover",
  contentBg,
}: TiltShotProps) {
  return (
    <div
      tabIndex={0}
      className="group relative cursor-pointer select-none outline-none"
      style={{ "--tilt": `${rotate}deg` } as CSSProperties}
    >
      <div
        className="[transform:rotate(var(--tilt))] overflow-hidden rounded-2xl border-2 border-line shadow-[0_16px_40px_-24px_rgba(10,10,10,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotate(0deg)_scale(1.02)] group-hover:border-accent group-focus-visible:[transform:rotate(0deg)_scale(1.02)] group-focus-visible:border-accent"
      >
        <Shot label={label} src={src} frame={frame} aspect={aspect} fit={fit} {...(contentBg ? { contentBg } : {})} />
      </div>

      <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 rounded-xl bg-ink/90 px-4 py-2.5 opacity-0 backdrop-blur-sm transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        {overlay}
      </div>
    </div>
  );
}
