import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  const v: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={v}>
      {children}
    </motion.div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              {subtitle}
            </motion.p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
    </section>
  );
}
