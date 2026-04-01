import { PageHeader } from "@/components/ui/page-header";

export default function HealthcarePage() {
  return (
    <>
      <PageHeader 
        title="Healthcare & Life Sciences" 
        description="Delivering better patient outcomes through operational efficiency and financial clarity."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Healing the Business of Healthcare</h2>
          <p className="text-lg text-slate-600 mb-8">
            The healthcare sector is evolving rapidly. We provide advisory and audit services to health systems, pharmaceutical companies, and medical device manufacturers, helping them balance costs with quality care.
          </p>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
            <h3 className="text-xl font-bold mb-4">Our Focus Areas:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Healthcare Providers & Hospitals</li>
              <li>Pharmaceuticals & Biotech</li>
              <li>Medical Devices</li>
              <li>HealthTech & Digital Health Startups</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
