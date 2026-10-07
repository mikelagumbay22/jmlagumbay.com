/** Browser-window frame around a tall screenshot that slowly auto-scrolls (CSS, transform only).
 *  Pauses on card hover/focus and via the page's pause button; static under prefers-reduced-motion. */
export default function DeviceFrame({ shot, url, alt, eager = false }) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1d1d] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
      <div aria-hidden="true" className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 min-w-0 truncate rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-on-surface-variant">{host}</span>
      </div>
      <div className="device-screen relative aspect-[16/10] overflow-hidden bg-white">
        <img
          className="device-shot"
          src={shot.src}
          width={shot.w}
          height={shot.h}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}
