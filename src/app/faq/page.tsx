"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown, ChevronRight, Shield, Lock, Clock, Mail } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We are PCI DSS Level 1 compliant and do not store or transmit raw payment card data. Our infrastructure runs on SOC 2 certified cloud providers.",
  },
  {
    q: "What is the delivery time for QuickBooks software?",
    a: "QuickBooks license keys and access credentials are emailed immediately upon successful payment confirmation, typically within 2–5 minutes. If you do not receive your email within 30 minutes, please contact support@nexgentech.com.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 7-Day Money-Back Guarantee on all software purchases and consulting services. For software, refunds are available if the activation key has not been redeemed within 7 calendar days of purchase. For services, refunds are prorated based on hours worked. See our full Refund Policy for details.",
  },
  {
    q: "Are you an authorized QuickBooks reseller?",
    a: "Yes. NexGen Tech Solutions is an authorized reseller of QuickBooks software. QuickBooks is a registered trademark of Intuit Inc. Pricing is subject to change by Intuit and reflects our current reseller rates.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer monthly and annual subscription plans for our software products. For consulting and development services, we offer milestone-based payment schedules. Contact our sales team for details.",
  },
  {
    q: "How long does a typical software development project take?",
    a: "Project timelines vary by scope: MVPs typically take 8–12 weeks, full-featured platforms 3–6 months, and enterprise systems 6–12 months. We provide detailed project timelines during our initial consultation and adhere to agreed-upon milestones.",
  },
  {
    q: "What support do you provide after launch?",
    a: "All projects include a 30-day post-launch support period at no additional cost. We offer ongoing maintenance and support packages starting at $299/month, which include bug fixes, security patches, and performance monitoring.",
  },
  {
    q: "How do you handle intellectual property (IP)?",
    a: "All custom code written for your project is fully owned by you upon final payment. We provide complete source code transfer and documentation. We sign NDAs before commencing any project. Our outsourcing and ODC clients retain 100% IP ownership.",
  },
  {
    q: "Can I upgrade or downgrade my QuickBooks plan?",
    a: "Yes. You can upgrade or downgrade your QuickBooks plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of the next billing cycle. Contact support@nexgentech.com for assistance.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "We work with both. Approximately 40% of our clients are early-stage startups and we have dedicated startup packages. The remaining 60% are mid-market and enterprise clients. We tailor our engagement model to your stage and budget.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-5 text-sm text-muted-foreground leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">FAQ</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Help Center</span>
            <h1 className="font-display text-5xl font-bold mt-3">Frequently Asked Questions</h1>
            <p className="mt-4 text-muted-foreground text-lg">Everything you need to know about our services, security, and policies.</p>
          </motion.div>

          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { icon: Shield, text: "Security", href: "#security" },
              { icon: Clock, text: "Delivery", href: "#delivery" },
              { icon: Lock, text: "Refunds", href: "/policies/refund" },
              { icon: Mail, text: "Contact", href: "/contact" },
            ].map(({ icon: Icon, text, href }) => (
              <Link
                key={text}
                href={href}
                className="flex items-center gap-2 p-3 bg-card border border-border rounded-xl text-sm hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary" />
                {text}
              </Link>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-10 text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="font-display font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">Our support team is available Monday–Friday 8am–8pm PST.</p>
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
