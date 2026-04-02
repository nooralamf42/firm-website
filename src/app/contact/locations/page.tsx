import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { COMPANY_NAME, HEADQUARTERS_ADDRESS, CONTACT_PHONE } from "@/lib/constants";

const stats = [
  { value: "120", label: "Offices" },
  { value: "65", label: "Countries" },
  { value: "6", label: "Continents" },
];

const regions = [
  {
    name: "Americas",
    offices: [
      {
        city: "New York",
        country: "United States",
        address: "100 Financial District Blvd, Suite 4500, New York, NY 10005",
        phone: "+1 212 555 1000",
      },
      {
        city: "Chicago",
        country: "United States",
        address: "311 S Wacker Drive, Suite 6200, Chicago, IL 60606",
        phone: "+1 312 555 2000",
      },
      {
        city: "Los Angeles",
        country: "United States",
        address: "2049 Century Park East, Suite 3500, Los Angeles, CA 90067",
        phone: "+1 310 555 3000",
      },
      {
        city: "Toronto",
        country: "Canada",
        address: "Bay Wellington Tower, 181 Bay Street, Suite 2200, Toronto, ON M5J 2T3",
        phone: "+1 416 555 4000",
      },
      {
        city: "São Paulo",
        country: "Brazil",
        address: "Avenida Faria Lima 3500, 10° andar, São Paulo, SP 04538-132",
        phone: "+55 11 3555 5000",
      },
      {
        city: "Mexico City",
        country: "Mexico",
        address: "Paseo de la Reforma 342, Piso 18, Colonia Juárez, CDMX 06600",
        phone: "+52 55 5555 6000",
      },
    ],
  },
  {
    name: "Europe, Middle East & Africa",
    offices: [
      {
        city: "London",
        country: "United Kingdom",
        address: "1 Canada Square, Canary Wharf, London E14 5AB",
        phone: "+44 20 7555 7000",
      },
      {
        city: "Frankfurt",
        country: "Germany",
        address: "Taunusanlage 12, 60325 Frankfurt am Main",
        phone: "+49 69 5555 8000",
      },
      {
        city: "Paris",
        country: "France",
        address: "Tour First, 1-2 Place des Saisons, 92400 Courbevoie",
        phone: "+33 1 5555 9000",
      },
      {
        city: "Dubai",
        country: "United Arab Emirates",
        address: "DIFC Gate Precinct Building 3, Level 6, Dubai",
        phone: "+971 4 555 0100",
      },
      {
        city: "Johannesburg",
        country: "South Africa",
        address: "154 Sandton Drive, Sandton, Johannesburg 2196",
        phone: "+27 11 555 0200",
      },
      {
        city: "Amsterdam",
        country: "Netherlands",
        address: "Symphony, Gustav Mahlerplein 2, 1082 MA Amsterdam",
        phone: "+33 1 5555 9000",
      },
    ],
  },
  {
    name: "Asia Pacific",
    offices: [
      {
        city: "Parkwood",
        country: "Australia",
        note: "Global Headquarters",
        address: HEADQUARTERS_ADDRESS.full,
        phone: CONTACT_PHONE,
      },
      {
        city: "Singapore",
        country: "Singapore",
        address: "Marina Bay Financial Centre Tower 3, 12 Marina Boulevard, #28-00, Singapore 018982",
        phone: "+65 6555 1000",
      },
      {
        city: "Tokyo",
        country: "Japan",
        address: "Marunouchi Building 22F, 2-4-1 Marunouchi, Chiyoda-ku, Tokyo 100-6322",
        phone: "+81 3 5555 2000",
      },
      {
        city: "Hong Kong",
        country: "Hong Kong SAR",
        address: "International Commerce Centre, 1 Austin Road West, Kowloon, Hong Kong",
        phone: "+852 2555 3000",
      },
      {
        city: "Sydney",
        country: "Australia",
        address: "Barangaroo Tower One, Level 34, 100 Barangaroo Avenue, Sydney NSW 2000",
        phone: "+61 2 5555 4000",
      },
      {
        city: "Mumbai",
        country: "India",
        address: "One BKC, Plot C-66, G Block, Bandra Kurla Complex, Mumbai 400 051",
        phone: "+91 22 5555 5000",
      },
      {
        city: "Shanghai",
        country: "China",
        address: "Shanghai Tower, 33F, 501 Yincheng Middle Road, Pudong New Area, Shanghai 200120",
        phone: "+86 21 5555 6000",
      },
    ],
  },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Our Global Offices"
        description={`With 120 offices across 65 countries, ${COMPANY_NAME} is where you need us.`}
      />

      {/* Stats Bar */}
      <section className="bg-white border-b py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-slate-100 max-w-2xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <p className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Office Sections */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{region.name}</h2>
                  <div className="flex-1 border-b border-slate-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {region.offices.map((office) => (
                    <div
                      key={`${office.city}-${office.country}`}
                      className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-200 transition-all"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg font-bold text-blue-900">{office.city}</h3>
                        {office.note && (
                          <span className="text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-2.5 py-0.5 ml-2 whitespace-nowrap">
                            {office.note}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-500 mb-4">{office.country}</p>
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-600 leading-relaxed">{office.address}</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="text-xs text-slate-600 hover:text-blue-700 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Start a Conversation</h2>
          <p className="text-blue-200 mb-8">
            Wherever you operate, we have the local expertise and global perspective to help your
            organisation navigate complexity and seize opportunity.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-8 py-5 rounded-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
