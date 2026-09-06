import { barbers } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

const portraits = [
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
];

function Barbers() {
  return (
    <section id="barbers" className="relative scroll-mt-32 bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The Chairs"
          title={
            <>
              Three barbers, three ways of <em className="italic text-gold">hearing</em> what you ask for.
            </>
          }
          aside="Full apprenticeship, not a six-week course. You'll be told when a cut will suit you better — and when it won't."
        />

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((b, i) => (
            <Reveal key={b.name} delay={i * 90}>
              <article className="group">
                <div className="relative overflow-hidden">
                  <Photo
                    src={portraits[i]}
                    alt={`${b.name}, ${b.role}`}
                    className="aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                  <span className="absolute left-4 top-4 border border-paper/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-paper backdrop-blur-sm">
                    Chair {String.fromCharCode(65 + i)}
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/10 pt-4">
                  <h3 className="font-display text-[26px] font-medium leading-tight text-ink">{b.name}</h3>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-gold">{b.role}</span>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{b.line}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-14 border-t border-ink/10 pt-7 text-center font-display text-xl font-light italic text-body sm:text-2xl">
            Book by chair if you have a preference — we'll read between the lines either way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Barbers;