import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButton, Rule } from "@/components/ui";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function renderBlock(block: string, i: number) {
  if (block.startsWith("## ")) {
    return (
      <h2
        key={i}
        className="font-sans font-bold text-2xl sm:text-[32px] leading-[1.18] tracking-tight mt-6"
      >
        {block.slice(3)}
      </h2>
    );
  }
  const boldMatch = block.match(/^\*\*(?:(\d+)\s*·\s*)?(.+?)\*\*\n([\s\S]*)$/);
  if (boldMatch) {
    const num = boldMatch[1] ?? String(i).padStart(2, "0");
    return (
      <div key={i} className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-5">
        <span className="font-sans font-bold text-xl sm:text-2xl text-purple-600">{num}</span>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg sm:text-[19px]">{boldMatch[2]}</h3>
          <p className="text-[15px] sm:text-base leading-relaxed text-ink-700">{boldMatch[3]}</p>
        </div>
      </div>
    );
  }
  return (
    <p key={i} className="text-lg leading-[1.72] text-ink-700">
      {block}
    </p>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="section-card bg-beige-50 px-5 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-28">
      <div className="max-w-[760px] mx-auto flex flex-col items-start gap-7">
        <Link href="/blog" className="text-xs font-bold uppercase tracking-[0.14em] text-purple-600">
          ← Recursos
        </Link>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500">
          {post.tag}
          {post.readTime ? ` · ${post.readTime}` : ""}
        </span>
        <h1 className="font-sans font-bold text-[clamp(28px,3.3vw,48px)] leading-[1.1] tracking-tight">
          {post.title}
        </h1>
        <Rule className="w-[88px] h-[3px]" />
        {post.dek && (
          <p className="font-sans font-semibold text-xl sm:text-2xl leading-snug">{post.dek}</p>
        )}

        <div className="w-full flex flex-col gap-6">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        <div className="w-full mt-4 rounded-2xl bg-purple-200 border border-[var(--border-brand)] p-8 sm:p-10 flex flex-col items-start gap-5">
          <p className="font-sans font-bold text-2xl leading-snug tracking-tight max-w-[26ch]">
            El diagnóstico es gratis porque nos conviene a los dos.
          </p>
          <CTAButton href="/contacto">Agendar diagnóstico gratuito</CTAButton>
        </div>
      </div>
    </article>
  );
}
