/** @format */

import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { POSTS } from "@/lib/site";

// Map image keys to imported assets
import blogGarageSpring from "@/assets/blog-garage-spring.jpg";
import blogRoofStorm from "@/assets/blog-roof-storm.jpg";
import blogSmartLock from "@/assets/blog-smart-lock.jpg";
import blogFenceGate from "@/assets/blog-fence-gate.jpg";
import blogHandyman from "@/assets/blog-handyman.jpg";
import blogWindows from "@/assets/blog-windows.jpg";
import blogHomeValue from "@/assets/blog-home-value.jpg";
import blogHvac from "@/assets/blog-hvac.jpg";

const IMAGE_MAP: Record<string, string> = {
  "blog-garage-spring": blogGarageSpring,
  "blog-roof-storm": blogRoofStorm,
  "blog-smart-lock": blogSmartLock,
  "blog-fence-gate": blogFenceGate,
  "blog-handyman": blogHandyman,
  "blog-windows": blogWindows,
  "blog-home-value": blogHomeValue,
  "blog-hvac": blogHvac,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Garage Doors": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Roofing: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Smart Home": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Exterior: "bg-green-500/10 text-green-600 dark:text-green-400",
  Handyman: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  "Doors & Windows": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "Home Tips": "bg-accent/10 text-accent",
};

const Blog = () => {
  const [featured, ...rest] = POSTS;
  const featuredImg = IMAGE_MAP[featured.image];

  return (
    <>
      <Seo
        title="Home Maintenance Blog"
        description="Tips, guides, and real-world advice from Texas's most-trusted home services team."
        canonical="/blog"
      />
      <PageHero
        eyebrow="Blog & guides"
        title={
          <>
            Honest advice from{" "}
            <em className="italic font-light text-accent">
              people who fix things.
            </em>
          </>
        }
        subtitle="No sponsored content. Just hard-won tips from our techs and project managers."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        {/* Featured post */}
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group mb-12 grid overflow-hidden rounded-3xl border border-border/60 bg-card hover-lift md:grid-cols-[1.4fr,1fr]"
          >
            <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
              <img
                src={featuredImg}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:bg-gradient-to-l" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${CATEGORY_COLORS[featured.category] ?? "bg-accent/10 text-accent"}`}
                >
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {featured.readTime} read
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug transition-colors group-hover:text-accent sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                Read article{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {featured.date}
              </p>
            </div>
          </Link>
        </Reveal>

        {/* Section label */}
        <SectionEyebrow>More articles</SectionEyebrow>

        {/* Grid of remaining posts */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => {
            const img = IMAGE_MAP[p.image];
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card hover-lift"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${CATEGORY_COLORS[p.category] ?? "bg-accent/10 text-accent"}`}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {p.readTime} read · {p.date}
                    </div>
                    <h2 className="mt-3 font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read article{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
