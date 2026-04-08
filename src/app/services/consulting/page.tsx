import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import {
  CheckCircle2,
  Cpu,
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  BarChart3,
  ArrowRight,
  PieChart,
} from "lucide-react";

const serviceOfferings = [
  {
    icon: TrendingUp,
    title: "Business Transformation",
    description:
      "End-to-end transformation programmes that realign operating models, cost structures, and capabilities to a company's evolving strategic direction. We use quantitative value-at-stake analysis to prioritise initiatives with the highest potential return.",
    capabilities: [
      "Operating model redesign",
      "Strategic cost reduction",
      "Post-merger integration",
      "Carve-out planning and execution",
    ],
  },
  {
    icon: Cpu,
    title: "Digital Strategy",
    description:
      "We help leadership teams define and execute technology-enabled growth strategies — from AI adoption roadmaps and digital product development to platform business model design and enterprise architecture.",
    capabilities: [
      "AI & automation strategy",
      "Digital operating model",
      "Cloud adoption planning",
      "Data & analytics governance",
    ],
  },
  {
    icon: BarChart3,
    title: "Operational Excellence",
    description:
      "Lean methodology, process mining, and advanced analytics drive measurable improvements in productivity, quality, and throughput across manufacturing, shared services, and back-office functions.",
    capabilities: [
      "Process mining & optimisation",
      "Shared services design",
      "Procurement transformation",
      "Working capital improvement",
    ],
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Transformations succeed when people are engaged, equipped, and aligned. Our change management practice embeds behavioural change capabilities into every programme — reducing adoption risk and accelerating time to value.",
    capabilities: [
      "Stakeholder engagement strategy",
      "Leadership alignment programmes",
      "Training & capability uplift",
      "Change impact assessment",
    ],
  },
  {
    icon: Globe,
    title: "Supply Chain Optimisation",
    description:
      "We design resilient, cost-efficient supply chains that balance service levels, working capital, and environmental impact. Our digital supply chain solutions integrate real-time data from suppliers to consumers.",
    capabilities: [
      "Network design & footprint review",
      "Inventory optimisation",
      "Supplier risk & resilience",
      "Demand sensing & forecasting",
    ],
  },
  {
    icon: PieChart,
    title: "Finance Function Transformation",
    description:
      "We work with CFOs to modernise financial planning & analysis, accelerate close cycles, implement zero-based budgeting, and automate financial reporting — transforming finance from a backward-looking reporting engine to a forward-looking strategic partner.",
    capabilities: [
      "FP&A model redesign",
      "Close & consolidation acceleration",
      "Finance technology selection",
      "Data-driven CFO office",
    ],
  },
];

const methodologySteps = [
  {
    step: "Diagnose",
    number: "01",
    description:
      "We conduct a rapid diagnostic — typically two to four weeks — that combines structured interviews with leadership, quantitative benchmarking against industry peers, and process observation to establish a fact-based baseline and identify the highest-impact opportunities.",
  },
  {
    step: "Design",
    number: "02",
    description:
      "Working collaboratively with your teams, we co-design the target state: the future operating model, the technology architecture, the organisational structure, and the financial business case. Our designs are grounded in implementability, not theoretical perfection.",
  },
  {
    step: "Deliver",
    number: "03",
    description:
      `${COMPANY_NAME}'s programme managers and subject matter specialists embed alongside your teams to execute. We use agile delivery sprints with defined milestones, KPI dashboards, and escalation protocols — ensuring momentum and accountability throughout.`,
  },
  {
    step: "Sustain",
    number: "04",
    description:
      "Value leaks when transformation ends but the organisation reverts. Our sustainment framework transfers capability, establishes governance routines, and embeds continuous improvement disciplines so that gains persist and compound over time.",
  },
];

const featuredCapabilities = [
  {
    icon: Cpu,
    title: "Technology Adoption",
    description:
      "From ERP consolidation and SaaS platform migrations to enterprise AI deployment, we de-risk technology change through vendor-agnostic selection, robust programme governance, and end-user adoption strategies.",
    tags: ["SAP S/4HANA", "Salesforce", "ServiceNow", "Workday", "Microsoft Azure"],
  },
  {
    icon: BarChart3,
    title: "Process Redesign",
    description:
      "Using process mining tools (Celonis, UiPath Process Mining) and Lean Six Sigma methodology, we map, analyse, and redesign core business processes to eliminate waste, reduce cycle time, and improve quality.",
    tags: ["Lean Six Sigma", "Process Mining", "RPA", "Intelligent Automation"],
  },
  {
    icon: Users,
    title: "Workforce Transformation",
    description:
      "As AI and automation reshape the skills landscape, we help organisations reskill workforces, redesign job architectures, and build talent pipelines for the capabilities that will drive future competitive advantage.",
    tags: ["Skills Assessment", "Reskilling Programmes", "Org Design", "HR Transformation"],
  },
  {
    icon: Globe,
    title: "ESG Strategy & Integration",
    description:
      "We help management teams translate ESG commitments into embedded business practices — from net-zero pathway modelling and Scope 3 emissions measurement to supply chain sustainability and CSRD reporting readiness.",
    tags: ["Net-Zero Pathways", "CSRD Readiness", "Scope 3 Emissions", "Sustainable Procurement"],
  },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Consulting"
        description="Strategy, digital transformation, and operational improvement — delivered by sector specialists who understand that sustainable change requires both rigorous analytics and deep human insight."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transforming for Sustained Competitive Advantage</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Business transformation has never been more urgent — or more complex. Technological disruption, margin pressure, evolving workforce dynamics, and the imperative of ESG are forcing organisations to rethink every dimension of how they operate and compete.
          </p>
          <p className="text-slate-600 leading-relaxed">
            {COMPANY_NAME}'s consulting practice is built differently from traditional strategy firms. We combine strategic insight with implementation capability — and we hold ourselves accountable to delivering the financial and operational outcomes we identify, not just the recommendations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Consulting Service Areas</h2>
            <p className="text-slate-600 max-w-2xl">
              Six interconnected practices, each staffed by specialists, designed to work independently or as a coordinated transformation programme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOfferings.map(({ icon: Icon, title, description, capabilities }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Consulting Methodology</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A repeatable, proven four-phase framework that balances strategic ambition with operational realism — and keeps value delivery at the centre of every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologySteps.map(({ step, number, description }) => (
              <div key={step} className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black text-blue-600/20">{number}</span>
                <h3 className="text-xl font-bold text-blue-400 mb-3">{step}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Capabilities</h2>
            <p className="text-slate-600 max-w-2xl">
              Specialist capabilities that underpin our consulting engagements — available as standalone advisory or integrated within a broader transformation programme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCapabilities.map(({ icon: Icon, title, description, tags }) => (
              <Card key={title} className="border-slate-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600 leading-relaxed mb-4">{description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Organisation?</h2>
          <p className="text-blue-100 mb-10">
            Whether you are launching a transformation programme, responding to market disruption, or seeking to unlock value in your operations, {COMPANY_NAME}'s consulting professionals are ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8")}
            >
              Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/industries"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent border-blue-300 text-white hover:bg-blue-800 px-8")}
            >
              View Industry Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
