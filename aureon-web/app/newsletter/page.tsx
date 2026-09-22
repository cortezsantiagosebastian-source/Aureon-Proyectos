import type { Metadata } from "next";
import { Eyebrow, Rule } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Lo mismo que publicamos en Instagram, ordenado y con el razonamiento completo. Dónde se pierde tiempo en un negocio y qué hacer al respecto.",
};

const POSTS = [
  {
    tag: "Identidad · 5 placas",
    title: "¿Qué es Aureon? Ayudamos a que las empresas funcionen mejor antes de hablar de herramientas",
  },
  {
    tag: "Pregunta de diagnóstico · 5 placas",
    title:
      "Comprar o construir: ¿cuándo adaptar tu empresa al software y cuándo adaptar el software a tu empresa?",
  },
  {
    tag: "Autoridad técnica · 6 placas",
    title: "La IA necesita tanta energía que está reviviendo la industria nuclear",
  },
  {
    tag: "Autoridad técnica · 5 placas",
    title: "La IA está aprendiendo a detectar el momento antes de que todo cambie",
  },
  {
    tag: "Autoridad técnica · 4 placas",
    title: "ChatGPT puede hacer mucho más que responder preguntas",
  },
];

const PROXIMOS = [
  { n: "01", t: "La cuenta del seguimiento manual", d: "Cuánto cuesta por mes que tres personas se acuerden de los vencimientos, con la cuenta hecha paso a paso." },
  { n: "02", t: "Cinco minutos o dos días", d: "Qué cambia en la tasa de cierre cuando la primera respuesta deja de depender de quién esté libre." },
  { n: "03", t: "Delegar la decisión, no la tarea", d: "Por qué el equipo vuelve a preguntarte todo aunque ejecute bien, y cómo se escribe un criterio." },
  { n: "04", t: "Automatizar el proceso equivocado", d: "El error más común: hacer más rápido algo que no debería existir." },
];

export default function NewsletterPage() {
  return (
    <div>
      <section className="section-card relative bg-purple-200 border border-[var(--border-brand)] px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-16">
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>Newsletter</Eyebrow>
            <h1 className="font-sans font-bold text-[clamp(30px,4vw,58px)] leading-[1.06] tracking-tight max-w-[18ch]">
              Una idea por semana, <span className="text-purple-600">sin relleno.</span>
            </h1>
            <Rule className="w-[88px] h-[3px]" />
            <p className="text-lg leading-relaxed text-ink-700 max-w-[46ch]">
              Lo mismo que publicamos en Instagram, ordenado y con el razonamiento completo.
              Dónde se pierde tiempo en un negocio y qué hacer al respecto.
            </p>
          </div>
          <div className="bg-beige-50 border border-[var(--border-brand)] rounded-2xl p-9 flex flex-col gap-4.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700">
              Suscribite
            </span>
            <p className="text-[15px] leading-relaxed text-ink-700">
              Sin costo. Podés darte de baja en cualquier momento.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-11">
          <div className="flex flex-wrap items-baseline justify-between gap-8">
            <div className="flex flex-col items-start gap-4">
              <Eyebrow>En Instagram</Eyebrow>
              <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[22ch]">
                Publicaciones recientes.
              </h2>
              <Rule />
            </div>
            <a
              href="https://instagram.com/aureonestudio"
              className="flex items-center gap-2.5 text-sm font-semibold text-purple-700"
            >
              <IconArrowRight className="w-[17px] h-[17px] rotate-[-40deg]" />
              @aureonestudio
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="bg-beige-50 border border-[var(--border-brand)] rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-purple-200" aria-hidden="true" />
                <div className="flex flex-col gap-2.5 p-6">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-purple-600">
                    {p.tag}
                  </span>
                  <span className="text-[17px] font-bold leading-snug tracking-tight">{p.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>Próximos envíos</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[18ch]">
              Lo que viene.
            </h2>
            <Rule />
            <p className="text-sm text-ink-500 max-w-[34ch]">
              Cuatro temas ya escritos, en cola de publicación.
            </p>
          </div>
          <div className="flex flex-col border-t border-[var(--border-subtle)]">
            {PROXIMOS.map((p) => (
              <div key={p.n} className="grid grid-cols-[44px_1fr] gap-5 py-6 border-b border-[var(--border-subtle)]">
                <span className="text-xl font-bold text-purple-600">{p.n}</span>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-bold tracking-tight">{p.t}</span>
                  <span className="text-[15px] leading-relaxed text-ink-700">{p.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
