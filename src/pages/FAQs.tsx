import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  ["Do you offer free estimates?", "Yes — every project starts with a free, no-obligation quote, usually delivered within one business hour."],
  ["Are you licensed and insured?", "We're fully licensed and bonded in the State of Texas, with general liability and workers' compensation coverage."],
  ["How fast can you come out?", "Most non-emergency jobs are scheduled within 24-48 hours. True emergencies are dispatched 24/7."],
  ["What's your warranty?", "Every install carries a 10-year workmanship warranty. Manufacturer warranties on parts are passed through in full."],
  ["Do you handle small jobs?", "Absolutely. From a single light fixture to a full home punch list — no job is too small."],
  ["Which payment methods do you accept?", "All major credit cards, ACH transfer, and we offer financing on projects above $1,500."],
];

const FAQs = () => (
  <>
    <Seo title="Frequently Asked Questions" description="Answers to common questions about Summit Home Services' pricing, warranty, and process." canonical="/faqs" />
    <PageHero eyebrow="FAQs" title={<>The <em className="italic font-light text-accent">questions</em> we hear most.</>} subtitle="Can't find what you're looking for? Just ask — we reply same day." />
    <section className="container-px mx-auto max-w-3xl py-16">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map(([q, a], i) => (
          <AccordionItem key={i} value={`i${i}`} className="rounded-2xl border border-border/60 bg-card px-5">
            <AccordionTrigger className="text-left font-display text-lg">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </>
);
export default FAQs;
