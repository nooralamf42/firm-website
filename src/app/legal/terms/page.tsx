import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants";

export default function TermsPage() {
  const effectiveDate = "April 2, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Terms & Conditions" 
        description="General terms governing our professional relationship and website use."
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-12">
            
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif italic border-b pb-2">1. Introduction and Acceptance</h2>
              <p>
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the website and the professional 
                accounting and bookkeeping services provided by <strong>{COMPANY_NAME}</strong> (DBA <strong>{DBA_NAME}</strong>), 
                referred to as &quot;the Firm&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;.
              </p>
              <p className="mt-4">
                By accessing this website or engaging our services, you agree to be bound by these Terms and our 
                <Link href="/legal/privacy" className="text-blue-700 font-semibold mx-1 hover:underline">Privacy Policy</Link>. 
                If you do not agree, please cease use of the website immediately and do not proceed with any engagements.
              </p>
              <div className="mt-4 p-4 bg-slate-50 border-l-4 border-blue-900 text-sm italic">
                <p><strong>Firm:</strong> {COMPANY_NAME}</p>
                <p><strong>Effective Date:</strong> {effectiveDate}</p>
              </div>
            </div>

            {/* 2. Professional Standards */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Professional Standards and Compliance</h2>
              <p>
                We provide our services in accordance with the <strong>Tax Agent Services Act 2009 (TASA)</strong>, 
                professional ethical standards, and guidelines issued by the <strong>Tax Practitioners Board (TPB)</strong>. 
                As a registered tax agent, we are required to comply with the Code of Professional Conduct as 
                stipulated under Section 30-10 of the TASA.
              </p>
            </div>

            {/* 3. Engagement of Services */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Scope and Engagement Letters</h2>
              <p>
                All specific accounting, tax, and advisory services provided to you are governed by a written 
                <strong> Engagement Letter</strong> (the &quot;Contract&quot;) which details the scope, 
                fee structure, and specific responsibilities of both parties. In the event of a conflict between 
                these general Terms &amp; Conditions and a signed Engagement Letter, the Engagement Letter 
                shall prevail.
              </p>
            </div>

            {/* 4. Fees, Invoicing & Payments */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Fees, Invoicing, and Payments</h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <strong>Fees:</strong> Our fees are calculated based on the complexity of the work, skill levels required, 
                  and the time spent, or as a fixed project fee as detailed in your Engagement Letter.
                </li>
                <li>
                  <strong>Payment Terms:</strong> Unless otherwise specified, all invoices are payable within 
                  <strong> 14 days</strong> from the date of issue. We reserve the right to suspend services 
                  if fees remain unpaid beyond 30 days.
                </li>
                <li>
                  <strong>Refunds:</strong> All prepaid services are subject to our 
                  <Link href="/legal/refund" className="text-blue-700 font-semibold mx-1 hover:underline">7-Day Refund Policy</Link>, 
                  which provides a cooling-off period before significant work commences.
                </li>
                <li>
                  <strong>PCI Compliance:</strong> All credit card payments are processed via PCI DSS Level 1 
                  compliant gateways. We do not store sensitive cardholder authentication data.
                </li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p>
                All reports, templates, methodologies, articles, and training materials created by {COMPANY_NAME} 
                remain our exclusive intellectual property. You are granted a non-exclusive, non-transferable 
                licence to use these documents solely for the internal business purposes for which they were provided.
              </p>
            </div>

            {/* 6. Electronic Communications */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Electronic Communications &amp; Security</h2>
              <p>
                We utilize cloud-based infrastructure (including Xero, Microsoft 365, and secure client portals) 
                to host data and correspond with you. By engaging us, you acknowledge and consent to the use of 
                electronic communication and cloud storage. While we maintain high-security standards 
                (as detailed in our Privacy Policy), we cannot guarantee that electronic transmissions will 
                always be error-free or secure.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div className="border border-slate-200 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p className="font-bold text-xs text-slate-500 uppercase tracking-widest mb-2">Notice of Professional Disclaimer</p>
              <p className="text-sm">
                The content provided on this website is for general information only and does not constitute 
                professional accounting, tax, or legal advice. Final decisions should not be made based 
                solely on website content without a direct consultation.
              </p>
              <p className="mt-4 text-sm">
                Our liability for loss or damage arising out of the provision of services is limited to the extent 
                permitted under a scheme approved under <strong>Professional Standards Legislation</strong> 
                in the relevant state of Australia.
              </p>
            </div>

            {/* 8. Governing Law */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Governing Law</h2>
                <p className="text-slate-300 text-sm">
                  These Terms are governed by and construed in accordance with the laws of 
                  <strong> {HEADQUARTERS_ADDRESS.state}, Australia</strong>. You irrevocably submit to the non-exclusive 
                  jurisdiction of the courts of that State and the Federal Court of Australia.
                </p>
              </div>
              <div className="space-y-1 text-right text-xs text-slate-400 hidden md:block">
                <p className="font-bold text-white uppercase tracking-widest mb-2">Legal Enquiries</p>
                <p>{CONTACT_EMAIL}</p>
                <p>{CONTACT_PHONE}</p>
                <p>U905 6 Tonga Place, Parkwood 4214 QLD</p>
              </div>
            </div>

            {/* 9. Contact Info */}
            <p className="text-center text-xs text-slate-400 italic">
              If you have any questions concerning these Terms, please contact {COMPANY_NAME} at our registered headquarters.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
