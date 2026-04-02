import { PageHeader } from "@/components/ui/page-header";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS, CONTACT_PHONE, DPO_EMAIL } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  const effectiveDate = "April 2, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: ${effectiveDate}`}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-12">

            {/* Header Info */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Effective Date:</strong> {effectiveDate}</p>
              </div>
              <div>
                <p><strong>Firm:</strong> {COMPANY_NAME}</p>
                <p className="hidden"><strong>Contact:</strong> {CONTACT_PHONE} | {DPO_EMAIL}</p>
                <p><strong>Phone:</strong> {CONTACT_PHONE}</p>
              </div>
            </div>

            {/* 1. Our Commitment */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif italic">1. Our Commitment to Privacy</h2>
              <p>
                {COMPANY_NAME} (&quot;the Firm&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is bound by the 
                <strong> Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>. 
                We are also committed to maintaining the security of financial data in accordance with the 
                <strong> Payment Card Industry Data Security Standard (PCI DSS) v4.0</strong> where applicable.
              </p>
              <p className="mt-4">
                This Privacy Policy describes how we manage your personal information, including sensitive financial data, 
                and explains your rights regarding access, correction, and complaints.
              </p>
            </div>

            {/* 2. What Personal Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. What Personal Information We Collect</h2>
              <p className="mb-6">
                We collect only the information necessary to provide accounting, bookkeeping, tax, and business advisory services. 
                The kinds of personal information we collect and hold include:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-900 w-1/3">Category</th>
                      <th className="px-4 py-3 font-bold text-slate-900">Examples of Information Collected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Identity &amp; Contact</td>
                      <td className="px-4 py-3">Full name, residential/business address, email, phone number, date of birth.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Financial &amp; Tax</td>
                      <td className="px-4 py-3">Tax File Numbers (TFN), Australian Business Number (ABN), bank account details, credit card numbers (PANs - truncated where possible), payroll records, BAS/IAS statements, superannuation details, asset registers.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Sensitive Information</td>
                      <td className="px-4 py-3">Information about health (for payroll/leave entitlements), union membership, or criminal record (only if strictly required for a specific engagement or legal obligation).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Technical Data</td>
                      <td className="px-4 py-3">IP address, browser type, and login audit trails when you access our client portals or cloud platforms.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Business Information</td>
                      <td className="px-4 py-3">Company financials, shareholder details, director identification numbers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 italic text-xs text-slate-500">
                We generally do not collect government identifiers (e.g., driver&apos;s licence numbers) unless required by law (e.g., Anti-Money Laundering obligations).
              </p>
            </div>

            {/* 3. How We Collect Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Collect Information</h2>
              <ul className="space-y-4 list-disc list-inside">
                <li><strong>Directly from you:</strong> via engagement letters, forms, emails, meetings, or our secure client portal.</li>
                <li><strong>From third parties:</strong> such as the Australian Taxation Office (ATO), your bank, payroll software providers, or regulatory bodies.</li>
                <li><strong>From publicly available sources:</strong> ASIC registers or credit reporting bodies (where permitted).</li>
              </ul>
              <p className="mt-4 text-sm">
                If you provide us with personal information about another individual (e.g., an employee or director), 
                you confirm that you have made them aware of this policy and obtained their consent.
              </p>
            </div>

            {/* 4. PCI DSS Compliance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. PCI DSS Compliance – How We Protect Card Data</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">4.1 We Do Not Store Sensitive Authentication Data (SAD):</h3>
                  <p className="text-sm">We never store the full magnetic stripe data, CVV2/CVC2 (the three-digit security code), or PIN data after transaction authorisation.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">4.2 Truncation &amp; Encryption of Primary Account Numbers (PANs):</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Where we store credit card numbers to reconcile client accounts, we truncate (mask) the PAN so that only the last four digits are visible.</li>
                    <li>We apply strong cryptography to render stored PANs unreadable. We do not maintain &quot;clear-text windows&quot; of PANs in logs or temporary files.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">4.3 Multi-Factor Authentication (MFA):</h3>
                  <p className="text-sm">Any access to our cardholder data environment (CDE), including remote access to our practice management software and cloud storage, is protected by MFA.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">4.4 Payment Gateways:</h3>
                  <p className="text-sm">We use PCI DSS Level 1 validated third-party gateways (e.g., Stripe, Square). We use tokenisation – your card number is replaced with a unique token stored by the gateway, not on our servers.</p>
                </div>
              </div>
            </div>

            {/* 5. Purposes for Collection */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Purposes for Collection, Use, and Disclosure</h2>
              <p className="mb-4">We collect, hold, use, and disclose your personal information for the following purposes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-sm">
                <li>Preparing tax returns and financial statements.</li>
                <li>Liaising with the ATO, ASIC, and SROs.</li>
                <li>Liaising with State Revenue Offices.</li>
                <li>Identity verification (AML/CTF compliance).</li>
                <li>Invoicing and payment processing.</li>
                <li>Managing business operations &amp; IT security.</li>
                <li>Professional standards compliance.</li>
                <li>TPB regulatory compliance.</li>
              </ul>
            </div>

            {/* 6. Cross-Border Disclosure */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif italic border-b border-slate-100 pb-2">6. Cross-Border Disclosure of Data</h2>
              <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-4">Crucial for International &amp; Cloud-Based Business</p>
              <p className="mb-4">
                We use cloud-based platforms (e.g., Xero, MYOB, QuickBooks, Microsoft 365, Google Workspace) to deliver 
                our services. These platforms may store your personal information on servers located outside of 
                Australia (e.g., United States, European Union, Singapore).
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">6.1 Overseas Recipients:</h3>
                  <p className="text-sm italic">United States, New Zealand, Singapore.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">6.2 APP 8 Accountability:</h3>
                  <p className="text-sm">
                    Under APP 8, we take reasonable steps to ensure overseas recipients do not breach the APPs, 
                    typically through Data Processing Agreements (DPAs) and verifying security certifications (ISO 27001, SOC 2).
                  </p>
                </div>
                <p className="text-xs text-slate-500">
                  By engaging our services, you consent to the disclosure of your personal information to overseas 
                  recipients as described. Note that under APP 8.1, overseas recipients may not be subject to 
                  the full range of Australian privacy obligations, though we contractually protect your data.
                </p>
              </div>
            </div>

            {/* 7. Data Security and Storage */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Security and Storage</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-700">
                      <th className="px-4 py-3 font-bold w-1/3">Security Measure</th>
                      <th className="px-4 py-3 font-bold">Implementation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Encryption</td>
                      <td className="px-4 py-3">Data encrypted at rest (AES-256) and in transit (TLS 1.3).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Access Controls</td>
                      <td className="px-4 py-3">Role-based access (Need-to-Know basis). No administrative access to CDE without approval.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">MFA</td>
                      <td className="px-4 py-3">Mandatory for all staff accessing remote systems, email, and practice management software.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Malware Protection</td>
                      <td className="px-4 py-3">Automated anti-malware and behavioural analysis on all endpoints and removable media.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-900">Audit Logging</td>
                      <td className="px-4 py-3">Automated review of audit logs for all access to cardholder data environments.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 9. NDB */}
            <div className="border-l-4 border-slate-900 pl-6 py-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Notifiable Data Breaches (NDB)</h2>
              <p className="text-sm">
                We comply with the NDB scheme. If an eligible data breach occurs, we will conduct an assessment, 
                notify affected individuals, and report to the OAIC.
              </p>
            </div>

            {/* 11. Automated Decision-Making */}
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Automated Decision-Making</h2>
              <p className="text-xs text-blue-900 font-bold uppercase mb-2">Effective 10 December 2026</p>
              <p className="text-sm italic">
                Currently, software (e.g., Xero, MYOB) automates transaction coding. However, all material 
                financial and tax decisions are reviewed by a qualified human accountant.
              </p>
            </div>

            {/* 13. Contact Us */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">13. Contact Us (Privacy Officer)</h2>
              <div className="space-y-1 text-slate-300">
                <p className="font-bold text-white">Privacy Officer</p>
                <p>{COMPANY_NAME}</p>
                <p>{HEADQUARTERS_ADDRESS.full}</p>
                <p className="pt-4 font-mono hidden">Email: {DPO_EMAIL}</p>
                <p className="font-mono">Phone: {CONTACT_PHONE}</p>
              </div>
            </div>

            {/* 14. Changes */}
            <p className="text-xs text-slate-400 text-center italic">
              Latest version available at our website. Significant changes will be notified via email.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}


