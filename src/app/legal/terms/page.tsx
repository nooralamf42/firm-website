import { PageHeader } from "@/components/ui/page-header";

export default function TermsPage() {
  return (
    <>
      <PageHeader 
        title="Terms of Service" 
        description="Last updated: October 15, 2025"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Meridian Partners website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
          
          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to reports, articles, graphics, logos, and firm methodologies, is the exclusive property of Meridian Partners and protected by international copyright laws. You may not reproduce, distribute, or modify our content without written consent.
          </p>

          <h2>3. Disclaimer of Liability</h2>
          <p>
            The information provided on this website—including insights, blogs, and reports—is for general informational purposes only and does not constitute professional accounting, tax, legal, or financial advice. We disclaim any liability for actions taken based on our website content without prior direct consultation with our professionals.
          </p>

          <h2>4. Client Agreements</h2>
          <p>
            Actual provision of audit, tax, or consulting services is governed by specific Engagement Letters signed between Meridian Partners and the client. In the event of a conflict between these Terms and an Engagement Letter, the Engagement Letter supersedes.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of New York, United States, without regard to conflict of law principles.
          </p>
        </div>
      </section>
    </>
  );
}
