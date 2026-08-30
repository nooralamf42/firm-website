"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle,
  Info,
  ChevronRight,
  Zap,
  Rocket,
  Cpu,
  Building2,
  Bot,
  Users,
  Star,
  Code2,
  Layers,
  ShieldCheck,
  Gauge,
  Plus,
  Minus,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ── OLD QuickBooks subscription products (commented out — replaced by TallyTech plans below) ──
// const products = [
//   {
//     id: "simple-start",
//     name: "QuickBooks Simple Start",
//     price: 30,
//     description: "Ideal for solopreneurs and freelancers.",
//     features: ["Income & expense tracking", "Invoice & payment processing", "Tax deductions tracking", "1 user", "Mobile app access"],
//   },
//   {
//     id: "plus",
//     name: "QuickBooks Plus",
//     price: 85,
//     description: "Perfect for small businesses that need project tracking, inventory, and up to 5 users.",
//     features: ["Everything in Simple Start", "Inventory management", "Project profitability tracking", "5 users", "Bill management", "Budget creation"],
//     popular: true,
//   },
//   {
//     id: "advanced",
//     name: "QuickBooks Advanced",
//     price: 200,
//     description: "For growing businesses that need advanced analytics, automation, and up to 25 users.",
//     features: ["Everything in Plus", "25 users", "Advanced reporting & analytics", "Workflow automation", "Dedicated customer success manager", "On-demand online training"],
//   },
// ];

