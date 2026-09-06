import { useState } from "react";
import { brand, hours, services, locations } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Arrow, Clock, MapPin, Phone } from "./Icons.jsx";

const inputClass =
  "w-full border-b border-paper/20 bg-transparent py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold";

function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", note: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      return;
    }
    setSent(true);
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="booking" className="relative scroll-mt-32 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-light/80">
                <span className="h-px w-8 bg-gold" />
                Book the chair
              </div>
              <h2 className="text-balance font-display text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.02] tracking-tight">
                Turn up when it suits you. <em className="italic text-gold-light">We'll take it from there.</em>
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-paper/60">
                Leave the time and the chair to us if you're easy. First-timers get a fresh towel,
                a coffee and a barber who already read a little about what you asked for.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="border-t border-paper/15 pt-5">
                  <p className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-paper/40">
                    <Clock className="h-3.5 w-3.5 text-gold" /> Hours
                  </p>
                  <ul className="space-y-2 text-sm text-paper/70">
                    {hours.map((h) => (
                      <li key={h.day} className="flex items-baseline justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="text-paper/45">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-paper/15 pt-5">
                  <p className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-paper/40">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> Rooms
                  </p>
                  <ul className="space-y-4 text-sm text-paper/70">
                    {locations.map((l) => (
                      <li key={l.name}>
                        <span className="text-gold-light">{l.name}</span>
                        <br />
                        {l.line1}
                        <br />
                        {l.line2}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-gold-light"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    {brand.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-7">
            <div className="border border-paper/15 bg-ink-soft p-6 sm:p-10">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center gap-6 text-center">
                  <span className="font-display text-6xl text-gold">✓</span>
                  <h3 className="font-display text-4xl font-light">You're on the book, {form.name.split(" ")[0]}.</h3>
                  <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-paper/60">
                    We'll call you within the hour to lock the time. If it's after 9pm, we call
                    tomorrow morning — never earlier on a Saturday.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", phone: "", service: "", date: "", note: "" });
                    }}
                    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light underline decoration-gold/40 underline-offset-8 hover:decoration-gold"
                  >
                    Book another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-x-6 gap-y-8 sm:grid-cols-2" noValidate>
                  <div>
                    <label htmlFor="bk-name" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-paper/40">
                      Your name *
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="First and last"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="bk-phone" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-paper/40">
                      Phone *
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="Where we call to confirm"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="bk-service" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-paper/40">
                      First visit or returning?
                    </label>
                    <select id="bk-service" value={form.service} onChange={set("service")} className={`${inputClass} appearance-none`}>
                      <option value="" className="bg-ink">First time — book me in</option>
                      <option className="bg-ink">Returning — my usual</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bk-date" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-paper/40">
                      Roughly when?
                    </label>
                    <input
                      id="bk-date"
                      type="text"
                      value={form.date}
                      onChange={set("date")}
                      placeholder="e.g. Thursday after work"
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="bk-note" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-paper/40">
                      Anything we should know?
                    </label>
                    <textarea
                      id="bk-note"
                      rows={3}
                      value={form.note}
                      onChange={set("note")}
                      placeholder="Hair type, how long it's been, the cowlick you're still mad about."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/35">
                      Six services on the board, <span className="text-gold-light">{services.length} reasons to come back.</span>
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 bg-paper px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold"
                    >
                      Request the chair
                      <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Booking;