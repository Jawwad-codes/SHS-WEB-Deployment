import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

export function FloatingCtas() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Summit%2C%20I%27d%20like%20a%20quote.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background sm:group-hover:block" />
      </motion.a>
      <motion.a
        href={`tel:${SITE.phoneRaw}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.55, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-white shadow-accent"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-glow" />
        </span>
      </motion.a>
    </div>
  );
}
