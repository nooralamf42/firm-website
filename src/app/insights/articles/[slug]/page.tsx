import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  categoryColors,
} from "@/app/data/articles";
import { COMPANY_NAME } from "@/lib/constants";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${COMPANY_NAME}`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const initials = article.author
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Hero */}
      <section className="bg-slate-950 pt-10 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* Back link */}
          <Link
            href="/insights/articles"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 text-sm mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          {/* Category badge + date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1",
                categoryColors[article.category] ?? "bg-slate-100 text-slate-700"
              )}
            >
              {article.category}
            </span>
            <span className="text-slate-400 text-sm">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-white font-medium text-sm">{article.author}</p>
              <p className="text-slate-400 text-xs">{COMPANY_NAME}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16 flex-1">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {article.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-slate-700 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Written by{" "}
                  <span className="font-semibold text-slate-800">{article.author}</span>
                  {" · "}
                  <span>{article.date}</span>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:pt-0 pt-8">
              {/* Related articles */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                  Related Articles
                </h3>
                <div className="space-y-5">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/insights/articles/${rel.slug}`}
                      className="block group"
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider rounded-full px-2 py-0.5",
                          categoryColors[rel.category] ?? "bg-slate-100 text-slate-700"
                        )}
                      >
                        {rel.category}
                      </span>
                      <p className="mt-1.5 text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                        {rel.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{rel.date}</p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/insights/articles"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 mt-5 transition-colors"
                >
                  View all articles <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-xl bg-slate-950 text-white p-6">
                <h3 className="font-bold text-base mb-2">Stay Informed</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  Subscribe to our Insights newsletter for fortnightly analysis from our global practice groups.
                </p>
                <Link
                  href="/insights#newsletter"
                  className={cn(
                    buttonVariants(),
                    "bg-blue-600 hover:bg-blue-700 text-white w-full justify-center font-semibold"
                  )}
                >
                  Subscribe Free
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Speak with a Specialist
                </h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  Questions about this topic? Our {article.category} team is available to discuss your specific situation.
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-slate-300 text-slate-700 hover:bg-slate-50 w-full justify-center font-semibold"
                  )}
                >
                  Get in Touch
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
