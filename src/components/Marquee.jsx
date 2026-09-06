import { marqueeItems } from "../data/content.js";
import { Diamond } from "./Icons.jsx";

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-mask overflow-hidden bg-ink py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-3xl font-light italic text-paper/90">{item}</span>
            <Diamond className="h-2 w-2 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;