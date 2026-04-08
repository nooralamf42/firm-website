import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Cpu, Cloud, Bot, Globe, Shield, Zap } from "lucide-react";

const focusAreas = [
  {
    icon: Cpu,
    title: "Software & SaaS",
    description: "We assist SaaS companies with revenue recognition under ASC 606 / IFRS 15, audit readiness, investor reporting, and international tax structuring for cloud-delivered businesses scaling across multiple jurisdictions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Our team advises cloud infrastructure providers and hyperscalers on capitalization policies, data center accounting, lease analysis under IFRS 16, and the complex transfer pricing arrangements common in this sector.",
  },
  {
    icon: Bot,
    title: "AI & Emerging Technology",
    description: "We help AI companies navigate the unique R&D accounting challenges, government research incentives, and investor due diligence requirements that come with rapid innovation in machine learning, robotics, and frontier AI.",
  },
  {
    icon: Globe,
    title: "Telecommunications",
    description: "We support telcos with regulatory compliance, spectrum asset accounting, complex network infrastructure capitalization, IFRS 17 contract modifications, and the ongoing convergence of media and communications.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "We work with cybersecurity companies on financial reporting, M&A due diligence, and the revenue and contract accounting considerations unique to subscription-based security software and managed services.",
  },
  {
    icon: Zap,
    title: "Gaming & Digital Media",
    description: "Our advisors help gaming studios and digital media companies with accounting for in-game purchases, royalty structures, licensing arrangements, content capitalization, and multi-territory tax planning.",
  },
];

const keyServices = [
  "Revenue recognition advisory under ASC 606 / IFRS 15 for SaaS and software models",
  "R&D tax incentive identification and compliance",
  "Transfer pricing for IP-intensive and platform businesses",
  "Audit and assurance for high-growth and pre-IPO technology companies",
  "Financial due diligence for technology M&A transactions",
  "Stock option and equity compensation accounting (ASC 718)",
  "Lease accounting and capitalization under IFRS 16 / ASC 842",
  "Cross-border tax structuring for global technology businesses",
  "Regulatory compliance for fintech and digital asset platforms",
  "ESG reporting integration for technology enterprises",
];

const challenges = [
  "Managing rapid hypergrowth while maintaining financial control",
  "Navigating complex multi-element revenue recognition arrangements",
  "Structuring IP ownership for tax efficiency across jurisdictions",
  "Preparing for IPO, strategic acquisition, or secondary fundraising",
  "Meeting increasing ESG reporting expectations from institutional investors",
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        title="Technology, Media & Telecommunications"
        description="Agile advisory for fast-moving digital pioneers navigating complexity at scale."
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Pacing with Innovation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Technology, media, and telecommunications companies move at a pace that many traditional professional services firms struggle to match. Business models evolve constantly — from perpetual licenses to SaaS, from hardware to platform ecosystems, from broadcast media to streaming. Each transformation brings new accounting, tax, and regulatory complexity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {COMPANY_NAME} brings deep technical expertise and practical industry experience to TMT clients at every stage — from venture-backed startups preparing for their first audit to established technology enterprises managing global operations. Our team understands the specific accounting standards, tax structures, and investor expectations that define this sector.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't slow you down. Our advisors work at the speed of your business, providing clear, actionable guidance that helps you scale efficiently, manage risk intelligently, and reach your next milestone with confidence.
          </p>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Technology Sub-Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The TMT sector spans vastly different business models. Our specialists focus on the distinct accounting, tax, and regulatory environments of each technology sub-sector.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Speed of Technology</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Connect with our TMT sector team to discuss how {COMPANY_NAME} can help you scale with financial confidence, navigate complexity, and achieve your strategic milestones.
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
