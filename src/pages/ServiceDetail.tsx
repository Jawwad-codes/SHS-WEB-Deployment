/** @format */

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
      <Seo
        title={`${service.title} in Texas`}
        description={service.description}
        canonical={`/services/${service.slug}`}
      />

      {/* ── HERO ── */}
      <section className="relative -mt-20 overflow-hidden">
        <div className="relative h-[60vh] min-h-[440px] sm:h-[70vh] sm:min-h-[520px]">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-16 pt-32 text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-accent">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                {service.short}
              </span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-white/80">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/contact">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-b border-border/60 bg-card">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border/60 md:grid-cols-4 md:divide-x md:divide-y-0">
          {service.stats.map(([val, label]) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-7 text-center"
            >
              <span className="font-display text-3xl font-medium text-accent md:text-4xl">
                {val}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionEyebrow>What's included</SectionEyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight">
              A complete service, no surprises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every {service.title.toLowerCase()} job includes diagnostics,
              flat-rate pricing, and our 10-year workmanship warranty.
            </p>
          </div>
          <div className="grid gap-3">
            {service.bullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 hover-lift">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS (unique per service) ── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            {service.process.length} steps, zero stress.
          </h2>
          <div
            className={`mt-12 grid gap-6 ${service.process.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}
          >
            {service.process.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="rounded-3xl border border-border/60 bg-card p-6">
                  <div className="font-display text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 font-semibold text-foreground">
                    {title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SUMMIT FOR THIS SERVICE (unique copy) ── */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionEyebrow>
              Why Summit for {service.title.toLowerCase()}
            </SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Built on a decade of doing this every single day.
            </h2>
            <p className="mt-5 text-muted-foreground">{service.whyUs}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.stats.map(([val, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-border/60 bg-card p-6"
              >
                <div className="font-display text-3xl font-medium text-accent">
                  {val}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <SectionEyebrow>Also offered</SectionEyebrow>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">
          Other services you might need.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-3xl bg-gradient-navy p-10 text-primary-foreground md:p-14">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                Ready for a {service.title.toLowerCase()} quote?
              </h2>
              <p className="mt-3 text-primary-foreground/75">
                Real human callback within one business hour.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get my quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
