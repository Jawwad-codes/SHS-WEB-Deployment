import { MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { LOCATIONS } from "@/lib/site";
import locImg from "@/assets/locations-tx.jpg";

const Locations = () => (
  <>
    <Seo title="Service Areas in Texas" description="Cities served by Summit Home Services across Central and South Texas." canonical="/locations" />
    <PageHero
      eyebrow="Where we work"
      title={<>Proudly serving <em className="italic font-light text-accent">all over Texas.</em></>}
      subtitle="If your zip code isn't listed, give us a call — we extend service for larger projects."
    />
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-center">
        <Reveal>
          <img src={locImg} alt="Texas neighborhood" className="rounded-3xl shadow-elegant" loading="lazy" />
        </Reveal>
        <div>
          <SectionEyebrow>Cities we service</SectionEyebrow>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">From the Hill Country to the coast.</h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {LOCATIONS.map((c, i) => (
              <Reveal key={c} delay={i * 0.02}>
                <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm hover-lift">
                  <MapPin className="h-3.5 w-3.5 text-accent" /> {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Locations;
