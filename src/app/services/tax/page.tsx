import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Globe,
  DollarSign,
  Scale,
  FileText,
  TrendingUp,
  Users,
  ArrowRight,
  Landmark,
} from "lucide-react";

const serviceAreas = [
  {
    icon: DollarSign,
    title: "Corporate Tax Advisory",
    description:
      "Comprehensive tax planning aligned with corporate strategy — covering entity structure, intercompany transactions, tax attribute optimisation, and effective tax rate management. We serve publicly listed companies, private equity-backed businesses, and family-owned enterprises.",
  },
  {
    icon: Globe,
    title: "International Tax",
    description:
      "Cross-border structuring, tax treaty analysis, controlled foreign corporation (CFC) planning, and foreign tax credit optimisation. Our international tax specialists operate across 85 jurisdictions and are deeply conversant in OECD BEPS Actions.",
  },
  {
    icon: Scale,
    title: "Transfer Pricing",
    description:
      "Design, documentation, and defence of intercompany pricing policies. We prepare contemporaneous transfer pricing studies, country-by-country reports (CbCR), and master file / local file documentation compliant with OECD guidelines and local statutory requirements.",
  },
  {
    icon: Users,
    title: "Individual & Private Wealth Tax",
    description:
      "Holistic tax planning for executives, founders, and high-net-worth individuals encompassing income tax, capital gains planning, estate and gift tax, offshore compliance (FATCA, FBAR, Form 8938), and expatriate tax services.",
  },
  {
    icon: Landmark,
    title: "Indirect Tax & VAT",
    description:
      "Global VAT / GST compliance, indirect tax technology implementations, customs and duty advisory, and transaction tax due diligence. We support businesses navigating the rapid expansion of digital services taxes across new jurisdictions.",
  },
  {
    icon: FileText,
    title: "Tax Controversy & Dispute Resolution",
    description:
      "Representation before tax authorities at examination, appeals, and litigation stages. Our controversy team includes former senior IRS, HMRC, and EU tax authority officials with deep relationships and procedural expertise.",
  },
  {
    icon: TrendingUp,
    title: "R&D Tax Credits & Incentives",
    description:
      "Identification, quantification, and documentation of qualifying expenditure under Section 41 (US R&D credit), UK R&D relief, and analogous regimes globally. We have recovered hundreds of millions in credits for technology, pharmaceutical, and manufacturing clients.",
  },
];

const approachPillars = [
  {
    title: "Proactive Planning, Not Passive Compliance",
    description:
      "We engage with your finance and legal teams year-round — not just at filing deadlines. Our forward-looking tax modelling identifies opportunities and risks before they crystallise, giving management the time to act strategically.",
  },
  {
    title: "Technology-Integrated Tax Function",
    description:
      "Meridian's tax technology practice helps clients implement and optimise tax engines (Vertex, Thomson Reuters ONESOURCE, Sovos), automate provision workpapers, and build robust data pipelines from ERP to tax reporting.",
  },
  {
    title: "Sector-Specific Expertise",
    description:
      "Tax law intersects differently with each industry. Our sector-aligned tax teams understand the nuances of REIT elections, insurance company reserving, R&D credit qualification in life sciences, and digital economy VAT in a way generic tax advisors cannot.",
  },
  {
    title: "Ethical, Sustainable Tax Positions",
    description:
      "Meridian advises only on tax positions that are legally sound and reputationally defensible. In an era of increased public scrutiny of corporate tax practices, we help clients communicate their tax strategy transparently to boards and stakeholders.",
  },
];

export default function TaxPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Tax Services"
        description="Strategic tax solutions built for a world of accelerating regulatory change — from OECD Pillar Two to digital services taxes and state-level nexus complexity."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Tax Solutions</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The global tax landscape has never been more complex or more consequential. The OECD's two-pillar framework, shifting domestic corporate rates, expanding digital economy levies, and heightened transfer pricing scrutiny are simultaneously reshaping the tax profiles of businesses of every size and sector.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Meridian Partners' tax practice combines deep technical expertise with sector knowledge and global reach. With over 1,800 dedicated tax professionals across our network, we provide the insight and execution capability to transform tax from a compliance cost centre into a source of competitive advantage.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { value: "1,800+", label: "Tax Professionals" },
                { value: "85", label: "Countries Covered" },
                { value: "$4B+", label: "Tax Savings Identified" },
                { value: "94%", label: "Client Retention" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-blue-900 text-white rounded-xl px-6 py-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-200">{label}</span>
                  <span className="text-2xl font-extrabold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Tax Service Areas</h2>
            <p className="text-slate-600 max-w-2xl">
              A fully integrated suite of tax capabilities — available individually or as a coordinated, firm-wide tax engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-slate-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-slate-600 max-w-2xl">
              Meridian Partners approaches tax as a strategic discipline, not an annual filing obligation. Our model is built around continuous partnership, advanced technology, and principled advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPillars.map(({ title, description }) => (
              <div key={title} className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OECD Pillar Two Callout */}
      <section className="bg-slate-950 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="border border-blue-800 rounded-2xl p-8 md:p-12 bg-blue-950/50">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="h-8 w-8 text-blue-400 shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Global Tax Regulatory Update: OECD Pillar Two</h2>
                <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Effective 2024–2026 | 140+ Implementing Jurisdictions</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The OECD's Global Anti-Base Erosion (GloBE) rules — commonly referred to as Pillar Two — establish a 15% global minimum effective tax rate for multinational enterprise groups with consolidated revenues exceeding €750 million. As of 2026, over 140 jurisdictions have enacted or are implementing qualifying domestic minimum top-up taxes (QDMTT), Income Inclusion Rules (IIR), and Undertaxed Profits Rules (UTPR).
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The compliance and cash tax implications are significant. Meridian's dedicated Pillar Two task force has assisted over 200 multinational clients with GloBE impact assessments, data readiness reviews, safe harbour analyses, and top-up tax modelling. We work with clients' tax, finance, and IT teams to build sustainable, auditable Pillar Two compliance processes.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "GloBE Impact Assessment & Effective Tax Rate Modelling",
                "Qualified Domestic Minimum Top-Up Tax (QDMTT) Analysis",
                "Safe Harbour Eligibility Review (Transitional & Permanent)",
                "CbCR Data Quality & GloBE Information Return Preparation",
                "Pillar Two Technology & Process Implementation",
                "Pillar Two Disclosure & Financial Reporting (IAS 12 / ASC 740)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-500 text-white font-semibold")}
            >
              Speak with Our Pillar Two Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">Your Tax Strategy Starts Here</h2>
          <p className="text-blue-100 mb-10">
            Whether you are preparing for a transaction, navigating a regulatory change, or building a long-term tax-efficient structure, Meridian's tax professionals are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8")}
            >
              Schedule a Tax Consultation
            </Link>
            <Link
              href="/insights"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent border-blue-300 text-white hover:bg-blue-800 px-8")}
            >
              Read Tax Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
