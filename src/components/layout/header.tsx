"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button-variants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { COMPANY_NAME, DBA_NAME } from "@/lib/constants";

const aboutItems = [
  { title: "Overview", href: "/about", description: `Learn about ${COMPANY_NAME}'s core values and mission.` },
  { title: "Careers", href: "/about/careers", description: "Join our team of dedicated professionals." },
  { title: "Diversity & Inclusion", href: "/about/diversity", description: "Our commitment to a diverse workplace." },
];

const serviceItems = [
  { title: "All Services", href: "/services", description: "Comprehensive financial and advisory services." },
  { title: "Audit & Assurance", href: "/services/audit-assurance", description: "Independent audit services designed to enhance reliability." },
  { title: "Tax Services", href: "/services/tax", description: "Strategic tax planning and compliance." },
  { title: "Consulting", href: "/services/consulting", description: "Business transformation and operational strategies." },
  { title: "Financial Advisory", href: "/services/financial-advisory", description: "M&A, restructuring, and valuation services." },
  { title: "Risk Advisory", href: "/services/risk-advisory", description: "Enterprise risk management and regulatory compliance." },
  { title: "Bookkeeping", href: "/services/bookkeeping", description: "Outsourced bookkeeping and payroll solutions." },
];

const industryItems = [
  { title: "All Industries", href: "/industries" },
  { title: "Financial Services", href: "/industries/financial-services" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Technology", href: "/industries/technology" },
  { title: "Manufacturing", href: "/industries/manufacturing" },
  { title: "Real Estate", href: "/industries/real-estate" },
  { title: "Other Industries", href: "/industries/others" },
];

const insightItems = [
  { title: "All Insights", href: "/insights" },
  { title: "Articles", href: "/insights/articles" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8 flex h-25 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
            <Image
              src={pathname === "/legal/privacy" ? "/logo-dba.webp" : "/image-removebg-preview (3).png"}
              alt={COMPANY_NAME}
              width={200}
              height={60}
              className="h-30 w-auto object-contain"
              priority
            />
          </Link>
          
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* About Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {industryItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Insights Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                      {insightItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing Link */}
                <NavigationMenuItem>
                  <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/contact" className={cn(buttonVariants(), "bg-blue-600 hover:bg-blue-700 text-white")}>
              Contact Us
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost" }), "lg:hidden px-2")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto px-6">
              <nav className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg border-b pb-3 mb-1">About Us</h4>
                  {aboutItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-100 transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg border-b pb-3 mb-1">Services</h4>
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-100 transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg border-b pb-3 mb-1">Industries</h4>
                  {industryItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-100 transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg border-b pb-3 mb-1">Insights</h4>
                  {insightItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-100 transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/pricing" className="font-semibold text-lg hover:text-slate-900 transition-colors">
                    Pricing
                  </Link>
                </div>
                <div className="flex flex-col gap-4 mt-2 pt-6 border-t">
                  <Link href="/contact" className={cn(buttonVariants(), "w-full bg-blue-900 text-white hover:bg-blue-800 py-3")}>
                    Contact Us
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink 
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
           <p className="line-clamp-2 text-sm leading-snug text-slate-500 mt-2">
             {children}
           </p>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
