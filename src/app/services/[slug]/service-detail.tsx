"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { ServiceData } from "./service-data";

const ServiceCanvas = dynamic(() => import("@/components/service-canvas"), {
  ssr: false,
});

export default function ServiceDetail({
  slug,
  service,
}: {
  slug: string;
  service: ServiceData;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-30 z-0">
          <Suspense fallback={null}>
            <ServiceCanvas slug={slug} />
          </Suspense>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{service.name}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Service
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight text-balance">
              {service.name}
            </h1>
            <p className="mt-4 text-xl text-primary font-semibold">{service.tagline}</p>
            <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">{service.description}</p>
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

      {/* Stat highlight */}
      <section className="bg-primary/10 border-y border-primary/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-display text-5xl font-bold text-primary text-glow-cyan">{service.stat.value}</div>
          <div className="text-muted-foreground mt-2">{service.stat.label}</div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="text-destructive font-semibold text-sm uppercase tracking-widest mb-4">The Problem</div>
              <p className="text-muted-foreground leading-relaxed">{service.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-primary/20 rounded-2xl p-8"
            >
              <div className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Solution</div>
              <p className="text-muted-foreground leading-relaxed">{service.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-primary/30 font-serif mb-4">&quot;</div>
          <p className="text-lg text-muted-foreground italic leading-relaxed">{service.testimonial.text}</p>
          <div className="mt-6 font-semibold">{service.testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{service.testimonial.role}</div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">See It in Action</h2>
          <div className="bg-card border border-border rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto cursor-pointer hover:bg-primary/30 transition-colors">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-primary ml-1" style={{ borderLeftWidth: 14 }} />
              </div>
              <p className="text-muted-foreground text-sm">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">Book your free consultation today. No commitment required.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground glow-cyan font-semibold px-10">
              Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
