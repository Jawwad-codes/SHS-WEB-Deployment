/** @format */

import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SERVICES, SITE } from "@/lib/site";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[hsl(218_60%_10%)] text-white sm:mt-32">
      <div className="container-px mx-auto max-w-7xl py-14 sm:py-20">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Logo invert />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Trusted Texas craftsmanship from a team that
              started in garage doors and grew into your one home-services
              partner.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(30_100%_64%)]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="transition-colors hover:text-[hsl(30_100%_64%)]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(30_100%_64%)]">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Maintenance Plans", href: "/maintenance-plans" },
                { label: "Service Areas", href: "/locations" },
                { label: "Blog", href: "/blog" },
                { label: "FAQs", href: "/faqs" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-[hsl(30_100%_64%)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(30_100%_64%)]">
              Get in touch
            </h4>
            <ul className="space-y-3.5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(30_100%_64%)]" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(30_100%_64%)]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(30_100%_64%)]" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(30_100%_64%)]" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Licensed &amp; insured in
            the State of Texas.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(22_95%_56%)]" />
            24/7 emergency dispatch available
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-white/5 pt-5 text-xs text-white/50">
          Made by
          <a
            href="https://pixova.studio"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white transition-colors hover:text-[hsl(30_100%_64%)]"
          >
            Pixova
          </a>
        </div>
      </div>
    </footer>
  );
}
