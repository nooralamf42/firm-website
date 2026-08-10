"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Clock, Star } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const trustItems = [
  { icon: Shield, text: "PCI Compliant Payments" },
  { icon: Clock, text: "7-Day Money-Back Guarantee" },
  { icon: CheckCircle, text: "200+ Projects Delivered" },
  { icon: Star, text: "4.9/5 Client Rating" },
];

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background bg-grid">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />

      {/* 3D Canvas — right side */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-60 md:opacity-100">
          {/* Lazy-load the canvas */}
          <div className="w-full h-full" id="hero-canvas-container" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Next-Generation Software Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance"
          >
            Scale Your Business with{" "}
            <span className="text-primary text-glow-cyan">Enterprise</span>{" "}
            Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            NexGen Tech Solutions delivers end-to-end software development, mobile apps, SaaS platforms, and digital transformation services trusted by Fortune 500s and fast-growing startups alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold text-base px-8"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services/saas-development">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold text-base px-8"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
