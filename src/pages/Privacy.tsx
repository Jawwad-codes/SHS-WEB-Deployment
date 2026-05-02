import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";

const Privacy = () => (
  <>
    <Seo title="Privacy Policy" description="How Summit Home Services collects, uses, and protects your personal information." canonical="/privacy" />
    <PageHero eyebrow="Privacy" title="Privacy Policy" subtitle="Last updated April 2026." />
    <section className="container-px mx-auto max-w-3xl pb-24 text-foreground">
      <div className="prose prose-lg max-w-none">
        <p>Summit Home Services ("we", "us") respects your privacy. This policy explains what we collect when you use our website or request a quote, and how we use it.</p>
        <h2>What we collect</h2>
        <p>Contact details you provide (name, phone, email, address) and basic analytics about your visit (page views, device type).</p>
        <h2>How we use it</h2>
        <p>To provide quotes, schedule services, and improve our website. We do not sell your personal information to third parties.</p>
        <h2>Cookies</h2>
        <p>We use a minimal set of cookies for analytics and to remember your theme preference.</p>
        <h2>Your rights</h2>
        <p>You can request deletion of your data at any time by emailing hello@summithomeservices.com.</p>
      </div>
    </section>
  </>
);
export default Privacy;
