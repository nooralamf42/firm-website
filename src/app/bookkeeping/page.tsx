"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Shield, ChevronRight, BookOpen, Calculator, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for freelancers and small businesses with straightforward finances.",
    features: [
      "Up to 100 transactions/month",
      "Monthly bank reconciliation",
      "Profit & loss statement",
      "Quarterly tax preparation",
      "Email support (24h response)",
      "1 user access to dashboard",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$699",
    period: "/month",
    description: "Ideal for growing businesses that need full-service accounting support.",
    features: [
      "Up to 500 transactions/month",
      "Weekly reconciliation",
      "Full financial reporting suite",
      "Payroll processing (up to 10 employees)",
      "Monthly strategy call with CPA",
      "Priority support (4h response)",
      "3 user access to dashboard",
      "QuickBooks setup & management",
    ],
    cta: "Start Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established companies needing a dedicated accounting team.",
    features: [
      "Unlimited transactions",
      "Daily reconciliation",
      "Dedicated CPA & bookkeeper",
      "Full payroll & HR accounting",
      "Board-ready financial reports",
      "Tax planning & optimization",
      "Audit preparation support",
      "Unlimited users",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Bookkeeping() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Bookkeeping</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <BookOpen className="w-3 h-3" />
              Accounting & Bookkeeping
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight text-balance">
              Human Touch +{" "}
              <span className="text-primary">Smart Automation</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Professional bookkeeping and accounting services powered by certified CPAs and cutting-edge automation. Know your numbers, grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground glow-cyan font-semibold">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calculator, title: "Certified CPAs", desc: "All work reviewed by licensed CPAs. You get expert-grade accuracy, not just data entry." },
              { icon: BarChart3, title: "Real-Time Dashboards", desc: "Live financial dashboards connected to your accounts. Know your cash position at any moment." },
              { icon: Shield, title: "Tax-Ready Financials", desc: "Your books are always audit-ready. We prepare quarterly and annual tax filings as part of the service." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="font-display text-4xl font-bold mt-3">Simple, Predictable Plans</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">No hidden fees. No long-term lock-in. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-primary/5 border-primary/40 glow-cyan relative"
                    : "bg-card border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground glow-cyan"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            All plans include a 7-day money-back guarantee. <Link href="/policies/refund" className="text-primary hover:underline">See our refund policy.</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
