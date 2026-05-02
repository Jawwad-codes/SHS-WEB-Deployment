import { Link } from "react-router-dom";

export const Logo = ({ className = "", invert = false }: { className?: string; invert?: boolean }) => (
  <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Summit Home Services">
    <span
      className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-[-6deg] ${
        invert ? "bg-white/10 backdrop-blur" : "bg-gradient-accent shadow-accent"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12 L12 4 L21 12" />
        <path d="M5 12 V20 H19 V12" />
        <path d="M10 20 V14 H14 V20" />
      </svg>
    </span>
    <span className={`flex flex-col leading-none ${invert ? "text-white" : "text-foreground"}`}>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">Summit</span>
      <span className={`text-[0.62rem] font-medium uppercase tracking-[0.18em] ${invert ? "text-white/70" : "text-muted-foreground"}`}>
        Home Services
      </span>
    </span>
  </Link>
);
