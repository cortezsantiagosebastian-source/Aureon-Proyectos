"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/servicios/automatizacion", label: "Automatización" },
  { href: "/servicios/operador-fraccionado", label: "Operador" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Recursos" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating pill header. backdrop-filter creates a containing block for
          position:fixed descendants, so the mobile panel below is rendered as
          a SIBLING, not nested inside this blurred element. */}
      <header className="fixed top-3 sm:top-[18px] inset-x-0 z-50 px-3 sm:px-4">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-[rgba(251,248,243,0.88)] backdrop-blur-md border border-[var(--border-subtle)] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between shadow-[0_8px_24px_-12px_rgba(17,17,17,0.25)]">
          <Logo compact />

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12.5px] font-bold tracking-wide uppercase text-ink-900/80 hover:text-purple-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Agendar diagnóstico
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden relative w-9 h-9 flex items-center justify-center -mr-1.5"
          >
            <span className="sr-only">Menú</span>
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-ink-900 rounded transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-ink-900 rounded transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-ink-900 rounded transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu panel — sibling of the blurred header, own fixed layer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-beige-100 pt-20 transition-[transform,opacity] duration-200 ease-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1 overflow-y-auto h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-xl font-display border-b border-[var(--border-subtle)] text-ink-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-purple-600 text-white text-[15px] font-semibold px-6 py-4 rounded-full"
          >
            Agendar diagnóstico gratuito
          </Link>
        </nav>
      </div>
    </>
  );
}
