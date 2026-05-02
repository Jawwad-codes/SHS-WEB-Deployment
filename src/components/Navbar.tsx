import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { NAV, SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-accent" : "text-foreground/80 hover:text-foreground",
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-3xl border border-border/60 bg-popover/95 p-3 shadow-elegant backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-1">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-secondary"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white shadow-accent">
                                <s.icon className="h-5 w-5" />
                              </span>
                              <span className="flex flex-col">
                                <span className="text-sm font-semibold text-foreground">{s.title}</span>
                                <span className="text-xs text-muted-foreground">{s.short}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/services"
                          className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-navy px-4 py-3 text-sm text-primary-foreground"
                        >
                          <span>Browse all services</span>
                          <span className="text-accent-glow">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-accent" : "text-foreground/80 hover:text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4 text-accent" />
            {SITE.phone}
          </a>
          <ThemeToggle className="hidden md:inline-flex" />
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Free Quote</Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/60 pt-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-xs font-medium"
                  >
                    <s.icon className="h-4 w-4 text-accent" />
                    {s.title}
                  </Link>
                ))}
              </div>
              <Button asChild variant="hero" className="mt-3">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
