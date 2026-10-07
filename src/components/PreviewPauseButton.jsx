import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

/** Pause/Play for the auto-scrolling demo previews (WCAG 2.2.2). One ARIA state only: the label itself
 *  changes ("Pause previews" / "Play previews"), with no aria-pressed. Hidden under prefers-reduced-motion,
 *  where the previews never move. The parent puts data-motion-paused={paused} on the section. */
export default function PreviewPauseButton({ paused, onToggle, className = "" }) {
  return (
    <button type="button" onClick={onToggle} className={`preview-pause btn-ghost btn-sm w-fit shrink-0 motion-reduce:hidden ${className}`}>
      {paused ? <IconPlayerPlay size={18} stroke={2} aria-hidden="true" /> : <IconPlayerPause size={18} stroke={2} aria-hidden="true" />}
      {paused ? "Play previews" : "Pause previews"}
    </button>
  );
}
