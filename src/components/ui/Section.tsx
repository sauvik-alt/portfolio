import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  containerClassName = "max-w-6xl",
  dark = false,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${dark ? "bg-ink text-paper" : ""} py-20 sm:py-28 ${className}`}>
      <div className={`mx-auto ${containerClassName} px-6`}>
        {title && <SectionHeading eyebrow={eyebrow} title={title} description={description} dark={dark} className="mb-14" />}
        {children}
      </div>
    </section>
  );
}
