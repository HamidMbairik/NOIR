export function Arrow({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Phone({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MapPin({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Clock({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Diamond({ className = "h-1.5 w-1.5" }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <rect x="2.4" y="2.4" width="3.2" height="3.2" transform="rotate(45 4 4)" fill="currentColor" />
    </svg>
  );
}

export function Menu({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Close({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Quote({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 30V20.5C6 13 10 8 17 6l2 3.4c-4.6 1.2-7.4 4.2-7.9 8h7.9V30H6Zm20 0V20.5C26 13 30 8 37 6l2 3.4c-4.6 1.2-7.4 4.2-7.9 8h7.9V30H26Z" />
    </svg>
  );
}

export function Scissors({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 4 8.6 15.4M20 20 8.6 8.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}