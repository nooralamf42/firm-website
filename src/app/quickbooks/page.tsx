"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle, Shield, Info, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { toast } from "sonner";

const products = [
  {
    id: "simple-start",
    name: "QuickBooks Simple Start",
    price: 30,
    description: "Ideal for solopreneurs and freelancers. Track income & expenses, send invoices, and maximize tax deductions.",
    features: ["Income & expense tracking", "Invoice & payment processing", "Tax deductions tracking", "1 user", "Mobile app access"],
  },
  {
    id: "plus",
    name: "QuickBooks Plus",
    price: 85,
    description: "Perfect for small businesses that need project tracking, inventory, and up to 5 users.",
    features: ["Everything in Simple Start", "Inventory management", "Project profitability tracking", "5 users", "Bill management", "Budget creation"],
    popular: true,
  },
  {
    id: "advanced",
    name: "QuickBooks Advanced",
    price: 200,
    description: "For growing businesses that need advanced analytics, automation, and up to 25 users.",
    features: ["Everything in Plus", "25 users", "Advanced reporting & analytics", "Workflow automation", "Dedicated customer success manager", "On-demand online training"],
  },
];

export default function QuickBooks() {
  const [selected, setSelected] = useState<string>("plus");
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === selected)!;
  const total = product.price * qty;

  const handleCheckout = () => {
    toast.info("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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

      {/* Product Selector */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {products.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelected(p.id)}
                className={`relative rounded-2xl border p-6 cursor-pointer transition-all ${
                  selected === p.id
                    ? "border-primary/60 bg-primary/5 glow-cyan"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-lg leading-snug">{p.name}</h3>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === p.id ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                    {selected === p.id && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-3xl font-bold text-primary">AUD ${p.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-semibold">{product.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Quantity (licenses)</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold hover:bg-secondary/80"
                  >
                    -
                  </button>
                  <span className="font-semibold w-6 text-center">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold hover:bg-secondary/80"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">AUD ${total}/mo</span>
              </div>
            </div>
            <div className="border-t border-border pt-4 mb-4">
              <div className="flex justify-between">
                <span className="font-bold">Total Due Today</span>
                <span className="font-display font-bold text-xl text-primary">AUD ${total}</span>
              </div>
            </div>

            {/* Compliance notices */}
            <div className="bg-background rounded-xl p-3 mb-4 space-y-2">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Protected by our <Link href="/policies/refund" className="text-primary hover:underline">Refund & Returns Policy</Link> and your rights under Australian Consumer Law. Full change-of-mind refund if activation key is unredeemed within 7 days.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Access details and license key emailed immediately upon successful payment.</span>
              </div>
            </div>

            <Link href={`/checkout?product=${encodeURIComponent(product.name)}&price=${total}&qty=${qty}`}>
              <Button
                className="w-full bg-primary text-primary-foreground glow-cyan font-semibold"
                onClick={handleCheckout}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Proceed to Checkout
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Pricing subject to change by Intuit. Current as of {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery info */}
      <section className="py-10 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Instant Delivery", desc: "License key sent to your email within minutes" },
              { label: "Setup Support", desc: "Our team helps you get configured on day 1" },
              { label: "7-Day Guarantee", desc: "Full refund if key is unredeemed within 7 days" },
            ].map((item) => (
              <div key={item.label} className="text-center max-w-xs">
                <div className="font-semibold mb-1 text-primary">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
