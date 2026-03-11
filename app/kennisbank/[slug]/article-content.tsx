"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLang } from "../../lang-context";
import { ScrollReveal } from "../../scroll-reveal";
import type { BlogPost } from "@/lib/blog";

export function ArticleContent({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/behandelkamer.jpg"
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-offwhite/50 mb-8">
            <Link href="/" className="hover:text-offwhite transition-colors">Home</Link>
            <span>/</span>
            <Link href="/kennisbank" className="hover:text-offwhite transition-colors">
              {t("Kennisbank", "Knowledge Base")}
            </Link>
            <span>/</span>
            <span className="text-offwhite/70">{t(post.title, post.titleEn)}</span>
          </nav>
          <div className="flex items-center gap-3 text-xs text-offwhite/50 mb-6">
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-playfair text-3xl md:text-5xl leading-[1.08] text-offwhite">
            {t(post.title, post.titleEn)}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-charcoal prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-sand/30 prose-h2:pb-3 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-charcoal/70 prose-p:leading-relaxed prose-p:mb-5 prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-li:text-charcoal/70 prose-ul:my-6 prose-li:my-1 prose-strong:text-charcoal prose-blockquote:border-l-teal prose-blockquote:bg-sand/10 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-charcoal/60">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t(post.content, post.contentEn)}
              </ReactMarkdown>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-28 bg-sand/10">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-playfair text-3xl mb-12">
                {t("Gerelateerde artikelen", "Related articles")}
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} staggerIndex={i}>
                  <Link
                    href={`/kennisbank/${r.slug}`}
                    className="group block bg-white rounded-lg border border-sand/30 p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 text-xs text-charcoal/40 mb-4">
                      <time>{r.date}</time>
                      <span>·</span>
                      <span>{r.readTime}</span>
                    </div>
                    <h3 className="font-playfair text-xl mb-3 group-hover:text-teal transition-colors">
                      {t(r.title, r.titleEn)}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {t(r.description, r.descriptionEn)}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
