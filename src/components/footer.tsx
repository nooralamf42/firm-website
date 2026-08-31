import Link from "next/link";
import { Zap, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const serviceLinks = [
  { name: "Mobile Consulting", slug: "mobile-consulting" },
  { name: "App Porting", slug: "app-porting" },
  { name: "Technology Outsourcing", slug: "technology-outsourcing" },
  { name: "UI/UX Design", slug: "ui-ux-design" },
  { name: "E-commerce Apps", slug: "ecommerce-development" },
  { name: "Startup Apps", slug: "startup-development" },
  { name: "CRM Development", slug: "crm-development" },
  { name: "SaaS Development", slug: "saas-development" },
  { name: "Offshore Dev Center", slug: "offshore-development" },
  { name: "Product Engineering", slug: "product-engineering" },
  { name: "IT Staff Augmentation", slug: "staff-augmentation" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg leading-none">
                  National<span className="text-primary"> Tally Tech</span>
                </span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-wide leading-none mt-0.5">
                  DBA Intuit QuickBooks
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional technology, bookkeeping, and software solutions for businesses across Australia. Authorised QuickBooks Reseller.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>U905, 6 Tonga Place<br />Parkwood QLD 4214, Australia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+61447180277" className="hover:text-primary transition-colors">+61 447 180 277</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@nationaltallytech.com" className="hover:text-primary transition-colors">contact@nationaltallytech.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-bold"
                  aria-label={social}
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary">More Services</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quickbooks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  QuickBooks Sales
                </Link>
              </li>
              <li>
                <Link href="/bookkeeping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact & Support</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary pt-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/policies/refund" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  7-Day Refund Policy
                </Link>
              </li>
              <li><Link href="/policies/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policies/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {year} INNOVATIVE NATIONAL TAX & UPKEEP INTERNATIONAL TALLY PTY LTD (ABN 75 696 801 895). All rights reserved. | Registered in Queensland, Australia
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
            <span className="text-xs text-muted-foreground">SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
