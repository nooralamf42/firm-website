import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import {
  CheckCircle2,
  Lock,
  Shield,
  Globe,
  FileText,
  TrendingUp,
  Users,
  ArrowRight,
  Landmark,
  Search,
} from "lucide-react";

const serviceAreas = [
  {
    icon: TrendingUp,
    title: "Enterprise Risk Management",
    description:
      "We help boards and executive teams build and mature enterprise risk management (ERM) frameworks — from initial risk appetite articulation and risk identification through to integrated risk reporting and scenario analysis.",
    offerings: [
      "Risk appetite framework design",
      "Risk identification workshops & heat mapping",
      "Integrated enterprise risk reporting",
      "Stress testing & scenario modelling",
      "Board-level risk governance advisory",
    ],
  },
  {
    icon: FileText,
    title: "Regulatory & Compliance",
    description:
      `Navigating an ever-expanding regulatory landscape demands structured, intelligence-led compliance programmes. ${COMPANY_NAME} maps your regulatory obligations, assesses gaps against current practice, and designs proportionate controls frameworks.`,
    offerings: [
      "Regulatory change management",
      "Compliance programme design & maturity assessment",
      "Anti-money laundering (AML) & KYC advisory",
      "Financial conduct & regulatory capital advisory",
      "Compliance monitoring & testing",
    ],
  },
  {
    icon: Lock,
    title: "Cybersecurity & Privacy",
    description:
      "Cyber threats represent one of the most material and rapidly evolving risks organisations face. Our cybersecurity team spans offensive security, defensive architecture, incident response, and privacy compliance — providing end-to-end risk reduction.",
    offerings: [
      "Cyber risk assessment & maturity benchmarking",
      "Penetration testing & red team exercises",
      "Zero-trust architecture & security design",
      "Incident response planning & crisis simulation",
      "GDPR, CCPA & DPDP privacy compliance",
    ],
  },
  {
    icon: Shield,
    title: "Internal Controls",
    description:
      "Robust internal controls are the bedrock of financial integrity and operational reliability. We assess, design, and test controls across financial reporting, operations, and compliance — aligned to COSO, COBIT, and ISO 31000 frameworks.",
    offerings: [
      "SOX 404 management & controls testing",
      "COSO-aligned controls framework design",
      "Controls automation advisory",
      "Segregation of duties (SoD) analysis",
      "Controls remediation programme management",
    ],
  },
  {
    icon: Globe,
    title: "ESG & Sustainability Risk",
    description:
      "Climate risk, human rights obligations, and sustainability governance are no longer peripheral concerns — they are mainstream risk management disciplines with direct regulatory, financial, and reputational consequences.",
    offerings: [
      "Climate risk assessment (physical & transition)",
      "TCFD & CSRD reporting readiness",
      "ESG governance framework design",
      "Scope 1, 2 & 3 emissions data assurance",
      "Human rights due diligence (UN Guiding Principles)",
    ],
  },
  {
    icon: Users,
    title: "Third-Party Risk Management",
    description:
      "As organisations outsource more critical functions and rely on complex supplier networks, third-party risk has become a strategic boardroom concern. We design scalable third-party risk programmes from initial vendor classification to continuous monitoring.",
    offerings: [
      "Third-party risk framework design",
      "Vendor due diligence & onboarding",
      "Concentration & sub-contractor risk analysis",
      "Outsourcing regulatory compliance (EBA, DORA)",
      "Continuous third-party monitoring",
    ],
  },
];

