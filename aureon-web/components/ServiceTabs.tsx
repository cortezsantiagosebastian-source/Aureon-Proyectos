"use client";

import { useState } from "react";
import { IconClock, IconGear, IconChat } from "./icons";

const TABS = [
  {
    key: "tiempo",
    label: "Ahorro de tiempo",
    icon: <IconClock className="w-full h-full" />,
    text: "Las tareas que hoy se repiten todas las semanas dejan de ocupar a una persona.",
  },
  {
    key: "errores",
    label: "Reducción de errores",
    icon: <IconGear className="w-full h-full" />,
    text: "Los datos dejan de copiarse a mano de un lugar a otro, así que dejan de desincronizarse.",
  },
  {
    key: "crecimiento",
    label: "Crecimiento escalable",
    icon: <IconChat className="w-full h-full" />,
    text: "Podés atender más volumen sin sumar gente en la misma proporción.",
  },
] as const;

export default function ServiceTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("tiempo");
  const active = TABS.find((t) => t.key === tab)!;

  return (
    <div className="flex flex-col gap-6 mt-7">
      <div className="flex flex-wrap gap-3">
        {TABS.map((t) => {
          const isActive = t.key === tab;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border font-sans text-[13px] font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: isActive ? "var(--purple-600)" : "transparent",
                borderColor: isActive ? "var(--purple-600)" : "var(--border-brand-strong)",
                color: isActive ? "#fff" : "var(--ink-900)",
              }}
            >
              <span className="w-[17px] h-[17px] shrink-0">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        key={active.key}
        className="grid sm:grid-cols-2 gap-9 items-center w-full p-8 sm:p-10 rounded-2xl bg-purple-200 border border-[var(--border-brand)] animate-[panel-in_.42s_cubic-bezier(.16,1,.3,1)_both]"
      >
        <div aria-hidden="true" className="flex items-end gap-3 h-[100px]">
          {tab === "tiempo" && (
            <div className="grid gap-2 w-full">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">Hoy</span>
              <span className="block w-full h-2 rounded-full bg-purple-500" />
              <span className="block w-[88%] h-2 rounded-full bg-purple-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700 mt-2">
                Con sistema
              </span>
              <span className="block w-[26%] h-2 rounded-full bg-purple-500" />
            </div>
          )}
          {tab === "errores" && (
            <div className="flex flex-wrap gap-2 w-full content-start" style={{ maxWidth: 220 }}>
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="block rounded"
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: i % 7 === 3 ? "var(--purple-600)" : "rgba(91,43,191,.18)",
                  }}
                />
              ))}
            </div>
          )}
          {tab === "crecimiento" && (
            <div className="flex items-end gap-3 w-full h-full">
              {[38, 58, 82, 106, 132].map((h, i) => (
                <span
                  key={i}
                  className="block flex-1 rounded-t-md"
                  style={{
                    height: h,
                    backgroundColor: i < 2 ? "rgba(91,43,191,.22)" : "var(--purple-600)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-lg leading-relaxed text-ink-700">{active.text}</p>
      </div>
    </div>
  );
}
