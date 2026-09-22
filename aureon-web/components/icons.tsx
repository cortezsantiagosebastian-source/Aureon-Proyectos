type IconProps = { className?: string };

const base = "w-full h-full";

export function IconChat({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconClock({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <circle cx="12" cy="12" r="8.25" strokeLinecap="round" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBuilding({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M5 21V6.5L12 3l7 3.5V21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-5h6v5M9 10h.01M12 10h.01M15 10h.01M9 13.5h.01M12 13.5h.01M15 13.5h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLedger({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTruck({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function IconBriefcase({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconScale({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M12 3v18M7 21h10M5 7h5M14 7h5M5 7 2.5 12a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 5a2.5 2.5 0 0 0 5 0L19 7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGear({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconMic({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <rect x="9" y="3" width="6" height="11" rx="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSheet({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10h16M10 4v16" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className || base}>
      <path d="M4 12h16M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBottleneck({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M3 6h6l3 6-3 6H3M21 6h-6l-3 6 3 6h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCompass({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-2 5-5 2 2-5 5-2Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 6.5 8 6.5 8-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsapp({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4.5 12a8 8 0 0 0 2 5.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10.2c.3 2 2.3 4 4.3 4.3.6.1 1-.4.8-1l-.5-1.1c-.1-.3-.5-.4-.8-.3l-.6.2a4 4 0 0 1-1.8-1.8l.2-.6c.1-.3 0-.6-.3-.8l-1-.5c-.6-.2-1.1.2-1 .8Z" />
    </svg>
  );
}

export function IconMapPin({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className || base}>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}
