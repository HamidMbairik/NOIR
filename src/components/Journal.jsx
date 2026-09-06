import { journal } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";

function Journal() {
  return (
    <section id="journal" className="relative scroll-mt-32 bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The Journal"
          title={
            <>
              Notes from the floor, <em className="italic text-gold">not a content calendar.</em>
            </>
          }
          aside="Written by whoever was holding the clippers. Published when there's something worth saying."
        />

        <div className="border-t border-ink/10">
          {journal.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <article className="group grid items-baseline gap-x-8 gap-y-3 border-b border-ink/10 py-7 transition-colors sm:grid-cols-[130px_1fr_auto] md:py-9">
                <div className="text-[10px] uppercase leading-relaxed tracking-[0.22em] text-muted">
                  <span className="text-gold">{a.tag}</span>
                  <br />
                  {a.date} · {a.read} read
                </div>

                <div className="min-w-0">
                  <h3 className="text-balance font-display text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-tight text-ink transition-colors group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted">{a.excerpt}</p>
                </div>

                <a
                  href="#journal"
                  className="hidden shrink-0 items-center gap-2 self-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink underline decoration-transparent underline-offset-8 transition-colors hover:decoration-gold sm:inline-flex"
                >
                  Read
                  <span className="text-gold">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journal;