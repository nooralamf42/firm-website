import { PageHeader } from "@/components/ui/page-header";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS } from "@/lib/constants";

export default function RefundPolicyPage() {
  const effectiveDate = "April 2, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Refund Policy"
        description={`Last updated: ${effectiveDate}`}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-12">
            
            {/* Policy Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif italic">1. Policy Overview</h2>
              <p>
                At {COMPANY_NAME}, we are committed to providing professional accounting and bookkeeping 
                services with due care and skill, in accordance with the <strong>Tax Agent Services Act 2009 (TASA)</strong> 
                and professional ethical standards. This 7-Day Refund Policy applies to:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Prepaid service packages (e.g., upfront payment for quarterly BAS preparation or annual tax returns)</li>
                <li>Setup or onboarding fees for ongoing bookkeeping engagements</li>
                <li>Retainer agreements for business advisory services</li>
              </ul>
              <div className="mt-6 p-4 bg-slate-50 border-l-4 border-blue-900 text-sm">
                <p><strong>Firm:</strong> {COMPANY_NAME}</p>
                <p><strong>DBA:</strong> {DBA_NAME}</p>
              </div>
            </div>

            {/* ACL Rights */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Your Rights Under the Australian Consumer Law (ACL)</h2>
              <p className="mb-4">
                Under the ACL, you are entitled to remedies if our services do not meet the following consumer guarantees:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-900 font-bold text-xs">1</span>
                  </div>
                  <p><strong>Due Care and Skill:</strong> Services must be provided with reasonable care and technical competence.</p>
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-900 font-bold text-xs">2</span>
                  </div>
                  <p><strong>Fitness for Purpose:</strong> Services must be reasonably fit for any purpose you disclosed to us.</p>
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-900 font-bold text-xs">3</span>
                  </div>
                  <p><strong>Reasonable Time:</strong> Services must be supplied within a reasonable time frame.</p>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-500">
                <strong>Major Failures:</strong> You are entitled to a full refund, compensation for reasonably foreseeable loss, or to cancel the contract. 
                <strong> Minor Failures:</strong> We will remedy the issue by re-performing the service at no cost.
              </p>
            </div>

            {/* Cooling-Off Period */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. 7-Day Cooling-Off Period</h2>
              <p className="mb-4">
                For prepaid service packages where no substantial work has yet been performed, we offer 
                a 7-day cooling-off period from the date of payment.
              </p>
              <ul className="space-y-3">
                <li><strong>Eligibility:</strong> 100% refund if no work has commenced and the request is submitted in writing within 7 days.</li>
                <li><strong>Partial Refunds:</strong> If preliminary work (discovery calls, file setup) has occurred, we may deduct a reasonable administrative fee (capped at 10% or $150).</li>
                <li><strong>Exclusions:</strong> No refunds for "change of mind" once analysis has commenced or for statutory lodgments with imminent deadlines.</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Process</h2>
              <ol className="space-y-4 list-decimal list-inside">
                <li><strong>Contact Us:</strong> Send a written request to our support team within 30 days of the service issue.</li>
                <li><strong>Assessment:</strong> We will review the request and respond within 14 business days.</li>
                <li><strong>Resolution:</strong> Approved refunds are processed via the original payment method within 7 business days.</li>
              </ol>
            </div>

            {/* International & Compliance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-slate-100 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2">International Clients</h3>
                <p className="text-sm text-slate-600">
                  Refunds are processed in AUD; currency conversion losses or transfer fees are deducted 
                  from the refund amount in accordance with global banking standards.
                </p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2">Security Compliance</h3>
                <p className="text-sm text-slate-600">
                  We adhere to <strong>PCI DSS v4.0</strong>. Refunds use secure tokenization via 
                  validated gateways (Stripe/Square). We do not store full card numbers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
