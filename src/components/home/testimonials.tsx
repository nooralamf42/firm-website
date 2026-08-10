"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinTech Ventures",
    text: "NexGen delivered our SaaS platform 3 weeks ahead of schedule. The code quality and architecture are exceptional — we've scaled to 50k users with zero downtime.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, RetailEdge",
    text: "Their e-commerce app tripled our mobile conversion rate in the first month. The UI/UX team truly understands how users think and buy.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Priya Anand",
    role: "VP Engineering, HealthTech Co",
    text: "The offshore development center model was exactly what we needed. Dedicated team, transparent communication, and top-tier engineers.",
    rating: 5,
    avatar: "PA",
  },
];

const logos = ["Accenture", "Deloitte", "IBM", "Salesforce", "SAP", "Oracle"];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-card border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logos.map((logo) => (
              <div
                key={logo}
                className="font-display font-bold text-lg text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl font-bold mt-3">What Our Clients Say</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote className="w-6 h-6 text-primary/40" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
