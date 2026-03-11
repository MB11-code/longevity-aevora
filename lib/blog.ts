import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  date: string;
  readTime: string;
  keywords: string[];
  content: string;
  contentEn: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content: fullContent } = matter(raw);
    const separator = "---EN---";
    let contentNl = fullContent;
    let contentEn = fullContent;
    if (fullContent.includes(separator)) {
      const parts = fullContent.split(separator);
      contentNl = parts[0].trim();
      contentEn = parts[1].trim();
    }
    return {
      slug: data.slug,
      title: data.title,
      titleEn: data.titleEn,
      description: data.description,
      descriptionEn: data.descriptionEn,
      date: data.date,
      readTime: data.readTime,
      keywords: data.keywords || [],
      content: contentNl,
      contentEn,
    } as BlogPost;
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
