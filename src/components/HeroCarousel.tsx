import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HeroCarousel({ images, interval = 6000 }: { images: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={i}
          src={images[i]}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-accent" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
