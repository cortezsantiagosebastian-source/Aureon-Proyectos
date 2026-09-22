import { CTAButton, Eyebrow, IconCard, Rule } from "@/components/ui";
import { IconChat, IconCompass } from "@/components/icons";
import NicheAccordion from "@/components/NicheAccordion";
import SistemasAMedida from "@/components/SistemasAMedida";

const METODO = [
  { n: "01", title: "Diagnóstico", label: "Treinta minutos. Sin propuesta." },
  { n: "02", title: "Cálculo del retorno", label: "Cuánto cuesta seguir igual." },
  { n: "03", title: "Diseño del sistema", label: "Flujo nuevo, responsables claros." },
  { n: "04", title: "Implementación", label: "Andando, con el equipo." },
  { n: "05", title: "Medición", label: "Contra el punto de partida." },
];

const STATS = [
  {
    value: "18 h",
    text: "por semana liberadas en un estudio contable de 6 personas, estimadas sobre el seguimiento manual de vencimientos.",
  },
  {
    value: "< 5 min",
    text: "de tiempo de primera respuesta en una inmobiliaria, contra el promedio actual de horas o días.",
  },
  {
    value: "3 meses",
    text: "de repago estimado para una distribuidora que hoy toma pedidos a mano, según el volumen declarado.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="section-card relative bg-night-800 overflow-hidden px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="relative max-w-3xl mx-auto sm:mx-0 flex flex-col items-start gap-6">
          <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-purple-300">
            Consultora de optimización empresarial · Córdoba, Argentina
          </span>
          <h1 className="font-sans font-bold text-[clamp(33px,5.5vw,72px)] leading-[1.06] tracking-tight text-beige-100">
            Tu negocio no necesita más horas.{" "}
            <span className="text-purple-300">Necesita un sistema.</span>
          </h1>
          <p className="text-lg sm:text-[19px] leading-relaxed max-w-[46ch]" style={{ color: "var(--text-night-muted)" }}>
            Sistemas que hacen crecer tu negocio. Diagnosticamos dónde se pierde tiempo y dinero,
            y lo devolvemos funcionando. Primero entendemos la operación; después proponemos.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-2">
            <CTAButton href="/contacto">Agendar diagnóstico gratuito</CTAButton>
            <CTAButton href="/servicios/automatizacion" variant="outline">
              Ver servicios
            </CTAButton>
          </div>
          <p className="text-[13px] max-w-[42ch]" style={{ color: "var(--text-night-muted)" }}>
            30 minutos, sin costo y sin compromiso. Es la única puerta de entrada: nunca ponemos
            precio antes de diagnosticar.
          </p>
        </div>
      </section>

      {/* 01 / Servicios */}
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col items-start gap-3">
            <Eyebrow>01 / Servicios</Eyebrow>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <IconCard icon={<IconChat />} title="Automatización de procesos operativos" href="/servicios/automatizacion">
              Recuperás las horas que hoy se van en atender y seguir consultas a mano, con menos
              errores en el camino.
            </IconCard>
            <IconCard icon={<IconCompass />} title="Operador Fraccionado" href="/servicios/operador-fraccionado">
              Dejás de ser el cuello de botella de cada decisión, sin perder el control del
              negocio. Acompañamiento semanal, para pocos negocios a la vez.
            </IconCard>
          </div>
        </div>
      </section>

      {/* 02 / Cómo trabajamos */}
      <section className="section-card relative bg-night-800 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>02 / Cómo trabajamos</Eyebrow>
            <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight text-beige-100 max-w-[22ch]">
              El Método de Diagnóstico Aureon
            </h2>
            <p className="text-base" style={{ color: "var(--text-night-muted)" }}>
              Cinco pasos. El primero es gratis.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4">
            {METODO.map((s) => (
              <div key={s.n} className="flex flex-col gap-2">
                <span className="text-xl font-bold text-purple-300">{s.n}</span>
                <p className="text-[15px] font-bold leading-snug text-beige-100">{s.title}</p>
                <p className="text-[13px] leading-snug" style={{ color: "var(--text-night-muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / Dónde aparece */}
      <section className="section-card bg-beige-200 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col items-start gap-4 max-w-[62ch]">
            <Eyebrow>03 / Dónde aparece</Eyebrow>
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

      {/* Casos proyectados */}
      <section className="section-card bg-night-800 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col items-start gap-4 max-w-[62ch]">
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-[var(--border-brand-strong)] text-[11px] font-bold uppercase tracking-[0.14em] text-purple-300">
              Proyección
            </span>
            <h2 className="font-sans font-bold text-[clamp(28px,3vw,44px)] leading-[1.12] tracking-tight text-beige-100">
              Todavía no tenemos casos cerrados. <span className="text-purple-300">Tenemos cuentas.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-night-muted)" }}>
              Los números de abajo son proyecciones de retorno estimado sobre escenarios típicos
              de cada rubro, no resultados medidos con clientes. Cuando tengamos casos propios
              publicables, van a estar acá con datos reales.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {STATS.map((s) => (
              <div key={s.value} className="rounded-2xl border p-7 flex flex-col gap-3" style={{ borderColor: "var(--border-night)" }}>
                <span className="inline-flex w-fit px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] text-purple-300 border" style={{ borderColor: "var(--border-night)" }}>
                  Proyección
                </span>
                <span className="font-sans font-bold text-4xl text-beige-100">{s.value}</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-night-muted)" }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-purple-600 px-6 py-14 sm:px-16 sm:py-20 flex flex-col items-start gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-purple-200">
            Sin costo, sin compromiso
          </span>
          <h2 className="font-sans font-bold text-[clamp(28px,3.3vw,44px)] leading-[1.14] tracking-tight text-white max-w-[24ch]">
            Empecemos por entender dónde se te va el tiempo.
          </h2>
          <p className="text-lg leading-relaxed text-purple-100 max-w-[44ch]">
            30 minutos de diagnóstico. Salís con el mapa de tu operación, aunque después no
            trabajemos juntos.
          </p>
          <CTAButton href="/contacto" variant="light">
            Agendar diagnóstico gratuito
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
