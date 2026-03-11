import type { Metadata } from "next";
import { KennisbankContent } from "./content";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Kennisbank — ORAVIVUM Amsterdam",
  description:
    "Artikelen over tandheelkunde, bruxisme, slaapapneu en orofaciale gezondheid. Betrouwbare informatie van de specialisten bij ORAVIVUM Amsterdam.",
};

export default function KennisbankPage() {
  const posts = getAllPosts();
  return <KennisbankContent posts={posts} />;
}
