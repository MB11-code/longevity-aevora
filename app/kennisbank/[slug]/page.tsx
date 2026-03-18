import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { extractFAQsFromMarkdown, buildFAQPageSchema, buildArticleSchema } from "@/lib/schema";
import { ArticleContent } from "./article-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ORAVIVUM`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Build schemas
  const schemas: object[] = [];

  // Article schema
  schemas.push(
    buildArticleSchema({
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://oravivum.com/kennisbank/${post.slug}`,
    })
  );

  // FAQPage schema (extracted from markdown)
  const faqs = extractFAQsFromMarkdown(post.content);
  const faqSchema = buildFAQPageSchema(faqs);
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ArticleContent post={post} related={related} />
    </>
  );
}
