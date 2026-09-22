import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Rule } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Notas sobre el costo de operar a mano, cómo diagnosticamos y qué decisiones vamos tomando en el estudio.",
};

export default function BlogPage() {
  return (
    <div>
      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-14 sm:pt-24 pb-14">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <Eyebrow>Recursos</Eyebrow>
          <h1 className="font-sans font-bold text-[clamp(31px,4.2vw,60px)] leading-[1.06] tracking-tight max-w-[20ch]">
            Dónde se te va el tiempo, <span className="text-purple-600">escrito.</span>
          </h1>
          <Rule className="w-[88px] h-[3px]" />
          <p className="text-lg sm:text-[18px] leading-relaxed text-ink-700 max-w-[56ch]">
            Notas sobre el costo de operar a mano, cómo diagnosticamos y qué decisiones vamos
            tomando en el estudio. Sin casos inventados.
          </p>
        </div>
      </section>

      <section className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pb-16 sm:pb-28">
        <div className="max-w-6xl mx-auto border-t border-[var(--border-subtle)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 sm:grid-cols-[200px_1fr_24px] gap-3 sm:gap-10 items-start py-8 sm:py-9 border-b border-[var(--border-subtle)] hover:bg-purple-100 transition-colors -mx-2 px-2 rounded-lg"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-600">
                {post.tag}
              </span>
              <span className="flex flex-col gap-2.5">
                <span className="font-sans font-bold text-2xl sm:text-[30px] leading-[1.14] tracking-tight max-w-[34ch]">
                  {post.title}
                </span>
                <span className="text-[15px] sm:text-base leading-relaxed text-ink-700 max-w-[62ch]">
                  {post.excerpt}
                </span>
              </span>
              <IconArrowRight className="w-5 h-5 text-purple-600 mt-1 hidden sm:block shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
