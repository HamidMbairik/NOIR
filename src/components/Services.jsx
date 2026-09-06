import { services } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import { Scissors } from "./Icons.jsx";

function Services() {
  return (
    <section id="services" className="relative scroll-mt-32 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The List"
          title={
            <>
              Short on purpose. The menu hasn't changed much in{" "}
              <em className="italic text-gold">thirteen years.</em>
            </>
          }
          aside="Six services. Each one has a real job to do, and we'd rather do six well than twenty badly."
        />

        <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80} className="bg-paper">
              <article className="group relative flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-gold group-hover:text-gold">
                    <Scissors className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted">{s.meta}</span>
                </div>

                <h3 className="font-display text-[26px] font-medium leading-tight text-ink">{s.name}</h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{s.desc}</p>

                <div className="mt-7 flex items-end justify-between border-t border-ink/10 pt-5">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted">From</span>
                  <span className="font-display text-4xl font-medium text-ink">
                    <span className="align-top text-xl text-gold">$</span>
                    {s.price}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-lg text-pretty font-display text-xl font-light italic leading-snug text-body sm:text-2xl">
              "Half of what you pay for is the twenty quiet minutes. We bill the read of the room at
              zero."
            </p>
            <a
              href="#booking"
              className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-body underline decoration-gold decoration-[1.5px] underline-offset-[10px] hover:text-ink"
            >
              Reserve your chair
              <span className="text-gold transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;