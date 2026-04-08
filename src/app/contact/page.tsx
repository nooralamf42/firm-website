"use client"

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants";

const services = [
  "Audit & Assurance",
  "Tax Services",
  "Consulting",
  "Financial Advisory",
  "Risk Advisory",
  "Bookkeeping & Payroll",
];

const specialtyContacts = [
  {
    title: "Media Inquiries",
    description:
      "For press releases, journalist interviews, or media briefings with our spokespeople, please reach out to our Communications team.",
    email: `media@${CONTACT_EMAIL.split('@')[1]}`,
    phone: CONTACT_PHONE,
  },
  {
    title: "Careers",
    description:
      "Interested in joining us? Our Talent Acquisition team can answer questions about open roles, graduate programmes, and internships.",
    email: `careers@${CONTACT_EMAIL.split('@')[1]}`,
    phone: CONTACT_PHONE,
  },
  {
    title: "Regulatory & Legal",
    description:
      "For subpoenas, regulatory enquiries, conflict-of-interest disclosures, or formal legal correspondence, please contact our General Counsel's office.",
    email: `legal@${CONTACT_EMAIL.split('@')[1]}`,
    phone: CONTACT_PHONE,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Reach our experts — we'll respond within one business day."
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-8">
                Tell us about your needs and one of our professionals will be in touch within one business day.
              </p>

              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 px-8 py-10 text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-800 font-semibold text-lg mb-2">Thank you for reaching out.</p>
                  <p className="text-green-700 text-sm">
                    A professional will contact you at <strong>{form.email}</strong> within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Alexandra Winters"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Corporation"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="alex@acme.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (212) 555 0100"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 text-foreground"
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your enquiry or the challenge you'd like to discuss…"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="min-h-[130px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 text-base rounded-lg"
                  >
                    Submit Request
                  </Button>
                  <p className="text-xs text-slate-400 text-center mt-2">
                    By submitting this form you agree to our{" "}
                    <Link href="/legal/privacy" className="underline hover:text-slate-600">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Global Headquarters</h2>
              <div className="text-slate-500 text-sm flex flex-col gap-1">
                <span className="font-semibold text-slate-700">{COMPANY_NAME}</span>
                <span>DBA - {DBA_NAME}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">Address</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {HEADQUARTERS_ADDRESS.street}<br />
                    {HEADQUARTERS_ADDRESS.area}<br />
                    {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="text-slate-600 text-sm hover:text-blue-700 transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-slate-600 text-sm hover:text-blue-700 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">Office Hours</p>
                  <p className="text-slate-600 text-sm">Monday – Friday, 8:00 am – 6:00 pm AEST</p>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
