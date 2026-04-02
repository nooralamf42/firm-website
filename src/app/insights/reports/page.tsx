import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Download, FileText } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

const featuredReport = {
  title: "Global Tax Landscape 2026: Annual Report",
  practiceArea: "Tax",
  pages: 96,
  description:
    `${COMPANY_NAME}'s flagship annual publication synthesises the most significant tax law developments across 60+ jurisdictions, analysing the cumulative impact of OECD Pillar Two implementation, unilateral digital services taxes, and the evolving landscape of tax treaty networks. Authored by over 40 partners across our global Tax practice, this report provides multinational enterprises, family offices, and in-house tax teams with the strategic intelligence needed to plan effectively in a rapidly changing environment.`,
};

const reports = [
  {
    title: "Global M&A Trends Report 2026",
    practiceArea: "Financial Advisory",
    date: "February 2026",
    pages: 48,
    description:
      "A data-driven analysis of deal volume, sector composition, valuation multiples, and financing structures across global M&A markets, with a focus on mid-market dynamics and private equity activity.",
  },
  {
    title: "Cybersecurity Risk Barometer 2026",
    practiceArea: "Risk Advisory",
    date: "January 2026",
    pages: 36,
    description:
      "Results from our annual survey of 800+ CISOs and risk officers, benchmarking cybersecurity maturity, AI-related threat exposure, and board-level governance practices across major industry sectors.",
  },
  {
    title: "ESG Reporting Readiness Survey",
    practiceArea: "Consulting",
    date: "January 2026",
    pages: 52,
    description:
      "Insights from 650 finance and sustainability executives on the state of ESG data infrastructure, assurance readiness, and the operational challenges of complying with ISSB, CSRD, and SEC climate disclosure mandates.",
  },
  {
    title: "Asia-Pacific Tax Regulatory Guide",
    practiceArea: "Tax",
    date: "December 2025",
    pages: 64,
    description:
      "A comprehensive jurisdiction-by-jurisdiction guide covering corporate income tax rates, transfer pricing regimes, Pillar Two implementation status, and indirect tax developments across 18 Asia-Pacific markets.",
  },
  {
    title: "AI in Finance: Practitioner Survey Results",
    practiceArea: "Technology",
    date: "December 2025",
    pages: 28,
    description:
      "Survey findings from 500+ CFOs and finance leaders on AI adoption in financial planning and analysis, accounting automation, audit readiness, and the barriers to responsible AI deployment in finance functions.",
  },
  {
    title: "Real Estate Market Outlook 2026",
    practiceArea: "Real Estate",
    date: "November 2025",
    pages: 40,
    description:
      "An analysis of commercial real estate investment trends, cap rate movements, distressed asset opportunities, and the impact of hybrid work normalisation on office and mixed-use valuations across global gateway cities.",
  },
  {
    title: "Healthcare Cost Transformation Study",
    practiceArea: "Healthcare",
    date: "November 2025",
    pages: 44,
    description:
      "Drawing on engagement experience across 80+ health systems, this report identifies the most effective cost-reduction and revenue-cycle transformation strategies available to hospital operators and healthcare networks in a post-pandemic operating environment.",
  },
  {
    title: "Manufacturing Resilience Report",
    practiceArea: "Manufacturing",
    date: "October 2025",
    pages: 32,
    description:
      "An assessment of how leading manufacturers are redesigning supply chains, adopting industrial automation, and restructuring their tax and treasury positions in response to geopolitical fragmentation and nearshoring pressures.",
  },
];

const practiceAreaColors: Record<string, string> = {
  Tax: "bg-blue-100 text-blue-800",
  "Financial Advisory": "bg-amber-100 text-amber-800",
  "Risk Advisory": "bg-red-100 text-red-800",
  Consulting: "bg-purple-100 text-purple-800",
  Technology: "bg-cyan-100 text-cyan-800",
  "Real Estate": "bg-orange-100 text-orange-800",
  Healthcare: "bg-emerald-100 text-emerald-800",
  Manufacturing: "bg-slate-100 text-slate-700",
};

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        tag="Research"
        title="Research Reports"
        description="Comprehensive research and analysis from our global practice groups."
      />

      {/* Featured Report */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-6">Featured Report</p>
          <div className="rounded-2xl bg-slate-950 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-900/50 rounded-full px-3 py-1">
                    {featuredReport.practiceArea}
                  </span>
                  <span className="text-slate-400 text-xs">{featuredReport.pages} pages</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                  {featuredReport.title}
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {featuredReport.description}
                </p>
                <a href="#" className={cn(buttonVariants(), "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-5 rounded-lg inline-flex items-center gap-2")}>
                  <Download className="h-4 w-4" />
                  Download Report
                </a>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-slate-900 p-10">
                <FileText className="h-32 w-32 text-blue-500/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">All Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reports.map((report) => (
              <Card
                key={report.title}
                className="hover:shadow-lg transition-shadow border-slate-200 flex flex-col bg-white"
              >
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${
                        practiceAreaColors[report.practiceArea] ?? "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {report.practiceArea}
                    </span>
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 leading-snug">
                    {report.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-400">
                    {report.date} &middot; {report.pages} pages
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{report.description}</p>
                  <a href="#" className={cn(buttonVariants({ variant: "outline" }), "border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 w-full inline-flex items-center gap-2 justify-center")}>
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
          <p className="text-blue-200 mb-8">
            Contact our practice groups directly for bespoke research, industry-specific benchmarking, or
            regulatory briefings tailored to your organisation's needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8 py-5 rounded-lg">
              Speak with a Specialist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