const frameworkComponents = [
  {
    number: "01",
    title: "Governance & Accountability",
    description:
      "Clear risk ownership at board, executive, and operational levels. Defined three lines of defence model with unambiguous accountability for risk identification, management, and assurance.",
  },
  {
    number: "02",
    title: "Risk Identification & Assessment",
    description:
      "Structured methodologies — quantitative and qualitative — for identifying, assessing, and prioritising risks across strategic, financial, operational, and reputational dimensions.",
  },
  {
    number: "03",
    title: "Risk Appetite & Tolerance",
    description:
      "Board-approved risk appetite statements translated into operational risk tolerances and limits that guide decision-making at every level of the organisation.",
  },
  {
    number: "04",
    title: "Controls & Mitigation",
    description:
      "Proportionate, cost-effective controls designed to reduce risks to within appetite — supplemented by insurance, contractual risk transfer, and contingency planning.",
  },
  {
    number: "05",
    title: "Monitoring, Reporting & Assurance",
    description:
      "Real-time risk dashboards, periodic risk committee reporting, and independent internal audit assurance — creating a closed-loop risk management cycle.",
  },
];

const regulatoryLandscape = [
  { reg: "Sarbanes-Oxley (SOX)", detail: "US public company internal controls & financial reporting" },
  { reg: "GDPR / CCPA / DPDP", detail: "Data protection & privacy regulations across key jurisdictions" },
  { reg: "Basel IV", detail: "Bank capital adequacy, credit risk, and operational risk frameworks" },
  { reg: "DORA (EU)", detail: "Digital Operational Resilience Act — ICT risk for financial entities" },
  { reg: "NIST CSF 2.0", detail: "Cybersecurity framework for critical infrastructure" },
  { reg: "TCFD / ISSB IFRS S2", detail: "Climate-related financial disclosures for institutional reporting" },
  { reg: "EU CSRD", detail: "Corporate Sustainability Reporting Directive — mandatory ESG assurance" },
  { reg: "OFAC / UK Sanctions", detail: "Sanctions screening and financial crime compliance" },
];

export default function RiskAdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Risk Advisory"
        description="Proactive, integrated risk management solutions that protect your organisation's value, reputation, and licence to operate — in an era of escalating complexity."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Risk Is Not Just a Threat — It Is a Source of Competitive Advantage</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Organisations that identify and manage risk more effectively than their peers are better positioned to seize opportunities, maintain regulatory confidence, and sustain long-term value creation. {COMPANY_NAME}'s Risk Advisory practice helps clients build that capability.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our risk professionals combine deep regulatory knowledge with practical controls implementation experience. We are former regulators, chief risk officers, cybersecurity specialists, and sustainability experts — with one shared goal: helping you manage risk on your terms.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Risk Advisory Services</h2>
            <p className="text-slate-600 max-w-2xl">
              Six practice areas covering the full risk spectrum — designed to be engaged individually or as an integrated enterprise risk programme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map(({ icon: Icon, title, description, offerings }) => (
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

      {/* Framework */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Risk Management Framework</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our five-component framework — built on COSO ERM, ISO 31000, and industry-leading practice — provides a structured foundation for sustainable risk management capability.
            </p>
          </div>
          <div className="space-y-4">
            {frameworkComponents.map(({ number, title, description }) => (
              <div key={number} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex gap-6 items-start">
                <span className="text-4xl font-black text-blue-600/40 shrink-0 w-12">{number}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Landscape */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-4">
              <Landmark className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Regulatory Landscape Advisory</h2>
                <p className="text-slate-500 mt-1">Keeping pace with the regulatory regimes that affect your industry and jurisdiction</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              The global regulatory environment continues to intensify. From new cybersecurity mandates and digital operational resilience requirements to climate disclosure obligations and sanctions expansion, compliance obligations are proliferating across every industry and jurisdiction. {COMPANY_NAME}'s regulatory specialists maintain real-time horizon scanning capabilities across all major regulatory bodies, providing clients with early warning and structured compliance roadmaps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regulatoryLandscape.map(({ reg, detail }) => (
              <div key={reg} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Search className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-sm block">{reg}</span>
                  <span className="text-sm text-slate-500">{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Build Resilience. Protect Value.</h2>
              <p className="text-blue-100 max-w-xl">
                Connect with our Risk Advisory team to discuss your current risk exposure, upcoming regulatory requirements, or a specific incident or investigation.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8")}
              >
                Speak with a Risk Specialist <ArrowRight className="ml-2 h-4 w-4" />
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
