import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

const Contact = () => (
  <>
    <Seo title="Contact & Free Quote" description="Get a free home services quote in under 60 seconds. Call, message, or use our multi-step form." canonical="/contact" />
    <PageHero
      eyebrow="Free quote"
      title={<>Tell us what's up — <em className="italic font-light text-accent">we'll handle the rest.</em></>}
      subtitle="A real Summit team member will reach out within one business hour."
    />
    <section className="container-px mx-auto max-w-7xl pb-24">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr]">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
            { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, label: "Visit", value: SITE.address },
            { icon: Clock, label: "Hours", value: SITE.hours },
          ].map((c) => (
            <a key={c.label} href={c.href} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 hover-lift">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white"><c.icon className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.label}</span>
                <span className="mt-1 block font-medium">{c.value}</span>
              </span>
            </a>
          ))}

          <div className="rounded-2xl border border-border/60 bg-gradient-navy p-6 text-primary-foreground">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse" /> Emergency dispatch
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">Burst pipe, broken garage door, locked-out gate? We dispatch 24/7.</p>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  </>
);
export default Contact;
