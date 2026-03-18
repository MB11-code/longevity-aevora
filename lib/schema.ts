export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extract FAQ items from markdown content.
 * Expects a "## Veelgestelde vragen" section with bold questions followed by answer paragraphs.
 * Format: **Question?**\nAnswer paragraph(s)
 */
export function extractFAQsFromMarkdown(content: string): FAQItem[] {
  const faqSectionMatch = content.match(/## Veelgestelde vragen\s*\n([\s\S]*?)(?=\n## |\n---|\n$|$)/);
  if (!faqSectionMatch) return [];

  const faqSection = faqSectionMatch[1];
  const faqs: FAQItem[] = [];

  // Match bold questions followed by answer text
  const parts = faqSection.split(/\n\*\*(.+?)\*\*\s*\n/);

  // parts[0] is text before first bold (usually empty)
  // parts[1] = question1, parts[2] = answer1, parts[3] = question2, etc.
  for (let i = 1; i < parts.length; i += 2) {
    const question = parts[i].trim();
    const answer = (parts[i + 1] || "").trim();
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

/**
 * Build FAQPage JSON-LD schema from FAQ items.
 */
export function buildFAQPageSchema(faqs: FAQItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Build Article JSON-LD schema for a blog post.
 */
export function buildArticleSchema({
  headline,
  description,
  datePublished,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline,
    description,
    datePublished,
    url,
    inLanguage: "nl",
    author: {
      "@type": "Organization",
      "@id": "https://oravivum.com/#organization",
      name: "ORAVIVUM — Oral Longevity Clinic",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://oravivum.com/#organization",
      name: "ORAVIVUM — Oral Longevity Clinic",
      url: "https://oravivum.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
