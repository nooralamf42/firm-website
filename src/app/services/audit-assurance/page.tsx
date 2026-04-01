import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ShieldCheck,
  Cpu,
  FileText,
  ArrowRight,
  TrendingUp,
  Users,
  Search,
} from "lucide-react";

const offerings = [
  {
    title: "Financial Statement Audits",
    description:
      "Public and private company audits conducted under US GAAP, IFRS, and PCAOB standards. Our full-population data testing eliminates sampling bias and surfaces material misstatements with greater reliability.",
  },
  {
    title: "Internal Audit Co-Sourcing & Outsourcing",
    description:
      "We supplement or fully manage your internal audit function, deploying specialists in financial controls, IT systems, and operational processes to deliver an audit committee-ready programme.",
  },
  {
    title: "IT & Controls Audit",
    description:
      "Assessment of general IT controls, application controls, and automated business process controls within ERP environments including SAP, Oracle Cloud, and Workday.",
  },
  {
    title: "PCAOB Compliance",
    description:
      "Integrated audits of financial statements and internal control over financial reporting (ICFR) as required under Sarbanes-Oxley Section 404(b) for SEC-registered issuers and foreign private issuers.",
  },
  {
    title: "SOC 1 & SOC 2 Reports",
    description:
      "Type I and Type II service organisation control examinations under SSAE 18. We serve technology providers, data centres, payroll processors, and financial services outsourcers.",
  },
  {
    title: "IFRS / US GAAP Advisory",
    description:
      "Technical accounting support for complex transactions including revenue recognition (ASC 606 / IFRS 15), lease accounting (ASC 842 / IFRS 16), business combinations, and financial instruments.",
  },
];

const methodologySteps = [
  {
    step: "01",
    title: "Risk Assessment",
    description:
      "We begin by developing a deep understanding of your business model, industry dynamics, and control environment. Using MeridianIQ, we analyse transactional data to pinpoint areas of inherent and control risk before a single audit procedure is executed.",
  },
  {
    step: "02",
    title: "Planning & Scoping",
    description:
      "Our engagement team — led by a dedicated partner and senior manager — designs a tailored audit plan. Materiality thresholds, component auditor coordination, and significant accounting judgements are documented and discussed with management and the audit committee.",
  },
  {
    step: "03",
    title: "Fieldwork & Testing",
    description:
      "Substantive testing, controls evaluation, and analytical procedures are executed with precision. Our AI-enabled journal entry testing reviews 100% of entries for unusual patterns, related-party anomalies, and late posting irregularities.",
  },
  {
    step: "04",
    title: "Reporting & Communication",
    description:
      "We deliver a clear, actionable audit report accompanied by a management letter identifying internal control observations and improvement recommendations. Partner-level communication with the audit committee is standard on every engagement.",
  },
];

const techCapabilities = [
  {
    icon: Cpu,
    title: "AI-Driven Anomaly Detection",
    description:
      "Machine learning models trained on millions of journal entries identify outliers, duplicate payments, and unusual account movements that traditional sampling would miss.",
  },
  {
    icon: Search,
    title: "Full-Population Data Analytics",
    description:
      "Rather than sampling, we ingest and interrogate entire transaction populations — accounts payable, revenue, payroll — providing a more complete risk picture.",
  },
  {
    icon: FileText,
    title: "Continuous Monitoring Dashboards",
    description:
      "Real-time dashboards surfacing key financial ratios, control exceptions, and audit progress provide transparency to finance leadership and audit committees throughout the engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Blockchain Confirmation",
    description:
      "For clients with digital asset holdings or blockchain-based transaction records, our specialists have developed proprietary confirmation and valuation procedures accepted by major regulators.",
  },
];

const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "2,400+", label: "Audits Completed Annually" },
  { value: "340+", label: "PCAOB-Registered Engagements" },
  { value: "60+", label: "Industry Sectors Covered" },
];

export default function AuditAssurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Audit & Assurance"
        description="Rigorous, technology-enabled audits that deliver the transparency capital markets demand — and the insights management needs to lead with confidence."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">An Independent Audit Is a Strategic Asset</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                An independent, high-quality audit is the foundation of trust between an organisation and its stakeholders — investors, lenders, regulators, and the public. At Meridian Partners, we treat every engagement as a responsibility, not a transaction.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our audit practice operates under a single global methodology, regardless of geography. Each engagement is led by an experienced partner with sector expertise and supported by specialists in tax, IT controls, valuations, and actuarial science where the engagement demands it.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                  <span className="text-3xl font-extrabold text-blue-800 block mb-1">{value}</span>
                  <span className="text-sm font-medium text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Audit Approach</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A four-phase methodology built on rigorous risk assessment, advanced data analytics, and transparent communication at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map(({ step, title, description }) => (
              <div key={step} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <span className="text-5xl font-black text-blue-600/30 block mb-3">{step}</span>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Offerings</h2>
            <p className="text-slate-600 max-w-2xl">
              Our assurance practice encompasses a comprehensive range of attest and advisory engagements, tailored to your reporting obligations and stakeholder requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map(({ title, description }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-8">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology-Enabled Audit</h2>
            <p className="text-slate-600 max-w-2xl">
              MeridianIQ, our proprietary audit intelligence platform, transforms how we gather evidence, assess risk, and communicate findings — delivering higher quality at greater efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCapabilities.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-slate-100">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Sector Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Financial Services & Banking", "Insurance", "Asset Management & Private Equity",
              "Healthcare & Life Sciences", "Technology & SaaS", "Energy & Natural Resources",
              "Real Estate & REITs", "Consumer & Retail", "Manufacturing & Industrials",
              "Public Sector & Not-for-Profit", "Telecommunications", "Transportation & Logistics",
            ].map((sector) => (
              <span key={sector} className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Ready to Elevate Your Audit Quality?</h2>
              <p className="text-blue-100 max-w-xl">
                Contact our Audit & Assurance practice to discuss your reporting obligations, upcoming filings, or a transition from your current auditor.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8")}
              >
                Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-blue-100 hover:text-white hover:bg-blue-800")}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
