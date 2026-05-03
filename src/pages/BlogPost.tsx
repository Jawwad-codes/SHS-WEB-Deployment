import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { POSTS } from "@/lib/site";
import hero from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Seo title={post.title} description={post.excerpt} canonical={`/blog/${post.slug}`} type="article" />
      <article className="container-px mx-auto max-w-3xl py-16 md:py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="font-semibold text-accent">{post.category}</span>
          <span className="h-px w-6 bg-border" />
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <img src={hero} alt={post.title} className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover shadow-elegant" loading="lazy" />

        <div className="prose prose-lg mt-12 max-w-none text-foreground dark:prose-invert">
          <p>If you've ever wondered why home maintenance feels like a moving target, you're not alone. Most homeowners we meet have the same handful of questions — usually about timing, cost, and what they can safely do themselves. The honest answer is that a well-maintained home is the result of a hundred small, boring decisions made consistently over years. The good news? Almost none of them are urgent if you stay ahead of them.</p>

          <h2 className="font-display text-2xl font-medium">The basics, briefly</h2>
          <p>Whether you're handling a small repair or planning a season-long project, the principle is the same: catch issues early, document everything, and pick partners who'd want their own house treated the way they treat yours. Take photos before and after every project — even small ones. Keep receipts and warranty cards in one folder. And when something feels "off" (a new noise, a different feel underfoot, a draft that wasn't there last winter), trust your gut and investigate before it becomes a real problem.</p>

          <h2 className="font-display text-2xl font-medium">A simple seasonal cadence</h2>
          <p>Twice a year — once in spring, once in fall — walk the perimeter of your home with a phone and a notepad. Look at the roof line for missing shingles, check downspouts and grading away from the foundation, test garage door reversal sensors, and run every exterior faucet for two minutes. Inside, replace HVAC filters, vacuum refrigerator coils, and test smoke detectors. The whole loop takes 30 minutes and prevents most "surprise" repair calls.</p>

          <h2 className="font-display text-2xl font-medium">When to call a pro</h2>
          <p>Anything involving structural risk, electrical, gas, or work above ground level deserves a licensed technician. The cost of a service call is almost always less than the cost of a redo — and dramatically less than the cost of an injury or insurance dispute. Other clear "call a pro" signals: anything under warranty, anything you'd be embarrassed to leave for the next homeowner, and anything that requires a permit.</p>

          <h2 className="font-display text-2xl font-medium">Texas-specific notes</h2>
          <p>Our climate is hard on homes. Hail, hurricane-force winds along the coast, expansive clay soils across DFW, and triple-digit summers everywhere. The single highest-ROI maintenance move for most Texas homeowners is annual roof and gutter inspection in early spring, before storm season. Second-highest: a fresh coat of UV-grade exterior caulk every three years.</p>

          <p>Got a question we didn't cover? Give us a call — we love nerding out about this stuff.</p>
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-navy p-8 text-primary-foreground">
          <h3 className="font-display text-2xl">Need this fixed at your house?</h3>
          <p className="mt-2 text-primary-foreground/75">Our team can be on site within 24 hours, often same-day.</p>
          <Button asChild variant="hero" className="mt-5"><Link to="/contact">Get a free quote <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </article>
    </>
  );
};
export default BlogPost;
