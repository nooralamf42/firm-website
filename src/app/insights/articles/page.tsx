import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { articles, categoryColors, categoryGradients } from "@/app/data/articles";
import { COMPANY_NAME } from "@/lib/constants";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        tag="Articles"
        title="Articles"
        description={`Expert analysis and commentary from ${COMPANY_NAME}.`}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                {/* Category gradient top bar */}
                <div
                  className={cn(
                    "h-1.5 w-full bg-gradient-to-r",
                    categoryGradients[article.category] ?? "from-slate-800 to-slate-600"
                  )}
                />
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1",
                        categoryColors[article.category] ?? "bg-slate-100 text-slate-700"
                      )}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-xs">{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mb-4">By {article.author}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/insights/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors group/link"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-14 text-center">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-5 text-base font-medium"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
