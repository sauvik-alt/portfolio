import { useEffect, useRef, useState } from "react";

interface MetricCounterProps {
  /** Numeric portion to animate, e.g. 30 */
  value: number;
  /** Text before the number, e.g. "" */
  prefix?: string;
  /** Text after the number, e.g. "M+" */
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function MetricCounter({ value, prefix = "", suffix = "", duration = 1200, className = "" }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const runCount = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    // Guard against a delayed or throttled observer (background tab, slow
    // main thread) leaving the counter stuck at zero.
    const fallback = window.setTimeout(runCount, 900);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
