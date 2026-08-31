"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Shield, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RefundPolicy() {
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
            <span className="text-foreground">Refund & Returns Policy</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold">Our Guarantee</span>
            </div>
            <h1 className="font-display text-5xl font-bold mb-4">Refund &amp; Returns Policy</h1>
            <p className="text-muted-foreground mb-2">Last updated: {updated}</p>
            <p className="text-muted-foreground mb-8">
              Effective for all purchases made from INNOVATIVE NATIONAL TAX &amp; UPKEEP INTERNATIONAL TALLY PTY LTD (ABN 75 696 801 895), trading as National Tally Tech.
            </p>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-10 glow-cyan">
              <p className="font-semibold text-lg mb-2">Summary</p>
              <p className="text-muted-foreground">
                This policy is governed by the <strong className="text-foreground">Australian Consumer Law (ACL)</strong> (Schedule 2, Competition and Consumer Act 2010 (Cth)). Consumers have statutory guarantee rights that cannot be excluded, restricted, or modified. In addition to your ACL rights, we offer a <strong className="text-foreground">7-day change-of-mind refund</strong> on software where the activation key has not been redeemed, and a prorated refund on services cancelled within 7 days.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-3">1. Consumer Guarantees under Australian Consumer Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Under the Australian Consumer Law, consumers are entitled to statutory guarantees that cannot be excluded. These include that goods and services will be of acceptable quality, fit for a stated purpose, and that services will be provided with due care and skill.
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> If a product or service has a <strong className="text-foreground">major failure</strong>, you are entitled to a full refund or replacement, and compensation for reasonably foreseeable loss.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> If a failure is <strong className="text-foreground">minor</strong>, we may choose to repair, replace, or refund.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> These rights apply regardless of any other policy stated here and cannot be waived.</li>
                </ul>
                <p className="text-muted-foreground mt-3 text-sm">
                  For more information, visit the Australian Competition and Consumer Commission (ACCC) at accc.gov.au.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">2. Software &amp; Digital Product Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to your ACL rights, we offer a change-of-mind refund on software licenses (including QuickBooks and other third-party software) under the following conditions:
                </p>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 my-4">
                  <p className="font-semibold text-foreground mb-2">General Digital Products &amp; Services Policy</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    All purchases of digital products and software services are <strong className="text-foreground">final and non-refundable</strong> once the product has been delivered, activated, or made available to the customer. Refunds may only be considered where the purchased product is materially defective, inaccessible due to an issue attributable to us, or the service/product was not delivered as agreed. Refund requests must be submitted within <strong className="text-foreground">7 days of purchase</strong> and will be reviewed on a case-by-case basis.
                  </p>
                </div>

                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> The refund request is submitted within <strong className="text-foreground">7 calendar days</strong> of the original purchase date.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> The software activation key or licence code has <strong className="text-foreground">NOT</strong> been redeemed or activated.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> The customer provides the original order confirmation and a brief reason for the refund.</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  Once a software key has been activated it cannot be deactivated and a change-of-mind refund will not be issued. Your ACL statutory guarantee rights remain unaffected.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">3. Consulting &amp; Professional Service Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">For consulting, development, design, and related professional services:</p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Refund requests submitted within <strong className="text-foreground">7 calendar days</strong> of the project start date are eligible for a prorated refund.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> The prorated refund is calculated as: Total paid minus (hourly rate × hours worked at time of cancellation).</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> After 7 days, all project payments are considered earned and non-refundable unless an ACL major failure has occurred or a service level agreement (SLA) breach occurred.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Where an ACL major failure applies, you are entitled to a full refund regardless of the 7-day window.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">4. Subscription Services</h2>
                <p className="text-muted-foreground leading-relaxed">For ongoing subscription services (e.g., bookkeeping, maintenance plans):</p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> You may cancel at any time. Cancellations take effect at the end of the current billing cycle.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Refunds for partial months are not issued for cancellations after the 7-day change-of-mind window.</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> First-month refunds are available within 7 days if you are unsatisfied with the service quality, subject to ACL rights.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">5. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed">To initiate a refund, please contact us within the applicable window:</p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong className="text-foreground">Email:</strong> contact@nationaltallytech.com with subject line &quot;Refund Request – [Order #]&quot;</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong className="text-foreground">Phone:</strong> +61 447 180 277 (Mon–Fri, 9am–5pm AEST)</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Include your order confirmation number, name, email, and reason for refund.</li>
                </ul>
                <p className="text-muted-foreground mt-3">Approved refunds are processed within 5–10 business days to the original payment method. All refunds are in AUD.</p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">6. Non-Refundable Items (Change-of-Mind)</h2>
                <p className="text-muted-foreground leading-relaxed">The following are not eligible for change-of-mind refunds (your ACL statutory rights remain unaffected):</p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Activated or redeemed software licence keys</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Payments made more than 7 calendar days prior to the refund request</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Custom domain registrations and third-party service fees paid on your behalf</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Rush project fees and expedited delivery charges</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This policy is governed by the laws of Queensland, Australia. Nothing in this policy limits your rights under the Australian Consumer Law.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For refund-related enquiries, contact us at:<br />
                  <strong className="text-foreground">INNOVATIVE NATIONAL TAX &amp; UPKEEP INTERNATIONAL TALLY PTY LTD</strong><br />
                  (trading as National Tally Tech) | ABN 75 696 801 895<br />
                  U905, 6 Tonga Place, Parkwood QLD 4214, Australia<br />
                  contact@nationaltallytech.com | +61 447 180 277
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
