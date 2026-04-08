import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Building2, Home, TrendingUp, BarChart3, HardHat, Landmark } from "lucide-react";

const focusAreas = [
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description: "We provide audit, tax, and advisory services to owners, operators, and investors in office, retail, and industrial assets — covering lease accounting under IFRS 16, asset valuation, capital gains structuring, and property fund reporting.",
  },
  {
    icon: Home,
    title: "Residential Development",
    description: "Our residential development team assists builders and developers with revenue recognition on long-term construction contracts, GST/VAT compliance, land subdivision accounting, and pre-sales revenue timing under IFRS 15.",
  },
  {
    icon: Landmark,
    title: "Real Estate Investment Trusts (REITs)",
    description: "We support REIT managers with distribution policy analysis, investment property accounting at fair value under IAS 40, ASX/SEC regulatory filings, and the complex tax structures unique to listed property trusts.",
  },
  {
    icon: TrendingUp,
    title: "Property Funds & Capital Raisers",
    description: "We assist unlisted property funds and capital raisers with fund financial statement audits, compliance reporting, investor reporting requirements, and fee and performance calculation reviews.",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description: "Our construction advisors help project-based businesses manage percentage-of-completion accounting, contract revenue and margin estimation, claims accounting, retention receivables, and complex project financing arrangements.",
  },
  {
    icon: BarChart3,
    title: "Hospitality & Hotel Real Estate",
    description: "We advise hotel operators and hospitality real estate investors on management agreement structures, operator performance benchmarking, lease accounting, and the tax and compliance implications of mixed hotel and residential projects.",
  },
];

const keyServices = [
  "Investment property audit and fair value measurement support",
  "Lease accounting implementation and compliance under IFRS 16 / ASC 842",
  "Long-term construction contract revenue recognition under IFRS 15",
  "REIT tax structuring and distribution computation",
  "GST/VAT advice on property transactions and developments",
  "Capital gains tax planning for property disposals",
  "Stamp duty and land tax compliance and advisory",
  "Property fund financial statement audit and reporting",
  "Transaction due diligence for property acquisitions",
  "ESG reporting and sustainability ratings support for property portfolios",
];

const challenges = [
  "Navigating rising interest rates and their impact on asset valuations",
  "Managing construction cost escalation and project profitability",
  "Complying with evolving land tax and stamp duty regimes",
  "Meeting increasing ESG and green building disclosure requirements",
  "Structuring developments to optimize GST and capital gains outcomes",
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        title="Real Estate & Construction"
        description="Strategic financial advisory for property developers, investors, and real estate businesses."
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Deep Expertise in Property & Construction
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Real estate and construction businesses operate in one of the most complex financial environments of any sector. Property transactions carry significant tax implications at every stage — acquisition, development, operation, and disposal. Construction projects demand precision in revenue recognition and cost control, with errors capable of materially distorting reported results. Investors in listed and unlisted property vehicles require transparent, accurate reporting.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {COMPANY_NAME} brings deep hands-on expertise to real estate and construction clients. Our advisors understand the Australian and international property tax regimes, the specific accounting standards governing investment property and construction contracts, and the commercial dynamics of development, investment, and fund management.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are a residential developer preparing for a major land release, a REIT manager reporting to ASX, or a construction group managing a portfolio of complex projects, our team is equipped to deliver rigorous, practical advice that helps you operate efficiently, comply with confidence, and make better strategic decisions.
          </p>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Real Estate Sub-Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The property sector encompasses diverse business models, each with distinct accounting, tax, and regulatory requirements. Our specialists are organized around those specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services + Challenges */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Key Services</h2>
              <ul className="space-y-3">
                {keyServices.map((svc) => (
                  <li key={svc} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base leading-relaxed">{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Industry Challenges We Address</h2>
              <ul className="space-y-3">
                {challenges.map((ch) => (
                  <li key={ch} className="flex items-start gap-3">
                    <ArrowRight className="size-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base leading-relaxed">{ch}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                  Speak with a Specialist
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Property Advisors, Built to Last</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Speak with our real estate and construction specialists to discuss how {COMPANY_NAME} can support your development, investment, or fund management objectives.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-slate-950 hover:bg-slate-200 border-none px-8 font-semibold")}
          >
            Contact Us Today
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
