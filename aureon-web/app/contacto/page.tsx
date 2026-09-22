import type { Metadata } from "next";
import { Eyebrow, Rule } from "@/components/ui";
import { IconMail, IconWhatsapp, IconArrowRight } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agendá tu diagnóstico gratuito de 30 minutos con Aureon Estudio. Sin costo y sin obligación de contratar nada.",
};

function LinkedInGlyph() {
  return (
    <span
      aria-hidden="true"
      className="w-[17px] h-[17px] shrink-0 rounded-[3px] bg-purple-600 text-beige-100 text-[10px] font-extrabold flex items-center justify-center"
    >
      in
    </span>
  );
}

export default function ContactoPage() {
  return (
    <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-16 sm:pb-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col items-start gap-7">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="font-sans font-bold text-[clamp(29px,3.9vw,56px)] leading-[1.06] tracking-tight max-w-[18ch]">
            Agendá tu <span className="text-purple-600">diagnóstico gratuito.</span>
          </h1>
          <Rule className="w-[88px] h-[3px]" />
          <p className="text-lg sm:text-[18px] leading-relaxed text-ink-700 max-w-[46ch]">
            30 minutos por videollamada. Contame cómo trabaja tu equipo hoy y salimos de la
            reunión con el mapa de dónde se pierde tiempo o dinero. Sin costo y sin obligación
            de contratar nada.
          </p>

          <div className="h-px bg-[var(--border-subtle)] w-full my-2" />

          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">
              O escribime directo
            </span>
            <a href="https://wa.me/5493543537085" className="flex items-center gap-2.5 text-base text-ink-900">
              <IconWhatsapp className="w-[17px] h-[17px] text-purple-600" />
              WhatsApp · +54 9 3543 537085
            </a>
            <a
              href="mailto:cortezsantiagoseabastian@gmail.com"
              className="flex items-center gap-2.5 text-base text-ink-900"
            >
              <IconMail className="w-[17px] h-[17px] text-purple-600" />
              cortezsantiagoseabastian@gmail.com
            </a>
            <a href="https://instagram.com/aureonestudio" className="flex items-center gap-2.5 text-base text-ink-900">
              <IconArrowRight className="w-[17px] h-[17px] text-purple-600 rotate-[-40deg]" />
              Instagram · @aureonestudio
            </a>
            <a
              href="https://www.linkedin.com/company/aureonestudio"
              className="flex items-center gap-2.5 text-base text-ink-900"
            >
              <LinkedInGlyph />
              LinkedIn · Aureon Estudio
            </a>
            <a href="https://x.com/aureonestudio" className="flex items-center gap-2.5 text-base text-ink-900">
              <IconArrowRight className="w-[17px] h-[17px] text-purple-600 rotate-[-40deg]" />
              X · aureonestudio
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
