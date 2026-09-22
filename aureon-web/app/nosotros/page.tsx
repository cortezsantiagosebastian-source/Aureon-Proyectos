import type { Metadata } from "next";
import { Eyebrow, Rule, CTAButton } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Soy Santiago Cortez. Aureon existe porque en Latinoamérica un negocio que recién arranca no tiene a quién preguntarle cómo ordenar su operación.",
};

function LinkedInGlyph() {
  return (
    <span
      aria-hidden="true"
      className="w-4 h-4 shrink-0 rounded-[3px] bg-purple-600 text-beige-100 text-[10px] font-extrabold flex items-center justify-center"
    >
      in
    </span>
  );
}

export default function NosotrosPage() {
  return (
    <div>
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col items-start gap-7">
            <Eyebrow>Nosotros</Eyebrow>
            <h1 className="font-sans font-bold text-[clamp(31px,4.2vw,60px)] leading-[1.06] tracking-tight max-w-[20ch]">
              Detrás de Aureon hay <span className="text-purple-600">una persona.</span>
            </h1>
            <Rule className="w-[88px] h-[3px]" />
            <p className="text-lg sm:text-[19px] leading-relaxed text-ink-700 max-w-[58ch]">
              Soy Santiago Cortez. Aureon existe porque en Latinoamérica un negocio que recién
              arranca no tiene a quién preguntarle cómo ordenar su operación.
            </p>

            <figure className="flex flex-col items-start gap-4 max-w-[46ch] pl-5 border-l-[3px] border-purple-600 mt-2">
              <blockquote className="font-display italic text-2xl leading-snug text-ink-900">
                El que aprende y aprende y no practica lo que sabe, es como el que ara y ara y no
                siembra.
              </blockquote>
              <figcaption className="text-xs font-bold tracking-[0.16em] uppercase text-ink-500">
                Platón
              </figcaption>
            </figure>

            <div className="flex flex-col items-start gap-4 mt-2">
              <div className="flex gap-6 flex-wrap">
                <a
                  href="https://instagram.com/ssancortez"
                  className="flex items-center gap-2.5 text-sm font-semibold text-purple-700"
                >
                  <IconArrowRight className="w-4 h-4 text-purple-600 rotate-[-40deg]" />
                  @ssancortez
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-sebastian-cortez-061125319/"
                  className="flex items-center gap-2.5 text-sm font-semibold text-purple-700"
                >
                  <LinkedInGlyph />
                  Santiago Cortez
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-brand)] bg-purple-200 aspect-square flex items-end">
              <span className="m-4 px-3.5 py-1.5 rounded-full bg-ink-900/75 backdrop-blur text-[11px] font-bold uppercase tracking-[0.14em] text-beige-100">
                Santiago Cortez · Fundador
              </span>
            </div>
            <div className="bg-purple-200 border border-[var(--border-brand)] rounded-2xl p-9 flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700">
                Aureon en una línea
              </span>
              <p className="font-sans font-bold text-2xl leading-tight tracking-tight">
                Una consultora de optimización empresarial con método propio.
              </p>
              <div className="h-px bg-[var(--border-brand)]" />
              <div className="flex flex-col gap-3.5 text-[15px] leading-relaxed text-ink-900">
                <span>Base en Córdoba, Argentina.</span>
                <span>Trabajo con Argentina y LATAM hispanohablante.</span>
                <span>Dos líneas: automatización de procesos y acompañamiento operativo.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>Cómo trabajo</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[20ch]">
              No reinvento la rueda. <span className="text-purple-600">La adapto.</span>
            </h2>
            <p className="text-lg leading-relaxed text-ink-700 max-w-[46ch]">
              Busco el modelo que ya funciona en otro lado y lo adapto a tu negocio, con sus
              recursos y su gente. Lo que no se sostiene sin mí después de la entrega, no lo
              implemento.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 px-6 sm:px-8 py-10 bg-purple-200 border border-[var(--border-brand)] rounded-2xl flex-wrap">
            {["Modelo que ya funciona", "Criterio propio", "Tu operación"].map((label, i) => (
              <div key={label} className="contents">
                {i > 0 && <IconArrowRight className="w-6 h-3 text-purple-500 shrink-0" />}
                <div className="flex flex-col gap-3 items-center text-center">
                  <span className="w-14 h-14 rounded-full border border-[var(--border-brand)] bg-beige-50 flex items-center justify-center p-3.5 text-purple-600">
                    <IconArrowRight className="w-full h-full" />
                  </span>
                  <span className="text-[15px] font-bold tracking-tight max-w-[16ch]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-start gap-4 max-w-[44ch]">
            <Eyebrow>Lo que podés esperar</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight">
              Especialización antes que tamaño.
            </h2>
            <Rule />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { t: "Hablás siempre con quien hace el trabajo", d: "El que diagnostica es el que implementa." },
              { t: "Diagnóstico antes que propuesta", d: "Si no encuentro nada que valga la pena, te lo digo." },
              { t: "Resultados, no herramientas", d: "Hablamos de horas recuperadas, no de tecnología." },
            ].map((c) => (
              <div key={c.t} className="bg-beige-50 border border-[var(--border-brand)] rounded-2xl p-9 flex flex-col gap-3">
                <h3 className="font-bold text-lg">{c.t}</h3>
                <p className="text-[15px] leading-relaxed text-ink-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-11">
          <div className="flex flex-col items-start gap-4 max-w-[34ch]">
            <Eyebrow>Portafolio</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight">
              Un proyecto real, <span className="text-purple-600">en curso.</span>
            </h2>
            <Rule />
          </div>

          <div className="grid sm:grid-cols-2 gap-10 p-7 sm:p-11 bg-purple-200 border border-[var(--border-brand)] rounded-[20px]">
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500 text-[10.5px] font-bold uppercase tracking-[0.14em] text-purple-700">
                En curso · evento 18/10/2026
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight">
                RHIZOMA · Festival Patria
              </h3>
              <p className="text-base leading-relaxed text-ink-700 max-w-[44ch]">
                Una banda de folklore argentino organizando la 4ta edición de su propio festival,
                &quot;Savia del Calicanto&quot;, en el Teatro Ópera de Buenos Aires.
              </p>
              <a
                href="https://rhizomacba.com.ar"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-purple-700"
              >
                rhizomacba.com.ar
                <IconArrowRight className="w-[15px] h-[15px]" />
              </a>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Sitio a medida", "Venta de entradas", "Captación de sponsors", "Dominio propio"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-purple-200 text-xs font-semibold text-purple-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-500">
                  El desafío
                </span>
                <p className="text-[15px] leading-relaxed text-ink-700">
                  Vender entradas de forma prolija sin presupuesto para pasarelas de pago, y
                  captar sponsors con niveles distintos. Con la fecha del show encima y sin
                  equipo técnico propio.
                </p>
              </div>
              <div className="h-px bg-[var(--border-brand)]" />
              <div className="flex flex-col gap-2">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-purple-600">
                  Qué resolvimos
                </span>
                <p className="text-[15px] leading-relaxed text-ink-700">
                  El comprador completa sus datos y el pedido llega armado por email y WhatsApp
                  para coordinar la transferencia: sin fricción para la banda y sin comisiones.
                  Los sponsors entran por niveles, con respaldo automático para que ningún
                  contacto se pierda.
                </p>
              </div>
              <div className="h-px bg-[var(--border-brand)]" />
              <div className="flex flex-col gap-2">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-purple-600">
                  Dónde está hoy
                </span>
                <p className="text-[15px] leading-relaxed text-ink-700">
                  El sitio está en vivo en el dominio propio de la banda, con entradas y sponsors
                  operativos. En el camino también resolvimos un bloqueo de pago del trámite del
                  dominio en NIC Argentina.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[13px] leading-relaxed text-ink-500 max-w-[78ch]">
            Este es un proyecto real y en curso, no un caso proyectado. Los resultados de venta
            de entradas y captación de sponsors se van a documentar acá a medida que se
            concreten, sin proyecciones ni cifras estimadas.
          </p>
        </div>
      </section>

      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[24ch]">
            La forma más rápida de conocernos es una reunión de 30 minutos.
          </h2>
          <CTAButton href="/contacto">Agendar diagnóstico gratuito</CTAButton>
        </div>
      </section>
    </div>
  );
}
