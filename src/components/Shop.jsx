import { products } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";

function splitName(full) {
  const [no, ...rest] = full.split(" ");
  return { no, title: rest.join(" ") };
}

function Shop() {
  return (
    <section id="shop" className="relative scroll-mt-32 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The Shelf"
          title={
            <>
              Four things we actually <em className="italic text-gold">use on you</em>, not a wall of bottles.
            </>
          }
          aside="Everything here sits on the counter in both rooms. If the barbers don't rate it, it isn't sold."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const { no, title } = splitName(p.name);
            return (
              <Reveal key={p.name} delay={(i % 4) * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-surface/60 p-6 transition-colors duration-300 hover:border-gold/50">
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7.5rem] font-light leading-none text-ink/5 transition-colors duration-300 group-hover:text-gold/20"
                    aria-hidden="true"
                  >
                    {no.split(".")[1]}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{no}</span>
                  <h3 className="mt-3 font-display text-[26px] font-medium leading-tight text-ink">{title}</h3>
                  <p className="mt-3 flex-1 text-pretty text-[13px] leading-relaxed text-muted">{p.desc}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <span className="font-display text-2xl font-medium text-ink">
                      <span className="align-top text-sm text-gold">$</span>
                      {p.price}
                    </span>
                    <button
                      type="button"
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:text-gold"
                    >
                      Add to bag →
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <p className="mt-8 text-center text-[11px] uppercase tracking-[0.25em] text-muted">
            Pick up at either room · Delivered free on any appointment over $80
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Shop;