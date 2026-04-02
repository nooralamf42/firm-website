import { PageHeader } from "@/components/ui/page-header";
import { COMPANY_NAME } from "@/lib/constants";

export default function TechnologyPage() {
  return (
    <>
      <PageHeader 
        title="Technology, Media & Telecommunications" 
        description="Agile advisory for fast-moving digital pioneers."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Pacing with Innovation</h2>
          <p className="text-lg text-slate-600 mb-8">
            The technology sector operates at lightning speed. {COMPANY_NAME} helps TMT companies scale efficiently, manage rapid hypergrowth, and handle complex IP tax structuring and global compliance.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-xl font-bold mb-4">Our Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Software & SaaS Verticals</li>
              <li>Telecommunications Infrastructure</li>
              <li>Media & Entertainment</li>
              <li>Robotics & Advanced Tech Startups</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
