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
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
      </div>
    </section>
  </>
);
export default Services;
