"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../lang-context";
import { ScrollReveal } from "../scroll-reveal";
import type { BlogPost } from "@/lib/blog";

export function KennisbankContent({ posts }: { posts: BlogPost[] }) {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        <Image
          src="/images/behandelkamer.jpg"
          alt="ORAVIVUM Kennisbank"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-28">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-8">
            {t("Artikelen & Inzichten", "Articles & Insights")}
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-[1.08] text-offwhite mb-10">
            {t("Kennisbank", "Knowledge Base")}
          </h1>
          <p className="text-lg md:text-xl text-offwhite/70 leading-relaxed max-w-2xl">
            {t(
              "Betrouwbare informatie over tandheelkunde, kaakgezondheid en welzijn — geschreven door onze specialisten.",
              "Reliable information about dentistry, jaw health and wellbeing — written by our specialists."
            )}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} staggerIndex={i}>
                <Link
                  href={`/kennisbank/${post.slug}`}
                  className="group block bg-white rounded-lg border border-sand/30 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs text-charcoal/40 mb-4">
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-playfair text-xl mb-3 group-hover:text-teal transition-colors">
                      {t(post.title, post.titleEn)}
                    </h2>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {t(post.description, post.descriptionEn)}
                    </p>
                    <span className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-teal">
                      {t("Lees meer →", "Read more →")}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
