import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/site";

export function ServiceCard({ service, index = 0 }: { service: ServiceCategory; index?: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card hover-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
          <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-soft">
            <Icon className="h-5 w-5" />
          </div>
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-display text-xl font-medium leading-tight text-foreground">{service.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          <span className="mt-auto pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Explore →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
