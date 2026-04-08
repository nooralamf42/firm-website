import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Stethoscope, FileText, ShieldCheck, Building, Microscope, HeartPulse } from "lucide-react";

const focusAreas = [
  {
    icon: Stethoscope,
    title: "Hospitals & Health Systems",
    description: "We provide financial statement audits, cost reporting, tax-exempt bond compliance, and strategic advisory to large hospital systems and integrated health networks navigating reimbursement pressures and capital investment requirements.",
  },
  {
    icon: Microscope,
    title: "Life Sciences & Pharmaceuticals",
    description: "From R&D tax credits to transfer pricing for cross-border IP structures, our life sciences team helps pharmaceutical, biotech, and medical device companies manage complex financial and regulatory challenges across the product lifecycle.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance & Managed Care",
    description: "We assist health plans and managed care organizations with financial audits, actuarial reserve reviews, regulatory filing support, and risk adjustment compliance in an increasingly complex reimbursement environment.",
  },
  {
    icon: Building,
    title: "Aged Care & Disability Services",
    description: "Our specialists support aged care providers and disability service organizations with NDIS compliance, government reporting, financial management, and the operational advisory needed to deliver high-quality care sustainably.",
  },
  {
    icon: FileText,
    title: "Digital Health & Telehealth",
    description: "We work with digital health innovators to structure their businesses for growth, advise on healthcare data privacy regulations, assist with government grant applications, and support investor due diligence processes.",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare Real Estate",
    description: "We advise healthcare REITs, medical center developers, and healthcare property investors on tax structuring, lease accounting, transaction due diligence, and financial reporting for medical and wellness facilities.",
  },
];

const keyServices = [
  "Healthcare-specific financial statement audit and assurance",
  "Medicare and Medicaid cost report preparation and review",
  "Tax-exempt organization compliance and IRS Form 990 advisory",
  "R&D tax credit and incentive identification for life sciences",
  "Transfer pricing for pharmaceutical and biotech IP structures",
  "Revenue cycle management and coding compliance reviews",
  "Transaction advisory and healthcare M&A integration support",
  "NDIS compliance and disability sector reporting",
  "Government grant management and acquittal reporting",
  "ESG and sustainability reporting for healthcare entities",
];

const challenges = [
  "Managing escalating costs against suppressed reimbursement rates",
  "Maintaining regulatory compliance across multiple jurisdictions",
  "Recruiting and retaining qualified healthcare professionals",
  "Integrating new digital health technologies and data privacy obligations",
  "Funding capital investment in aging infrastructure",
];

export default function HealthcarePage() {
  return (
    <>
      <PageHeader
        title="Healthcare & Life Sciences"
        description="Expert financial advisory for a sector where operational excellence directly improves patient outcomes."
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Serving Those Who Serve Others
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Healthcare and life sciences organizations operate at the intersection of scientific innovation, human compassion, and intense financial pressure. Reimbursement rates are constrained, regulatory requirements multiply, workforce costs escalate, and capital infrastructure demands are relentless — all while patients and communities depend on these organizations to deliver quality care.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {COMPANY_NAME} brings deep, hands-on expertise to healthcare clients — from major hospital systems and aged care providers to pharmaceutical innovators and digital health startups. Our professionals understand the specific accounting standards, funding models, and regulatory frameworks that govern this sector, enabling us to provide rigorous, practical advice rather than generic financial consulting.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are committed to helping healthcare organizations achieve financial sustainability so they can focus on what matters most: delivering excellent care.
          </p>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Healthcare Sub-Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Healthcare is a diverse ecosystem. We organize our expertise around the specific business models, funding structures, and regulatory environments that define each sub-sector.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supporting Healthcare, One Organization at a Time</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Speak with one of our healthcare sector specialists to discuss how {COMPANY_NAME} can help your organization achieve financial clarity and operational sustainability.
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
