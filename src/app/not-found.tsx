"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, ArrowRight, Search, FileText, Briefcase, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";

const quickLinks = [
  {
    icon: Briefcase,
    title: "Our Services",
    description: "Explore our full range of tax, audit, and advisory services.",
    href: "/services",
  },
  {
    icon: Users,
    title: "About Us",
    description: "Learn about our firm, our values, and our team.",
    href: "/about",
  },
  {
    icon: FileText,
    title: "Insights",
    description: "Read our latest articles, reports, and perspectives.",
    href: "/insights",
  },
  {
    icon: Search,
    title: "Industries",
    description: "Discover the industries we serve and our sector expertise.",
    href: "/industries",
  },
];

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-950 via-slate-950 to-blue-950/40 text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        {/* Bottom edge line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-blue-600 via-blue-400 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24 flex flex-col items-center text-center">
          {/* 404 number */}
          <p className="text-[10rem] md:text-[14rem] font-extrabold leading-none text-transparent bg-clip-text bg-linear-to-b from-blue-400/80 to-blue-600/20 select-none mb-2">
            404
          </p>

          {/* Badge */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
            Page Not Found
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl mb-4 leading-tight">
            Looks like this page took a wrong turn.
          </h1>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
            The page you're looking for doesn't exist or may have been moved. Don't worry — let's get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-slate-950 hover:bg-slate-100 font-semibold px-8 gap-2"
              )}
            >
              <ArrowLeft className="size-4" />
              Go Back
            </button>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 gap-2"
              )}
            >
              <Home className="size-4" />
              Go Home
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Still looking?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Here are some helpful pages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-3 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon className="size-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Visit Page <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact nudge */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="text-slate-500 text-base">
            Can't find what you need?{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-semibold hover:underline"
            >
              Contact {COMPANY_NAME}
            </Link>{" "}
            and our team will be happy to help.
          </p>
        </div>
      </section>
    </div>
  );
}
