"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Contact</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-display text-5xl font-bold mt-3 text-balance">
              Let's Build Something <span className="text-primary">Great Together</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              Book a free 30-minute consultation or drop us a message. We respond within 1 business day.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Full Name *</Label>
                    <Input placeholder="John Smith" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Email Address *</Label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-1.5">
                  <Label>Subject *</Label>
                  <Input placeholder="e.g. SaaS development project inquiry" required />
                </div>
                <div className="space-y-1.5">
                  <Label>Message *</Label>
                  <Textarea
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="min-h-[140px] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground glow-cyan font-semibold"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send className="w-4 h-4 ml-2" />}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No credit card info should be submitted here. This form is for general inquiries only.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-bold text-lg">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: "Address", text: "U905, 6 Tonga Place\nParkwood QLD 4214, Australia" },
                    { icon: Phone, title: "Phone", text: "+61 447 180 277" },
                    { icon: Mail, title: "Support Email", text: "contact@nationaltallytech.com" },
                    { icon: Clock, title: "Business Hours", text: "Mon–Fri: 9am – 5pm AEST" },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">{title}</div>
                        <div className="text-sm whitespace-pre-line">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">Book a 30-minute call with a senior engineer. No commitment, no sales pitch.</p>
                <Button className="w-full bg-primary text-primary-foreground font-semibold">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
