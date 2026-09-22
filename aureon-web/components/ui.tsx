import Link from "next/link";
import { ReactNode } from "react";
import { IconArrowRight } from "./icons";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-purple-600/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-purple-600">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
      {children}
    </span>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <span className={`block h-[3px] w-14 bg-purple-600 ${className}`} />;
}

export function CTAButton({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_10px_22px_-6px_rgba(91,43,191,0.55)]"
      : variant === "light"
        ? "bg-beige-50 text-purple-700 hover:bg-white"
        : "border border-[var(--border-night)] text-beige-100 hover:bg-white/5";
  return (
    <Link href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <IconArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function ProcessStrip({
  steps,
}: {
  steps: { number: string; title: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-4">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col gap-2 text-left sm:text-left">
          <span className="text-xl font-bold text-purple-300">{step.number}</span>
          <p className="text-[15px] font-bold leading-snug text-beige-100">{step.title}</p>
          <p className="text-[13px] leading-snug text-[var(--text-night-muted)]">{step.label}</p>
        </div>
      ))}
    </div>
  );
}

export function IconCard({
  icon,
  title,
  children,
  href,
  cta = "Ver la línea",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  href?: string;
  cta?: string;
}) {
  const content = (
    <div className="h-full rounded-2xl bg-purple-200 border border-[var(--border-brand)] p-7 sm:p-9 flex flex-col gap-5 transition-colors hover:bg-purple-100">
      <div className="w-12 h-12 rounded-[10px] bg-beige-50 flex items-center justify-center p-2.5 text-purple-600 shrink-0">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-xl sm:text-2xl leading-snug tracking-tight">{title}</h3>
      <p className="text-[15px] text-ink-700 leading-relaxed">{children}</p>
      {href && (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700">
          {cta} <IconArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
