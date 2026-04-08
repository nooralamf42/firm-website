import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Factory, Truck, Wrench, Globe, ShieldCheck, BarChart3 } from "lucide-react";

const focusAreas = [
  {
    icon: Factory,
    title: "Industrial & Heavy Manufacturing",
    description: "We support large industrial manufacturers with complex cost accounting, standard costing analysis, asset impairment testing, long-term contract accounting under IFRS 15, and multi-jurisdictional tax compliance.",
  },
  {
    icon: Wrench,
    title: "Automotive",
    description: "Our automotive sector advisors help manufacturers and suppliers navigate warranty reserve accounting, government incentive programs, EV transition funding, and the significant tax implications of shifting supply chains.",
  },
  {
    icon: Globe,
    title: "Aerospace & Defence",
    description: "We provide financial statement audit, government contracting compliance, long-term contract revenue recognition, and cost-volume-profit analysis for aerospace manufacturers and defence contractors.",
  },
  {
    icon: Truck,
    title: "Consumer Products & FMCG",
    description: "We assist consumer goods companies with trade promotion accounting, distributor rebate programs, retail channel analysis, and the financial reporting implications of complex pricing and volume discount structures.",
  },
  {
    icon: ShieldCheck,
    title: "Food & Beverage",
    description: "We deliver audit, tax, and advisory services tailored to food and beverage manufacturers, including agricultural accounting under IAS 41, supply chain risk management, and export incentive programs.",
  },
  {
    icon: BarChart3,
    title: "Mining & Resources",
    description: "Our resources team advises mining companies on exploration expenditure accounting, rehabilitation provision estimates, royalty compliance, and the commodity-linked tax structures common in the resources sector.",
  },
];

const keyServices = [
  "Cost accounting system design, implementation, and review",
  "Standard costing and variance analysis",
  "Long-term contract revenue recognition under IFRS 15 / ASC 606",
  "Financial statement audit and assurance for manufacturers",
  "Research and development tax incentive claims",
  "Asset impairment testing and valuation support",
  "Transfer pricing for multinational manufacturing structures",
  "Inventory accounting policy development and review",
  "Government manufacturing incentive and grant program advisory",
  "ESG reporting and environmental provision accounting",
];

const challenges = [
  "Managing supply chain disruption and rising input costs",
  "Funding automation and digital transformation investments",
  "Navigating evolving environmental and emissions regulations",
  "Maintaining margin discipline in competitive global markets",
  "Attracting and retaining skilled manufacturing and engineering talent",
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        title="Manufacturing & Industrial"
        description="Financial discipline and strategic insight for businesses that build the physical world."
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Precision Thinking for Precision Industries
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Manufacturing and industrial businesses operate in complex, capital-intensive environments defined by tight margins, long investment cycles, intricate supply chains, and deep regulatory requirements. The financial management challenges facing a food and beverage producer differ fundamentally from those of an aerospace contractor or mining company — and generic financial advice rarely captures that complexity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {COMPANY_NAME} brings industry-specific expertise to manufacturing and industrial clients. Our professionals draw on extensive hands-on experience with the cost accounting systems, long-term contract models, and capital accounting frameworks that define this sector — enabling us to deliver advice that is immediately applicable to your operational and financial realities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From streamlining your financial close process to navigating a complex M&amp;A transaction, our multidisciplinary team is equipped to help manufacturing businesses operate with greater financial control, comply with evolving regulations, and invest in the future with confidence.
          </p>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Manufacturing Sub-Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Manufacturing is a diverse sector. Our specialists understand the specific accounting, tax, and operational frameworks that distinguish each sub-sector.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Financial Strength Together</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Speak with our manufacturing and industrial sector team to explore how {COMPANY_NAME} can strengthen your financial management, compliance, and strategic growth.
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
