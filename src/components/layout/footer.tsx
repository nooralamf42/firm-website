"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { COMPANY_NAME, DBA_NAME, HEADQUARTERS_ADDRESS, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group transition-all duration-300">
              <Image
                src={pathname === "/legal/privacy" ? "/dark-logo-dba.webp" : "/dark-logo.webp"}
                alt={COMPANY_NAME}
                width={200}
                height={80}
                className="h-60 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Delivering premier accounting, tax, and advisory solutions to empower businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Firm</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about/diversity" className="hover:text-white transition-colors">Diversity & Inclusion</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/audit-assurance" className="hover:text-white transition-colors">Audit & Assurance</Link></li>
              <li><Link href="/services/tax" className="hover:text-white transition-colors">Tax Services</Link></li>
              <li><Link href="/services/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
              <li><Link href="/services/financial-advisory" className="hover:text-white transition-colors">Financial Advisory</Link></li>
              <li><Link href="/services/bookkeeping" className="hover:text-white transition-colors">Bookkeeping & Payroll</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{HEADQUARTERS_ADDRESS.street}<br />{HEADQUARTERS_ADDRESS.area}<br />{HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </li>
              <li className="hidden">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
