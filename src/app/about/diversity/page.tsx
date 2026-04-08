import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Accessibility,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";

const programs = [
  {
    icon: TrendingUp,
    title: "Women in Leadership Initiative",
    description:
      `Our Women in Leadership Initiative provides structured mentorship, professional coaching, and curated career development opportunities for high-potential women across all levels of ${COMPANY_NAME}. Driven by leaders with hands-on experience in cultivating inclusive environments, the program includes a leadership summit, cross-practice mentorship pairings, and a dedicated career advancement framework designed to reduce bias.`,
  },
  {
    icon: Globe,
    title: "Multicultural Advancement Program",
    description:
      `The Multicultural Advancement Program targets systemic barriers to advancement for professionals from diverse ethnic and cultural backgrounds. Participants receive dedicated guidance from senior leadership, a robust development curriculum, and visibility opportunities including client-facing engagements. Our team brings deep, practical experience in empowering diverse talent to reach their full potential.`,
  },
  {
    icon: Accessibility,
    title: "Accessibility & Disability Inclusion",
    description:
      `We are committed to a workplace that is fully accessible and genuinely welcoming to professionals with varying abilities. Our approach includes flexible work accommodation frameworks, an assistive technology fund, and confidence training for our managers. Leveraging our hands-on experience, we ensure all our workspaces and digital platforms prioritize accessibility from day one.`,
  },
];

const hiringPractices = [
  "Structured, criteria-based interview processes that prioritize hands-on experience and core competencies",
  "Diverse interview panels to ensure a comprehensive and fair evaluation of all candidates",
  "Blind CV screening for initial reviews to reduce any potential unconscious bias",
  "Commitment to competitive and equitable compensation across all roles and levels",
  "Targeted outreach to diverse professional groups and academic institutions to broaden our talent pool",
  "Valuing practical, hands-on experience alongside traditional educational backgrounds to ensure broad access to opportunities",
  "All team members involved in hiring undergo comprehensive bias awareness and evaluation training",
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
            As a newly established firm, our DEI strategy is built from the ground up, resting on a foundation of extensive hands-on experience in the professional services sector. We understand that representation means building a workforce and leadership pipeline that reflects the diverse clients and communities we serve. Beyond representation, we prioritize belonging—creating conditions in which every professional feels genuinely included, heard, and valued.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Equity means identifying and proactively preventing structural barriers in our hiring, professional development, and culture. We are establishing optimal practices from day one, driven by our leadership's proven experience in cultivating high-performing, inclusive teams without the legacy constraints of older organizations.
          </p>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Our Core Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Structural change requires targeted focus. These programs represent the foundation of our DEI initiatives, drawing on our team's deep, hands-on experience to create an empowering environment for all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            Diversity begins at the door. Drawing on years of hands-on hiring experience from across the industry, we have established a hiring process designed to give every candidate a fair, consistent, and unbiased experience. We evaluate you on your potential and your practical experience.
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
          <Link 
            href="/about/careers" 
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-slate-950 hover:bg-slate-200 border-none px-8 font-semibold"
            )}
          >
            Explore Career Opportunities
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
