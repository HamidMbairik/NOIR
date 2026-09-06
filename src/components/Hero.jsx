import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { brand } from "../data/content.js";
import { Arrow, Clock, Diamond, MapPin } from "./Icons.jsx";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-14 md:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted">
                <span className="h-px w-8 bg-gold" />
                {brand.since} · Men's Grooming House
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-balance font-display text-[clamp(2.9rem,7.5vw,5.4rem)] font-light leading-[0.95] tracking-tight text-ink">
                A haircut should never be the{" "}
                <em className="font-normal italic text-gold">loudest</em> thing about you.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
                Two rooms, three chairs, one rule: no one talks to you unless you talk first.
                Scissor work, skin fades and straight-razor shaves — finished with a hot towel
                you won't want to hand back.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper transition-colors hover:bg-gold"
                >
                  Book an appointment
                  <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-body underline decoration-gold decoration-[1.5px] underline-offset-[10px] transition-colors hover:text-ink"
                >
                  See the list
                  <span className="text-gold transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-12 grid max-w-sm grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                <span className="flex items-center gap-2.5">
                  <Clock className="h-3.5 w-3.5 text-gold" /> Today until 7pm
                </span>
                <span className="flex items-center gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> Tribeca & West Village
                </span>
                <span className="col-span-2 flex items-center gap-2.5">
                  <Diamond className="h-2 w-2 text-gold" />
                  Seven years of regulars still booked on the same chair
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative lg:ml-6">
              <div className="absolute -right-3 -top-3 h-full w-full border border-gold/60" aria-hidden="true" />
              <Photo
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1400&auto=format&fit=crop"
                alt="The chair, Room Two"
                caption="Room Two · Franklin Street"
                eager
                className="aspect-[4/5]"
              />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-[10px] uppercase tracking-[0.25em] text-muted">
              <span>{brand.since} — No. 12</span>
              <span className="flex items-center gap-2">
                <span className="h-px w-5 bg-gold" />
                Cut on the floor
              </span>
              <span>Spring/Summer</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;