"use client";

import { useState, FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-2.5">
        <span className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[19px] h-[19px]">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-[17px] font-bold tracking-tight">
          Anotado. Te escribo el próximo envío.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tunombre@tuempresa.com"
        className="font-sans text-base px-4 py-3.5 border border-[var(--border-subtle)] rounded-[10px] bg-beige-100 text-ink-900 outline-none transition-shadow focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(91,43,191,0.35)]"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 bg-purple-600 text-white border-0 px-6.5 py-3.5 rounded-full font-sans text-[13px] font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5"
      >
        Quiero recibirla
      </button>
      {error && (
        <span className="text-[13px] font-semibold text-purple-700">
          Escribí un correo válido para suscribirte.
        </span>
      )}
    </form>
  );
}
