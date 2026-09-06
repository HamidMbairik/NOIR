import { useEffect, useState } from "react";
import { brand, navLinks } from "../data/content.js";
import { Close, Menu } from "./Icons.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 text-[10px] uppercase tracking-[0.25em] sm:text-[11px]">
          <span className="hidden text-paper/70 sm:block">{brand.since} · New York</span>
          <a href="#booking" className="group text-paper/70 transition-colors hover:text-gold-light">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold" /> Book online — opens today
            </span>
          </a>
          <a href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`} className="text-paper/70 transition-colors hover:text-gold-light">
            {brand.phone}
          </a>
        </div>
      </div>

      <nav
        className={`border-b border-ink/10 bg-paper/95 backdrop-blur transition-all ${
          scrolled ? "shadow-[0_1px_0_0_rgba(17,17,17,0.06),0_8px_24px_-16px_rgba(17,17,17,0.25)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-display text-[26px] font-semibold leading-none tracking-tight text-ink">
              NOIR<span className="text-gold">.</span>
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted sm:inline">
              Grooming House
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link relative text-[12px] font-medium uppercase tracking-[0.18em] text-body"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-gold hover:text-paper"
            >
              Book an appointment
              <span className="text-gold transition-colors group-hover:text-paper">→</span>
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-[26px] font-semibold tracking-tight">
              NOIR<span className="text-gold">.</span>
            </span>
            <button
              className="flex h-10 w-10 items-center justify-center"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Close />
            </button>
          </div>

          <div className="mt-6 flex flex-1 flex-col justify-between px-6 pb-8">
            <nav className="flex flex-col gap-1">
              {[{ label: "Services", href: "#services" }, { label: "Barbers", href: "#barbers" }, { label: "Shop", href: "#shop" }, { label: "Journal", href: "#journal" }, { label: "The House", href: "#house" }, { label: "Book", href: "#booking" }].map(
                (l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-paper/10 py-4 font-display text-4xl font-light"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {l.label}
                  </a>
                )
              )}
            </nav>

            <div className="flex items-end justify-between">
              <div className="space-y-1 text-[11px] uppercase tracking-[0.25em] text-paper/60">
                <p>{brand.since}</p>
                <p>142 Franklin Street, NYC</p>
              </div>
              <a href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`} className="text-[11px] uppercase tracking-[0.25em] text-gold-light">
                {brand.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;