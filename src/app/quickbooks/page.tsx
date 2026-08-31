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
  Star,
  ArrowRight,
  Users,
  Code2,
  Layers,
  ShieldCheck,
  Gauge,
  Plus,
  Minus,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ── OLD QuickBooks subscription products (commented out — replaced by TallyTech plans below) ──
// const products = [
//   { id: "simple-start", name: "QuickBooks Simple Start", price: 30, ... },
//   { id: "plus",         name: "QuickBooks Plus",         price: 85, ... },
//   { id: "advanced",     name: "QuickBooks Advanced",     price: 200, ... },
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

const engineerPerks = [
  { icon: Code2,       label: "React, Next.js, Node & Python" },
  { icon: Layers,      label: "Frontend, backend & infra" },
  { icon: ShieldCheck, label: "NDA & IP assignment" },
  { icon: Gauge,       label: "Scale hours monthly" },
];

export default function QuickBooks() {
  const [annual, setAnnual] = useState(false);
  const [engineers, setEngineers] = useState(1);
  const [hours, setHours] = useState(80);

  function displayPrice(plan: typeof plans[0]) {
    const price = annual ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
    return `$${price.toLocaleString()}`;
  }

  function priceNote(plan: typeof plans[0]) {
    if (plan.annualNote && annual) return "starting, billed annually";
    if (plan.annualNote) return plan.annualNote;
    return annual ? "billed annually" : "per month";
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
      <section id="plans" className="py-24 pb-32 bg-background">
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
                    <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{priceNote(plan)}</p>

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

      {/* ── Engineer Hiring Calculator ───────────────────────────────────────── */}
      <section id="engineers" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-2 lg:items-center"
        >
          {/* Left — description */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              On-demand engineering
            </div>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
              Hire senior full-stack engineers
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Vetted senior engineers who plug straight into your stack and sprint. Flat{" "}
              <span className="font-semibold text-foreground">$25/hour</span>{" "}
              — no recruiter fees, no long contracts. Adjust the team size and monthly hours to see your commitment update live.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {engineerPerks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — live calculator */}
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
            {/* Engineers counter */}
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

            {/* Hours slider */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  Hours / month
                </span>
                <span className="font-mono text-lg tabular-nums font-semibold">{hours}h</span>
              </div>
              <div className="relative">
                <input
                  id="hours-slider"
                  type="range"
                  min={10}
                  max={320}
                  step={10}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  aria-label="Monthly hours per engineer"
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                <span>10h · part-time</span>
                <span>160h · full-time</span>
                <span>320h</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Rate</span>
                <span className="font-mono text-xs sm:text-sm">$25.00 / hr</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>{engineers} × {hours}h</span>
                <span className="font-mono text-xs sm:text-sm">{engineers * hours} hrs / mo</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-medium">Estimated monthly</span>
                <span className="font-display text-2xl font-bold sm:text-3xl">
                  ${(engineers * hours * 25).toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact" className="mt-6 block">
              <Button
                id="cta-reserve-engineers"
                className="w-full bg-primary text-primary-foreground font-semibold glow-cyan hover:bg-primary/90 rounded-full"
              >
                Reserve engineers <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Billed monthly · pause or rescale anytime · first week satisfaction guarantee
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
