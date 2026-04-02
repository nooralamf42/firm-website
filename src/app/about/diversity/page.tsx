import Link from "next/link";
import {
  ArrowRight,
  Award,
  Heart,
  Globe,
  ShieldCheck,
  Accessibility,
  Rainbow,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";

const deiStats = [
  { value: "48%", label: "Women Professionals" },
  { value: "42%", label: "Diverse Leadership" },
  { value: "90+", label: "Nationalities Represented" },
  { value: "15", label: "Employee Resource Groups" },
];

const programs = [
  {
    icon: TrendingUp,
    title: "Women in Leadership Initiative",
    description:
      `Launched in 2014, our Women in Leadership Initiative provides structured sponsorship, executive coaching, and curated career development opportunities for high-potential women across all levels of ${COMPANY_NAME}. The program includes an annual leadership summit, cross-practice mentorship pairings, and a dedicated panel interview process designed to reduce bias. Since its inception, the proportion of women in director and partner roles has increased by 22 percentage points.`,
  },
  {
    icon: Rainbow,
    title: "LGBTQ+ Allies Network",
    description:
      `${COMPANY_NAME}'s LGBTQ+ Allies Network operates across 45 offices globally and is one of ${COMPANY_NAME}'s most active employee resource groups. The network hosts regular educational events, provides peer support, advocates for inclusive benefits policies, and connects LGBTQ+ professionals across practice groups and geographies. The firm has been a signatory to the UN LGBTI Standards of Conduct for Business since 2018.`,
  },
  {
    icon: Globe,
    title: "Multicultural Advancement Program",
    description:
      "The Multicultural Advancement Program targets systemic barriers to advancement for professionals from underrepresented ethnic and cultural backgrounds. Participants receive twelve months of intensive sponsorship from a senior partner, a dedicated leadership development curriculum, and visibility opportunities including client-facing speaking roles. The program has a 94% retention rate among alumni, compared to a firm-wide average of 81%.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & Disability Inclusion",
    description:
      "We are committed to a workplace that is fully accessible and genuinely welcoming to professionals with disabilities. Our Accessibility & Disability Inclusion program includes flexible work accommodation frameworks, an assistive technology fund, a Disability Confidence training program for all managers, and confidential peer support networks. All new offices are built to exceed local accessibility requirements, and we are working toward full retrofitting of existing locations by 2028.",
  },
];

const hiringPractices = [
  "Structured, criteria-based interview processes that reduce evaluator subjectivity across all roles",
  "Diverse interview panels required for all Director, Senior Manager, and Partner-track positions",
  "Blind CV screening for entry-level and early-career roles to reduce name and institution bias",
  "Pay equity audits conducted annually by an independent third party, with results published in our Transparency Report",
  "Targeted university partnerships with historically Black colleges and universities (HBCUs), Hispanic-serving institutions, and other minority-serving institutions",
  "Removal of degree requirements from roles where competency and experience are sufficient, broadening access to candidates from non-traditional educational backgrounds",
  "All interviewers complete bias awareness training before participating in any hiring process",
];

const awards = [
  {
    icon: Award,
    title: "Forbes Best Employers for Diversity",
    year: "2022, 2023, 2024, 2025",
    description:
      `${COMPANY_NAME} has been recognized by Forbes magazine as one of the Best Employers for Diversity for four consecutive years, based on independent surveys of employees across all demographic groups. The recognition reflects measurable progress on representation, pay equity, and inclusive culture.`,
  },
  {
    icon: ShieldCheck,
    title: "Human Rights Campaign — Best Places to Work",
    year: "2021 — 2026",
    description:
      `${COMPANY_NAME} has achieved a perfect score on the Human Rights Campaign Corporate Equality Index for six consecutive years, earning its designation as one of the Best Places to Work for LGBTQ+ Equality. The index evaluates workplace non-discrimination policies, equal benefits, and organizational competency in LGBTQ+ inclusion.`,
  },
  {
    icon: Heart,
    title: "Disability:IN Disability Equality Index — Best Places to Work",
    year: "2023, 2024, 2025",
    description:
      `${COMPANY_NAME} has been recognized by Disability:IN as a Best Place to Work for Disability Inclusion, based on its performance across culture and leadership, enterprise-wide access, employment practices, community engagement, and supplier diversity. The firm scored in the top tier of all participating global professional services firms.`,
  },
];

export default function DiversityPage() {
  return (
    <main>
      <PageHeader
        title="Diversity, Equity & Inclusion"
        description="Building a firm where every voice is heard and valued."
      />

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            At {COMPANY_NAME}, diversity, equity, and inclusion are not initiatives we run
            alongside our business — they are fundamental to how we run our business. We are
            convinced that the most rigorous analysis, the most creative problem-solving, and the
            most trusted client relationships emerge only when teams reflect the full range of human
            experience and perspective. Homogeneous teams reach consensus easily; diverse teams
            reach better answers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Our DEI strategy is structured around three pillars: representation, belonging, and
            equity. Representation means building a workforce and leadership pipeline that reflects
            the diversity of the clients and communities we serve. Belonging means creating
            conditions in which every professional feels genuinely included, heard, and valued.
            Equity means identifying and eliminating the structural barriers — in hiring, promotion,
            compensation, and culture — that prevent talented people from reaching their potential.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We measure our progress rigorously, report on it publicly in our annual Transparency
            Report, and hold our leadership accountable for outcomes — not just intentions. There
            is always more to do, and we approach that work with the same commitment to continuous
            improvement that we bring to every client engagement.
          </p>
        </div>
      </section>

      {/* DEI by the Numbers */}
      <section className="bg-slate-950 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
            DEI by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {deiStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">{value}</p>
                <p className="text-slate-300 text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Structural change requires structural investment. These four programs represent the
              core of our DEI programming — each designed to address specific barriers and create
              measurable, lasting change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusive Hiring Practices */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Inclusive Hiring Practices
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Diversity begins at the door. Our hiring process is designed from the ground up to give
            every candidate a fair, consistent, and unbiased experience — regardless of where they
            studied, what they look like, or which communities they belong to.
          </p>
          <ul className="space-y-4">
            {hiringPractices.map((practice) => (
              <li key={practice} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-base leading-relaxed">{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Awards &amp; Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              External validation matters — not because recognition is the goal, but because
              independent assessments hold us accountable and signal to prospective colleagues
              that our commitments are real.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {awards.map(({ icon: Icon, title, year, description }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
                    <Icon className="size-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-base font-bold leading-snug">{title}</CardTitle>
                  <p className="text-xs text-primary font-semibold">{year}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join a Firm That Reflects the World
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            We are actively building the most inclusive professional services firm in the world.
            If that mission resonates with you, we want to hear from you.
          </p>
          <Link href="/about/careers" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Explore Career Opportunities
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
