"use client";

import { useState, FormEvent } from "react";
import { IconArrowRight } from "./icons";

const RUBROS = [
  { value: "inmobiliaria", label: "Inmobiliaria" },
  { value: "contable", label: "Estudio contable" },
  { value: "distribuidora", label: "Distribuidora" },
  { value: "emprendimiento", label: "Emprendimiento" },
  { value: "saas", label: "SaaS" },
  { value: "pyme", label: "PyME (otro rubro)" },
  { value: "juridico", label: "Estudio jurídico" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "font-sans text-base px-4 py-3.5 border border-[var(--border-subtle)] rounded-[10px] bg-beige-100 text-ink-900 outline-none transition-shadow focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(91,43,191,0.35)]";
const labelClass = "text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [values, setValues] = useState({
    nombre: "",
    negocio: "",
    email: "",
    nicho: "",
    problema: "",
  });

  const ready =
    values.nombre.trim() &&
    values.negocio.trim() &&
    EMAIL_RE.test(values.email.trim()) &&
    values.nicho &&
    values.problema.trim();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ready) {
      setShowError(true);
      return;
    }
    const subject = encodeURIComponent(`Diagnóstico gratuito — ${values.negocio}`);
    const body = encodeURIComponent(
      `Nombre: ${values.nombre}\nNegocio: ${values.negocio}\nCorreo: ${values.email}\nRubro: ${values.nicho}\n\n${values.problema}`
    );
    window.location.href = `mailto:cortezsantiagoseabastian@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setShowError(false);
  }

  function reset() {
    setSent(false);
    setValues({ nombre: "", negocio: "", email: "", nicho: "", problema: "" });
  }

  if (sent) {
    return (
      <div className="bg-purple-200 border border-[var(--border-brand)] rounded-2xl p-8 sm:p-12 flex flex-col items-start gap-5">
        <span className="w-[52px] h-[52px] rounded-full bg-purple-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-6 h-6">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="font-sans font-bold text-3xl leading-tight tracking-tight max-w-[22ch]">
          Listo. Te escribo con los horarios.
        </h2>
        <p className="text-base leading-relaxed text-ink-700 max-w-[44ch]">
          Recibí tu pedido de diagnóstico. Dentro de las 24 horas hábiles te mando dos o tres
          horarios para la videollamada de 30 minutos.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-sm font-semibold text-purple-700"
        >
          Cargar otro pedido
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-beige-50 border border-[var(--border-brand)] rounded-2xl p-6 sm:p-10 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="c-nombre" className={labelClass}>
          Nombre
        </label>
        <input
          id="c-nombre"
          value={values.nombre}
          onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
          placeholder="Cómo te llamás"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-negocio" className={labelClass}>
          Negocio
        </label>
        <input
          id="c-negocio"
          value={values.negocio}
          onChange={(e) => setValues((v) => ({ ...v, negocio: e.target.value }))}
          placeholder="Nombre de tu empresa"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-email" className={labelClass}>
          Correo electrónico
        </label>
        <input
          id="c-email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          placeholder="tunombre@tuempresa.com"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-nicho" className={labelClass}>
          Rubro
        </label>
        <select
          id="c-nicho"
          value={values.nicho}
          onChange={(e) => setValues((v) => ({ ...v, nicho: e.target.value }))}
          className={`${fieldClass} appearance-none`}
        >
          <option value="">Elegí una opción</option>
          {RUBROS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-problema" className={labelClass}>
          Qué problema te trae
        </label>
        <textarea
          id="c-problema"
          rows={5}
          value={values.problema}
          onChange={(e) => setValues((v) => ({ ...v, problema: e.target.value }))}
          placeholder="Contame qué parte de la operación te está costando tiempo o plata"
          className={`${fieldClass} resize-y leading-relaxed`}
        />
      </div>

      <button
        type="submit"
        style={{ opacity: ready ? 1 : 0.38, cursor: ready ? "pointer" : "not-allowed" }}
        className="inline-flex items-center justify-center gap-3 bg-purple-600 text-white border-0 px-7 py-4 rounded-full font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        Agendar diagnóstico gratuito
        <IconArrowRight className="w-4 h-4" />
      </button>

      {showError && !ready && (
        <p className="text-[13px] leading-relaxed font-semibold text-purple-700">
          Faltan datos: completá nombre, negocio, un correo válido, rubro y el problema que te
          trae.
        </p>
      )}

      <p className="text-[13px] leading-relaxed text-ink-500">
        Respondo dentro de las 24 horas hábiles con dos o tres horarios posibles.
      </p>
    </form>
  );
}
