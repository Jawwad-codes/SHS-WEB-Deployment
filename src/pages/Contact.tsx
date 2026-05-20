/** @format */

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  { icon: MapPin, label: "Visit", value: SITE.address, href: null },
  { icon: Clock, label: "Hours", value: SITE.hours, href: null },
] as const;

const Contact = () => (
  <>
    <Seo
      title="Contact & Free Quote"
      description="Get a free home services quote in under 60 seconds. Call, message, or use our multi-step form."
      canonical="/contact"
    />
    <PageHero
      eyebrow="Free quote"
      title={
        <>
          Tell us what's up —{" "}
          <em className="italic font-light text-accent">
            we'll handle the rest.
          </em>
        </>
      }
      subtitle="A real Summit team member will reach out within one business hour."
    />
    <section className="container-px mx-auto max-w-7xl pb-24 mt-10">
      <div className="grid gap-8 lg:grid-cols-[1fr,1.4fr] lg:gap-10">
        <div className="space-y-4">
          {CONTACT_ITEMS.map((c) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="mt-1 block font-medium text-foreground">
                    {c.value}
                  </span>
                </span>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 hover-lift"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                {inner}
              </div>
            );
          })}

          <div className="rounded-2xl border border-border/60 bg-gradient-navy p-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(30_100%_64%)]">
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(22_95%_56%)]" />
              Emergency dispatch
            </div>
            <p className="mt-2 text-sm text-white/80">
              Burst pipe, broken garage door, locked-out gate? We dispatch 24/7.
            </p>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  </>
);
export default Contact;
