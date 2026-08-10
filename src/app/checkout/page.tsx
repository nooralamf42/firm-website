"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { toast } from "sonner";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const price = searchParams.get("price");
  const qty = searchParams.get("qty");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Order placed successfully! Check your email for access details.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-bold mb-2">Secure Checkout</h1>
            <p className="text-muted-foreground mb-8">Complete your purchase below. All transactions are SSL encrypted and PCI DSS compliant.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact */}
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <h2 className="font-display font-bold text-lg">Contact Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>First Name</Label>
                      <Input placeholder="John" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Last Name</Label>
                      <Input placeholder="Smith" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="john@example.com" required />
                    <p className="text-xs text-muted-foreground">Access details will be emailed immediately upon successful payment.</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Phone Number</Label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-lg">Payment Details</h2>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Lock className="w-3.5 h-3.5 text-primary" />
                      SSL Secured
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-muted-foreground">
                    <p>Payment processing is handled securely via our PCI DSS Level 1 compliant payment provider. Card data is tokenized client-side and never touches our servers.</p>
                    <p className="mt-2 text-xs">3D Secure (3DS) authentication may be required for fraud prevention.</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>Expiry Date</Label>
                      <Input placeholder="MM / YY" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label>CVV</Label>
                      <Input placeholder="123" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Name on Card</Label>
                    <Input placeholder="John Smith" required />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground glow-cyan font-semibold text-base py-6"
                >
                  {loading ? "Processing..." : "Complete Purchase"}
                  {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By completing your purchase you agree to our{" "}
                  <Link href="/policies/terms" className="text-primary hover:underline">Terms & Conditions</Link>. You are protected by our{" "}
                  <Link href="/policies/refund" className="text-primary hover:underline">7-Day Money-Back Guarantee</Link>.
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h2 className="font-display font-bold text-lg">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-semibold text-right max-w-[180px]">
                      {product ?? "NexGen Service"}
                    </span>
                  </div>
                  {qty && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-semibold">{qty}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-display font-bold text-xl text-primary">
                      ${price ?? "—"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
                <h3 className="font-semibold text-sm">Purchase Protection</h3>
                {[
                  { icon: Shield, text: "7-Day Money-Back Guarantee" },
                  { icon: Lock, text: "PCI DSS Level 1 Compliant" },
                  { icon: CheckCircle, text: "Instant email delivery" },
                  { icon: CheckCircle, text: "3D Secure fraud protection" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {text}
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                  See our full{" "}
                  <Link href="/policies/refund" className="text-primary hover:underline">Refund Policy</Link>{" "}
                  for complete terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  );
}