// ── Current Software Plans ─────────────────────────────────────────────────────
const plans = [
  {
    name: "Launch",
    icon: Rocket,
    description: "For founders validating a product and shipping a first release.",
    monthlyPrice: 149,
    aiCredits: "2,000 AI credits / mo",
    highlighted: false,
    cta: "Start with Launch",
    inheritLabel: null,
    annualNote: null,
    features: [
      "Core SaaS platform access",
      "2,000 AI credits included monthly",
      "1 AI-built custom module / mo",
      "Prebuilt component & template library",
      "1 project workspace · up to 3 seats",
      "Usage & AI-credit spend tracking",
      "Automated invoicing & payment processing",
      "Mobile app access (iOS & Android)",
      "Email support · 48h response",
      "99.5% uptime SLA",
      "Weekly automated backups",
    ],
  },
  {
    name: "Studio",
    icon: Cpu,
    description: "For teams scaling a real product with AI-driven delivery.",
    monthlyPrice: 549,
    aiCredits: "15,000 AI credits / mo",
    highlighted: true,
    cta: "Scale with Studio",
    inheritLabel: "Everything in Launch, plus:",
    annualNote: null,
    features: [
      "Full SaaS suite + white-label option",
      "15,000 AI credits included monthly",
      "AI custom software dev · up to 3 modules / mo",
      "AI code review + automated test generation",
      "Staging & production environments",
      "Unlimited workspaces · up to 15 seats",
      "Project profitability & delivery tracking",
      "Team budgets & credit-spend controls",
      "Bill management & consolidated billing",
      "Priority support · 4h + dedicated Slack",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "For organizations needing bespoke systems, security & scale.",
    monthlyPrice: 1999,
    aiCredits: "Unlimited AI credits (fair use)",
    highlighted: false,
    cta: "Talk to sales",
    inheritLabel: "Everything in Studio, plus:",
    annualNote: "starting, billed custom",
    features: [
      "Up to 25 seats included (expandable)",
      "Dedicated AI dev pod + senior engineers",
      "Unlimited AI credits under fair use",
      "Advanced reporting, analytics & forecasting",
      "Workflow automation & custom integrations",
      "Bespoke architecture & security review",
      "SSO / SAML, RBAC & full audit logs",
      "On-prem / private VPC deployment",
      "Dedicated customer success manager",
      "On-demand onboarding & team training",
      "24/7 support · 1h SLA + dedicated TAM",
      "99.99% uptime SLA + custom contracts",
    ],
  },
];

// ── Feature comparison table data ─────────────────────────────────────────────
const compareGroups = [
  {
    label: "Platform & SaaS",
    rows: [
      { feature: "Hosted SaaS platform", launch: "Core", studio: "Full suite", enterprise: "Full + on-prem" },
      { feature: "White-label branding", launch: false, studio: true, enterprise: true },
      { feature: "Project workspaces", launch: "1", studio: "Unlimited", enterprise: "Unlimited" },
      { feature: "Team seats", launch: "3", studio: "15", enterprise: "25+" },
      { feature: "Environments", launch: "Production", studio: "Staging + Prod", enterprise: "Custom pipelines" },
    ],
  },
  {
    label: "Business & operations",
    rows: [
      { feature: "Usage & spend tracking", launch: true, studio: true, enterprise: true },
      { feature: "Invoicing & payment processing", launch: true, studio: true, enterprise: true },
      { feature: "Project profitability tracking", launch: false, studio: true, enterprise: true },
      { feature: "Budgets & credit-spend controls", launch: false, studio: true, enterprise: true },
      { feature: "Reporting, analytics & forecasting", launch: "Basic", studio: "Advanced", enterprise: "Advanced + custom" },
      { feature: "Workflow automation", launch: false, studio: "Add-on", enterprise: true },
    ],
  },
  {
    label: "AI & custom development",
    rows: [
      { feature: "AI credits / month", launch: "2,000", studio: "15,000", enterprise: "∞" },
      { feature: "AI-built modules / month", launch: "1", studio: "3", enterprise: "Unlimited" },
      { feature: "AI code review & tests", launch: false, studio: true, enterprise: true },
      { feature: "Dedicated AI dev pod", launch: false, studio: false, enterprise: true },
      { feature: "Custom architecture review", launch: false, studio: "Add-on", enterprise: true },
    ],
  },
  {
    label: "Support & security",
    rows: [
      { feature: "Support response", launch: "48h email", studio: "4h priority", enterprise: "1h · 24/7" },
      { feature: "Uptime SLA", launch: "99.5%", studio: "99.9%", enterprise: "99.99%" },
      { feature: "SSO / SAML & RBAC", launch: false, studio: false, enterprise: true },
      { feature: "Audit logs", launch: false, studio: "Basic", enterprise: "Advanced" },
      { feature: "Customer success manager", launch: false, studio: false, enterprise: "Dedicated" },
      { feature: "On-demand onboarding & training", launch: "Docs", studio: "Guided", enterprise: "Dedicated sessions" },
      { feature: "Dedicated TAM", launch: false, studio: false, enterprise: true },
    ],
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What exactly is an AI credit?",
    a: "One credit maps to roughly one AI action — a generation, an edit, a code review pass, or a test suite run. Heavier jobs (multi-file refactors, full module scaffolds) consume more, and every plan shows live usage in your dashboard.",
  },
  {
    q: "Can I combine a subscription with top-up credits and hired engineers?",
    a: "Yes. Most teams run a Studio subscription, top up AI credits during heavy sprints, and add senior engineers by the hour when they need human delivery. Everything is billed under one account.",
  },
  {
    q: "How does hiring senior developers work?",
    a: "You pick the number of full-stack engineers and monthly hours. Engineers are vetted seniors who plug into your workflow — you're billed a flat $25/hour with no recruiter fees, and you can scale hours up or down every month.",
  },
  {
    q: "Do unused AI credits roll over?",
    a: "Subscription credits reset monthly. Purchased top-up packs never expire, so buy them ahead of a launch and draw them down whenever you need the extra headroom.",
  },
  {
    q: "Can I change or cancel my plan?",
    a: "Upgrade, downgrade, or cancel anytime from billing. Upgrades apply instantly with prorated credit; downgrades and cancellations take effect at the end of the current cycle.",
  },
];

const creditPacks = [
  { name: "Spark", credits: "5,000", price: 39, savings: null },
  { name: "Surge", credits: "25,000", price: 149, savings: "Save 23%" },
  { name: "Fusion", credits: "100,000", price: 499, savings: "Save 36%" },
];

const engineerPerks = [
  { icon: Code2, label: "React, Next.js, Node & Python" },
  { icon: Layers, label: "Frontend, backend & infra" },
  { icon: ShieldCheck, label: "NDA & IP assignment" },
  { icon: Gauge, label: "Scale hours monthly" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return <CheckCircle className="w-4 h-4 text-primary mx-auto" aria-hidden="true" />;
  if (value === false)
    return <span className="text-muted-foreground/40 text-sm">—</span>;
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export default function QuickBooks() {
  const [annual, setAnnual] = useState(false);
  const [engineers, setEngineers] = useState(1);
  const [hours, setHours] = useState(80);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const engineerCost = engineers * hours * 25;

  function displayPrice(plan: typeof plans[0]) {
    if (plan.annualNote) return `$${plan.monthlyPrice.toLocaleString()}`;
    const price = annual ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
    return `$${price.toLocaleString()}`;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">QuickBooks</span>
            </div>

            {/* Reseller Disclaimer */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 flex items-start gap-3 max-w-3xl">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Authorised Reseller Notice:</strong> INNOVATIVE NATIONAL TAX &amp; UPKEEP INTERNATIONAL TALLY PTY LTD (ABN 75 696 801 895) is an Authorised Reseller of QuickBooks software in Australia. QuickBooks® is a registered trademark of Intuit Inc. National Tally Tech is not affiliated with, endorsed by, or a subsidiary of Intuit Inc. Pricing is in AUD and is subject to change by Intuit at any time. GST may apply.
              </p>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight text-balance">
              QuickBooks <span className="text-primary">Software</span> Sales
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Purchase genuine QuickBooks licenses through our authorized reseller channel. Setup support and onboarding included with every purchase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Software Plans ───────────────────────────────────────────────────── */}
      <section id="plans" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
              <button
                id="billing-monthly"
                type="button"
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${!annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Monthly
              </button>
              <button
                id="billing-annual"
                type="button"
                onClick={() => setAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Annual
                <span className="rounded-full bg-primary/20 text-primary px-2 py-0.5 text-[11px] font-semibold">−20%</span>
              </button>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const PlanIcon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-3xl border p-7 ${
                    plan.highlighted ? "border-primary bg-card glow-cyan" : "border-border bg-card"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      Most popular
                    </span>
                  )}

                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${plan.highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                      <PlanIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
                  </div>

                  <p className="mt-3 min-h-10 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="font-display text-4xl font-bold tracking-tight">{displayPrice(plan)}</span>
                    {!plan.annualNote && <span className="mb-1 text-sm text-muted-foreground">/mo</span>}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.annualNote ? plan.annualNote : annual ? "billed annually" : "per month"}
                  </p>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5">
                    <Zap className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">{plan.aiCredits}</span>
                  </div>

                  <Link href="/contact" className="mt-6">
                    <Button
                      id={`cta-plan-${plan.name.toLowerCase()}`}
                      className={`w-full font-semibold rounded-full ${plan.highlighted ? "bg-primary text-primary-foreground glow-cyan hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>

                  <ul className="mt-7 space-y-3 flex-1">
                    {plan.inheritLabel && (
                      <li className="text-sm font-medium text-foreground pt-1">{plan.inheritLabel}</li>
                    )}
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            All plans include SOC 2-aligned infrastructure, encrypted data at rest, and no setup fees. Prices in USD, excluding local taxes.
          </p>
        </div>
      </section>

      {/* ── AI Credit Top-ups ────────────────────────────────────────────────── */}
      <section id="credits" className="max-w-6xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-7 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <Bot className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              Add-on · AI credit top-ups
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Lock className="w-3 h-3" aria-hidden="true" />
              Portal account login required
            </div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Top up AI credits for edits &amp; generations
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Out of monthly credits mid-sprint? Stack top-up packs onto any subscription. Credits power AI edits, code generation, reviews, and test runs — and purchased packs never expire.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {creditPacks.map((pack) => (
              <div key={pack.name} className="flex flex-col rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{pack.name}</span>
                  {pack.savings && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
                      {pack.savings}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-semibold">{pack.credits}</span>
                  <span className="text-xs text-muted-foreground">credits</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">${pack.price} per pack</p>
                <Link href="/contact" className="mt-5">
                  <Button
                    id={`credits-${pack.name.toLowerCase()}`}
                    variant="outline"
                    className="w-full text-sm font-medium border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    Get {pack.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Engineer Hiring Calculator ───────────────────────────────────────── */}
      <section id="engineers" className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              On-demand engineering
            </div>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
              Hire senior full-stack engineers
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Vetted senior engineers who plug straight into your stack and sprint. Flat{" "}
              <span className="font-mono text-foreground font-semibold">$25/hour</span>{" "}
              — no recruiter fees, no long contracts. Adjust the team size and monthly hours to see your commitment update live.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {engineerPerks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Engineers</span>
              <div className="flex items-center gap-3">
                <button
                  id="engineer-decrease"
                  type="button"
                  aria-label="Decrease engineers"
                  onClick={() => setEngineers(Math.max(1, engineers - 1))}
                  disabled={engineers <= 1}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary disabled:opacity-40 cursor-pointer"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="font-mono w-8 text-center text-lg tabular-nums">{engineers}</span>
                <button
                  id="engineer-increase"
                  type="button"
                  aria-label="Increase engineers"
                  onClick={() => setEngineers(engineers + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary cursor-pointer"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium">Hours / month</span>
              <div className="flex items-center gap-3">
                <button
                  id="hours-decrease"
                  type="button"
                  aria-label="Decrease hours"
                  onClick={() => setHours(Math.max(10, hours - 10))}
                  disabled={hours <= 10}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary disabled:opacity-40 cursor-pointer"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="font-mono w-10 text-center text-lg tabular-nums">{hours}</span>
                <button
                  id="hours-increase"
                  type="button"
                  aria-label="Increase hours"
                  onClick={() => setHours(hours + 10)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary cursor-pointer"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">
                  {engineers} eng{engineers !== 1 ? "s" : ""} × {hours}h × $25/hr
                </span>
                <span className="font-display text-2xl font-bold text-primary">
                  ${engineerCost.toLocaleString()}
                  <span className="text-sm font-normal text-muted-foreground"> /mo</span>
                </span>
              </div>
              <Link href="/contact" className="mt-4 block">
                <Button
                  id="cta-hire-engineers"
                  className="w-full bg-primary text-primary-foreground font-semibold glow-cyan hover:bg-primary/90 rounded-full"
                >
                  Get started with engineers <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Billed monthly · pause or rescale anytime · first week satisfaction guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Compare every detail ─────────────────────────────────────────────── */}
      <section id="compare" className="max-w-6xl mx-auto mt-16 scroll-mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Compare every detail</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            A full breakdown of what each subscription includes across platform, AI, and support.
          </p>
        </div>
        <p className="mb-3 text-center text-[11px] text-muted-foreground lg:hidden">Swipe horizontally to see all plans →</p>

        <div className="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:px-0">
          <div className="min-w-[600px] overflow-hidden rounded-3xl border border-border bg-card lg:min-w-0">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-border bg-background/50">
              <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
              <div className="p-4 text-center text-sm font-semibold">Launch</div>
              <div className="p-4 text-center text-sm font-semibold text-primary">Studio</div>
              <div className="p-4 text-center text-sm font-semibold">Enterprise</div>
            </div>

            {compareGroups.map((group) => (
              <div key={group.label}>
                <div className="bg-background/30 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {group.label}
                </div>
                {group.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-t border-border/60">
                    <div className="p-4 text-sm leading-snug text-muted-foreground">{row.feature}</div>
                    <div className="flex items-center justify-center p-4 text-center">
                      <CellValue value={row.launch} />
                    </div>
                    <div className="flex items-center justify-center p-4 text-center">
                      <CellValue value={row.studio} />
                    </div>
                    <div className="flex items-center justify-center p-4 text-center">
                      <CellValue value={row.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-right text-[11px] text-muted-foreground">* Unlimited under fair-use policy.</p>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-3xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="font-display mb-8 text-center text-2xl sm:text-3xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <button
                id={`faq-${i}`}
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium"
              >
                {faq.q}
                <Plus
                  className={`w-4 h-4 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {openFaq === i && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
