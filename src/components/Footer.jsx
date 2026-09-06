import { useState } from "react";
import { brand, locations, hours } from "../data/content.js";
import { Arrow, Diamond } from "./Icons.jsx";

function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <p className="font-display text-[34px] font-semibold leading-none text-ink">
              NOIR<span className="text-gold">.</span>
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted">{brand.tagline}</p>

            <form
              className="mt-8 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setJoined(true);
              }}
            >
              <label htmlFor="ftr-nl" className="text-[10px] uppercase tracking-[0.25em] text-muted">
                The Occasional — our newsletter
              </label>
              {joined ? (
                <p className="mt-3 text-sm text-body">In. We'll only write when there's something to say.</p>
              ) : (
                <div className="mt-3 flex items-center gap-3 border-b border-ink/20 pb-2 focus-within:border-gold">
                  <input
                    id="ftr-nl"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-[15px] text-body outline-none placeholder:text-muted/70"
                  />
                  <button type="submit" aria-label="Subscribe" className="text-ink transition-colors hover:text-gold">
                    <Arrow />
                  </button>
                </div>
              )}
              <p className="mt-3 text-[11px] leading-relaxed text-muted/80">
                A column a month: cuts worth asking for, products that earn their shelf, and the
                occasional field note. No fluff, unsubscribes honored fast.
              </p>
            </form>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-muted">Rooms</p>
            <ul className="space-y-4">
              {locations.map((l) => (
                <li key={l.name} className="text-sm leading-relaxed text-body/85">
                  <span className="font-medium text-body">{l.name}</span>
                  <br />
                  {l.line1}, {l.line2}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-muted">Hours</p>
            <ul className="space-y-2 text-sm text-body/85">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span>{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-muted">Say hi</p>
            <ul className="space-y-3 text-sm text-body/85">
              <li>
                <a href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`} className="transition-colors hover:text-gold">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-gold">
                  {brand.email}
                </a>
              </li>
              <li className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                {["Instagram", "Journal", "The Team"].map((s) => (
                  <a
                    key={s}
                    href={s === "Journal" ? "#journal" : "#top"}
                    className="text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
                  >
                    {s}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden border-t border-ink/10">
          <p className="select-none whitespace-nowrap py-2 text-center font-display text-[clamp(4rem,14vw,11rem)] font-semibold leading-none tracking-tight text-ink/[0.04]">
            TAKING CARE OF IT
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-6 text-[10px] uppercase tracking-[0.25em] text-muted sm:flex-row">
          <span>© 2026 NOIR Grooming Co.</span>
          <span className="flex items-center gap-3">
            <Diamond className="h-1.5 w-1.5 text-gold" />
            {brand.since} — and counting
            <Diamond className="h-1.5 w-1.5 text-gold" />
          </span>
          <span className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-gold">Privacy</a>
            <a href="#top" className="transition-colors hover:text-gold">Terms</a>
            <a href="#top" className="transition-colors hover:text-gold">Back to top ↑</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;