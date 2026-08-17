import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-dim hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(124,58,237,0.55)]",
  secondary: "border-2 border-accent-border text-ink hover:border-accent hover:-translate-y-0.5",
  ghost: "text-ink hover:text-accent",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type LinkButtonProps = CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = CommonProps & { href?: never } & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as LinkButtonProps;
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
        {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
