import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Clock, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const executiveCommittee = [
  {
    name: "Eleanor Vance",
    title: "Global Chief Executive Officer",
    imageSrc: "/images/leadership/eleanor_vance.png",
    tenure: "At Meridian since 2009",
    bio: "Eleanor leads Meridian Partners' global strategy, operations, and long-term vision. With 30 years of experience in international mergers and acquisitions and corporate restructuring, she has advised on some of the most consequential transactions in modern business history. Prior to assuming the CEO role, she served as Head of Financial Advisory for Europe, the Middle East, and Africa. Eleanor is a member of the World Economic Forum's Private Sector Advisory Board and holds a JD from Harvard Law School.",
  },
  {
    name: "James Okafor",
    title: "Global Chief Financial Officer",
    imageSrc: "/images/leadership/james_okafor.png",
    tenure: "At Meridian since 2015",
    bio: "James oversees Meridian Partners' global financial operations, capital strategy, and enterprise performance management. A finance transformation specialist with deep experience in scaling professional services firms, he spent eighteen years as a partner at a Big 4 firm before joining Meridian. He has led the firm through two successful recapitalizations and the financial integration of three major acquisitions. James is a Fellow of the Institute of Chartered Accountants and holds an MBA from London Business School.",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    imageSrc: "/images/leadership/sarah_chen.png",
    tenure: "At Meridian since 2016",
    bio: "Dr. Chen leads Meridian Partners' global technology strategy, digital transformation, and the development of proprietary advisory platforms including ClearSight. She holds a PhD in Computer Science from Stanford University, where her doctoral research focused on machine learning applications in financial anomaly detection. Before joining Meridian, she served as VP of Engineering at a leading fintech company and as a research scientist at Google DeepMind. She holds 14 patents in applied AI.",
  },
  {
    name: "Marcus Webb",
    title: "Head of Tax Practice",
    imageSrc: "/images/leadership/marcus_webb.png",
    tenure: "At Meridian since 2004",
    bio: "Marcus leads Meridian Partners' global tax practice across more than 40 jurisdictions. With 25 years of experience in international tax, transfer pricing, and cross-border structuring, he is one of the most recognized tax professionals in the industry. He has served as a technical advisor to the OECD's Base Erosion and Profit Shifting (BEPS) project and represented clients before tax authorities in the United States, European Union, and the United Kingdom. He is a Chartered Tax Adviser and a member of the American Bar Association Tax Section.",
  },
  {
    name: "Priya Nair",
    title: "Head of Risk Advisory",
    imageSrc: "/images/leadership/priya_nair.png",
    tenure: "At Meridian since 2011",
    bio: "Priya leads Meridian Partners' global Risk Advisory practice, encompassing cybersecurity, regulatory compliance, operational risk, and enterprise risk management. A certified information security professional with regulatory experience across the FSB, EBA, and SEC frameworks, she previously served as Chief Risk Officer for a systemically important financial institution. Under her leadership, Meridian's Risk Advisory practice has grown to more than 1,200 professionals and is consistently ranked among the top five in independent industry surveys.",
  },
  {
    name: "Robert Castellano",
    title: "Head of Financial Advisory",
    imageSrc: "/images/leadership/robert_castellano.png",
    tenure: "At Meridian since 2007",
    bio: "Robert heads Meridian Partners' Financial Advisory practice, overseeing M&A advisory, restructuring, valuation, and capital markets services. Over a career spanning three decades, he has led or co-led more than 200 M&A transactions with aggregate deal values exceeding $400 billion. His clients include sovereign wealth funds, private equity firms, Fortune 100 corporations, and national governments navigating complex privatizations. Robert is a CFA charterholder and a frequent speaker at the Milken Institute Global Conference.",
  },
];

const leadershipPrinciples = [
  {
    icon: Target,
    title: "Client-First Mindset",
    description:
      "Every strategic decision begins and ends with a single question: what is best for our clients? Our leaders model this orientation relentlessly — setting the expectation throughout the firm that client outcomes are never secondary to internal convenience, billable hours, or short-term revenue targets.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "The best advisory relationships span decades, not quarters. Our leadership team is evaluated on the strength of client relationships, the quality of advice delivered, and the long-term health of the firm — not on metrics that incentivize short-termism. This philosophy shapes every investment we make in talent, technology, and geographic expansion.",
  },
  {
    icon: GraduationCap,
    title: "Developing Future Leaders",
    description:
      "Every member of our Executive Committee is expected to be an active mentor. We believe that leadership is not a destination but a practice — and that our greatest obligation to the firm's future is to develop the next generation of exceptional advisors with the same care and intentionality that we bring to client work.",
  },
];

export default function LeadershipPage() {
  return (
    <main>
      <PageHeader
        title="Our Leadership"
        description="Seasoned professionals leading with expertise and integrity."
      />

      {/* Executive Committee */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Executive Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Meridian Partners is guided by a six-member Executive Committee whose members bring
              collective experience spanning six continents, six decades of professional services,
              and virtually every major sector of the global economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveCommittee.map((leader) => (
              <Card key={leader.name} className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-slate-200 mb-3 overflow-hidden relative">
                    <Image 
                      src={leader.imageSrc} 
                      alt={leader.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold leading-snug">{leader.name}</CardTitle>
                  <p className="text-blue-600 font-semibold text-sm">{leader.title}</p>
                  <p className="text-muted-foreground text-xs">{leader.tenure}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{leader.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Board of Directors
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Meridian Partners' Board of Directors is composed of fourteen members, the majority of
            whom are independent non-executive directors drawn from senior positions in banking,
            government, academia, and industry. The Board provides independent oversight of the
            firm's strategy, financial performance, risk management framework, and governance
            practices — ensuring that leadership decisions are subject to rigorous external scrutiny.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            The Board operates through three standing committees: the Audit and Risk Committee, the
            Talent and Compensation Committee, and the Ethics and Independence Committee. Together,
            these structures reinforce a governance model designed to protect the interests of our
            clients, our professionals, and the broader public who rely on the integrity of our
            assurance work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full biographies of our Board members and information on our governance framework are
            available in our annual Transparency Report, published each spring.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Leadership Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The way we lead is inseparable from the way we serve. These three principles define
              how Meridian Partners' leadership team shows up — for clients, for each other, and
              for the professionals who will lead this firm in the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadershipPrinciples.map(({ icon: Icon, title, description }) => (
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

      {/* CTA */}
      <section className="py-14 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in joining a firm that invests in its people?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Explore career opportunities at Meridian Partners and start building your future
            alongside some of the most respected professionals in the industry.
          </p>
          <Link href="/about/careers" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            Explore Careers
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
