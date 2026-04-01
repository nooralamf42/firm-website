import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  BarChart3,
  Search,
  Scale,
  TrendingUp,
  FileText,
  Shield,
  ArrowRight,
  DollarSign,
} from "lucide-react";

const serviceOfferings = [
  {
    icon: TrendingUp,
    title: "M&A Advisory",
    description:
      "Meridian provides buy-side and sell-side M&A advisory to corporate acquirers, private equity sponsors, and family-owned businesses. Our sector-specialist bankers and advisors deliver strategic analysis, target screening, process management, and negotiation support — with a focus on maximising transaction value and certainty of close.",
    offerings: [
      "Buy-side acquisition advisory & target identification",
      "Sell-side process management & exit readiness",
      "Fairness opinions & board advisory",
      "Management buyout (MBO) advisory",
      "Cross-border transaction coordination",
    ],
  },
  {
    icon: Search,
    title: "Transaction Services & Due Diligence",
    description:
      "Our transaction services teams provide financial, commercial, and operational due diligence to buyers and sellers. We identify value drivers, expose hidden liabilities, and analyse quality of earnings — giving deal teams the confidence to negotiate and sign with full information.",
    offerings: [
      "Quality of Earnings (QoE) analysis",
      "Financial & tax due diligence",
      "Working capital analysis & normalisation",
      "Synergy identification & validation",
      "Post-acquisition integration planning",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Valuations",
    description:
      "Meridian's valuation specialists apply rigorous quantitative methods — discounted cash flow, comparable company, and precedent transaction analyses — to provide defensible, independent valuations for financial reporting, tax, litigation, and transaction purposes.",
    offerings: [
      "Business enterprise & equity valuations",
      "Purchase price allocation (ASC 805 / IFRS 3)",
      "Goodwill impairment testing (ASC 350)",
      "Intangible asset valuations (brands, patents, customer lists)",
      "409A stock option valuations",
    ],
  },
  {
    icon: Scale,
    title: "Corporate Restructuring & Turnaround",
    description:
      "When companies face liquidity stress or operational distress, Meridian's restructuring professionals act swiftly and decisively. We advise boards, management teams, lenders, and creditors through in-court and out-of-court restructuring processes.",
    offerings: [
      "Liquidity management & 13-week cash flow",
      "Lender advisory & covenant renegotiation",
      "Chapter 11 / administration advisory",
      "Distressed M&A & stalking horse bids",
      "Business plan review & stress testing",
    ],
  },
  {
    icon: FileText,
    title: "Forensic Accounting",
    description:
      "Our forensic specialists investigate financial fraud, embezzlement, accounting irregularities, and asset misappropriation. We conduct investigations on behalf of boards, audit committees, regulators, and law enforcement agencies — with findings that withstand legal and regulatory scrutiny.",
    offerings: [
      "Financial statement fraud investigation",
      "Asset tracing & recovery",
      "Anti-bribery & corruption investigations",
      "Whistleblower response",
      "Regulatory & government investigations support",
    ],
  },
  {
    icon: Shield,
    title: "Litigation Support",
    description:
      "Meridian's experts provide independent economic analysis, lost profits calculations, and expert witness testimony in commercial disputes, arbitrations, and regulatory proceedings. Our reports are prepared to withstand cross-examination in the highest courts.",
    offerings: [
      "Expert witness reports & testimony",
      "Damages quantification",
      "Lost profits & business interruption analysis",
      "Intellectual property damage assessments",
      "Arbitration & mediation support",
    ],
  },
];

const transactionProcess = [
  {
    step: "01",
    title: "Mandate & Strategy",
    description: "We work with management and the board to define transaction objectives, assess strategic alternatives, and develop a detailed execution roadmap.",
  },
  {
    step: "02",
    title: "Preparation & Marketing",
    description: "Comprehensive information memoranda, financial models, and data room preparation. Buyer identification and outreach coordinated across our global network.",
  },
  {
    step: "03",
    title: "Negotiation & Diligence",
    description: "Management of the diligence process, Q&A, and negotiation of heads of terms. Coordination of legal, tax, and specialist advisors across all work streams.",
  },
  {
    step: "04",
    title: "Sign, Close & Integration",
    description: "Final documentation support, regulatory approvals, and conditions satisfaction. Post-close integration planning commences before day one.",
  },
];

const keyStats = [
  { value: "$200B+", label: "Transaction Value Advised (5-Year Cumulative)" },
  { value: "500+", label: "M&A Deals Completed" },
  { value: "150+", label: "Forensic Investigations Conducted Annually" },
  { value: "35", label: "Countries with Dedicated Transaction Teams" },
];

export default function FinancialAdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Financial Advisory"
        description="Independent, expert guidance through your most consequential financial decisions — from transformative M&A and complex valuations to distressed situations and forensic investigations."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted Counsel When the Stakes Are Highest</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The decisions that define an organisation's trajectory — a transformative acquisition, a strategic divestiture, a restructuring in distress — demand advisors who combine deep financial expertise with genuine independence and the courage to provide candid counsel.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Meridian's Financial Advisory practice brings together transaction specialists, valuation experts, forensic accountants, and restructuring advisors who have operated across every deal type, industry, and market cycle. We measure success by the outcomes we achieve for clients — not by transaction fees.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {keyStats.map(({ value, label }) => (
                <div key={label} className="flex items-center gap-6 bg-blue-900 text-white rounded-xl px-6 py-5">
                  <span className="text-3xl font-extrabold text-blue-300 shrink-0 w-28">{value}</span>
                  <span className="text-sm font-medium text-blue-100">{label}</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Advisory Service Lines</h2>
            <p className="text-slate-600 max-w-2xl">
              Integrated capabilities spanning the full spectrum of financial transactions, disputes, and corporate events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOfferings.map(({ icon: Icon, title, description, offerings }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {offerings.map((item) => (
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

      {/* Transaction Expertise */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Transaction Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A structured, disciplined process that maximises value and minimises execution risk across every deal type — domestic, cross-border, public, or private.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {transactionProcess.map(({ step, title, description }) => (
              <div key={step} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <span className="text-4xl font-black text-blue-600/30 block mb-3">{step}</span>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Transaction Types We Advise On</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Strategic Acquisitions", "Private Equity Buyouts", "Divestitures & Carve-Outs",
                "Joint Ventures & Partnerships", "IPO Readiness & Pre-IPO Advisory", "SPAC Transactions",
                "Debt & Equity Raises", "Capital Structure Optimisation", "Distressed Asset Acquisitions",
                "Cross-Border M&A", "Minority Stake Investments", "Secondary Market Transactions",
              ].map((type) => (
                <div key={type} className="flex items-center gap-2 text-sm text-slate-300">
                  <DollarSign className="h-4 w-4 text-blue-500 shrink-0" />
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Speak with Our Advisory Team</h2>
              <p className="text-blue-100 max-w-xl">
                Whether you are planning a transaction, facing a dispute, or navigating financial distress, Meridian's financial advisory professionals provide the expertise and objectivity your situation demands.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8")}
              >
                Request Advisory Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-blue-100 hover:text-white hover:bg-blue-800")}
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
