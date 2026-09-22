import type { Metadata } from "next";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/playfair-display/700-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aureonestudio.com.ar"),
  title: {
    default: "Aureon Estudio — Sistemas que hacen crecer tu negocio",
    template: "%s — Aureon Estudio",
  },
  description:
    "Consultora de optimización empresarial en Córdoba, Argentina. Diagnosticamos dónde tu negocio pierde tiempo y dinero, y lo devolvemos funcionando.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-beige-300 text-ink-900">
        <Header />
        <main className="flex-1 pt-[88px] sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
