import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero, Reveal } from "@/components/primitives";
import { POSTS } from "@/lib/site";

const Blog = () => (
  <>
    <Seo title="Home Maintenance Blog" description="Tips, guides, and real-world advice from Texas's most-trusted home services team." canonical="/blog" />
    <PageHero
      eyebrow="Blog & guides"
      title={<>Honest advice from <em className="italic font-light text-accent">people who fix things.</em></>}
      subtitle="No sponsored content. Just hard-won tips from our techs and project managers."
    />
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-8 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <Link to={`/blog/${p.slug}`} className="group block rounded-3xl border border-border/60 bg-card p-8 hover-lift">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="font-semibold text-accent">{p.category}</span>
                <span className="h-px w-6 bg-border" />
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug transition-colors group-hover:text-accent sm:text-3xl">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Read article <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);
export default Blog;
