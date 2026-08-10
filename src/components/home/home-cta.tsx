"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-3xl p-12 glow-cyan"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get Started Today</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-balance">
            Ready to Build Your Next{" "}
            <span className="text-primary">Big Idea?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Book a free 30-minute consultation with our senior engineers. No obligation, no sales pitch — just real technical guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 glow-cyan">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/policies/refund">
              <Button size="lg" variant="secondary" className="font-semibold px-8">
                <Shield className="w-4 h-4 mr-2" />
                7-Day Money-Back Guarantee
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
