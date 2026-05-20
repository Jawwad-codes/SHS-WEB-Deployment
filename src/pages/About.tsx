/** @format */

import { Link } from "react-router-dom";
import { Award, Heart, Wrench, Star, Quote } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import { WHY_CHOOSE_US } from "@/lib/site";
import team3 from "@/assets/team3.jpg";
import aboutTeamWork from "@/assets/about-team-work.jpg";
import team1 from "@/assets/team1.jpg";

const VALUES = [
  {
    icon: Heart,
    title: "Care first",
    text: "We treat every home like our own grandparent's. That means shoe covers, drop cloths, and a clean workspace — every time.",
  },
  {
    icon: Wrench,
    title: "Craft over speed",
    text: "Done right, not just done. We'd rather take an extra hour than leave a job that needs a callback.",
  },
  {
    icon: Award,
    title: "Built to last",
    text: "10-year workmanship warranty on every install. We stand behind our work long after the invoice is paid.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Carlos Mendez",
    role: "Founder & CEO",
    bio: "Started Summit in 2008 with a pickup truck and a garage door spring kit. Still answers the phone on Saturdays.",
    initials: "CM",
  },
  {
    name: "Sarah Whitfield",
    role: "Operations Director",
    bio: "Runs the scheduling, dispatch, and quality control that keeps 40 technicians on time and on budget.",
    initials: "SW",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Roofing Tech",
    bio: "GAF Master Elite certified. Has inspected over 3,000 Texas roofs and never missed a hail claim.",
    initials: "MJ",
  },
  {
    name: "Priya Nair",
    role: "Smart Home Specialist",
    bio: "Ring and Yale certified installer. Designed the smart home packages that now account for 30% of our revenue.",
    initials: "PN",
  },
];

const MILESTONES = [
  {
    year: "2008",
    event:
      "Founded in South Austin with 2 employees and a focus on garage doors.",
  },
  {
    year: "2012",
    event:
      "Expanded into gates, doors, and windows. Hired our first dedicated roofing crew.",
  },
  {
    year: "2016",
    event:
      "Launched the Summit Maintenance Plan. Reached 5,000 homes serviced.",
  },
  {
    year: "2019",
    event:
      "Added smart home installation. Opened our second dispatch hub in Dallas.",
  },
  {
    year: "2022",
    event:
      "Reached 10,000 homes serviced. Expanded to Houston and San Antonio.",
  },
  {
    year: "2026",
    event:
      "40-person team. 12,450+ homes. Still family-run, still answering the phone.",
  },
];

const About = () => (
  <>
    <Seo
      title="About Summit Home Services"
      description="Family-run Texas home maintenance team since 2008. Meet the people behind the wrench."
      canonical="/about"
    />

    <PageHero
      eyebrow="Our story"
      title={
        <>
          From a single garage door{" "}
          <em className="italic font-light text-accent">to your whole home.</em>
        </>
      }
      subtitle="Summit started in 2008 as a two-person garage-door shop in South Austin. Today we're a 40-strong team caring for thousands of Texas homes — but we still answer the phone the same way."
    >
      <Button asChild variant="hero">
        <Link to="/contact">Work with us</Link>
      </Button>
      <Button asChild variant="outline">
        <Link to="/services">See services</Link>
      </Button>
    </PageHero>

    {/* ── STORY SECTION ── */}
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img
              src={team3}
              alt="The Summit team"
              className="w-full rounded-3xl object-cover shadow-elegant"
              loading="lazy"
            />
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 hidden max-w-[260px] rounded-2xl border border-border/60 bg-card p-5 shadow-elegant md:block">
              <Quote className="h-5 w-5 text-accent" />
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                "We don't subcontract. Every tech you meet is a Summit
                employee."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                — Carlos Mendez, Founder
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionEyebrow>Why we do it</SectionEyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
            A home is a series of small promises kept.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A door that closes properly. A gate that opens when you pull up. A
            roof that holds through hail season. We exist so Texas families
            never have to worry about the dozens of small things that keep a
            house running — and so when something does go wrong, one phone call
            fixes it.
          </p>
          <p className="mt-4 text-muted-foreground">
            We've never used subcontractors. Every technician you meet is a W-2
            Summit employee — background-checked, drug-tested, and trained
            in-house. That's not common in this industry. We think it should be.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <div className="font-display text-3xl font-medium text-foreground">
                <Counter to={18} suffix="+" />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                Years in Texas
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-medium text-foreground">
                <Counter to={40} suffix="+" />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                Team members
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-medium text-foreground">
                <Counter to={12450} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                Homes served
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ── */}
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionEyebrow>Why choose Summit</SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Six reasons 12,000+ Texas families trust us with their homes.
            </h2>
          </div>
          <p className="text-muted-foreground lg:text-right">
            We know you have options. Here's what makes Summit different — in
            plain language, not marketing copy.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-7 hover-lift">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-medium text-accent">
                    {item.stat}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── VALUES ── */}
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Our values</SectionEyebrow>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Three things we never compromise on.
          </h2>
          <p className="mt-4 text-muted-foreground">
            These aren't slogans on a wall. They're the standards we hold every
            technician to on every job, every day.
          </p>
          <div className="mt-10 space-y-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-accent">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1}>
          <img
            src={aboutTeamWork}
            alt="Summit technician at work"
            className="w-full rounded-3xl object-cover shadow-elegant"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>

    {/* ── TIMELINE ── */}
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionEyebrow>Our journey</SectionEyebrow>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">
          18 years of showing up.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.06}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 hover-lift">
                <div className="font-display text-3xl font-medium text-accent">
                  {m.year}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.event}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── TEAM ── */}
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <SectionEyebrow>The people</SectionEyebrow>
      <h2 className="font-display text-3xl font-medium sm:text-4xl">
        Meet a few of the team.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        40 people strong — and growing. Every one of them is a W-2 Summit
        employee, not a gig worker or subcontractor.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.07}>
            <div className="rounded-3xl border border-border/60 bg-card p-6 hover-lift">
              {/* Avatar */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent text-xl font-semibold text-white shadow-accent">
                {m.initials}
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                {m.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ── SOCIAL PROOF ── */}
    <section className="bg-gradient-warm py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={team1}
              alt="A beautifully maintained Texas home"
              className="w-full rounded-3xl object-cover shadow-elegant"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionEyebrow>What customers say</SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Don't take our word for it.
            </h2>
            <div className="mt-8 space-y-5">
              {[
                {
                  quote:
                    "Summit is the only contractor I've ever used who showed up early, finished early, and charged exactly what they quoted.",
                  name: "Jennifer T.",
                  city: "Austin, TX",
                },
                {
                  quote:
                    "After the hailstorm, they handled everything — inspection, insurance adjuster, materials, install. I didn't have to make a single call.",
                  name: "Robert K.",
                  city: "Dallas, TX",
                },
                {
                  quote:
                    "I've used Summit for three years on our maintenance plan. They've caught two issues before they became expensive problems.",
                  name: "Linda M.",
                  city: "Houston, TX",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border/60 bg-card p-5"
                >
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    "{t.quote}"
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {t.name}
                    </span>{" "}
                    · {t.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-3xl bg-gradient-navy p-10 text-primary-foreground md:p-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <SectionEyebrow>Ready to get started?</SectionEyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Your home deserves a team that cares as much as you do.
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/75">
              Free quote, no obligation. A real Summit team member will reach
              out within one business hour.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get my free quote</Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/services">Browse services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
