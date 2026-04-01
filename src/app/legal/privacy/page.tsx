import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Privacy Policy"
        description="Last updated: January 1, 2026"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-10">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction — Who We Are</h2>
              <p>
                Meridian Partners LLC and its global network of member firms, affiliates, and subsidiaries
                (collectively, "Meridian Partners," "we," "us," or "our") are committed to protecting the privacy
                and security of your personal data. This Privacy Policy explains what personal information we
                collect, why we collect it, how we use it, and your rights in relation to it.
              </p>
              <p className="mt-4">
                Meridian Partners LLC is the data controller for personal data processed in connection with this
                website. Our registered office is at 100 Financial District Blvd, Suite 4500, New York, NY 10005,
                United States. Where personal data is processed by our member firms in other jurisdictions, the
                relevant local entity is the data controller and processes data in accordance with applicable
                local law.
              </p>
              <p className="mt-4">
                This Policy applies to all personal data collected through our website, client portals, marketing
                programmes, events, and recruitment activities. It does not cover the processing of personal data
                under specific client engagement agreements, which are governed by separate data processing
                addenda and engagement letters.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="font-semibold text-slate-800 mb-2">Personal Data You Provide Directly</p>
              <p>
                When you interact with us — through our contact forms, newsletter subscriptions, event
                registrations, or client onboarding processes — we collect personal data you provide voluntarily.
                This includes your full name, professional email address, phone number, job title, company name,
                industry sector, and the content of your enquiries or messages.
              </p>
              <p className="mt-4 font-semibold text-slate-800 mb-2">Usage Data Collected Automatically</p>
              <p>
                When you visit our website, we automatically collect technical information about your device and
                browsing behaviour. This includes your IP address, browser type and version, operating system,
                referring URLs, pages viewed, time spent on pages, and click patterns. This data is collected
                using server logs and analytics technologies described further in our{" "}
                <Link href="/legal/cookies" className="text-blue-700 underline hover:text-blue-800">
                  Cookie Policy
                </Link>
                .
              </p>
              <p className="mt-4 font-semibold text-slate-800 mb-2">Cookies and Tracking Technologies</p>
              <p>
                We use cookies, pixel tags, and similar technologies to enhance your experience, measure website
                performance, and support our marketing activities. For full details of the cookies we use and how
                to manage your preferences, please see our{" "}
                <Link href="/legal/cookies" className="text-blue-700 underline hover:text-blue-800">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-slate-700">
                <li>
                  <strong>Service Delivery:</strong> To respond to your enquiries, provide requested audit, tax,
                  consulting, or advisory services, manage client relationships, and fulfil our contractual
                  obligations to you.
                </li>
                <li>
                  <strong>Communications:</strong> To send you newsletters, research reports, event invitations,
                  and other thought leadership content that we believe may be of professional interest to you.
                  You may unsubscribe from marketing communications at any time.
                </li>
                <li>
                  <strong>Website Improvement:</strong> To analyse how visitors use our website, identify
                  technical issues, and continuously improve the content, structure, and performance of our
                  digital properties.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable laws and regulations, respond
                  to lawful requests from public authorities, and enforce our legal rights.
                </li>
                <li>
                  <strong>Recruitment:</strong> To evaluate applications for employment or partnership, conduct
                  background screening where permitted by law, and manage talent pipelines.
                </li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p>
                For individuals located in the European Economic Area, the United Kingdom, or other
                jurisdictions that apply a lawful basis framework, our processing relies on the following grounds:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-slate-700">
                <li>
                  <strong>Performance of a contract:</strong> Where processing is necessary to provide services
                  you have requested or to take steps prior to entering into an engagement.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> Where we have a legitimate business interest in
                  processing your data, such as operating and improving our website, sending business-to-business
                  marketing communications, and protecting our firm against fraud or legal claims, provided such
                  interests are not overridden by your rights and interests.
                </li>
                <li>
                  <strong>Legal obligation:</strong> Where processing is necessary to comply with applicable law,
                  including anti-money laundering regulations, tax reporting obligations, and court orders.
                </li>
                <li>
                  <strong>Consent:</strong> For certain marketing activities and non-essential cookies, where
                  we rely on your freely given, specific, and informed consent. You may withdraw consent at any
                  time without affecting the lawfulness of processing carried out prior to withdrawal.
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing &amp; Third Parties</h2>
              <p>
                We do not sell or rent your personal data to third parties. We may share your information with:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-slate-700">
                <li>
                  <strong>Meridian member firms:</strong> Other firms within the Meridian global network where
                  necessary to deliver cross-border services or refer you to the appropriate local expert.
                </li>
                <li>
                  <strong>Service providers:</strong> Trusted third-party vendors who process data on our behalf
                  under contractual obligations, including cloud infrastructure providers, CRM platforms, email
                  marketing services, and analytics providers.
                </li>
                <li>
                  <strong>Professional advisers:</strong> Lawyers, auditors, insurers, and other professional
                  advisers who require access to the data in the course of advising us.
                </li>
                <li>
                  <strong>Regulatory authorities:</strong> Where required by law, regulation, or court order,
                  including regulatory bodies such as the SEC, PCAOB, or equivalent international authorities.
                </li>
              </ul>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. International Data Transfers</h2>
              <p>
                Meridian Partners operates globally, and your personal data may be transferred to and processed
                in countries other than the country in which you are located. These countries may have data
                protection laws that differ from those in your jurisdiction.
              </p>
              <p className="mt-4">
                When we transfer personal data from the EEA or UK to countries not deemed adequate by the
                European Commission or UK Information Commissioner's Office, we implement appropriate safeguards
                in accordance with applicable data protection law, including the use of Standard Contractual
                Clauses approved by the European Commission, UK International Data Transfer Agreements, or other
                lawful transfer mechanisms.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes described in this
                Policy, or as required by law. Our retention periods are determined by the nature of the data
                and the purpose for which it was collected. For example:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
                <li>Client engagement data is retained for a minimum of seven years following the conclusion of an engagement, in accordance with professional regulatory requirements and applicable statute of limitations.</li>
                <li>Website enquiry data is retained for up to two years from the date of enquiry unless a client relationship is established.</li>
                <li>Marketing preference records are retained until you withdraw consent or exercise your right to erasure.</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the following rights with respect to your personal
                data. We will respond to all valid requests within the timeframes required by applicable law
                (generally 30 days under GDPR):
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-slate-700">
                <li><strong>Right of access:</strong> Obtain a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to erasure ("right to be forgotten"):</strong> Request deletion of your data where there is no legitimate reason for us to continue processing it.</li>
                <li><strong>Right to restrict processing:</strong> Ask us to suspend processing of your data in certain circumstances.</li>
                <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format and transmit it to another controller.</li>
                <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing purposes.</li>
                <li><strong>Rights related to automated decision-making:</strong> Not be subject to decisions based solely on automated processing that produce significant legal effects on you.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact our Data Protection Officer at the address set
                out in Section 10. You also have the right to lodge a complaint with your local supervisory
                authority (e.g., the UK Information Commissioner's Office or the relevant EU data protection
                authority).
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to provide essential functionality,
                measure performance, and deliver relevant content. For detailed information about the specific
                cookies we use, their purpose, duration, and how to manage your preferences, please read our{" "}
                <Link href="/legal/cookies" className="text-blue-700 underline hover:text-blue-800">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            {/* DPO Contact */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact the Data Protection Officer</h2>
              <p>
                Meridian Partners has appointed a Data Protection Officer (DPO) who is responsible for overseeing
                questions in relation to this Privacy Policy. If you have any questions, concerns, or requests
                relating to your personal data or our privacy practices, please contact our DPO:
              </p>
              <div className="mt-4 p-5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 space-y-1">
                <p><strong>Data Protection Officer</strong></p>
                <p>Meridian Partners LLC</p>
                <p>100 Financial District Blvd, Suite 4500, New York, NY 10005</p>
                <p>
                  Email:{" "}
                  <a href="mailto:dpo@meridianpartners.example.com" className="text-blue-700 underline hover:text-blue-800">
                    dpo@meridianpartners.example.com
                  </a>
                </p>
              </div>
              <p className="mt-4">
                We take all privacy enquiries seriously and will endeavour to respond promptly and thoroughly.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
