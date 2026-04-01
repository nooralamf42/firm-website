import { PageHeader } from "@/components/ui/page-header";

export default function CookiesPage() {
  return (
    <>
      <PageHeader 
        title="Cookie Policy" 
        description="Last updated: October 15, 2025"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2>What are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over time, enhancing your browsing experience.
          </p>
          
          <h2>How We Use Cookies</h2>
          <p>Meridian Partners uses cookies for the following purposes:</p>
          <ul>
            <li><strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly, such as secure logins or maintaining session state.</li>
            <li><strong>Performance & Analytics Cookies:</strong> To understand how visitors interact with our site, enabling us to improve layout, speed, and content relevance (e.g., Google Analytics).</li>
            <li><strong>Functional Cookies:</strong> To remember your preferences, such as language selection or region.</li>
            <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and track the efficiency of our marketing campaigns.</li>
          </ul>

          <h2>Managing Your Preferences</h2>
          <p>
            You have the right to accept or reject non-essential cookies. You can manage your preferences at any time by clicking the "Cookie Settings" link at the bottom of our site, or by modifying your browser settings to block certain types of cookies.
          </p>
          <p>
            Please note that disabling necessary cookies may affect the functionality of our website.
          </p>
        </div>
      </section>
    </>
  );
}
