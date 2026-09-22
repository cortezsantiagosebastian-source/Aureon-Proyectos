import type { Metadata } from "next";
import { Eyebrow, Rule, CTAButton } from "@/components/ui";
import { IconGear } from "@/components/icons";

export const metadata: Metadata = {
  title: "Operador Fraccionado",
  description:
    "Alguien adentro de la operación, una reunión por semana. Acompañamiento operativo para negocios donde el dueño sigue siendo el cuello de botella de cada decisión.",
};

const SIGNALS = [
  "Nada avanza cuando te tomás una semana",
  "Delegás la tarea, no la decisión",
  "Trabajás más y el negocio crece igual",
  "Las prioridades cambian según el día",
];

const ENFOQUE = [
  { n: "01", icon: <IconGear />, title: "Ordena la semana", label: "Qué se hace y quién responde." },
  { n: "02", icon: <IconGear />, title: "Escribe los criterios", label: "Tu cabeza, documentada como regla." },
  { n: "03", icon: <IconGear />, title: "Sostiene el seguimiento", label: "Una reunión fija, estado real." },
  { n: "04", icon: <IconGear />, title: "Te devuelve el rol", label: "Decidís menos, decidís lo que importa." },
];

export default function OperadorFraccionadoPage() {
  return (
    <div>
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-7">
          <Eyebrow>Línea 02 · Servicios</Eyebrow>
          <h1 className="font-sans font-bold text-[clamp(33px,4.4vw,64px)] leading-[1.06] tracking-tight max-w-[20ch]">
            Todo se frena <span className="text-purple-600">cuando no estás vos.</span>
          </h1>
          <Rule className="w-[88px] h-[3px]" />
          <p className="font-sans font-semibold text-2xl sm:text-[30px] leading-[1.3] max-w-[34ch]">
            El negocio no crece más porque cada decisión sigue pasando por vos.
          </p>
          <p className="text-lg sm:text-[19px] leading-relaxed text-ink-700 max-w-[52ch]">
            Alguien adentro de la operación, una reunión por semana. Para pocos negocios a la
            vez, porque el acompañamiento es real.
          </p>

          <div className="w-full flex flex-wrap items-center gap-4 mt-1 px-6 sm:px-8 py-6 bg-purple-200 border border-[var(--border-brand)] rounded-2xl">
            <span className="flex flex-col gap-1.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="block w-[74px] h-[7px] rounded-full bg-purple-500" />
              ))}
            </span>
            <span className="px-4 py-2.5 rounded-full bg-ink-900 text-beige-100 text-xs font-bold tracking-[0.14em]">
              VOS
            </span>
            <span className="block w-[74px] h-[7px] rounded-full bg-purple-500" />
          </div>
          <span className="text-[13px] text-ink-500">
            Cuatro frentes entran, uno sale: el cuello de botella sos vos.
          </span>
        </div>
      </section>

      <section className="section-card relative bg-night-800 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>Cómo se ve el problema</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight text-beige-100 max-w-[22ch]">
              Señales de que sos el cuello de botella.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SIGNALS.map((s) => (
              <div
                key={s}
                className="rounded-2xl p-8 border"
                style={{ borderColor: "var(--border-night)" }}
              >
                <span className="font-sans font-bold text-xl sm:text-2xl leading-snug text-beige-100">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-11">
          <div className="flex flex-col items-start gap-4 max-w-[30ch]">
            <Eyebrow>El enfoque</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight">
              Cuatro cosas, <span className="text-purple-600">todas las semanas.</span>
            </h2>
            <Rule />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENFOQUE.map((s) => (
              <div key={s.n} className="bg-purple-200 border border-[var(--border-brand)] rounded-2xl p-7 flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-[10px] bg-beige-50 flex items-center justify-center p-2 text-purple-600">
                    {s.icon}
                  </span>
                  <span className="text-xl font-bold text-purple-500">{s.n}</span>
                </div>
                <span className="text-lg font-bold tracking-tight leading-snug">{s.title}</span>
                <span className="text-sm leading-relaxed text-ink-700">{s.label}</span>
              </div>
            ))}
          </div>
          <span className="text-[13px] text-ink-500">
            En Estados Unidos el modelo se conoce como fractional COO. Acá casi no existe todavía.
          </span>
        </div>
      </section>

      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-[var(--border-brand-strong)] text-[11px] font-bold uppercase tracking-[0.14em] text-purple-600">
            Nota honesta
          </span>
          <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[26ch]">
            Esta línea es nueva y todavía no tenemos casos cerrados.
          </h2>
          <p className="text-lg leading-relaxed text-ink-700 max-w-[56ch]">
            La abrimos en agosto de 2026 y todavía no resolvimos esto para nadie, así que no
            vamos a decir lo contrario. Lo que podemos mostrarte hoy es el enfoque y el criterio.
          </p>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-purple-600 px-6 py-14 sm:px-16 sm:py-20 flex flex-col items-start gap-6">
          <h2 className="font-sans font-bold text-[clamp(28px,3.3vw,48px)] leading-[1.06] tracking-tight text-white max-w-[24ch]">
            ¿Sos el cuello de botella de tu propia empresa? Empecemos por entender por qué.
          </h2>
          <CTAButton href="/contacto" variant="light">
            Agendar diagnóstico gratuito
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
