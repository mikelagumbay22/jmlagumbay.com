/** Browser-window frame around a tall screenshot that slowly auto-scrolls (CSS, transform only).
 *  Pauses on card hover/focus and via the page's pause button; static under prefers-reduced-motion.
 *  `still`: for a short page (e.g. a one-screen landing page) the screen takes the screenshot's own
 *  aspect ratio and nothing moves, instead of auto-scrolling a few pixels.
 *  `priority`: the image is the page's LCP element (loaded eagerly, high fetch priority).
 *  `label`: text for the fake address bar. Demo cards pass the business name so the demo's hosting
 *  URL is never shown; without a label the bar shows the URL's host (e.g. NestWillow's own domain). */
export default function DeviceFrame({ shot, url, label, alt, eager = false, still = false, priority = false }) {
  const host = label || url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1d1d] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
      <div aria-hidden="true" className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 min-w-0 truncate rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-on-surface-variant">{host}</span>
      </div>
      <div
        className={`relative overflow-hidden bg-white ${still ? "" : "device-screen aspect-[16/10]"}`}
        style={still ? { aspectRatio: `${shot.w} / ${shot.h}` } : undefined}
      >
        <img
          className={still ? "block h-auto w-full" : "device-shot"}
          src={shot.src}
          width={shot.w}
          height={shot.h}
          alt={alt}
          loading={eager || priority ? "eager" : "lazy"}
          decoding="async"
          // eslint-disable-next-line react/no-unknown-property -- React 18 passes the lowercase HTML attribute through
          fetchpriority={priority ? "high" : undefined}
        />
      </div>
    </div>
  );
}
