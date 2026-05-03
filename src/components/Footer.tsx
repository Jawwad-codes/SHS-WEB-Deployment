import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SERVICES, SITE } from "@/lib/site";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[hsl(218_60%_12%)] text-white">
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo invert />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Trusted Texas craftsmanship from a team that started in garage doors and grew into your one home-services partner.
            </p>
            <div className="flex gap-3">
              <a href={SITE.social.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-accent-glow transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-accent-glow">About</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-glow">Gallery</Link></li>
              <li><Link to="/maintenance-plans" className="hover:text-accent-glow">Maintenance Plans</Link></li>
              <li><Link to="/locations" className="hover:text-accent-glow">Service Areas</Link></li>
              <li><Link to="/blog" className="hover:text-accent-glow">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-accent-glow">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-accent-glow">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">Get in touch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent-glow" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent-glow" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent-glow" /><span>{SITE.address}</span></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-accent-glow" /><span>{SITE.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Licensed & insured in the State of Texas.</p>
          <p className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> 24/7 emergency dispatch available</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-white/5 pt-6 text-xs text-white/55">
          Made with <Heart className="h-3 w-3 fill-accent text-accent" /> by
          <a href="https://pixova.studio" target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-accent-glow transition-colors">Pixova</a>
        </div>
      </div>
    </footer>
  );
}
