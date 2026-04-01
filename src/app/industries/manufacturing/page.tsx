import { PageHeader } from "@/components/ui/page-header";

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader 
        title="Manufacturing & Industrial" 
        description="Optimizing supply chains and financing the next industrial revolution."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Building Resilience</h2>
          <p className="text-lg text-slate-600 mb-8">
            Manufacturing businesses face supply chain volatility, labor shortages, and pressure to adopt sustainable practices. We offer strategic insight to optimize costs, reduce tax liabilities, and fund innovation.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-xl font-bold mb-4">Our Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Automotive & Mobility</li>
              <li>Aerospace & Defense</li>
              <li>Industrial Products & Chemicals</li>
              <li>Consumer Goods & Retail Manufacturing</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
