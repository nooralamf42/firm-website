import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Briefcase, Calculator, Landmark, ShieldCheck, PieChart } from "lucide-react";
import { articles, categoryColors } from "@/app/data/articles";
import { COMPANY_NAME, DBA_NAME } from "@/lib/constants";

export default function Home() {
  const insightPreviews = articles.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/40 text-white overflow-hidden">
        {/* Bottom edge gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24 lg:py-36 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Eyebrow label */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-5">
            Premier Accounting & Advisory
          </p>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-white leading-[1.05]">
            Clarity in Complexity.{" "}
            <br className="hidden md:block" />
            <span className="text-blue-400">Confidence</span> in Tomorrow.
          </h1>
          {/* Thin blue divider */}
          <div className="mt-6 w-16 h-1 bg-blue-600 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {COMPANY_NAME} delivers premier tax, bookkeeping, and holistic advisory solutions. As an official {DBA_NAME} partner, we empower visionary enterprises to navigate risks, optimise growth, and redefine industry standards.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-6">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold text-base px-8 py-6">
              <Link href="/contact">Speak with a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { value: "40+", label: "Years of Trust" },
              { value: "120", label: "Global Offices" },
              { value: "$50B+", label: "Assets Advised" },
              { value: "10k+", label: "Professionals" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center py-10 px-6">
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Solutions</h2>
              <p className="text-lg text-slate-600">
                From meticulous audits to visionary strategic consulting, our expert practices are designed to protect and propel your business.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 shrink-0 transition-colors group"
            >
              View All Services{" "}
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
              title="Audit & Assurance"
              description="Independent, rigorous audits that deliver critical insights and enhance stakeholder trust."
              link="/services/audit-assurance"
            />
            <ServiceCard
              icon={<Calculator className="h-6 w-6 text-blue-600" />}
              title="Tax Services"
              description="Strategic tax planning, multi-jurisdictional compliance, and efficient structuring designed for modern economies."
              link="/services/tax"
            />
            <ServiceCard
              icon={<Briefcase className="h-6 w-6 text-blue-600" />}
              title="Consulting"
              description="Business transformation, operational design, and technology adoption strategies that scale."
              link="/services/consulting"
            />
            <ServiceCard
              icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
              title="Financial Advisory"
              description="Mergers & Acquisitions, valuations, and corporate restructuring from seasoned experts."
              link="/services/financial-advisory"
            />
            <ServiceCard
              icon={<Landmark className="h-6 w-6 text-blue-600" />}
              title="Risk Advisory"
              description="Enterprise risk management, regulatory compliance frameworks, and cybersecurity assurance."
              link="/services/risk-advisory"
            />
            <ServiceCard
              icon={<PieChart className="h-6 w-6 text-blue-600" />}
              title="Bookkeeping & Payroll"
              description="Outsourced finance functions that provide clarity, accuracy, and operational efficiency."
              link="/services/bookkeeping"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">Insights</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Perspectives</h2>
            </div>
            <Link
              href="/insights/articles"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 shrink-0 transition-colors group"
            >
              View All Articles{" "}
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightPreviews.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/articles/${article.slug}`}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden mb-5 h-48 bg-slate-900 relative">
                  <Image
                    src={
                      article.category === "Tax"
                        ? "/images/articles/article_tax.png"
                        : article.category === "Audit"
                        ? "/images/articles/article_audit_ai.png"
                        : article.category === "ESG"
                        ? "/images/articles/article_esg.png"
                        : "/images/articles/article_general.png"
                    }
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${categoryColors[article.category] ?? "bg-slate-100 text-slate-700"}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                <p className="mt-3 text-sm font-semibold text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-5">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Partner with us to navigate uncertainty with unparalleled clarity and deep domain expertise.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 py-6 text-base rounded-full">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 overflow-hidden">
      {/* Animated top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      {/* Icon */}
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
      >
        Learn More{" "}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
