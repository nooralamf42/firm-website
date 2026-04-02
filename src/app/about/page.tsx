import Link from "next/link";
import {
  Shield,
  Star,
  Lightbulb,
  Users,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, DBA_NAME, FULL_BRAND_NAME } from "@/lib/constants";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards in every engagement. Our clients trust us with their most sensitive financial matters, and we honor that trust through transparency, honesty, and accountability in all that we do.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Mediocrity is not in our vocabulary. We pursue the highest quality in our analysis, our advice, and our client service. Every engagement is an opportunity to set a new benchmark for what exceptional advisory looks like.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "The business landscape evolves rapidly, and so do we. From AI-powered audit platforms to real-time risk monitoring tools, we invest in technology and fresh thinking to deliver advantages that our clients cannot find elsewhere.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Our greatest asset is our people, in all their diversity. We cultivate a culture where professionals of every background, identity, and perspective are empowered to contribute fully and grow without limits.",
  },
];

const globalStats = [
  { value: "120", label: "Offices Worldwide" },
  { value: "65", label: "Countries Served" },
  { value: "10,000+", label: "Professionals" },
  { value: "8,500", label: "Active Clients" },
];

const timelineHighlights = [
  { year: "2010", event: "Founded to provide specialized tax and accounting services" },
  { year: "2018", event: `Became an official ${DBA_NAME} partner` },
  { year: "2023", event: "Expanded digital advisory services across the region" },
  { year: "2026", event: `Launched ${COMPANY_NAME}` },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title={`About ${COMPANY_NAME}`}
        description="Trusted advisors delivering premier tax and bookkeeping solutions."
      />

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            {FULL_BRAND_NAME} is a premier professional services firm delivering tax,
            bookkeeping, consulting, and financial advisory services. We have grown to serve clients across 
            diverse sectors, with a team of dedicated professionals committed to excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Our clients range from ambitious growth-stage companies to established multinational
            corporations and local businesses. What unites them is a demand for advice that is rigorous, 
            independent, and attuned to the unique pressures they face. That is precisely what we deliver — 
            driving every engagement we undertake today.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are not a firm that offers off-the-shelf answers. Our professionals bring deep sector
            expertise, global perspective, and a genuine commitment to our clients' long-term success.
            When you work with us, you work with a team that treats your challenges as
            their own.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These four principles are not aspirational statements — they are the criteria against
              which every decision at {COMPANY_NAME} is measured.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Stats */}
      <section className="bg-slate-950 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
            Our Global Reach
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">{value}</p>
                <p className="text-slate-300 text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline Teaser */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Four decades of growth, transformation, and unwavering commitment to our clients.
                From a single office in Manhattan to a truly global network, our journey reflects
                the evolution of the professional services industry itself — and our determination
                to lead it.
              </p>
              <Link href="/about/history" className={cn(buttonVariants({ size: "lg" }))}>
                Explore Our Full History
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 space-y-5">
              {timelineHighlights.map(({ year, event }) => (
                <div key={year} className="flex gap-4 items-start">
                  <span className="text-blue-600 font-bold text-lg w-12 shrink-0 pt-0.5">
                    {year}
                  </span>
                  <div className="flex-1 border-l-2 border-blue-200 pl-4">
                    <p className="text-foreground font-medium leading-snug">{event}</p>
                  </div>
                </div>
              ))}
              <p className="text-muted-foreground text-sm pt-1 pl-16 italic">
                And much more — explore the complete timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Briefcase className="mx-auto mb-4 size-10 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            We are always looking for exceptional professionals who share our values and want to do
            the best work of their careers. Explore opportunities with us today.
          </p>
          <Link href="/about/careers" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            View Open Positions
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
