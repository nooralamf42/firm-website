"use client";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Landmark, Stethoscope, Cpu, Factory, Building2, ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    { title: "Financial Services", icon: <Landmark className="h-8 w-8 text-blue-600 mb-4" />, link: "/industries/financial-services" },
    { title: "Healthcare", icon: <Stethoscope className="h-8 w-8 text-blue-600 mb-4" />, link: "/industries/healthcare" },
    { title: "Technology", icon: <Cpu className="h-8 w-8 text-blue-600 mb-4" />, link: "/industries/technology" },
    { title: "Manufacturing", icon: <Factory className="h-8 w-8 text-blue-600 mb-4" />, link: "/industries/manufacturing" },
    { title: "Real Estate", icon: <Building2 className="h-8 w-8 text-blue-600 mb-4" />, link: "/industries/real-estate" },
  ];

  return (
    <>
      <PageHeader 
        title="Industries We Serve" 
        description="Deep sector expertise to help clients navigate industry-specific regulations and market dynamics."
      />
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(ind => (
              <div key={ind.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col group hover:shadow-md transition-shadow">
                {ind.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-6">{ind.title}</h3>
                <Link href={ind.link} className={cn(buttonVariants({ variant: "ghost" }), "group-hover:text-blue-700 w-full justify-between mt-auto p-0")}>
                  Explore Industry <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
