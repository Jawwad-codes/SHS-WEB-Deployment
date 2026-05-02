import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/site";

const MaintenancePlans = () => (
  <>
    <Seo title="Home Maintenance Plans" description="Subscription-style home maintenance plans for Texas homeowners — Essential, Summit, and Estate." canonical="/maintenance-plans" />
    <PageHero
      eyebrow="Maintenance plans"
      title={<>Care for your home, <em className="italic font-light text-accent">on autopilot.</em></>}
      subtitle="Pick a plan and we'll handle the seasonal check-ups, priority scheduling, and discounts on every repair."
    />
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-6 lg:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <div className={`relative flex h-full flex-col rounded-3xl border bg-card p-8 hover-lift ${p.featured ? "border-accent shadow-accent" : "border-border/60"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-foreground inline-flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{p.tag}</div>
              <h3 className="mt-2 font-display text-3xl font-medium">{p.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl font-medium">${p.price}</span>
                <span className="text-muted-foreground">/{p.cadence}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"><Check className="h-3 w-3" /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "hero" : "outline"} className="mt-10">
                <Link to="/contact">Choose {p.name}</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-warm p-10 text-center">
        <SectionEyebrow><span className="mx-auto">Need something custom?</span></SectionEyebrow>
        <h2 className="font-display text-3xl font-medium">We'll build a plan around your property.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Multi-property, HOA, and light commercial plans available on request.</p>
        <Button asChild variant="navy" className="mt-6"><Link to="/contact">Talk to us</Link></Button>
      </div>
    </section>
  </>
);
export default MaintenancePlans;
