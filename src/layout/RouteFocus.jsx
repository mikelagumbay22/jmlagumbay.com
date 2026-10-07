import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsoLayoutEffect } from "@/lib/hooks";

let firstPage = true;

/**
 * Runs when a new page mounts after a client-side navigation (not on the first, prerendered load):
 * scrolls to the top (or to the #hash target) and moves focus to the page's <h1> (or the hash target),
 * so keyboard and screen-reader users land at the start of the new page. The <title> is updated by Helmet.
 */
export default function RouteFocus() {
  const { hash } = useLocation();
  useIsoLayoutEffect(() => {
    if (firstPage) return;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (firstPage) { firstPage = false; return; }
    const target = (hash && document.getElementById(decodeURIComponent(hash.slice(1)))) || document.querySelector("main h1");
    if (!target) return;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once per page mount (each route remounts this)
  }, []);
  return null;
}
