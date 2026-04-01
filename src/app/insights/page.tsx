"use client"

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { articles, categoryColors } from "@/app/data/articles";

const topics = ["Tax Policy", "Audit & Reporting", "Technology", "Risk", "ESG", "M&A"];

const featuredArticles = articles.slice(0, 6);

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        tag="Insights"
        title="Insights & Perspectives"
        description="Deeply researched thought leadership from Meridian's global experts."
      />

      {/* Featured Insight */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-6">Featured Insight</p>
          <div className="rounded-2xl bg-slate-950 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-900/50 rounded-full px-3 py-1 w-fit">
                  Tax Policy
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                  The Global Minimum Tax: Strategies for Multinational Enterprises
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                  The OECD Pillar Two framework — establishing a 15% global minimum effective tax rate — is now live
                  in over 45 jurisdictions. Meridian's Global Tax Practice examines how multinational groups are
                  restructuring inter-company arrangements, re-evaluating the economics of existing tax incentive
                  regimes, and designing compliant substance strategies. From Qualified Domestic Minimum Top-up Tax
                  elections to GloBE information return filings, this comprehensive guide equips tax leaders with
                  the intelligence they need to move from reaction to strategic advantage.
                </p>
                <Link
                  href="/insights/articles/oecd-pillar-two-final-implementation-guidance"
                  className="inline-flex items-center font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read the Full Analysis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/30 p-14">
                <BookOpen className="h-40 w-40 text-blue-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-5">Browse by Topic</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic}
                href="/insights/articles"
                className="px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
            <Link
              href="/insights/articles"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0"
            >
              View All Articles <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow border-slate-200 flex flex-col">
                <CardHeader>
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 w-fit mb-2",
                      categoryColors[article.category] ?? "bg-slate-100 text-slate-700"
                    )}
                  >
                    {article.category}
                  </span>
                  <CardTitle className="text-lg font-bold text-slate-900 leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-xs text-slate-400 mt-1">{article.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{article.excerpt}</p>
                  <Link
                    href={`/insights/articles/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports Callout */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-slate-800 flex items-center justify-center">
                <FileText className="h-7 w-7 text-blue-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Research Reports</h2>
                <p className="text-slate-300 text-base max-w-xl">
                  Download Meridian's flagship annual reports, practitioner surveys, and regulatory guides — covering
                  tax, ESG, M&A, technology, and sector-specific intelligence from our global practice groups.
                </p>
              </div>
            </div>
            <Link href="/insights/reports" className="shrink-0">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-5 rounded-lg inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Browse Reports
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section id="newsletter" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Ahead of the Curve</h2>
          <p className="text-slate-600 text-lg mb-8">
            Subscribe to Meridian's Insights newsletter and receive curated analysis, regulatory updates, and
            exclusive research delivered to your inbox every fortnight.
          </p>
          {subscribed ? (
            <div className="rounded-xl bg-green-50 border border-green-200 px-8 py-6">
              <p className="text-green-800 font-semibold text-lg">Thank you for subscribing!</p>
              <p className="text-green-700 text-sm mt-1">
                Watch your inbox for the next edition of Meridian Insights.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your professional email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 rounded-lg whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}
          <p className="text-xs text-slate-400 mt-4">
            No spam. Unsubscribe at any time. View our{" "}
            <Link href="/legal/privacy" className="underline hover:text-slate-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
