import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StatsBar from "@/components/home/stats-bar";
import ServicesGrid from "@/components/home/services-grid";
import Testimonials from "@/components/home/testimonials";
import HomeCTA from "@/components/home/home-cta";
import HeroBanner from "@/components/home/hero-banner";
import HeroCanvas from "@/components/hero-canvas-loader";

// Forced dynamic: OpenNext's Cloudflare adapter has a known cache-key bug that's
// specific to the root route ("/") among prerendered static pages — it 404s in
// production even though every other static page (e.g. /about) works fine, and
// persists even on the latest @opennextjs/cloudflare + @opennextjs/aws. Bypassing
// the static-page cache lookup by rendering on every request avoids it.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with 3D canvas */}
      <div className="relative">
        <HeroBanner />
        {/* Overlay 3D canvas on hero */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-50">
            <Suspense fallback={null}>
              <HeroCanvas />
            </Suspense>
          </div>
        </div>
      </div>

      <StatsBar />
      <ServicesGrid />
      <Testimonials />
      <HomeCTA />
      <Footer />
    </div>
  );
}
