import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, DBA_NAME } from "@/lib/constants";
import {
  ShieldCheck,
  Calculator,
  Briefcase,
  BarChart3,
  Landmark,
  PieChart,
  ArrowRight,
  Globe,
  Users,
  Building,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const serviceLines = [
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    description:
      "Our independence, rigour, and technology-powered methodology deliver financial statement audits, PCAOB-compliant engagements, SOC reporting, and internal audit services that stakeholders can rely on unconditionally.",
    href: "/services/audit-assurance",
    highlights: ["Financial Statement Audits", "SOC 1 & SOC 2 Reports", "PCAOB Compliance", "IFRS / US GAAP Advisory"],
  },
  {
    icon: Calculator,
    title: "Tax Services",
    description:
      "From corporate structuring and international transfer pricing to OECD Pillar Two compliance and R&D credit optimisation, our tax professionals align your tax position with your strategic objectives.",
    href: "/services/tax",
    highlights: ["Corporate & International Tax", "Transfer Pricing", "Indirect Tax / VAT", "Tax Controversy & Dispute Resolution"],
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description:
      "We partner with leadership teams to design and execute transformations — from finance function redesign and digital strategy to supply chain optimisation and ESG integration.",
    href: "/services/consulting",
    highlights: ["Business Transformation", "Digital Strategy", "Operational Excellence", "Finance Function Transformation"],
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "With deep transaction experience across M&A, restructuring, and forensic matters, our advisors guide clients through their most consequential financial decisions with clarity and precision.",
    href: "/services/financial-advisory",
    highlights: ["M&A Advisory", "Due Diligence", "Business Valuations", "Forensic Accounting"],
  },
  {
    icon: Landmark,
    title: "Risk Advisory",
    description:
      "Our risk professionals help boards and management identify, quantify, and mitigate enterprise risks — spanning cybersecurity, regulatory compliance, ESG, and third-party exposure.",
    href: "/services/risk-advisory",
    highlights: ["Enterprise Risk Management", "Cybersecurity & Privacy", "Regulatory Compliance", "ESG & Sustainability Risk"],
  },
  {
    icon: PieChart,
    title: "Bookkeeping & Payroll",
    description:
      "Scalable, cloud-native outsourced accounting services that free your team to focus on growth — backed by certified professionals and real-time financial visibility.",
    href: "/services/bookkeeping",
    highlights: ["Full-Cycle Bookkeeping", "Payroll Processing", "Month-End / Year-End Close", "Cloud Accounting (QuickBooks, Xero)"],
  },
];

const differentiators = [
  {
    title: "Technology-Driven Methodology",
    description:
      "Our proprietary analytics platform ingests and analyses full-population data sets rather than samples, enabling anomaly detection and risk identification at a depth traditional methods cannot achieve.",
  },
  {
    title: "Global Network, Local Expertise",
    description:
      "With member firms in 85 countries, we deliver consistent quality across borders while drawing on professionals who understand the local regulatory, cultural, and market context your business operates in.",
  },
  {
    title: "Deep Industry Specialisation",
    description:
      "Our practices are structured around industries — not just service lines. Clients benefit from professionals who understand the specific accounting standards, regulatory frameworks, and commercial drivers of their sector.",
  },
  {
    title: "Independence & Integrity",
    description:
      `${COMPANY_NAME}'s independence framework exceeds the requirements of the SEC, PCAOB, AICPA, and FRC. Our culture of professional scepticism is embedded from partner to staff level.`,
  },
  {
    title: "Integrated, Multi-Disciplinary Teams",
    description:
      "Complex client challenges rarely sit within one service line. We assemble integrated teams — tax, audit, advisory, and consulting — that collaborate to deliver holistic solutions rather than siloed point advice.",
  },
  {
    title: "ESG & Sustainability Leadership",
    description:
      `As reporting standards mature under ISSB, SEC climate rules, and the EU CSRD, ${COMPANY_NAME}'s dedicated sustainability practice helps clients measure, report, and improve ESG performance with confidence.`,
  },
];

const stats = [
  { value: "85+", label: "Countries", icon: Globe },
  { value: "120", label: "Global Offices", icon: Building },
  { value: "18", label: "Industries Served", icon: Briefcase },
  { value: "10,000+", label: "Professionals", icon: Users },
  { value: "6,200+", label: "Active Clients", icon: TrendingUp },
  { value: "40+", label: "Years of Practice", icon: ShieldCheck },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        tag="Our Services"
        title="Our Services"
        description="Six integrated practice areas. One firm built on independence, expertise, and a relentless commitment to delivering outcomes that matter."
      />

      {/* Stats Bar */}
      <section className="bg-blue-900 py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="h-5 w-5 text-blue-300 mb-1" />
                <span className="text-3xl font-extrabold text-white">{value}</span>
                <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Lines Grid */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Six Practice Areas. One Firm.</h2>
            <p className="text-lg text-slate-600">
              Each service line is staffed by sector-specialised professionals and supported by shared centres of excellence in technology, data analytics, and regulatory affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceLines.map(({ icon: Icon, title, description, href, highlights }) => (
              <Card key={title} className="hover:shadow-xl transition-all duration-300 border-slate-200 group flex flex-col">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6 flex-1">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors mt-auto"
                  >
                    Explore {title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Firm */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About {COMPANY_NAME}</h2>
            <p className="text-lg text-slate-600">
              Clients choose {COMPANY_NAME} not only for the breadth of our capabilities, but for the depth of our commitment — to quality, to independence, and to their long-term success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map(({ title, description }) => (
              <div
                key={title}
                className="border border-slate-100 rounded-xl p-6 bg-slate-50 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find the Right Solution for Your Business</h2>
          <p className="text-lg text-slate-300 mb-10">
            Our client relationship model starts with listening. Speak with a partner to discuss your specific challenges and how our multi-disciplinary teams can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8")}
            >
              Speak with a Partner
            </Link>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8")}
            >
              About {COMPANY_NAME}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
