/** @format */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";

// existing assets
import gFence from "@/assets/gallery-fence.jpg";
import gPaint from "@/assets/gallery-paint.jpg";
import gRoof from "@/assets/gallery-roof.jpg";
import gWindow from "@/assets/gallery-window.jpg";
import gCamera from "@/assets/gallery-camera.jpg";
import gGarage from "@/assets/after-garage.jpg";
import gGates from "@/assets/service-gates.jpg";
import gDoors from "@/assets/service-doors.jpg";
import gSmart from "@/assets/service-smart.jpg";

// new downloaded assets
import gGarage3 from "@/assets/gallery-garage-3.jpg";
import gRoof2 from "@/assets/gallery-roof-2.jpg";
import gRoof3 from "@/assets/gallery-roof-3.jpg";
import gHandyman2 from "@/assets/gallery-handyman-2.jpg";
import gKitchen from "@/assets/gallery-kitchen.jpg";
import gBathroom from "@/assets/gallery-bathroom.jpg";
import gLivingRoom from "@/assets/gallery-living-room.jpg";
import gDoor2 from "@/assets/gallery-door-2.jpg";
import gWindow2 from "@/assets/gallery-window-2.jpg";
import gExterior2 from "@/assets/gallery-exterior-2.jpg";
import gExterior3 from "@/assets/gallery-exterior-3.jpg";
import gSmart2 from "@/assets/gallery-smart-2.jpg";
import gSmart3 from "@/assets/gallery-smart-3.jpg";
import gGate2 from "@/assets/gallery-gate-2.jpg";
import gPaint2 from "@/assets/gallery-paint-2.jpg";
import gPaint3 from "@/assets/gallery-paint-3.jpg";
import gPlumbing from "@/assets/gallery-plumbing.jpg";

const ITEMS = [
  { src: gGarage, cat: "Garage Doors", title: "Carriage door install" },
  { src: gGarage3, cat: "Garage Doors", title: "Modern panel replacement" },
  { src: gGates, cat: "Gates", title: "Iron driveway gate" },
  { src: gGate2, cat: "Gates", title: "Automated entry gate" },
  { src: gFence, cat: "Exterior", title: "Cedar privacy fence" },
  { src: gExterior2, cat: "Exterior", title: "Curb appeal renovation" },
  { src: gExterior3, cat: "Exterior", title: "Front yard makeover" },
  { src: gPaint, cat: "Handyman", title: "Living room repaint" },
  { src: gPaint2, cat: "Handyman", title: "Exterior house painting" },
  { src: gPaint3, cat: "Handyman", title: "Accent wall finish" },
  { src: gHandyman2, cat: "Handyman", title: "General repairs & fixes" },
  { src: gPlumbing, cat: "Handyman", title: "Plumbing fixture install" },
  { src: gBathroom, cat: "Handyman", title: "Bathroom renovation" },
  { src: gLivingRoom, cat: "Handyman", title: "Living space upgrade" },
  { src: gRoof, cat: "Roofing", title: "Architectural shingles" },
  { src: gRoof2, cat: "Roofing", title: "Storm damage repair" },
  { src: gRoof3, cat: "Roofing", title: "Full roof replacement" },
  { src: gWindow, cat: "Doors & Windows", title: "Cathedral picture window" },
  { src: gWindow2, cat: "Doors & Windows", title: "Energy-efficient upgrade" },
  { src: gDoors, cat: "Doors & Windows", title: "Modern entry door" },
  { src: gDoor2, cat: "Doors & Windows", title: "Smart front door install" },
  { src: gCamera, cat: "Smart Home", title: "Outdoor camera install" },
  { src: gSmart, cat: "Smart Home", title: "Keypad smart lock" },
  { src: gSmart2, cat: "Smart Home", title: "Smart home hub setup" },
  { src: gSmart3, cat: "Smart Home", title: "Video doorbell install" },
];

const CATS = [
  "All",
  "Garage Doors",
  "Gates",
  "Doors & Windows",
  "Roofing",
  "Handyman",
  "Smart Home",
  "Exterior",
];

// ── Lightbox ──────────────────────────────────────────────────────
type LightboxProps = {
  items: typeof ITEMS;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
        {index + 1} / {items.length}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Main image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.22 }}
          className="mx-16 flex max-h-[85vh] max-w-5xl flex-col items-center sm:mx-24"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
          />
          {/* Caption */}
          <div className="mt-4 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[hsl(30_100%_64%)]">
              {item.cat}
            </span>
            <p className="mt-1 font-display text-lg font-medium text-white">
              {item.title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot strip */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 sm:flex">
        {items.map((_, k) => (
          <span
            key={k}
            className={`block rounded-full transition-all duration-300 ${
              k === index ? "h-2 w-6 bg-accent" : "h-1.5 w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Gallery page ──────────────────────────────────────────────────
const Gallery = () => {
  const [cat, setCat] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  // close lightbox when filter changes
  const changeFilter = (c: string) => {
    setCat(c);
    setLightboxIndex(null);
  };

  return (
    <>
      <Seo
        title="Project Gallery"
        description="Browse 26 real home repair and improvement projects completed by Summit Home Services across Texas."
        canonical="/gallery"
      />
      <PageHero
        eyebrow="Recent work"
        title={
          <>
            Real homes.{" "}
            <em className="italic font-light text-accent">Real results.</em>
          </>
        }
        subtitle="Browse our latest projects — garage doors, roofing, handyman work, smart home installs, and more. Click any photo to view full size."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => changeFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                cat === c
                  ? "bg-accent text-accent-foreground shadow-accent"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Item count */}
        <p className="mb-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "project" : "projects"} —{" "}
          <span className="text-xs">click any image to enlarge</span>
        </p>

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((it, i) => (
              <motion.figure
                key={it.title + cat}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.03, duration: 0.45 }}
                className="group relative mb-4 inline-block w-full cursor-zoom-in overflow-hidden rounded-2xl break-inside-avoid sm:rounded-3xl"
                onClick={() => openAt(i)}
              >
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white sm:p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[hsl(30_100%_64%)]">
                    {it.cat}
                  </div>
                  <div className="mt-1 font-display text-base sm:text-lg">
                    {it.title}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
