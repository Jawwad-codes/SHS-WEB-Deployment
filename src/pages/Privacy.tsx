import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";

const Privacy = () => (
  <>
    <Seo title="Privacy Policy" description="How Summit Home Services collects, uses, and protects your personal information." canonical="/privacy" />
    <PageHero eyebrow="Privacy" title="Privacy Policy" subtitle="Last updated April 2026." />
    <section className="container-px mx-auto max-w-3xl pb-24 text-foreground">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>Summit Home Services ("we", "us", "our") respects your privacy. This policy explains what information we collect when you use summithomeservices.com or request a quote, how we use that information, and the choices you have. We are based in Austin, Texas, and operate exclusively within the State of Texas.</p>

        <h2>Information we collect</h2>
        <p>When you request a quote, schedule service, or contact us we collect the contact details you provide — typically your name, phone number, email address, service address and a description of the work. When you visit our website we automatically collect basic analytics: pages viewed, browser type, device type, approximate location (city level), and referring source.</p>

        <h2>How we use your information</h2>
        <ul>
          <li>To prepare quotes and schedule service appointments.</li>
          <li>To dispatch the right technician with the right parts.</li>
          <li>To send service reminders, follow-ups, and warranty notifications.</li>
          <li>To improve the website and our customer experience.</li>
          <li>To comply with legal, tax, and insurance obligations.</li>
        </ul>

        <h2>Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. We share data only with vetted service providers (scheduling software, payment processor, email and SMS delivery) under contracts that require confidentiality and data protection.</p>

        <h2>Cookies & analytics</h2>
        <p>We use a minimal set of first-party cookies for analytics (anonymized) and to remember your theme preference. You can disable cookies in your browser at any time without losing access to the site.</p>

        <h2>Data retention</h2>
        <p>Customer records are retained for seven years to honor our 10-year workmanship warranty and meet IRS requirements. You can request earlier deletion at any time, subject to legal holds.</p>

        <h2>Your rights</h2>
        <p>Texas residents may request a copy of, correction to, or deletion of their personal information by emailing <a href="mailto:hello@summithomeservices.com">hello@summithomeservices.com</a>. We respond within 30 days.</p>

        <h2>Children</h2>
        <p>Our services and website are not directed at children under 13, and we do not knowingly collect personal information from children.</p>

        <h2>Changes</h2>
        <p>We may update this policy as our practices evolve. Material changes will be highlighted at the top of this page for 30 days.</p>

        <h2>Contact</h2>
        <p>Summit Home Services · 1200 South Lamar Blvd, Austin, TX 78704 · (512) 555-0123 · hello@summithomeservices.com</p>
      </div>
    </section>
  </>
);
export default Privacy;
