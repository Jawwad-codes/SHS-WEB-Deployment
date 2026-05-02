import { useEffect, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const onMove = (clientX: number) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.min(100, Math.max(0, next)));
    };
    const mm = (e: MouseEvent) => dragging.current && onMove(e.clientX);
    const tm = (e: TouchEvent) => dragging.current && onMove(e.touches[0].clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchmove", tm);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl shadow-elegant"
      onMouseDown={() => (dragging.current = true)}
      onTouchStart={() => (dragging.current = true)}
    >
      <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          loading="lazy"
        />
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background backdrop-blur">
        {beforeLabel}
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
        {afterLabel}
      </div>
      <div className="absolute inset-y-0 z-10 w-1 bg-white/90 shadow-elegant" style={{ left: `calc(${pos}% - 2px)` }}>
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white text-foreground shadow-elegant active:cursor-grabbing">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 5l-5 7 5 7" />
            <path d="M16 5l5 7-5 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
