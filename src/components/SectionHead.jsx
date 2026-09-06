import Reveal from "./Reveal.jsx";

function SectionHead({ eyebrow, title, aside, dark = false }) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div
            className={`mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] ${
              dark ? "text-gold-light/80" : "text-muted"
            }`}
          >
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </div>
          <h2
            className={`text-balance font-display text-[clamp(2rem,4.6vw,3.4rem)] font-light leading-[1.02] tracking-tight ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
        </div>
        {aside && (
          <p className={`max-w-xs text-pretty text-sm leading-relaxed ${dark ? "text-paper/60" : "text-muted"}`}>
            {aside}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default SectionHead;