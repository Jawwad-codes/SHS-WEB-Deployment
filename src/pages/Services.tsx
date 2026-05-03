import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

const Services = () => (
  <>
    <Seo title="Home Services in Texas" description="Garage doors, gates, roofing, handyman, smart home & more. Browse all of Summit's home maintenance services." canonical="/services" />
    <PageHero
      eyebrow="What we do"
      title={<>Every home service, <em className="italic font-light text-accent">under one roof.</em></>}
      subtitle="Browse the full lineup. One team, one warranty, one call."
    >
      <Button asChild variant="hero"><Link to="/contact">Get a free quote</Link></Button>
    </PageHero>
    <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Summit started in 2008 as a specialized garage-door shop and has grown — one trusted relationship at a time — into a full-service home maintenance partner. Today our crews handle everything from a stuck spring at 11pm to a complete roof replacement after a hailstorm. Same uniformed team, same warranty, same standard of care. Browse the full lineup below.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
      </div>
    </section>

    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="container-px mx-auto max-w-7xl text-center">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Don't see what you need?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">If it's part of a Texas home, odds are we service it. Pressure washing, holiday lighting, drywall texture matching, deck staining — just ask.</p>
        <Button asChild variant="navy" className="mt-8"><Link to="/contact">Ask about a custom job</Link></Button>
      </div>
    </section>
  </>
);
export default Services;
