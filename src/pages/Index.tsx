/** @format */

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Star, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal, SectionEyebrow } from "@/components/primitives";
import { Counter } from "@/components/Counter";
import { BeforeAfter } from "@/components/BeforeAfter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BENEFITS, SERVICES, SITE, STATS } from "@/lib/site";
import hero from "@/assets/hero-home.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import team2 from "@/assets/team2.jpg";
import beforeImg from "@/assets/before-garage.jpg";
import afterImg from "@/assets/after-garage.jpg";
import gFence from "@/assets/gallery-fence.jpg";
import gPaint from "@/assets/gallery-paint.jpg";
import gRoof from "@/assets/gallery-roof.jpg";
import gWindow from "@/assets/gallery-window.jpg";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <>
      <Seo
        title="Summit Home Services — Expert Care By JD for Every Part of Your Home"
        description="Texas full-service home maintenance: garage doors, gates, roofing, handyman, smart home & 24/7 emergency repairs. Free quotes."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: SITE.name,
          telephone: SITE.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address,
            addressRegion: "TX",
          },
          areaServed: "Texas",
          priceRange: "$$",
        }}
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative -mt-20 min-h-[640px] h-[100svh] overflow-hidden"
      >
        <motion.div style={{ y: yImg }} className="absolute inset-0 h-[115%]">
          <HeroCarousel images={[hero, hero2, hero3, hero4]} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div className="absolute inset-0 grain z-10" />

        <motion.div
          style={{ y: yText }}
          className="container-px relative z-20 mx-auto flex h-full max-w-7xl flex-col mt-9 justify-end pb-24 pt-28 text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted by 12,000+ Texas homeowners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem]"
          >
            Expert care for{" "}
            <em className="italic font-light text-accent-glow">every part</em>{" "}
            of your home.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-white/80 sm:text-lg"
          >
            From garage doors to roofs, smart locks to seasonal tune-ups — one
            trusted Texas team for the whole house. Licensed, insured, and
            on-call 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/contact">
                Get Your Free Quote <ArrowRight className="h-4 w-4" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/70"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent-glow" /> Licensed &
              insured
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent-glow text-accent-glow" /> 4.9
              · 1,800+ reviews
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-accent-glow" /> 10-year warranty
            </div>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60"
        >
          scroll
        </motion.div>
      </section>

      {/* MARQUEE STATS */}
      <section className="border-y border-border/60 bg-card">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border/60 md:grid-cols-4 md:divide-x md:divide-y-0">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 py-8 text-center"
            >
              <span className="font-display text-4xl font-medium text-foreground md:text-5xl">
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Our Services</SectionEyebrow>
            <h2 className="font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
              One team,{" "}
              <em className="italic font-light text-accent">every trade.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We started in garage doors and grew into a full-service home
            maintenance partner. Whatever the house needs — we show up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* WHY US — split layout */}
      <section className="bg-gradient-warm">
        <div className="container-px mx-auto grid max-w-7xl gap-16 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={team2}
                alt="The Summit team"
                className="w-full rounded-3xl object-cover shadow-elegant"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl border border-border/60 bg-card p-5 shadow-elegant md:block">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  “Best home-services team in Austin.”
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  — Houzz Pro Reviews
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionEyebrow>Why homeowners choose us</SectionEyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              The standard of care every Texas home deserves.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card shadow-soft">
                      <b.icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {b.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.3fr] lg:items-center">
          <div>
            <SectionEyebrow>Real Results</SectionEyebrow>
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              Drag to see the{" "}
              <em className="italic font-light text-accent">transformation.</em>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every project — from a $200 spring repair to a complete door
              replacement — is documented, photographed, and warrantied.
            </p>
            <Button asChild variant="navy" className="mt-8">
              <Link to="/gallery">
                See more projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Reveal>
            <BeforeAfter before={beforeImg} after={afterImg} />
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow>Featured Projects</SectionEyebrow>
              <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
                Recent work, around the corner.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent sm:shrink-0"
            >
              View gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: gFence, t: "Cedar privacy fence" },
              { src: gPaint, t: "Interior repaint" },
              { src: gRoof, t: "Storm-ready roof" },
              { src: gWindow, t: "Picture window" },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={p.src}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 font-display text-sm font-medium text-white sm:bottom-5 sm:left-5 sm:right-5 sm:text-lg">
                    {p.t}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="text-center">
          <SectionEyebrow>What homeowners say</SectionEyebrow>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-10 text-primary-foreground md:p-16">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <SectionEyebrow>Ready when you are</SectionEyebrow>
              <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
                Get a free quote in under{" "}
                <em className="italic font-light text-accent-glow">
                  60 seconds.
                </em>
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/75">
                No call-center bots. A real Summit team member will reach out
                within one business hour.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full md:w-auto"
              >
                <Link to="/contact">
                  Start my quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="lg"
                className="w-full md:w-auto"
              >
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
};

export default Home;
