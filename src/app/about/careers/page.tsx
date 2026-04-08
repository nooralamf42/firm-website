import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Heart,
  TrendingUp,
  Users,
  Zap,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { HEADQUARTERS_ADDRESS, COMPANY_NAME } from "@/lib/constants";

const whyOurFirm = [
  {
    icon: BookOpen,
    title: "Mentorship Programs",
    description:
      `Every professional with ${COMPANY_NAME} is paired with a senior mentor from their first week. Our structured mentorship programs span practice groups, geographies, and service lines — ensuring you have the guidance, sponsorship, and honest feedback needed to accelerate your development.`,
  },
  {
    icon: Globe,
    title: "Remote & Agile Work",
    description:
      "As a forward-thinking firm, we embrace remote flexibility while maintaining a highly collaborative environment. You will have the freedom to manage your work dynamically, building cross-functional competence and an expanding professional network.",
  },
  {
    icon: Heart,
    title: "Competitive Benefits",
    description:
      "We offer market-leading compensation, comprehensive health and wellness coverage, generous retirement matching, paid parental leave for all caregivers, and a wellness allowance. We regularly benchmark our packages against peer firms to ensure we remain at the top of the market.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
      `${COMPANY_NAME}'s Learning Institute provides more than 2,000 courses in technical skills, leadership, digital fluency, and professional communication. We fully fund CPA, CFA, CISA, and other professional certifications, and give professionals dedicated study leave in the months before their exams.`,
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "We believe that a diverse team accelerates innovation. Our DEI strategy is embedded from day one in our hiring, promotion, and compensation processes. Inclusion is a deeply held core business priority built directly into the foundation of our firm.",
  },
  {
    icon: Zap,
    title: "Impact-Driven Work",
    description:
      `Our clients make decisions that affect millions of people — employees, investors, citizens, communities. The advisory work you do with ${COMPANY_NAME} genuinely matters. You will see your analysis and recommendations shape strategy at the highest levels of business and government.`,
  },
];

const careerPaths = [
  {
    title: "Audit & Assurance",
    description:
      `${COMPANY_NAME}'s Audit & Assurance practice is the backbone of the firm, combining traditional financial statement audit with cutting-edge data analytics through our ClearSight platform. You will develop rigorous analytical discipline while advising some of the most complex organizations in the world.`,
    progression: ["Audit Associate", "Senior Auditor", "Audit Manager", "Director — Assurance", "Partner"],
  },
  {
    title: "Tax",
    description:
      "Our Tax practice spans corporate tax, international tax, transfer pricing, indirect tax, and private client services. With operations across 40+ jurisdictions and ongoing involvement in OECD policy development, our tax professionals work at the frontier of global tax law.",
    progression: ["Tax Associate", "Senior Tax Consultant", "Tax Manager", "Tax Director", "Tax Partner"],
  },
  {
    title: "Consulting",
    description:
      "From digital transformation and operating model redesign to supply chain optimization and AI strategy, our Consulting practice helps clients reinvent the way they operate. Projects are typically fast-moving, cross-functional, and high-stakes — ideal for professionals who thrive in ambiguity.",
    progression: ["Business Analyst", "Senior Consultant", "Manager", "Senior Manager", "Principal / Director"],
  },
  {
    title: "Financial Advisory",
    description:
      "Our Financial Advisory practice covers M&A advisory, transaction support, restructuring, valuation, and capital markets. Our professionals work alongside CFOs and boards on the most consequential decisions an organization can make, from major acquisitions to complex debt restructurings.",
    progression: ["Analyst", "Associate", "Senior Associate", "Manager / VP", "Director / Partner"],
  },
];

const openings = [
  {
    title: "Tax Associate — International Tax",
    location: HEADQUARTERS_ADDRESS.full,
    type: "Full-time",
  },
  {
    title: "Senior Auditor — Financial Services",
    location: "Parkwood, QLD Australia",
    type: "Full-time",
  },
  {
    title: "Risk Consultant — Cybersecurity",
    location: "Remote / Australia",
    type: "Full-time",
  },
  {
    title: "Financial Advisory Manager — M&A",
    location: "Parkwood, QLD Australia",
    type: "Full-time",
  },
  {
    title: "IT Audit Specialist",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Bookkeeping Analyst",
    location: "Parkwood, QLD Australia",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        title={`Build Your Career With ${COMPANY_NAME}`}
        description="Where exceptional talent meets extraordinary opportunity."
      />

      {/* Why Our Firm */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why {COMPANY_NAME}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that when you invest genuinely in your people, exceptional client outcomes
              follow naturally. Here is what that investment looks like in practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOurFirm.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Career Paths
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {COMPANY_NAME} offers four principal career paths, each with a clear progression
              model and access to the firm's full suite of learning and development resources.
              Lateral movement across practices is actively encouraged.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPaths.map(({ title, description, progression }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Typical Progression
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {progression.map((level, i) => (
                        <div key={level} className="flex items-center gap-1.5">
                          <span className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
                            {level}
                          </span>
                          {i < progression.length - 1 && (
                            <ChevronRight className="size-3 text-muted-foreground shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Current Openings */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of current opportunities across the firm. All positions are open to
              applicants from all backgrounds and are subject to our inclusive hiring process.
            </p>
          </div>
          <div className="space-y-3">
            {openings.map(({ title, location, type }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="size-3.5 text-muted-foreground" />
                    <p className="text-muted-foreground text-sm">{location}</p>
                    <span className="text-muted-foreground text-sm">·</span>
                    <p className="text-muted-foreground text-sm">{type}</p>
                  </div>
                </div>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}>
                  Apply Now
                  <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catch-all CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            We are always interested in hearing from exceptional professionals, even when we do not
            have an immediate opening. Send us your profile and tell us where you think you could
            make an impact.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Send Us Your Profile
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
