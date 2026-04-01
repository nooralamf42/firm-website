import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    year: "1985",
    headline: "The Founding of Meridian Partners",
    description:
      "Harold Meridian, a former senior partner at a Big 8 firm, founded Meridian Partners in a single rented office on Park Avenue, New York. With a founding team of twelve professionals and an unwavering belief that clients deserved more honest, more attentive counsel than they were receiving elsewhere, Harold set in motion a firm culture that endures to this day. Early clients included mid-market manufacturers and regional financial institutions across the northeastern United States.",
  },
  {
    year: "1991",
    headline: "Crossing the Atlantic — London and Frankfurt",
    description:
      "Six years after its founding, Meridian Partners opened its first international offices in London and Frankfurt, establishing a European foothold just as the Maastricht Treaty reshaped the continent's regulatory landscape. The London office quickly became a hub for cross-border audit work, serving UK-listed multinationals with US operations. The Frankfurt office focused on the German Mittelstand, providing tax advisory and statutory audit services to family-owned industrial groups.",
  },
  {
    year: "1997",
    headline: "Launching the Technology Advisory Practice",
    description:
      "Recognizing the transformative potential of the internet and enterprise software, Meridian Partners established its Technology Advisory practice. Initially focused on ERP implementation risk and IT audit, the practice rapidly expanded to encompass digital strategy, systems integration, and cybersecurity. Within five years it had grown into one of the firm's fastest-growing service lines and attracted several high-profile Silicon Valley clients during the dot-com era.",
  },
  {
    year: "2003",
    headline: "The Pacific Partners Merger — 15 New Asia-Pacific Offices",
    description:
      "The firm's most transformative milestone to date: a strategic merger with Pacific Partners, a respected Asia-Pacific advisory group headquartered in Sydney with offices across Singapore, Hong Kong, Tokyo, Seoul, Shanghai, and Mumbai. The combined firm added more than 1,800 professionals and 15 offices overnight, establishing Meridian Partners as a genuine global network with deep roots in the fastest-growing economies in the world.",
  },
  {
    year: "2008",
    headline: "Navigating the Global Financial Crisis — Risk Advisory Launched",
    description:
      "When the global financial system buckled under the weight of the subprime mortgage collapse, Meridian Partners stood alongside its clients with steady advice, independent analysis, and practical solutions. The crisis underscored the need for specialized risk counsel, and in its aftermath the firm launched its dedicated Risk Advisory practice — combining financial risk modeling, regulatory compliance, and enterprise risk management into a single integrated offering.",
  },
  {
    year: "2012",
    headline: "5,000 Professionals Milestone",
    description:
      "Meridian Partners crossed the 5,000-professional threshold, cementing its status among the world's leading advisory firms. The milestone was marked by the opening of a new global learning center in Dubai and the launch of the Meridian Leadership Academy, a two-year development program for high-potential managers that has since graduated over 3,000 future partners and directors.",
  },
  {
    year: "2017",
    headline: "ClearSight: AI-Driven Audit Platform",
    description:
      "Meridian Partners unveiled ClearSight, a proprietary AI and machine-learning platform designed to revolutionize the external audit process. ClearSight ingests and analyzes full transaction populations in real time — replacing traditional sampling techniques with comprehensive data review. The platform identifies anomalies, flags risks, and produces audit-ready insights with unprecedented speed and precision. Within two years of its launch, ClearSight was deployed on more than 400 audit engagements worldwide.",
  },
  {
    year: "2020",
    headline: "Remote Service Delivery Across 65 Countries",
    description:
      "The global pandemic posed an extraordinary operational challenge: how do you deliver complex, relationship-intensive advisory services when no one can be in the same room? Meridian Partners responded swiftly, transitioning its entire global workforce to remote delivery within ten days. The firm invested heavily in secure collaboration infrastructure, virtual due diligence technology, and remote audit protocols — and maintained service continuity without a single material engagement disruption across all 65 countries of operation.",
  },
  {
    year: "2023",
    headline: "Surpassing $50 Billion in Total Assets Advised",
    description:
      "A landmark year for the firm: aggregate client assets under advisory crossed the $50 billion threshold for the first time. Driven by strong growth in financial advisory, restructuring mandates, and ESG-linked capital markets work, this milestone reflected both the breadth of Meridian Partners' client relationships and the depth of trust that organizations place in our counsel when navigating major financial decisions.",
  },
  {
    year: "2026",
    headline: "Global Sustainability Practice — A New Chapter",
    description:
      "In response to the accelerating demand for rigorous, independent sustainability advisory, Meridian Partners launched its Global Sustainability Practice — an integrated offering spanning ESG strategy, carbon accounting, climate risk disclosure, supply chain transparency, and sustainability assurance. With more than 400 dedicated professionals across 30 countries from day one, the practice is positioned to become a defining capability for the firm in the decade ahead.",
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
            of Meridian Partners is a story of exactly those choices, made consistently over forty
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
            History is context, not destiny. The milestones above tell the story of what Meridian
            Partners has built — but the chapter that excites us most is the one being written now.
            We are investing more than ever in our people, our technology, and our ability to meet
            clients where the world is going, not just where it has been.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Climate transition, artificial intelligence, geopolitical complexity, and rapid
            regulatory change are reshaping every industry simultaneously. The firms that will
            matter in 2035 are those building the capabilities today to navigate these forces with
            clarity and confidence. That is the work underway at Meridian Partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              About Meridian Partners
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
