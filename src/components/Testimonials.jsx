import { testimonials } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Diamond, Quote } from "./Icons.jsx";

function Testimonials() {
  return (
    <section id="word" className="relative scroll-mt-32 border-t border-ink/10 bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mb-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted">
            <span className="h-px w-8 bg-gold" />
            From the book
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-ink/10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={i === 1 ? "lg:pl-12" : "lg:pr-12"}>
              <figure>
                <Quote className="h-9 w-9 text-gold/70" />
                <blockquote className="mt-6 text-balance font-display text-[clamp(1.5rem,3.2vw,2.3rem)] font-light italic leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="h-px w-6 bg-gold" />
                  {t.name} — {t.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 flex items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted">
            <Diamond className="h-1.5 w-1.5 text-gold" />
            Reviews read aloud in the room, on rotation
            <Diamond className="h-1.5 w-1.5 text-gold" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;