"use client";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Landmark, Stethoscope, Cpu, Factory, Building2, ArrowRight, MoreHorizontal } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Financial Services",
      subtitle: "Banking, Insurance & Investment",
      description: "Navigate complex regulations, fintech disruption, and volatile markets with deep sector expertise across banking, insurance, asset management, and digital finance.",
      icon: <Landmark className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/financial-services",
    },
    {
      title: "Healthcare & Life Sciences",
      subtitle: "Hospitals, Pharma & Aged Care",
      description: "Achieve financial sustainability and regulatory compliance so you can focus on delivering exceptional patient care and advancing medical innovation.",
      icon: <Stethoscope className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/healthcare",
    },
    {
      title: "Technology, Media & Telecom",
      subtitle: "SaaS, AI, Cloud & TMT",
      description: "Scale efficiently, manage rapid growth, and navigate IP tax structuring, revenue recognition, and global compliance with advisors who move at your pace.",
      icon: <Cpu className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/technology",
    },
    {
      title: "Manufacturing & Industrial",
      subtitle: "Industrial, Automotive & Aerospace",
      description: "Precision financial management for capital-intensive businesses — from cost accounting and contract revenue recognition to supply chain risk and ESG reporting.",
      icon: <Factory className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/manufacturing",
    },
    {
      title: "Real Estate & Construction",
      subtitle: "Developers, REITs & Builders",
      description: "Expert property tax, lease accounting, construction contract advisory, and fund reporting for developers, investors, and real estate businesses.",
      icon: <Building2 className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/real-estate",
    },
    {
      title: "Other Industries",
      subtitle: "Retail, Education, NFP & More",
      description: "Our expertise extends to all sectors. If your industry isn't listed here, reach out — we are confident we can deliver real value for your business.",
      icon: <MoreHorizontal className="h-8 w-8 text-blue-600 mb-4" />,
      link: "/industries/others",
      special: true,
    },
  ];

  return (
    <>
      <PageHeader
        title="Industries We Serve"
        description="Deep sector expertise to help clients navigate industry-specific regulations and market dynamics."
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className={cn(
                  "bg-white p-8 rounded-xl shadow-sm border flex flex-col group hover:shadow-md transition-all duration-300",
                  ind.special ? "border-blue-200 bg-blue-50/30" : "border-slate-100"
                )}
              >
                {ind.icon}
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">{ind.subtitle}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{ind.description}</p>
                <Link
                  href={ind.link}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "group-hover:text-blue-700 w-full justify-between mt-auto p-0"
                  )}
                >
                  Explore {ind.title === "Other Industries" ? "Other Sectors" : "Industry"}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Our expertise spans far beyond our featured sectors. Get in touch and tell us about your business — we'd love to explore how we can help.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-slate-950 hover:bg-slate-200 border-none px-8 font-semibold")}
          >
            Contact Us
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
