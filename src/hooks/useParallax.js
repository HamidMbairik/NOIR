import { useEffect, useRef } from "react";

// drifts an element as it moves through the viewport. amount is a fraction
// of the element's distance from screen centre. cheap enough to run per frame.
function useParallax(amount = 0.06) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight;
      el.style.setProperty("--parallax", `${progress * amount * 100}px`);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [amount]);

  return ref;
}

export default useParallax;