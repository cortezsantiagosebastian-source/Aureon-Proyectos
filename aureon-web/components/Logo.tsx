import Link from "next/link";

export default function Logo({
  className = "",
  compact = false,
  variant = "light",
}: {
  className?: string;
  /** hide the "ESTUDIO" subline — used in the compact floating header */
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const wordColor = variant === "dark" ? "text-beige-100" : "text-purple-600";
  const shadowColor = variant === "dark" ? "#5B2BBF" : "#111111";
  const subColor = variant === "dark" ? "text-purple-300" : "text-ink-500";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Aureon Estudio — inicio"
    >
      <span className="relative inline-block w-8 h-8 shrink-0">
        <svg viewBox="0 0 40 40" className="absolute top-[3px] left-[3px] w-full h-full" aria-hidden="true">
          <path d="M20 6 L34 34 L6 34 Z" fill={shadowColor} />
        </svg>
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <path d="M20 6 L34 34 L6 34 Z" fill="#5B2BBF" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className={`font-sans font-extrabold tracking-tight text-lg ${wordColor}`}>
          AUREON
        </span>
        {!compact && (
          <span className={`font-sans font-medium tracking-[0.18em] text-[9px] mt-0.5 ${subColor}`}>
            ESTUDIO
          </span>
        )}
      </span>
    </Link>
  );
}
