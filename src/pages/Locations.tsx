/** @format */

import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { CITIES, LOCATIONS, SITE } from "@/lib/site";
import austin from "@/assets/city-austin.jpg";
import dallas from "@/assets/city-dallas.jpg";
import houston from "@/assets/city-houston.jpg";
import sanantonio from "@/assets/city-sanantonio.jpg";
import fortworth from "@/assets/city-fortworth.jpg";

const IMG: Record<string, string> = {
  austin,
  dallas,
  houston,
  "san-antonio": sanantonio,
  "fort-worth": fortworth,
};

const Locations = () => (
  <>
    <Seo
      title="Service Areas in Texas — Dallas, Houston, Austin, San Antonio"
      description="Summit Home Services proudly serves homeowners across Dallas-Fort Worth, Houston, Austin, San Antonio and surrounding Texas communities."
      canonical="/locations"
    />
    <PageHero
      eyebrow="Where we work"
      title={
        <>
          Proudly serving{" "}
          <em className="italic font-light text-accent">all over Texas.</em>
        </>
      }
      subtitle="Five major metros. Forty-plus communities. One trusted local team — fully licensed, insured, and on-call when you need us."
    />

    {/* Featured cities */}
    <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
      <SectionEyebrow>Major service areas</SectionEyebrow>
      <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
        Local crews in every major Texas metro.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Each region is staffed by full-time Summit technicians who live in the
        communities they serve — not subcontractors. That's how we keep our
        quality bar (and our 4.9-star rating) consistent across the state.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card hover-lift">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={IMG[c.slug]}
                  alt={`${c.name}, Texas skyline`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <Clock className="h-3 w-3" /> {c.response}
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-glow">
                    {c.region}
                  </div>
                  <h3 className="mt-1 font-display text-3xl font-medium">
                    {c.name}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Neighborhoods
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
                  >
                    Book in {c.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="text-xs text-muted-foreground hover:text-accent"
                  >
                    <Phone className="inline h-3.5 w-3.5" /> Call
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* All cities */}
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionEyebrow>All cities served</SectionEyebrow>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">
          From the Hill Country to the Gulf Coast.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          If your zip code isn't listed, give us a call — we extend service for
          larger projects across the entire state.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {LOCATIONS.map((c, i) => (
            <Reveal key={c} delay={i * 0.015}>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm hover-lift">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {c}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-3xl bg-gradient-navy p-10 text-primary-foreground md:p-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <SectionEyebrow>Don't see your city?</SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              We probably still cover it.
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/75">
              For larger projects we routinely travel beyond our standard
              service map — including Lubbock, Amarillo, Corpus Christi, El
              Paso, Tyler, Waco and Bryan-College Station.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Check my zip <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href={`tel:${SITE.phoneRaw}`}>
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Locations;
