import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/primitives";
import gFence from "@/assets/gallery-fence.jpg";
import gPaint from "@/assets/gallery-paint.jpg";
import gRoof from "@/assets/gallery-roof.jpg";
import gWindow from "@/assets/gallery-window.jpg";
import gCamera from "@/assets/gallery-camera.jpg";
import gGarage from "@/assets/after-garage.jpg";
import gGates from "@/assets/service-gates.jpg";
import gDoors from "@/assets/service-doors.jpg";
import gSmart from "@/assets/service-smart.jpg";

const ITEMS = [
  { src: gGarage, cat: "Garage Doors", title: "Carriage door install" },
  { src: gGates, cat: "Gates", title: "Iron driveway gate" },
  { src: gFence, cat: "Exterior", title: "Cedar privacy fence" },
  { src: gPaint, cat: "Handyman", title: "Living room repaint" },
  { src: gRoof, cat: "Roofing", title: "Architectural shingles" },
  { src: gWindow, cat: "Doors & Windows", title: "Cathedral picture window" },
  { src: gCamera, cat: "Smart Home", title: "Outdoor camera install" },
  { src: gDoors, cat: "Doors & Windows", title: "Modern entry door" },
  { src: gSmart, cat: "Smart Home", title: "Keypad smart lock" },
];
const CATS = ["All", "Garage Doors", "Gates", "Doors & Windows", "Roofing", "Handyman", "Smart Home", "Exterior"];

const Gallery = () => {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);
  return (
    <>
      <Seo title="Project Gallery" description="A masonry gallery of recent Summit Home Services projects across Texas." canonical="/gallery" />
      <PageHero eyebrow="Recent work" title={<>Real homes. <em className="italic font-light text-accent">Real results.</em></>} subtitle="A small slice of the projects we've completed across Central Texas." />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {items.map((it, i) => (
              <motion.figure
                key={it.title + cat}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group relative mb-5 inline-block w-full overflow-hidden rounded-3xl break-inside-avoid"
              >
                <img src={it.src} alt={it.title} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-5 text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-glow">{it.cat}</div>
                  <div className="mt-1 font-display text-lg">{it.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Gallery;
