import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Heart, Wrench } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal, SectionEyebrow } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import team from "@/assets/team.jpg";

const VALUES = [
  { icon: Heart, title: "Care first", text: "We treat every home like our own grandparent's." },
  { icon: Wrench, title: "Craft over speed", text: "Done right, not just done — every visit." },
  { icon: Award, title: "Built to last", text: "10-year workmanship warranty on every install." },
];

const About = () => (
  <>
    <Seo title="About Summit Home Services" description="Family-run Texas home maintenance team since 2008. Meet the people behind the wrench." canonical="/about" />
    <PageHero
      eyebrow="Our story"
      title={<>From a single garage door <em className="italic font-light text-accent">to your whole home.</em></>}
      subtitle="Summit started in 2008 as a two-person garage-door shop in South Austin. Today we're a 40-strong team caring for thousands of Texas homes — but we still answer the phone the same way."
    >
      <Button asChild variant="hero"><Link to="/contact">Work with us</Link></Button>
      <Button asChild variant="outline"><Link to="/services">See services</Link></Button>
    </PageHero>

    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <img src={team} alt="The Summit team" className="rounded-3xl shadow-elegant" loading="lazy" />
        </Reveal>
        <div>
          <SectionEyebrow>Why we do it</SectionEyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">A home is a series of small promises kept.</h2>
          <p className="mt-5 text-muted-foreground">
            A door that closes properly. A gate that opens when you pull up. A roof that holds through hail season. We exist so Texas families never have to worry about the dozens of small things that keep a house running — and so when something does go wrong, one phone call fixes it.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div><div className="font-display text-3xl"><Counter to={18} suffix="+" /></div><div className="text-xs uppercase tracking-wide text-muted-foreground">Years</div></div>
            <div><div className="font-display text-3xl"><Counter to={40} suffix="" /></div><div className="text-xs uppercase tracking-wide text-muted-foreground">Team</div></div>
            <div><div className="font-display text-3xl"><Counter to={12450} /></div><div className="text-xs uppercase tracking-wide text-muted-foreground">Homes served</div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionEyebrow>Our values</SectionEyebrow>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Three things we never compromise on.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="rounded-3xl border border-border/60 bg-card p-8 hover-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-accent">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default About;
