"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FileText, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsConditions() {
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
            <span className="text-foreground">Terms & Conditions</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold">Legal</span>
            </div>
            <h1 className="font-display text-5xl font-bold mb-4">Terms &amp; Conditions</h1>
            <p className="text-muted-foreground mb-2">Last updated: {updated}</p>
            <p className="text-muted-foreground mb-8">
              Please read these Terms and Conditions carefully before using our services. By accessing or using National Tally Tech services, you agree to be bound by these terms. These terms are governed by the laws of Queensland, Australia.
            </p>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By using National Tally Tech services, you agree to these Terms. If you do not agree, please do not use our services. INNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD (ABN 75 696 801 895), trading as National Tally Tech, may update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.",
                },
                {
                  title: "2. Services",
                  content: "National Tally Tech provides software development, consulting, product engineering, bookkeeping, and software resale services. All services are subject to a separate Statement of Work (SOW) or service agreement. We reserve the right to refuse service to anyone for any lawful reason.",
                },
                {
                  title: "3. Payments and Billing",
                  content: `All prices are in Australian Dollars (AUD). Prices are inclusive or exclusive of Goods and Services Tax (GST) as stated on your invoice or order confirmation. Where GST applies, it is charged at the current applicable rate.

Payments are due as specified in your service agreement or at time of purchase. We accept major credit cards and bank transfers. Invoices are due Net-15 unless otherwise agreed. Late payments may be subject to a 1.5% monthly finance charge.

By providing payment information, you authorise National Tally Tech to charge the specified amount. Chargebacks without prior resolution attempt may result in account suspension.`,
                },
                {
                  title: "4. Consumer Guarantees under Australian Consumer Law",
                  content: "Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy that you have under the Australian Consumer Law (Schedule 2, Competition and Consumer Act 2010 (Cth)) or any other applicable Australian legislation that cannot be excluded by law. Where permitted, our liability for a failure to comply with a consumer guarantee is limited to resupply of the services or refund of the fees paid for the relevant services.",
                },
                {
                  title: "5. Refund Policy",
                  content: "All refunds are governed by our Refund & Returns Policy and your rights under the Australian Consumer Law. Please see our full policy at /policies/refund. Refund requests must be submitted within 7 calendar days of purchase for change-of-mind refunds. ACL statutory guarantee rights apply regardless of this window.",
                },
                {
                  title: "6. Intellectual Property",
                  content: "Upon full payment, all custom work product, code, and deliverables become the property of the client. National Tally Tech retains the right to display work in its portfolio (with client permission). National Tally Tech retains ownership of all pre-existing frameworks, libraries, and proprietary tools used in the delivery of services. Third-party software (e.g., QuickBooks®) remains the intellectual property of its respective owners.",
                },
                {
                  title: "7. Confidentiality",
                  content: "Both parties agree to keep confidential any non-public information shared during the engagement. National Tally Tech employees and contractors are required to maintain confidentiality. This obligation survives termination of the engagement for 3 years.",
                },
                {
                  title: "8. LIMITATION OF LIABILITY",
                  content: `TO THE EXTENT PERMITTED BY LAW (INCLUDING THE AUSTRALIAN CONSUMER LAW), NATIONAL TALLY TECH'S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO NATIONAL TALLY TECH IN THE 12 MONTHS PRECEDING THE CLAIM, OR THE COST OF RESUPPLY OF THE RELEVANT SERVICES — WHICHEVER IS LOWER.

NATIONAL TALLY TECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, TO THE MAXIMUM EXTENT PERMITTED BY LAW.

Nothing in this clause limits any right or remedy you have under the Australian Consumer Law.`,
                },
                {
                  title: "9. Warranty Disclaimer",
                  content: "To the extent permitted by law, services are provided on an 'as is' and 'as available' basis. Nothing in this clause affects your statutory rights under the Australian Consumer Law, including consumer guarantees that cannot be excluded.",
                },
                {
                  title: "10. Indemnification",
                  content: "You agree to indemnify and hold harmless INNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising from your use of our services or violation of these Terms, to the extent permitted by Australian law.",
                },
                {
                  title: "11. Governing Law",
                  content: "These Terms are governed by the laws of Queensland, Australia. Any disputes arising from these Terms shall be subject to the jurisdiction of the courts of Queensland, Australia. Both parties submit to the exclusive jurisdiction of those courts.",
                },
                {
                  title: "12. Dispute Resolution",
                  content: "Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation. If unresolved within 30 days, the parties agree to attempt mediation before commencing litigation. Mediation shall be conducted in Queensland, Australia under applicable rules agreed by both parties.",
                },
                {
                  title: "13. Termination",
                  content: "Either party may terminate a service engagement with 14 days written notice. National Tally Tech may terminate immediately for non-payment or material breach. Upon termination, all deliverables completed and paid for will be transferred to the client.",
                },
                {
                  title: "14. Contact",
                  content: "For legal enquiries:\nINNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD\n(trading as National Tally Tech) | ABN 75 696 801 895\nU905, 6 Tonga Place, Parkwood QLD 4214, Australia\ncontact@nationaltallytech.com | +61 447 180 277",
                },
              ].map(({ title, content }) => (
                <div key={title}>
                  <h2 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h2>
                  <p className="whitespace-pre-line">{content}</p>
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
