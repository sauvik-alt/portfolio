import MetricCounter from "./MetricCounter";
import Reveal from "./Reveal";

export interface Stat {
  numeric?: number;
  prefix?: string;
  suffix?: string;
  /** Use when the value isn't a clean animatable number, e.g. "1,141 days 22h" */
  staticValue?: string;
  label: string;
  note?: string;
}

export function StatBlock({ stat, delay = 0 }: { stat: Stat; delay?: number }) {
  return (
    <Reveal delay={delay} className="text-center">
      <div className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
        {stat.staticValue ? (
          stat.staticValue
        ) : (
          <MetricCounter value={stat.numeric ?? 0} prefix={stat.prefix} suffix={stat.suffix} />
        )}
      </div>
      <div className="mt-2 text-sm leading-snug text-paper/70">{stat.label}</div>
      {stat.note && <div className="mt-1 text-xs text-paper/50">{stat.note}</div>}
    </Reveal>
  );
}

export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatBlock stat={stat} key={stat.label} delay={i * 60} />
      ))}
    </div>
  );
}
