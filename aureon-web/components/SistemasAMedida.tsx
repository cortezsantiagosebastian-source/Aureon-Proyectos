import Link from "next/link";
import { Eyebrow, Rule } from "./ui";
import { IconArrowRight } from "./icons";

export default function SistemasAMedida() {
  return (
    <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>Sistemas a medida</Eyebrow>
          <h2 className="font-sans font-bold text-[clamp(28px,2.8vw,40px)] leading-[1.14] tracking-tight max-w-[20ch]">
            Si tu operación no entra en ningún molde, <span className="text-purple-600">se diseña.</span>
          </h2>
          <Rule />
          <p className="text-[17px] leading-relaxed text-ink-700 max-w-[44ch]">
            Un audio de dos minutos mandado desde la camioneta termina como una fila cargada, con
            fecha, responsable y estado. Misma metodología, sin rubro predefinido.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-purple-700"
          >
            Contame tu caso
            <IconArrowRight className="w-[15px] h-[15px]" />
          </Link>
        </div>
        <div
          aria-hidden="true"
          className="grid gap-6 items-center p-6 sm:p-9 bg-beige-50 border border-[var(--border-brand)] rounded-2xl"
        >
          <div className="flex items-end gap-1 h-14 w-full">
            {[10, 22, 34, 18, 44, 28, 40, 20, 32, 24, 36, 16].map((h, i) => (
              <span
                key={i}
                className="block flex-1 rounded-full bg-purple-500"
                style={{ height: h, minWidth: 3, maxWidth: 5 }}
              />
            ))}
          </div>
          <div className="overflow-x-auto rounded-[10px] border border-[var(--border-brand)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-purple-200 text-purple-700 font-bold">
                  <th className="p-2.5 text-left">PEDIDO</th>
                  <th className="p-2.5 text-left">VENCE</th>
                  <th className="p-2.5 text-left">ESTADO</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                <tr className="border-t border-[var(--border-brand)]">
                  <td className="p-2.5">Reposición ruta 9</td>
                  <td className="p-2.5">12 sep</td>
                  <td className="p-2.5">Abierto</td>
                </tr>
                <tr className="border-t border-[var(--border-brand)]">
                  <td className="p-2.5">Alta cliente nuevo</td>
                  <td className="p-2.5">14 sep</td>
                  <td className="p-2.5">En curso</td>
                </tr>
                <tr className="border-t border-[var(--border-brand)]">
                  <td className="p-2.5">Recordar remito</td>
                  <td className="p-2.5">15 sep</td>
                  <td className="p-2.5">Listo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
