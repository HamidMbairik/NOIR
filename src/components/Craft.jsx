import { stats } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import CountUp from "./CountUp.jsx";
import { Diamond } from "./Icons.jsx";

function Craft() {
  return (
    <section id="house" className="relative scroll-mt-32 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          dark
          eyebrow="The Room"
          title={
            <>
              It smells like leather and bay rum, <em className="italic text-gold-light">not like a salon.</em>
            </>
          }
          aside="Concrete, oak and lighting that only works in your favour. No mirrors in your face mid-fade, no screens over the chair. Just the work."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="group lg:col-span-5" delay={0}>
            <Photo
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
              alt="Cut in progress"
              caption="Antoine cutting, Thursday rush"
              className="aspect-[4/5] overflow-hidden transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="max-w-xl space-y-5 text-pretty text-base leading-relaxed text-paper/70">
                <p>
                  NOIR opened in 2011 on Franklin Street with two chairs and a coffee maker that
                  leaked. The coffee maker is long gone. Almost everything else — the chairs, the
                  routine, the policy of not selling you a fade you'll grow out of in a week — has
                  stayed.
                </p>
                <p>
                  We take bookings online because the phone rings during haircuts. We cut hair the
                  way it's been cut for eighty years: washed, shaped, toweled, done. If you want to
                  chat, we'll chat. If you came in to be alone for an hour, that's understood too.
                  It's the most requested service we don't list.
                </p>
              </div>

              <blockquote className="border-l-2 border-gold pl-6 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-light italic leading-snug text-paper">
                "Anyone can learn a fade in six months. We're after the barbers who are still
                interested in hair they didn't cut themselves."
              </blockquote>

              <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/10 pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl font-medium text-paper">
                      <CountUp value={s.value} />
                      <span className="text-gold">.</span>
                    </p>
                    <p className="mt-2 max-w-[12rem] text-[11px] uppercase leading-relaxed tracking-[0.18em] text-paper/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-paper/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-paper/40">
            <span className="flex items-center gap-3">
              <Diamond className="h-1.5 w-1.5 text-gold" /> Straight razors, sharpened in-house
            </span>
            <span className="flex items-center gap-3">
              <Diamond className="h-1.5 w-1.5 text-gold" /> Vinyl on rotation, noon
            </span>
            <span className="flex items-center gap-3">
              <Diamond className="h-1.5 w-1.5 text-gold" /> Drop-in coffee while you wait
            </span>
            <span className="flex items-center gap-3">
              <Diamond className="h-1.5 w-1.5 text-gold" /> Tips on the machine, gladly
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Craft;