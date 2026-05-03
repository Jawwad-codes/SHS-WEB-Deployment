import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal, SectionEyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, SITE } from "@/lib/site";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo title={`${service.title} in Texas`} description={service.description} canonical={`/services/${service.slug}`} />

      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px]">
          <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-16 pt-32 text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-accent">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{service.short}</span>
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-xl text-white/80">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/contact">Request a quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="glass" size="lg"><a href={`tel:${SITE.phoneRaw}`}><Phone className="h-4 w-4" /> {SITE.phone}</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionEyebrow>What's included</SectionEyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight">A complete service, no surprises.</h2>
            <p className="mt-4 text-muted-foreground">Every {service.title.toLowerCase()} job includes diagnostics, flat-rate pricing, and our 10-year workmanship warranty.</p>
          </div>
          <div className="grid gap-3">
            {service.bullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 hover-lift">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">Four steps, zero stress.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Tell us", "Describe the job in 60 seconds online or by phone."],
              ["02", "Quote", "Flat-rate pricing within one business hour."],
              ["03", "Service", "On-time, uniformed, background-checked tech at your door."],
              ["04", "Warranty", "10-year workmanship warranty, paperwork emailed."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.07}>
                <div className="rounded-3xl border border-border/60 bg-card p-6">
                  <div className="font-display text-3xl text-accent">{n}</div>
                  <div className="mt-3 font-semibold">{t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us for this service */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionEyebrow>Why Summit for {service.title.toLowerCase()}</SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">Built on a decade of doing this every single day.</h2>
            <p className="mt-5 text-muted-foreground">
              We've serviced more than 12,000 Texas homes since 2008, and {service.title.toLowerCase()} has been part of our offering from day one. Every technician on this crew is W-2, background-checked, drug-tested, and continuously trained — never a subcontractor. That consistency is why our average review across Google, Yelp and Houzz sits at 4.9 stars.
            </p>
            <p className="mt-4 text-muted-foreground">
              We carry a full van of common parts so most jobs are completed in a single visit — saving you days of lost time and follow-up appointments. And every install we do is photographed, documented, and stored in your customer file for warranty and future reference.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["10-year", "Workmanship warranty"],
              ["1 hour", "Avg. quote turnaround"],
              ["98%", "Same-day completion"],
              ["W-2", "Never subcontracted"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-3xl border border-border/60 bg-card p-6">
                <div className="font-display text-3xl font-medium text-accent">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <SectionEyebrow>Also offered</SectionEyebrow>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Other services you might need.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-3xl bg-gradient-navy p-10 text-primary-foreground md:p-14">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">Ready for a {service.title.toLowerCase()} quote?</h2>
              <p className="mt-3 text-primary-foreground/75">Real human callback within one business hour.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild variant="hero" size="lg"><Link to="/contact">Get my quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="glass" size="lg"><a href={`tel:${SITE.phoneRaw}`}><Phone className="h-4 w-4" /> {SITE.phone}</a></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
