import { useState } from "react";

function Photo({ src, alt, className = "", caption, eager = false, ratio = "aspect-[3/4]" }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className={`${ratio} flex h-full w-full flex-col items-center justify-center gap-4 bg-ink-soft`}
        >
          <span className="font-display text-6xl text-paper/60">NOIR</span>
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold-light/70">{alt}</span>
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
          <span className="h-px w-6 bg-gold" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default Photo;