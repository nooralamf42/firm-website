import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, BarChart3, Scale, Zap, Globe } from "lucide-react";

const focusAreas = [
  {
    icon: ShieldCheck,
    title: "Banking & Capital Markets",
    description: "From regulatory capital requirements to Basel III/IV compliance and stress testing frameworks, we help banks navigate the full spectrum of prudential regulation while maintaining profitability and growth.",
  },
  {
    icon: TrendingUp,
    title: "Investment Management & Private Equity",
    description: "We deliver fund accounting, valuation support, tax structuring, and regulatory compliance for fund managers, asset owners, and private equity firms across the investment lifecycle.",
  },
  {
    icon: Scale,
    title: "Insurance & Actuarial Services",
    description: "Our specialists support insurers with IFRS 17 implementation, Solvency II compliance, reserve reviews, and enterprise risk management frameworks tailored to the insurance sector.",
  },
  {
    icon: Zap,
    title: "Fintech & Digital Assets",
    description: "We support fintech innovators with regulatory licensing, AML/KYC program design, crypto accounting, and digital asset tax guidance as the regulatory landscape evolves rapidly.",
  },
  {
    icon: Globe,
    title: "Wealth Management",
    description: "We deliver tailored advisory to wealth managers and family offices, covering trust structures, succession planning, cross-border tax compliance, and investment reporting.",
  },
  {
    icon: BarChart3,
    title: "Payments & Transaction Services",
    description: "Our team assists payment processors and card networks with licensing compliance, financial reporting, fraud risk controls, and cross-border regulatory frameworks.",
  },
];

const keyServices = [
  "Regulatory reporting and compliance management",
  "IFRS / US GAAP financial statement audits",
  "Stress testing and scenario analysis frameworks",
  "Anti-money laundering (AML) program design and review",
  "Tax structuring for complex financial instruments",
  "Internal controls and SOX compliance",
  "Mergers and acquisitions due diligence",
  "Risk management framework assessments",
  "Capital adequacy and liquidity analysis",
  "ESG reporting and sustainability disclosures",
];

const challenges = [
  "Navigating rapidly evolving global regulatory requirements",
  "Managing systemic risk and cybersecurity threats",
  "Adapting to digital disruption from fintech competitors",
  "Maintaining profitability under compressed margins",
  "Meeting growing investor and stakeholder ESG expectations",
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHeader
        title="Financial Services"
        description="Navigating complex regulatory requirements and volatile global markets with confidence and precision."
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Adaptation in a New Era
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Financial services institutions — banks, asset managers, insurers, payment providers, and fintechs — face unprecedented complexity. Regulatory environments grow more demanding each year, digital disruption accelerates, and macroeconomic uncertainty compresses margins. At the same time, investors and regulators increasingly demand robust ESG disclosures, advanced risk management, and irrefutable audit trails.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {COMPANY_NAME} brings deep regulatory knowledge and technical accounting expertise to financial services clients. Our professionals have hands-on expertise working with regulators, understanding the specific reporting standards, risk frameworks, and operational pressures that define this sector — enabling us to provide advice that is grounded in the reality of your business, not abstract theory.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you face a new Basel requirement, an M&amp;A opportunity, an IFRS 17 transition, or a digital asset strategy question, our multidisciplinary teams are equipped to help you move decisively while managing risk effectively.
          </p>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Sub-Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Financial services is not one industry — it is many. Our specialists are organized around the distinct needs, regulatory environments, and business models of each sub-sector.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Navigate Complexity?</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Our financial services team is ready to help you address your most pressing regulatory, financial, and strategic challenges.
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
