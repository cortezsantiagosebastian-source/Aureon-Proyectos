"use client";

import { useState } from "react";
import {
  IconBuilding,
  IconLedger,
  IconTruck,
  IconBriefcase,
  IconScale,
  IconArrowRight,
} from "./icons";

type Niche = {
  id: string;
  icon: React.ReactNode;
  title: string;
  teaser: string;
  problema: string;
  cambia: string;
};

const NICHES: Niche[] = [
  {
    id: "inmobiliarias",
    icon: <IconBuilding />,
    title: "Inmobiliarias",
    teaser: "La consulta se enfría antes de que alguien la conteste.",
    problema:
      "Llega fuera de horario, la contesta el primero que la ve y cuando alguien la carga, el interesado ya habló con otra inmobiliaria.",
    cambia:
      "Respuesta inmediata con la información que pidió, registrada con su origen y derivada al asesor correcto.",
  },
  {
    id: "contables",
    icon: <IconLedger />,
    title: "Estudios Contables",
    teaser: "Los vencimientos dependen de que alguien se acuerde.",
    problema:
      "El seguimiento vive en una planilla y en la cabeza de dos personas, y cada cierre de mes se rearma desde cero.",
    cambia:
      "Cada obligación con fecha, responsable y estado a la vista, y avisos que salen sin que nadie los empuje.",
  },
  {
    id: "distribuidoras",
    icon: <IconTruck />,
    title: "Distribuidoras",
    teaser: "Pedidos a mano y stock que no coincide.",
    problema:
      "Entran por tres vías distintas, se pasan a mano al sistema y el stock informado nunca coincide con el real.",
    cambia:
      "El pedido se toma una sola vez, con precio y disponibilidad correctos. Menos devoluciones y menos reclamos.",
  },
  {
    id: "pymes",
    icon: <IconBriefcase />,
    title: "PyMEs",
    teaser: "Todo pasa por el dueño y nada queda documentado.",
    problema: "Cada tarea tiene una forma distinta según quién la haga, y eso no está escrito en ningún lugar.",
    cambia: "Los procesos que más se repiten quedan definidos y andando. Incorporar a alguien deja de llevar meses.",
  },
  {
    id: "juridicos",
    icon: <IconScale />,
    title: "Estudios Jurídicos",
    teaser: "Plazos y expedientes repartidos en cuatro lugares.",
    problema: "Plazos, escritos y estado de cada causa están entre agendas personales, carpetas y memoria.",
    cambia: "Un solo lugar muestra en qué está cada causa y qué vence esta semana.",
  },
];

export default function NicheAccordion() {
  const [open, setOpen] = useState<string | null>("inmobiliarias");

  return (
    <div className="flex flex-col gap-3">
      {NICHES.map((n) => {
        const isOpen = open === n.id;
        return (
          <div
            key={n.id}
            id={n.id}
            className="rounded-2xl overflow-hidden bg-beige-50 border transition-colors"
            style={{ borderColor: isOpen ? "var(--purple-500)" : "var(--border-brand)" }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : n.id)}
              className="w-full grid grid-cols-[40px_1fr_auto] sm:items-center gap-4 sm:gap-5 py-5 px-5 sm:px-6 text-left font-sans"
            >
              <span className="w-10 h-10 rounded-[10px] bg-purple-200 flex items-center justify-center text-purple-600 p-2.5 shrink-0">
                {n.icon}
              </span>
              <span className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 min-w-0">
                <span className="text-lg sm:text-[21px] font-bold tracking-tight text-ink-900">
                  {n.title}
                </span>
                <span className="text-[13px] sm:text-sm text-ink-500">{n.teaser}</span>
              </span>
              <IconArrowRight
                className={`w-4 h-4 text-purple-600 transition-transform shrink-0 self-center ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="grid gap-6 sm:grid-cols-2 px-5 sm:px-6 sm:pl-20 pb-7 pt-1 animate-[panel-in_.38s_cubic-bezier(.16,1,.3,1)_both]">
                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-500">
                    El problema
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700">{n.problema}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-purple-600">
                    Qué cambia
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700">{n.cambia}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
