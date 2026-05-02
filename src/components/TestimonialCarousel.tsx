import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex justify-center gap-1 text-accent">
            {Array.from({ length: t.rating }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{t.name}</span> · {t.city}
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Testimonial ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
