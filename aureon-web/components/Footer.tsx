import Link from "next/link";
import Logo from "./Logo";
import { IconMail, IconWhatsapp, IconArrowRight } from "./icons";

const STUDIO_LINKS = [
  { href: "/servicios/automatizacion", label: "Automatización de procesos" },
  { href: "/servicios/operador-fraccionado", label: "Operador Fraccionado" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Recursos" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contacto", label: "Contacto" },
];

function LinkedInGlyph() {
  return (
    <span
      aria-hidden="true"
      className="w-4 h-4 shrink-0 rounded-[3px] bg-purple-300 text-night-800 text-[10px] font-extrabold tracking-tight flex items-center justify-center"
    >
      in
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="section-card relative bg-night-800 overflow-hidden px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6 items-start">
            <Logo variant="dark" />
            <p className="font-sans font-bold text-xl sm:text-2xl leading-snug tracking-tight text-beige-100 max-w-[20ch]">
              Sistemas que hacen crecer tu negocio.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-purple-300">
              Estudio
            </span>
            {STUDIO_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-purple-300">
              Contacto
            </span>
            <a
              href="https://wa.me/5493543537085"
              className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors flex items-center gap-2.5"
            >
              <IconWhatsapp className="w-4 h-4 shrink-0 text-purple-300" />
              +54 9 3543 537085
            </a>
            <a
              href="mailto:cortezsantiagoseabastian@gmail.com"
              className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors flex items-center gap-2.5"
            >
              <IconMail className="w-4 h-4 shrink-0 text-purple-300" />
              cortezsantiagoseabastian@gmail.com
            </a>
            <a
              href="https://instagram.com/aureonestudio"
              className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors flex items-center gap-2.5"
            >
              <IconArrowRight className="w-4 h-4 shrink-0 text-purple-300 rotate-[-40deg]" />
              @aureonestudio
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-sebastian-cortez-061125319/"
              className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors flex items-center gap-2.5"
            >
              <LinkedInGlyph />
              Santiago Cortez
            </a>
            <a
              href="https://x.com/aureonestudio"
              className="text-sm text-[var(--text-night-muted)] hover:text-beige-100 transition-colors flex items-center gap-2.5"
            >
              <IconArrowRight className="w-4 h-4 shrink-0 text-purple-300 rotate-[-40deg]" />
              aureonestudio
            </a>
          </div>
        </div>

        <div className="h-px bg-[var(--border-night)] my-10" />

        <div className="flex flex-wrap justify-between gap-4 text-xs text-[var(--text-night-muted)]">
          <span>© {new Date().getFullYear()} Aureon Estudio · Córdoba, Argentina</span>
          <span>Optimización empresarial · Método de Diagnóstico Aureon</span>
        </div>
      </div>
    </footer>
  );
}
