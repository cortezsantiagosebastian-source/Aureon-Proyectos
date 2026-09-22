import type { Metadata } from "next";
import { Eyebrow, Rule } from "@/components/ui";
import ServiceTabs from "@/components/ServiceTabs";
import NicheAccordion from "@/components/NicheAccordion";
import SistemasAMedida from "@/components/SistemasAMedida";

export const metadata: Metadata = {
  title: "Automatización de procesos",
  description:
    "Consultas, pedidos y seguimientos que llegan por WhatsApp y se atienden a mano. Diagnosticamos dónde tu negocio pierde tiempo y automatizamos lo repetitivo.",
};

export default function AutomatizacionPage() {
  return (
    <div>
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-7">
          <Eyebrow>Línea 01 · Servicios</Eyebrow>
          <h1 className="font-sans font-bold text-[clamp(33px,4.4vw,64px)] leading-[1.06] tracking-tight max-w-[20ch]">
            Cada consulta depende de que <span className="text-purple-600">alguien esté disponible.</span>
          </h1>
          <Rule className="w-[88px] h-[3px]" />
          <p className="text-lg sm:text-[19px] leading-relaxed text-ink-700 max-w-[58ch]">
            Consultas, pedidos y seguimientos que llegan por WhatsApp y se atienden a mano, uno
            por uno, sin sistema detrás. Cuando la operación depende de que alguien se acuerde,
            el negocio no escala: se estira hasta que algo se rompe. Trabajamos sobre tres cosas
            concretas: el tiempo que se pierde, la demora en responder y los errores que cuesta
            corregir.
          </p>
          <ServiceTabs />
        </div>
      </section>

      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col items-start gap-4 max-w-[62ch]">
            <Eyebrow>Dónde aparece</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,3.1vw,44px)] leading-[1.1] tracking-tight max-w-[26ch]">
              El mismo dolor, traducido a <span className="text-purple-600">cada rubro.</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-700">
              No es un menú para elegir. Son cinco lugares donde ya vimos aparecer el mismo
              patrón, escrito con las palabras de cada uno.
            </p>
            <Rule />
          </div>
          <NicheAccordion />
        </div>
      </section>

      <SistemasAMedida />
    </div>
  );
}
