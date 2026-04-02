import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, DBA_NAME } from "@/lib/constants";
import {
  CheckCircle2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  DollarSign,
  BarChart3,
  Cpu,
} from "lucide-react";

const serviceOfferings = [
  {
    icon: Calculator,
    title: "Full-Cycle Bookkeeping",
    description:
      "End-to-end transaction recording, bank reconciliations, general ledger maintenance, and chart of accounts management. Our bookkeepers handle the complete accounting cycle so your finance team can focus on analysis and decision support rather than data entry.",
    details: [
      "Daily / weekly transaction categorisation",
      "Multi-currency transaction processing",
      "Bank, credit card & loan reconciliations",
      "General ledger review & maintenance",
      "Intercompany transaction processing",
    ],
  },
  {
    icon: DollarSign,
    title: "Accounts Payable & Receivable",
    description:
      "Rigorous AP and AR management that protects cash flow, preserves supplier relationships, and accelerates collections. We implement approval workflows, exception alerts, and ageing reports that give management complete visibility over working capital.",
    details: [
      "Vendor invoice processing & three-way matching",
      "Payment run preparation & approval workflows",
      "Customer invoicing & statement despatch",
      "Collections management & ageing analysis",
      "Expense report processing & reimbursement",
    ],
  },
  {
    icon: Users,
    title: "Payroll Processing",
    description:
      "Accurate, compliant payroll administration across all US states and selected international jurisdictions. We manage payroll calculations, statutory deductions, direct deposits, and all required tax filings — eliminating payroll risk for your business.",
    details: [
      "Weekly, bi-weekly & monthly payroll runs",
      "Federal, state & local payroll tax filings",
      "W-2, 1099 & T4 preparation & filing",
      "Benefits deduction & garnishment management",
      "New hire onboarding & termination processing",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Management accounts prepared to your timetable — daily flash reports, monthly P&L and balance sheet packs, cash flow statements, and board-ready dashboards. We present financial information in the format your decision-makers need.",
    details: [
      "Monthly management accounts (P&L, BS, CF)",
      "Budget vs. actual variance analysis",
      "KPI dashboards & executive reporting packs",
      "Departmental & project-level reporting",
      "GAAP-compliant financial statement preparation",
    ],
  },
  {
    icon: FileText,
    title: "Month-End & Year-End Close",
    description:
      "A structured, timeline-driven close process that eliminates bottlenecks and delivers accurate financials on schedule. Our close management methodology — adapted from Fortune 500 practice — brings discipline and predictability to every closing cycle.",
    details: [
      "Close calendar management & task tracking",
      "Accruals, prepayments & deferred revenue",
      "Fixed asset register & depreciation",
      "Inventory & cost of goods sold reconciliation",
      "Year-end audit preparation & file organisation",
    ],
  },
  {
    icon: Cpu,
    title: "Cloud Accounting Implementation",
    description:
      "We implement, configure, and optimise leading cloud accounting platforms to match your business model — integrating them with your CRM, payroll, banking, and e-commerce systems for a fully connected financial ecosystem.",
    details: [
      "QuickBooks Online & Desktop setup & migration",
      "Xero implementation & chart of accounts design",
      "Sage Intacct multi-entity configuration",
      "Bank feed automation & payment integration",
      "Third-party app stack advisory & integration",
    ],
  },
];

const outsourcingBenefits = [
  {
    title: "Significant Cost Savings",
    description:
      `Outsourcing your bookkeeping and payroll to ${COMPANY_NAME} eliminates the cost of in-house headcount — salaries, benefits, training, software licences, and management overhead. Most clients achieve savings of 40–60% compared to maintaining an equivalent internal function.`,
  },
  {
    title: "Expertise On Demand",
    description:
      "Rather than a single bookkeeper with limited expertise, you gain access to a team of certified accounting professionals — CPAs, enrolled agents, and payroll specialists — across every area of your financial operations.",
  },
  {
    title: "Scalability Without Friction",
    description:
      "As your business grows, acquires, or pivots, your outsourced accounting function scales with you — no recruitment delays, no redundancy risk, and no gap in coverage during peak periods or audit season.",
  },
  {
    title: "Reduced Compliance Risk",
    description:
      "Tax filing deadlines, payroll deposit schedules, and statutory reporting requirements are managed by specialists who do this every day. Penalties for late filings or payroll errors are virtually eliminated under our managed service model.",
  },
  {
    title: "Real-Time Financial Visibility",
    description:
      "Cloud-based platforms and automated bank feeds mean your financial data is current and accessible 24/7 — giving management the real-time visibility to make faster, better-informed decisions.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    tagline: "For early-stage businesses and sole traders",
    description:
      "Our Starter tier provides the essential bookkeeping and payroll services a growing business needs — without the overhead of an in-house hire. Ideal for businesses with straightforward transactions, a single entity, and up to 20 employees.",
    includes: [
      "Monthly bookkeeping & reconciliations",
      "Accounts payable & receivable management",
      "Payroll for up to 20 employees",
      "Monthly management P&L & balance sheet",
      "Year-end close preparation",
      "Dedicated bookkeeper & account manager",
    ],
    accent: "border-slate-200",
    badge: null,
  },
  {
    name: "Growth",
    tagline: "For scaling businesses with complex needs",
    description:
      "The Growth tier is designed for businesses that have outgrown basic bookkeeping. It includes multi-entity consolidation, advanced cash flow reporting, KPI dashboards, and access to senior accounting expertise for technical questions.",
    includes: [
      "Everything in Starter, plus:",
      "Multi-entity accounting & intercompany reconciliation",
      "Weekly cash flow forecasting",
      "Custom KPI dashboard & board pack",
      "Payroll for up to 100 employees",
      "Quarterly financial review with a CPA",
      "R&D credit identification review",
    ],
    accent: "border-blue-600",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    tagline: "For mid-market businesses and PE-backed companies",
    description:
      "Our Enterprise tier delivers a fully outsourced finance function — equivalent to an in-house Controller and team, without the fixed cost. Includes fractional CFO advisory, audit readiness, and bespoke reporting for lender or investor requirements.",
    includes: [
      "Everything in Growth, plus:",
      "Fractional CFO advisory (monthly strategy calls)",
      "Audit preparation & liaison with external auditors",
      "Unlimited payroll entities & employee count",
      "Custom ERP integration (NetSuite, Sage Intacct)",
      "Lender covenant reporting & compliance",
      "Dedicated senior accountant & CPA oversight",
    ],
    accent: "border-slate-800",
    badge: null,
  },
];

export default function BookkeepingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Bookkeeping & Payroll"
        description="Outsourced accounting and payroll services delivered by certified professionals — giving you accurate financials, payroll compliance, and real-time visibility without the cost of an in-house function."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Extended Finance Team</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Accurate, timely financial records are not just a compliance requirement — they are the foundation of every strategic and operational decision your business makes. Yet maintaining a high-quality in-house bookkeeping function is costly, time-consuming, and increasingly difficult as cloud technology and regulation evolve.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As an official {DBA_NAME} partner, {COMPANY_NAME}'s bookkeeping & payroll practice provides businesses of all sizes with access to a dedicated team of certified accounting professionals — delivering the accuracy, consistency, and analytical depth of a large finance department at a fraction of the cost.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: "3,500+", label: "Businesses Served" },
                { stat: "99.98%", label: "Payroll Accuracy Rate" },
                { stat: "40–60%", label: "Average Cost Reduction vs. In-House" },
                { stat: "48hr", label: "Average Onboarding Timeline" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-center gap-6 bg-slate-50 rounded-xl px-6 py-4 border border-slate-100">
                  <span className="text-2xl font-extrabold text-blue-800 shrink-0 w-24">{stat}</span>
                  <span className="text-sm font-medium text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Handle for You</h2>
            <p className="text-slate-600 max-w-2xl">
              A complete outsourced accounting and payroll service — from daily transaction processing to month-end reporting and cloud platform management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOfferings.map(({ icon: Icon, title, description, details }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Outsource to {COMPANY_NAME}?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              The case for outsourced accounting goes beyond cost. Here are five reasons industry-leading businesses choose to partner with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsourcingBenefits.map(({ title, description }, idx) => (
              <div key={title} className="bg-blue-800/50 border border-blue-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-blue-400">0{idx + 1}</span>
                  <h3 className="font-bold text-white">{title}</h3>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Tiers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three structured service tiers designed to match your business stage and complexity. All engagements are priced on a fixed monthly retainer — no hourly billing surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map(({ name, tagline, description, includes, accent, badge }) => (
              <Card key={name} className={cn("border-2 relative flex flex-col", accent)}>
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">{badge}</span>
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-extrabold text-slate-900">{name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{description}</p>
                  <ul className="space-y-2 flex-1">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      )}
                    >
                      Get a Custom Quote
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            All tiers are priced on a fixed monthly retainer based on your transaction volume and complexity. Contact us for a customised proposal.
          </p>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h3 className="text-center text-lg font-bold text-slate-700 mb-6">Cloud Platforms We Support</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "QuickBooks Online", "QuickBooks Desktop", "Xero", "Sage Intacct",
              "Sage 50", "FreshBooks", "NetSuite", "Microsoft Dynamics 365",
              "Wave", "Zoho Books", "Gusto (Payroll)", "ADP (Payroll)",
            ].map((platform) => (
              <span key={platform} className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Hand Off Your Books?</h2>
          <p className="text-slate-300 mb-10">
            {COMPANY_NAME} can onboard your business within 48 hours. Speak with a member of our team today to design a service package that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8")}
            >
              Start Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8")}
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
