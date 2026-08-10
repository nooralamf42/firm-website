"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Zap, ChevronRight, Target, Users, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">About Us</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-primary font-semibold">About National Tally Tech</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight text-balance">
              We Build Technology That{" "}
              <span className="text-primary">Moves Business Forward</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              INNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD is a Queensland-registered technology and business services firm headquartered at U905, 6 Tonga Place, Parkwood QLD 4214, Australia. We deliver professional software development, bookkeeping, and technology consulting services to businesses across Australia & United States, combining deep local expertise with a commitment to measurable client outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Mission", desc: "To democratize access to world-class engineering by making enterprise-quality software development accessible to every business." },
              { icon: Award, title: "Quality", desc: "Every line of code is reviewed by senior engineers. We don't ship anything we wouldn't be proud to show a Fortune 500 CTO." },
              { icon: Users, title: "People First", desc: "We invest heavily in our team's growth. Happy engineers build better products. It's that simple." },
              { icon: Globe, title: "Global Reach", desc: "With offices and delivery centers across 3 continents, we bring global perspectives to every project." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8">Book a free consultation and let's discuss how we can help you build your vision.</p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground glow-cyan font-semibold px-10">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
