import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/constants";
import {
  ArrowRight,
  MessageSquare,
  Handshake,
  Lightbulb,
  Mail,
} from "lucide-react";

export default function OthersPage() {
  return (
    <>
      <PageHeader
        title="Other Industries"
        description="Our expertise extends well beyond our featured sectors. If your industry isn't listed, we'd love to hear from you."
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            We Work Across All Industries
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            While {COMPANY_NAME} has deep specialization in Financial Services, Healthcare, Technology, Manufacturing, and Real Estate, our capabilities extend far beyond these featured sectors. Our founding team brings decades of combined hands-on experience across a wide range of Australian and international industries — and we are ready to put that experience to work for you.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            We believe that every business deserves access to genuinely expert financial advice, regardless of the sector it operates in. Whether you are a family-owned agricultural business, a fast-growing e-commerce retailer, a not-for-profit organization, or a professional services firm — our team has the expertise, the flexibility, and the commitment to understand your specific situation and deliver real value.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't see your industry below? That's not a barrier. Simply reach out and tell us about your business — we'll assess your needs and tell you honestly how we can help.
          </p>
        </div>
      </section>

      {/* Contact Invite Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <Mail className="size-10 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Tell Us About Your Industry
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We work with businesses across all sectors. If your industry isn't among our featured specializations, that's no barrier at all. Our founding team brings decades of hands-on experience across a vast range of Australian and international markets.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Simply get in touch, describe your business and your challenges, and we'll give you an honest assessment of how we can help — with no obligation and no pressure.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white px-10 font-semibold shadow-lg")}
          >
            Contact Us Now
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10 text-center">
            How We Engage in New Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <MessageSquare className="size-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tell Us About Your Business</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start with a conversation. Describe your industry, your specific challenges, and what you're looking for in a professional services partner.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <Lightbulb className="size-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">We Assess Your Needs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team will review your situation, draw on relevant experience from across our practice, and provide an honest and clear assessment of how we can help.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <Handshake className="size-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">We Get to Work</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Once engaged, we dedicate a specialist team to your account and deliver the same rigorous, high-quality service we bring to every client engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            No matter what sector you operate in, we're confident we can add real value. Reach out today and let's start a conversation about how {COMPANY_NAME} can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-slate-950 hover:bg-slate-200 border-none px-8 font-semibold")}
            >
              Get in Touch
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/industries"
              className={cn(buttonVariants({ size: "lg" }), "bg-slate-700 hover:bg-slate-600 text-white border-none px-8 font-semibold")}
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
