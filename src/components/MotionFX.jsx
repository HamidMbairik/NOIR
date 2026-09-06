import { useEffect, useRef } from "react";

/**
 * Two low-key, site-wide touches that keep things feeling alive:
 *  - a soft gold dot that trails the cursor and grows over links/buttons
 *  - a fine grain overlay so large flat surfaces don't read as "render"
 * Both are tiny, palette-only, and disabled under prefers-reduced-motion.
 */
function MotionFX() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = innerWidth / 2;
    let cy = innerHeight / 2;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.classList.add("is-on");
    };

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      dot.style.transform = `translate3d(${cx - 7}px, ${cy - 7}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const activate = (e) => {
      const hit = e.target.closest("a, button, [data-grab]");
      dot.classList.toggle("is-active", !!hit);
    };

    const onLeave = () => dot.classList.remove("is-on", "is-active");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", activate, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", activate);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
}

export default MotionFX;