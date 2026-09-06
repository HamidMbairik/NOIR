import { useEffect, useRef, useState } from "react";

function parseValue(raw) {
  const match = String(raw).match(/^([\d.,]+)(\S*)$/);
  return match ? { num: parseFloat(match[1].replace(/,/g, "")), suffix: match[2] } : null;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const p = parseValue(value);
    if (!p) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduced) {
              setDisplay(p.num);
              return;
            }
            const t0 = performance.now();
            const tick = (now) => {
              const t = Math.min((now - t0) / duration, 1);
              setDisplay(p.num * easeOutCubic(t));
              if (t < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const raw = parseValue(value);
  const formatted = raw
    ? `${Math.round(display).toLocaleString()}${raw.suffix}`
    : String(display);

  return (
    <span ref={ref} role="text">
      {formatted}
    </span>
  );
}

export default CountUp;