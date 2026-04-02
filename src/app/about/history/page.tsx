import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS } from "@/lib/constants";

const timelineEvents = [
  {
    year: "2010",
    headline: `The Founding of ${COMPANY_NAME}`,
    description:
      `${COMPANY_NAME} was founded with a vision to provide specialized tax and accounting services to local businesses. From the beginning, we focused on delivering personalized, high-quality advice that helped our clients navigate complex financial landscapes. Our founding team brought decades of collective experience from top-tier accounting firms, establishing a culture of integrity and excellence that remains our hallmark today.`,
  },
  {
    year: "2015",
    headline: "Expanding Our Reach",
    description:
      "Five years after our founding, we expanded our operations to better serve a growing list of clients across different regions. This period was marked by the introduction of advanced audit techniques and the expansion of our tax advisory services. We built a reputation for reliability and deep technical expertise, becoming a trusted advisor to mid-market companies and individual entrepreneurs alike.",
  },
  {
    year: "2018",
    headline: `Becoming a ${DBA_NAME} Premier Partner`,
    description:
      `A significant milestone in our journey: we became an official ${DBA_NAME} partner. This transition allowed us to offer our clients state-of-the-art cloud bookkeeping and financial management solutions. By integrating these powerful tools into our service delivery model, we were able to provide real-time insights and greater operational efficiency to our clients, further cementing our position as a leader in digital accounting services.`,
  },
  {
    year: "2023",
    headline: "Advancing Our Digital Advisory Services",
    description:
      "As the business world became increasingly digital, we launched our dedicated Digital Advisory practice. This service line focuses on helping organizations transform their finance functions through technology, including AI-driven analytics, automated payroll systems, and enhanced cybersecurity protocols. Our goal is to empower our clients with the tools they need to stay competitive in a rapidly evolving economy.",
  },
  {
    year: "2026",
    headline: COMPANY_NAME,
    description:
      `Marking a new chapter in our history, we officially transitioned to our new identity: ${COMPANY_NAME}. This rebranding reflects our commitment to continuous innovation and our expanded global outlook. With our headquarters in ${HEADQUARTERS_ADDRESS.area}, ${HEADQUARTERS_ADDRESS.country}, and a network of dedicated professionals worldwide, we are more prepared than ever to help our clients achieve their long-term financial objectives.`,
  },
];

export default function HistoryPage() {
  return (
    <main>
      <PageHeader
        title="Our History"
        description="Four decades of milestones, growth, and an enduring commitment to our clients."
      />

      {/* Our Legacy Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Our Legacy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Every great firm is shaped by the choices it makes at pivotal moments. The choice to
            put client interests above short-term gain. The choice to invest in people when it would
            be easier to cut costs. The choice to embrace change rather than resist it. The history
            of {COMPANY_NAME} is a story of exactly those choices, made consistently over forty
            years by thousands of professionals who believed that better advisory was possible.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What began as a small team of twelve in New York has grown into a network of more than
            10,000 professionals across 120 offices and 65 countries. The following timeline traces
            the key moments that shaped who we are — and who we are still becoming.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {timelineEvents.map(({ year, headline, description }, index) => (
                <div key={year} className="relative flex flex-col md:flex-row md:gap-10">
                  {/* Year badge */}
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 mb-4 md:mb-0 md:w-32 shrink-0">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-sm shadow-md">
                      <Flag className="size-5" />
                    </div>
                    <span className="text-blue-600 font-extrabold text-2xl md:text-xl md:mt-3 md:text-center leading-tight">
                      {year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-muted/30 rounded-xl p-6 border border-border/50">
                    <h3 className="text-xl font-bold text-foreground mb-3">{headline}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking Forward</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-5">
            History is context, not destiny. The milestones above tell the story of what ${COMPANY_NAME}
            has built — but the chapter that excites us most is the one being written now.
            We are investing more than ever in our people, our technology, and our ability to meet
            clients where the world is going, not just where it has been.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Climate transition, artificial intelligence, geopolitical complexity, and rapid
            regulatory change are reshaping every industry simultaneously. The firms that will
            matter in 2035 are those building the capabilities today to navigate these forces with
            clarity and confidence. That is the work underway at ${COMPANY_NAME}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              About {COMPANY_NAME}
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link href="/about/leadership" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-white hover:text-white hover:bg-white/10")}>
              Meet Our Leadership
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
