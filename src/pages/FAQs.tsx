/** @format */

import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS: [string, string][] = [
  [
    "Do you offer free estimates?",
    "Yes — every project starts with a free, no-obligation quote, usually delivered within one business hour. For complex jobs we may schedule a 15-minute on-site visit at no charge.",
  ],
  [
    "Are you licensed and insured?",
    "We're fully licensed and bonded in the State of Texas, with $2M general liability coverage and full workers' compensation. Certificates can be emailed on request.",
  ],
  [
    "How fast can you come out?",
    "Most non-emergency jobs are scheduled within 24-48 hours. True emergencies — broken springs, storm damage, security issues — are dispatched 24/7, usually within 2 hours inside our core metros.",
  ],
  [
    "What's your warranty?",
    "Every install carries a 10-year workmanship warranty. Manufacturer warranties on parts (often 5-25 years) are passed through in full and registered for you.",
  ],
  [
    "Do you handle small jobs?",
    "Absolutely. From a single light fixture to a full home punch list — no job is too small. Our minimum service call is $89, applied toward any work performed.",
  ],
  [
    "Which payment methods do you accept?",
    "All major credit cards, ACH transfer, Apple/Google Pay, and we offer 0% financing on projects above $1,500 through GreenSky.",
  ],
  [
    "Can you work around HOA requirements?",
    "Yes — we routinely pull HOA approvals on your behalf for fences, gates, exterior paint and roof color matching. Our project managers handle the paperwork.",
  ],
  [
    "Do you offer commercial service?",
    "Light commercial only — we focus on residential. For storefronts, multi-family and small office, ask about our 'Estate' plan tier.",
  ],
  [
    "What brands do you install?",
    "LiftMaster, Genie, Clopay, Amarr, Therma-Tru, Pella, GAF, Owens Corning, Ring, Yale, Schlage, Lutron, Ecobee, and many more. We're brand-agnostic and recommend what's right for your home.",
  ],
  [
    "What if I'm not satisfied?",
    "We don't leave until you're happy. Every job ends with a walk-through and sign-off. If something's off after we leave, we come back within 48 hours — at no charge.",
  ],
];

const FAQs = () => (
  <>
    <Seo
      title="Frequently Asked Questions"
      description="Answers to common questions about Summit Home Services' pricing, warranty, and process."
      canonical="/faqs"
    />
    <PageHero
      eyebrow="FAQs"
      title={
        <>
          The <em className="italic font-light text-accent">questions</em> we
          hear most.
        </>
      }
      subtitle="Can't find what you're looking for? Just ask — we reply same day."
    />
    <section className="container-px mx-auto max-w-3xl py-16">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map(([q, a], i) => (
          <AccordionItem
            key={i}
            value={`i${i}`}
            className="rounded-2xl border border-border/60 bg-card px-5"
          >
            <AccordionTrigger className="text-left font-display text-lg text-foreground">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </>
);
export default FAQs;
