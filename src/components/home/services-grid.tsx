"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Smartphone,
  RefreshCw,
  Globe,
  Palette,
  ShoppingCart,
  Rocket,
  Database,
  Cloud,
  Building2,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    name: "Strategic Mobile Consulting",
    slug: "mobile-consulting",
    description: "Align your mobile strategy with business goals for maximum ROI.",
  },
  {
    icon: RefreshCw,
    name: "Mobile App Porting",
    slug: "app-porting",
    description: "Seamlessly migrate your app across platforms without losing functionality.",
  },
  {
    icon: Globe,
    name: "Technology Outsourcing",
    slug: "technology-outsourcing",
    description: "Access world-class tech talent on demand at competitive rates.",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Human-centered designs that convert visitors into loyal customers.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce Development",
    slug: "ecommerce-development",
    description: "Build high-converting storefronts with enterprise-grade infrastructure.",
  },
  {
    icon: Rocket,
    name: "Startup App Development",
    slug: "startup-development",
    description: "From MVP to scale — fast, lean, and investor-ready.",
  },
  {
    icon: Database,
    name: "Custom CRM Development",
    slug: "crm-development",
    description: "Tailor-made CRM systems that fit your exact sales workflow.",
  },
  {
    icon: Cloud,
    name: "SaaS App Development",
    slug: "saas-development",
    description: "Scalable multi-tenant SaaS platforms built for growth.",
  },
  {
    icon: Building2,
    name: "Offshore Development Center",
    slug: "offshore-development",
    description: "Your dedicated remote engineering team — fully managed.",
  },
  {
    icon: Cpu,
    name: "Product Engineering",
    slug: "product-engineering",
    description: "End-to-end product lifecycle from concept to continuous delivery.",
  },
  {
    icon: Users,
    name: "IT Staff Augmentation",
    slug: "staff-augmentation",
    description: "Instantly scale your dev team with vetted senior engineers.",
  },
];

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 text-balance">
            Services Built for Scale
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From mobile apps to enterprise platforms, we deliver technology that drives measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-5 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 hover:glow-cyan h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
