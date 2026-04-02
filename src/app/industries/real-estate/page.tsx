import { PageHeader } from "@/components/ui/page-header";
import { COMPANY_NAME } from "@/lib/constants";

export default function RealEstatePage() {
  return (
    <>
      <PageHeader 
        title="Real Estate & Construction" 
        description="Foundational financial advisory for developers, investors, and operators."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Maximizing Asset Value</h2>
          <p className="text-lg text-slate-600 mb-8">
            From complex cross-border property transactions to optimizing REOC/REIT tax structures, {COMPANY_NAME} provides the industry-specific knowledge needed to maximize portfolio returns in fluctuating markets.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-xl font-bold mb-4">Our Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Commercial Real Estate</li>
              <li>Hospitality & Leisure</li>
              <li>Real Estate Funds & REITs</li>
              <li>Engineering & Construction Firms</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
