"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Lock, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  const updated = "August 10, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Privacy Policy</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold">Privacy &amp; Data</span>
            </div>
            <h1 className="font-display text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-2">Last updated: {updated}</p>
            <p className="text-muted-foreground mb-8">
              INNOVATIVE NATIONAL TAX &amp; UPKEEP INTERNATIONAL TALLY PTY LTD (ABN 75 696 801 895), trading as National Tally Tech ("we," "us," or "our"), operates nationaltallytech.com. This policy explains how we handle your personal information in accordance with the <strong className="text-foreground">Privacy Act 1988 (Cth)</strong> and the <strong className="text-foreground">13 Australian Privacy Principles (APPs)</strong>.
            </p>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10">
              <p className="font-semibold mb-2">Key Points</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We do not sell your personal information to third parties (APP 6).</li>
                <li>• All sensitive data is encrypted using AES-256 at rest and TLS 1.3 in transit.</li>
                <li>• You have the right to access and correct your personal information (APP 12 &amp; APP 13).</li>
                <li>• We comply with the Privacy Act 1988 (Cth), the Australian Privacy Principles, and the Notifiable Data Breaches (NDB) scheme.</li>
                <li>• For EU customers, we are also GDPR compliant.</li>
              </ul>
            </div>

            <div className="space-y-8 text-muted-foreground">
              {[
                {
                  title: "1. Open and Transparent Management (APP 1)",
                  content: `We are committed to managing personal information in an open and transparent way. This Privacy Policy sets out how we collect, hold, use, and disclose personal information. A copy of this policy is available on our website and will be provided to any person who requests it.`,
                },
                {
                  title: "2. Collection of Personal Information (APP 3 & APP 5)",
                  content: `We collect personal information that is reasonably necessary for our business functions. We will notify you of the collection at or before the time of collection.

Categories of information collected:
• Identification Data: Name, email address, phone number, company name.
• Payment Data: We do not store raw card data. Payments are tokenised via our PCI DSS-compliant payment processor. We store only the last 4 digits of your card and a payment token.
• Usage Data: IP address, browser type, pages visited, time on pages, referral source.
• Communications: Messages submitted through our contact form or support channels.

We collect information directly from you where practicable. Where we collect information from a third party, we will take reasonable steps to notify you.`,
                },
                {
                  title: "3. Use and Disclosure of Personal Information (APP 6)",
                  content: `We use your personal information only for the primary purpose for which it was collected, or for a directly related secondary purpose, unless you consent or an exception under the Privacy Act applies.

We use your data to:
• Provide and improve our services
• Process payments and send order confirmations
• Respond to support requests
• Send transactional emails (invoices, refund confirmations)
• Comply with legal obligations
• Prevent fraud and maintain security

We do NOT sell, rent, or trade your personal information to third parties. We may share data with:
• Service Providers: Vetted third-party vendors who assist in delivering our services (e.g., payment processors, cloud infrastructure). All are bound by data processing agreements.
• Legal Requirements: Where required or authorised by Australian law (e.g., court order, subpoena).
• Business Transfers: In the event of a merger or acquisition, with prior notice to you.`,
                },
                {
                  title: "4. Cookie Policy",
                  content: `We use cookies to provide and improve our services.

Essential Cookies: Required for basic site functionality (session management, security). Cannot be disabled.

Analytics Cookies: Privacy-first analytics to understand site usage. Data is aggregated and anonymised.

Preference Cookies: Remember your settings and preferences.

You can control cookie settings through your browser. Disabling essential cookies may affect functionality. A cookie consent notice will appear on your first visit.`,
                },
                {
                  title: "5. Data Quality and Storage (APP 10 & APP 11)",
                  content: `We take reasonable steps to ensure personal information we hold is accurate, up-to-date, complete, and relevant. We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 for data in transit, access controls and least-privilege principles, and regular security reviews.

We retain personal data for as long as necessary to provide services and meet legal obligations:
• Account data: deleted within 90 days of account closure.
• Payment records: retained for 7 years for GST and tax compliance.
• Anonymised analytics: may be retained indefinitely.`,
                },
                {
                  title: "6. Access and Correction (APP 12 & APP 13)",
                  content: `You have the right to:
• Access: Request a copy of the personal information we hold about you.
• Correction: Request correction of inaccurate, out-of-date, or incomplete information.
• Deletion: Request deletion of your personal information (subject to legal retention obligations).
• Portability: Receive your data in a structured, commonly used format where technically feasible.
• Opt-Out: Unsubscribe from marketing communications at any time.

We will respond to access and correction requests within 30 days. We will not charge an excessive fee for access requests.

To exercise these rights, email: contact@nationaltallytech.com`,
                },
                {
                  title: "7. Notifiable Data Breaches (NDB Scheme)",
                  content: `We comply with the Notifiable Data Breaches (NDB) scheme under the Privacy Amendment (Notifiable Data Breaches) Act 2017 (Cth). If we experience a data breach that is likely to result in serious harm to any affected individual, we will:
• Notify the affected individual(s) as soon as practicable.
• Notify the Office of the Australian Information Commissioner (OAIC).
• Take immediate steps to contain the breach and prevent further harm.`,
                },
                {
                  title: "8. GDPR Compliance (EU Customers)",
                  content: `For customers located in the European Economic Area (EEA), we also comply with the EU General Data Protection Regulation (GDPR). Our lawful bases for processing include contract performance, legitimate interests, and your consent where required. You may exercise your GDPR rights (including the right to erasure and data portability) by contacting us at contact@nationaltallytech.com.`,
                },
                {
                  title: "9. Complaints",
                  content: `If you believe we have breached the Australian Privacy Principles, please contact us first at contact@nationaltallytech.com. We will respond within 30 days. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
                },
                {
                  title: "10. Contact",
                  content: `Privacy enquiries:\nINNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD\n(trading as National Tally Tech) | ABN 75 696 801 895\nU905, 6 Tonga Place, Parkwood QLD 4214, Australia\ncontact@nationaltallytech.com | +61 447 180 277`,
                },
              ].map(({ title, content }) => (
                <div key={title}>
                  <h2 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h2>
                  <div className="leading-relaxed whitespace-pre-line text-sm">{content}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
