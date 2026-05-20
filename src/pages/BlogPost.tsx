/** @format */

import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Seo } from "@/components/Seo";
import { POSTS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/primitives";

import blogGarageSpring from "@/assets/blog-garage-spring.jpg";
import blogRoofStorm from "@/assets/blog-roof-storm.jpg";
import blogSmartLock from "@/assets/blog-smart-lock.jpg";
import blogFenceGate from "@/assets/blog-fence-gate.jpg";
import blogHandyman from "@/assets/blog-handyman.jpg";
import blogWindows from "@/assets/blog-windows.jpg";
import blogHomeValue from "@/assets/blog-home-value.jpg";
import bloghvac from "@/assets/blog-hvac.jpg";

const IMAGE_MAP: Record<string, string> = {
  "blog-garage-spring": blogGarageSpring,
  "blog-roof-storm": blogRoofStorm,
  "blog-smart-lock": blogSmartLock,
  "blog-fence-gate": blogFenceGate,
  "blog-handyman": blogHandyman,
  "blog-windows": blogWindows,
  "blog-home-value": blogHomeValue,
  "blog-hvac": bloghvac,
};

// Unique article body content per slug
const CONTENT: Record<string, React.ReactNode> = {
  "garage-door-spring-signs": (
    <>
      <p>
        Your garage door spring does the heavy lifting — literally. A standard
        two-car door weighs 150–200 lbs, and the spring counterbalances almost
        all of that weight. When it fails, the door either won't open at all or
        becomes dangerously heavy to operate manually. Here are five warning
        signs to watch for.
      </p>
      <h2>1. The door opens unevenly or jerks</h2>
      <p>
        If one side of the door rises faster than the other, or the door
        shudders during operation, one spring may be losing tension while the
        other is still strong. This imbalance puts enormous stress on the opener
        motor and the tracks.
      </p>
      <h2>2. You hear a loud bang from the garage</h2>
      <p>
        A snapping torsion spring sounds like a gunshot inside the garage. If
        you hear a sudden loud bang and the door stops working, the spring has
        likely broken. Do not attempt to operate the door manually — the full
        weight is now unsupported.
      </p>
      <h2>3. The door is heavy to lift manually</h2>
      <p>
        Disconnect the opener and try lifting the door by hand. A properly
        balanced door should feel almost weightless at waist height. If it feels
        like you're lifting the full weight of the door, the spring tension is
        gone.
      </p>
      <h2>4. Visible gaps in the spring coil</h2>
      <p>
        Torsion springs sit on a bar above the door. If you can see a gap of 2–3
        inches in the coil, the spring has snapped. Extension springs (the ones
        that run along the sides of the door) will look stretched or misshapen
        when they fail.
      </p>
      <h2>5. The door closes too fast</h2>
      <p>
        A door that slams shut instead of lowering smoothly has lost spring
        tension. This is a safety hazard — a falling door can cause serious
        injury or damage to a vehicle.
      </p>
      <h2>What to do next</h2>
      <p>
        Spring replacement is not a DIY job. Torsion springs are under extreme
        tension — enough to cause serious injury if released improperly. A
        professional replacement typically takes 60–90 minutes and costs
        $150–$350 depending on spring type and door weight. We recommend
        replacing both springs at the same time, even if only one has broken —
        the second is usually close behind.
      </p>
    </>
  ),
  "texas-storm-roof-checklist": (
    <>
      <p>
        Texas storm season runs roughly April through October, with peak hail
        activity in May and June across the DFW and Austin corridors. A
        20-minute hailstorm can cause $10,000+ in roof damage that isn't visible
        from the ground. Here's the 9-point checklist our inspectors use after
        every major storm.
      </p>
      <h2>1. Check the gutters and downspouts</h2>
      <p>
        Granule loss from asphalt shingles shows up in gutters first. If you see
        a significant amount of dark, sand-like material in your gutters after a
        storm, your shingles have taken a hit. Some granule loss is normal over
        time, but a sudden large deposit means hail impact.
      </p>
      <h2>2. Inspect the ridge cap</h2>
      <p>
        The ridge cap — the row of shingles along the peak of the roof — takes
        the most direct impact from hail. Look for cracked, dented, or missing
        cap shingles from the ground using binoculars.
      </p>
      <h2>3. Look at soft metals</h2>
      <p>
        Aluminum gutters, downspout elbows, AC condenser fins, and metal
        flashing are excellent hail indicators. If these surfaces show circular
        dents, your shingles almost certainly took damage too — and this is
        exactly what insurance adjusters look for.
      </p>
      <h2>4. Check the flashing around chimneys and vents</h2>
      <p>
        Flashing is the thin metal that seals the joints between the roof and
        vertical surfaces. Storm winds can lift and bend flashing, creating
        entry points for water even if the shingles look intact.
      </p>
      <h2>5. Inspect the attic after heavy rain</h2>
      <p>
        Go into the attic 24–48 hours after a major rain event. Look for wet
        insulation, water stains on the decking, or daylight visible through the
        roof boards. Early detection prevents mold and structural damage.
      </p>
      <h2>6–9. The rest of the checklist</h2>
      <p>
        Check siding and fascia boards for impact marks. Inspect window screens
        and frames for dents. Look at the HVAC unit for bent fins. And finally,
        photograph everything — date-stamped photos are invaluable for insurance
        claims. If you find damage, call your insurer within 30 days of the
        storm date to preserve your claim rights.
      </p>
      <h2>When to call a professional</h2>
      <p>
        If you see any of the above signs, schedule a professional inspection
        before filing a claim. A good contractor will document the damage
        properly, help you understand what's covered, and in many cases work
        directly with your adjuster to maximize your settlement.
      </p>
    </>
  ),
  "smart-lock-buyer-guide": (
    <>
      <p>
        The smart lock market has exploded — there are now over 200 models
        available at various price points. Most homeowners focus on price and
        finish, but the features that matter most for long-term satisfaction are
        often buried in the spec sheet. Here's what to actually look for in
        2026.
      </p>
      <h2>Battery life: the most overlooked spec</h2>
      <p>
        Most smart locks run on AA batteries. The difference between a good lock
        and a frustrating one is how long those batteries last. Budget locks
        often drain in 2–3 months. Premium locks like the Schlage Encode Plus
        and Yale Assure 2 last 6–12 months on a set of AAs. Look for locks that
        send low-battery alerts to your phone before they die — not after.
      </p>
      <h2>Connectivity: Wi-Fi vs. Z-Wave vs. Zigbee vs. Matter</h2>
      <p>
        Wi-Fi locks connect directly to your router — no hub required, but they
        drain batteries faster. Z-Wave and Zigbee locks need a compatible hub
        (SmartThings, Hubitat) but are more battery-efficient. Matter, the new
        universal smart home standard, is the future — if you're buying in 2026,
        look for Matter-compatible locks that will work with any ecosystem.
      </p>
      <h2>The feature most homeowners overlook: auto-lock</h2>
      <p>
        Auto-lock — the ability to automatically lock the door after a set time
        — sounds basic, but the implementation varies wildly. The best locks let
        you set different auto-lock timers for different times of day (e.g., 30
        seconds at night, 5 minutes during the day). Cheaper locks offer only a
        single fixed timer.
      </p>
      <h2>Finish durability in Texas heat</h2>
      <p>
        Exterior locks in Texas face UV exposure, extreme heat, and humidity.
        Matte black finishes fade fastest. Satin nickel and oil-rubbed bronze
        hold up better. For exterior applications, look for locks rated for
        direct sun exposure — not all are.
      </p>
      <h2>Our top picks for 2026</h2>
      <p>
        For most homeowners: Schlage Encode Plus (Wi-Fi, built-in alarm, Apple
        Home Key). For smart home enthusiasts: Yale Assure 2 with Matter module.
        For rentals and Airbnb: August Wi-Fi Smart Lock (installs over existing
        deadbolt, no re-keying needed). For maximum security: Ultraloq U-Bolt
        Pro (fingerprint + keypad + app + key).
      </p>
    </>
  ),
  "fence-vs-gate-roi": (
    <>
      <p>
        We analyzed 847 home sales across Austin, Dallas, Houston, and San
        Antonio over a 24-month period, comparing properties with fences, gates,
        both, or neither. The results were more nuanced than we expected.
      </p>
      <h2>Fences: consistent but modest ROI</h2>
      <p>
        A well-maintained wood or vinyl privacy fence adds an average of
        1.8–2.3% to resale value in Texas markets — roughly $5,400–$6,900 on a
        $300,000 home. The key word is "well-maintained." A weathered, leaning
        fence actually hurts value by signaling deferred maintenance to buyers.
      </p>
      <h2>Automatic gates: higher ceiling, higher variance</h2>
      <p>
        Automatic driveway gates showed the widest range of outcomes. In
        neighborhoods where gates are common (Westlake, Highland Park, Stone
        Oak), a quality iron gate with a smart operator added 3.5–5% to value.
        In neighborhoods where gates are rare, the same gate added only 0.5–1% —
        buyers in those markets didn't value the feature as much.
      </p>
      <h2>The combination effect</h2>
      <p>
        Here's the surprising finding: homes with both a privacy fence AND an
        automatic gate outperformed the sum of their parts. The combination
        signals a complete, secure outdoor environment — something buyers in the
        $400K+ range actively seek. Combined ROI averaged 5.8% in our dataset.
      </p>
      <h2>What actually matters for ROI</h2>
      <p>
        Material quality matters more than type. A cedar fence maintained with
        annual staining outperforms a vinyl fence that's yellowed and cracked.
        An iron gate with a working smart operator outperforms a wood gate with
        a broken latch. Buyers notice function first, aesthetics second.
      </p>
      <h2>The bottom line</h2>
      <p>
        If you're fencing primarily for resale, a clean cedar privacy fence is
        the safest investment. If you're in a neighborhood where gates are
        common, adding an automatic gate is likely to pay for itself. If you're
        fencing for your own enjoyment and security, do both — and maintain them
        well.
      </p>
    </>
  ),
  "handyman-vs-contractor": (
    <>
      <p>
        One of the most common mistakes homeowners make is hiring a general
        contractor for a job that a handyman could handle — or vice versa. The
        difference in cost can be $2,000–$10,000 on a single project. Here's the
        honest breakdown.
      </p>
      <h2>What a handyman can legally do in Texas</h2>
      <p>
        In Texas, a handyman can perform repairs and maintenance without a
        license as long as the work doesn't exceed $10,000 per project and
        doesn't involve structural, electrical, plumbing, or HVAC work that
        requires a permit. This covers a huge range of tasks: drywall, painting,
        carpentry, tile, fixture replacement, door and window installation, and
        more.
      </p>
      <h2>When you need a licensed contractor</h2>
      <p>
        Any work that requires a permit requires a licensed contractor. This
        includes: electrical panel work, new circuits, or service upgrades;
        plumbing that involves moving or adding supply/drain lines; HVAC
        installation or replacement; structural modifications (removing walls,
        adding rooms); and roofing on homes over a certain square footage in
        some municipalities.
      </p>
      <h2>The gray area: fixture replacement</h2>
      <p>
        Replacing a light fixture, ceiling fan, or outlet is technically
        electrical work — but in Texas, homeowners can do this themselves, and a
        handyman can do it as part of a larger job. The line gets blurry. Our
        rule: if it involves the breaker panel or new wiring, call a licensed
        electrician. If it's a straight swap of an existing fixture, a skilled
        handyman is fine.
      </p>
      <h2>Cost comparison</h2>
      <p>
        A licensed general contractor typically charges $75–$150/hour plus
        markup on materials (usually 15–25%). A skilled handyman charges
        $50–$90/hour with no material markup. For a punch list of 10 small
        tasks, the difference can easily be $500–$1,500.
      </p>
      <h2>The right answer</h2>
      <p>
        For most homeowners, the answer is: use a handyman for maintenance and
        repairs, use a licensed contractor for permitted work. The best home
        services companies — like Summit — have both on staff, so you make one
        call and we send the right person.
      </p>
    </>
  ),
  "window-replacement-guide": (
    <>
      <p>
        New windows are one of the most-marketed home improvements — and one of
        the most oversold. Not every window needs replacing. Here's how to make
        the right call for your Texas home.
      </p>
      <h2>Signs you should repair, not replace</h2>
      <p>
        If the frame is structurally sound and the glass is intact, many window
        problems can be repaired for a fraction of replacement cost. Foggy
        double-pane glass (condensation between panes) can be fixed by replacing
        just the glass unit — not the entire window. Drafts are often caused by
        failed weatherstripping, which costs $20–$50 per window to replace.
        Sticking or difficult operation is usually a hardware or balance issue,
        not a frame problem.
      </p>
      <h2>Signs you should replace</h2>
      <p>
        Replace when: the frame is rotted, warped, or structurally compromised;
        the window is single-pane (a major energy liability in Texas); the
        window is original to a home built before 1990 and has never been
        replaced; or you're doing a full exterior renovation and want consistent
        aesthetics.
      </p>
      <h2>The energy math in Texas</h2>
      <p>
        Texas summers are brutal on single-pane windows. The average Texas home
        with single-pane windows spends $400–$600 more per year on cooling than
        a comparable home with ENERGY STAR double-pane windows. At an average
        replacement cost of $400–$700 per window, payback period is typically
        8–12 years — faster if you're replacing many windows at once and qualify
        for the federal energy efficiency tax credit (currently 30% of cost, up
        to $600).
      </p>
      <h2>What to look for in a replacement window</h2>
      <p>
        For Texas: look for a U-factor below 0.30 and a Solar Heat Gain
        Coefficient (SHGC) below 0.25. Low-E coatings are essential — they block
        infrared heat while letting visible light through. Double-pane is the
        minimum; triple-pane is overkill for most Texas climates. Frame
        material: fiberglass is the most durable and energy-efficient; vinyl is
        the most affordable; wood is beautiful but requires maintenance.
      </p>
    </>
  ),
  "home-value-improvements": (
    <>
      <p>
        Not all home improvements are created equal. Some add dollar-for-dollar
        value at resale; others are money pits that buyers don't care about.
        Based on Texas MLS data and our own project history, here are seven
        improvements that consistently deliver positive ROI.
      </p>
      <h2>1. Garage door replacement</h2>
      <p>
        Nationally, garage door replacement has the highest ROI of any exterior
        improvement — averaging 93% cost recovery. In Texas, where curb appeal
        drives first impressions, a new carriage-style door on a dated home can
        add $8,000–$15,000 in perceived value for a $2,500–$4,000 investment.
      </p>
      <h2>2. Entry door replacement</h2>
      <p>
        A steel entry door replacement returns about 88% of cost nationally. In
        Texas, a fiberglass door with sidelights and a smart lock adds security,
        energy efficiency, and curb appeal in one shot.
      </p>
      <h2>3. Attic insulation</h2>
      <p>
        Adding blown-in insulation to bring attic R-value to R-38 or higher
        returns 116% of cost in energy savings and resale value — the only
        improvement on this list that typically pays back more than it costs.
      </p>
      <h2>4. Minor kitchen remodel</h2>
      <p>
        A full kitchen gut-renovation rarely pays off. A minor remodel — new
        cabinet fronts, hardware, countertops, and appliances — returns 72–80%
        of cost and makes the home dramatically more competitive in its price
        range.
      </p>
      <h2>5. Exterior paint</h2>
      <p>
        Fresh exterior paint is the highest-ROI cosmetic improvement available.
        A $3,000–$6,000 paint job can add $10,000–$20,000 in perceived value by
        eliminating the "needs work" discount buyers apply to tired-looking
        homes.
      </p>
      <h2>6. Smart home basics</h2>
      <p>
        A smart thermostat, video doorbell, and smart lock package costs
        $500–$1,500 installed and is increasingly expected by buyers in the
        $350K+ range. It signals a well-maintained, modern home.
      </p>
      <h2>7. Roof repair or replacement</h2>
      <p>
        A roof in poor condition is the single biggest deal-killer in Texas real
        estate. Buyers either walk away or demand a price reduction 2–3x the
        actual repair cost. A new roof returns 60–70% of cost in resale value —
        but prevents a much larger discount.
      </p>
    </>
  ),
  "hvac-maintenance-tips": (
    <>
      <p>
        Your HVAC system is the hardest-working mechanical system in your Texas
        home. In summer, it may run 12–16 hours a day. Neglect it and you're
        looking at $3,000–$8,000 in premature replacement costs. Here's the
        twice-yearly maintenance routine that keeps it running efficiently.
      </p>
      <h2>Spring checklist (before cooling season)</h2>
      <p>
        Replace the air filter — use a MERV 8–11 filter, not the cheapest
        option. A clogged filter is the #1 cause of AC failure in Texas. Clean
        the outdoor condenser coils with a garden hose (gentle spray, top-down).
        Clear a 2-foot radius around the outdoor unit of vegetation. Check the
        condensate drain line — pour a cup of diluted bleach down the drain pan
        to prevent algae buildup, which causes overflow and water damage. Test
        the system before the first hot day — don't wait until it's 100°F to
        discover a problem.
      </p>
      <h2>Fall checklist (before heating season)</h2>
      <p>
        Replace the filter again. Test the heat — run it for 15 minutes and
        confirm warm air is coming from all vents. Check the heat exchanger for
        cracks (a cracked heat exchanger leaks carbon monoxide — this is a
        safety issue, not just an efficiency issue). Clean the blower motor and
        evaporator coil if accessible. Check all duct connections for leaks — in
        Texas homes, duct leakage averages 20–30% of conditioned air, which is a
        massive energy waste.
      </p>
      <h2>Signs you need a professional</h2>
      <p>
        Call an HVAC tech if: the system is short-cycling (turning on and off
        rapidly); you hear grinding, squealing, or banging; the system runs
        constantly but doesn't reach the set temperature; your energy bills
        spike suddenly; or you see ice forming on the refrigerant lines. These
        are all signs of a problem that DIY maintenance won't fix.
      </p>
      <h2>The Summit maintenance plan advantage</h2>
      <p>
        Our Summit and Estate maintenance plans include an HVAC health check on
        every seasonal visit — we check refrigerant levels, test capacitors,
        clean coils, and flag any issues before they become failures. It's the
        kind of proactive care that extends system life by 3–5 years.
      </p>
    </>
  ),
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const img = IMAGE_MAP[post.image];
  const body = CONTENT[post.slug];

  // Related posts (same category or just next 3)
  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);
  const fallback = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallback;

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
      />
      <article className="container-px mx-auto max-w-3xl py-14 md:py-20">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        {/* Meta */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readTime} read
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-5 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

        {/* Hero image */}
        <img
          src={img}
          alt={post.title}
          className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover shadow-elegant"
          loading="eager"
        />

        {/* Body */}
        <div className="prose prose-lg mt-12 max-w-none text-foreground prose-headings:font-display prose-headings:font-medium prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent dark:prose-invert">
          {body ?? (
            <p>
              Full article coming soon. In the meantime, give us a call — our
              team is happy to answer any questions.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-gradient-navy p-8 text-primary-foreground md:p-10">
          <h3 className="font-display text-2xl font-medium">
            Need this handled at your house?
          </h3>
          <p className="mt-2 text-primary-foreground/75">
            Our team can be on site within 24 hours, often same-day.
          </p>
          <Button asChild variant="hero" className="mt-5">
            <Link to="/contact">
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <SectionEyebrow>More articles</SectionEyebrow>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover-lift"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={IMAGE_MAP[p.image]}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {p.category}
                    </span>
                    <p className="mt-1 text-sm font-medium leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPost;
