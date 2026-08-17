import type { ReactNode } from "react";

interface ShotProps {
  /** Upload instruction shown until a real asset is wired in, e.g. "FACEBOOK ANALYTICS SCREENSHOT" */
  label: string;
  /** Optional real image src — when provided, replaces the placeholder */
  src?: string;
  alt?: string;
  frame?: "browser" | "plain" | "social";
  url?: string;
  aspect?: string;
  /** "cover" fills and crops from the top; "contain" letterboxes so nothing is cropped out — use for tall screenshots where the evidence (names, numbers) can't be cut off. */
  fit?: "cover" | "contain";
  /** Letterbox background for "contain" mode — match the screenshot's own background (e.g. bg-paper-dim for a light card, bg-ink/95 for a dark UI). */
  contentBg?: string;
  className?: string;
  caption?: ReactNode;
}

export default function Shot({
  label,
  src,
  alt,
  frame = "plain",
  url,
  aspect = "aspect-[16/10]",
  fit = "cover",
  contentBg = "bg-ink/95",
  className = "",
  caption,
}: ShotProps) {
  const body = src ? (
    fit === "contain" ? (
      <div className={`flex h-full w-full items-center justify-center ${contentBg}`}>
        <img src={src} alt={alt ?? label} className="h-full w-full object-contain" loading="lazy" />
      </div>
    ) : (
      <img src={src} alt={alt ?? label} className="h-full w-full object-cover object-top" loading="lazy" />
    )
  ) : (
    <div className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(135deg,rgba(10,10,10,0.035)_0px,rgba(10,10,10,0.035)_1px,transparent_1px,transparent_14px)] bg-paper-dim px-6 text-center`}>
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-mute">Screenshot pending</span>
      <span className="max-w-xs font-display text-sm font-medium tracking-tight text-ink/70">[ UPLOAD {label.toUpperCase()} ]</span>
    </div>
  );

  const framed =
    frame === "browser" ? (
      <div className="flex h-full w-full flex-col overflow-hidden">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          {url && (
            <span className="ml-3 truncate rounded-full bg-paper-dim px-3 py-0.5 text-[11px] text-mute">{url}</span>
          )}
        </div>
        <div className="min-h-0 flex-1">{body}</div>
      </div>
    ) : (
      body
    );

  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-xl border border-line shadow-[0_1px_2px_rgba(10,10,10,0.04),0_16px_40px_-24px_rgba(10,10,10,0.35)] ${aspect}`}>
        {framed}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}
