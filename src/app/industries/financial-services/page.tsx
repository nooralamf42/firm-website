import { PageHeader } from "@/components/ui/page-header";

export default function FinancialServicesPage() {
  return (
    <>
      <PageHeader 
        title="Financial Services" 
        description="Navigating complex regulatory requirements and volatile global markets."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Adaptation in a New Era</h2>
          <p className="text-lg text-slate-600 mb-8">
            Banks, asset managers, and insurance companies face unprecedented pressure from Fintech disruptors and stringent global regulations. We help you stay compliant while innovating your core offerings.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-xl font-bold mb-4">Our Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Banking & Capital Markets</li>
              <li>Insurance & Actuarial Services</li>
              <li>Investment Management & Private Equity</li>
              <li>Fintech & Digital Assets Regulation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
