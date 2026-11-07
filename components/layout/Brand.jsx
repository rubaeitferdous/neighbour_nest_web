import Link from "next/link";

export function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect x="2" y="2" width="44" height="44" rx="16" fill="currentColor" />
      <path
        d="m11 23 13-11 13 11v12a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V23Z"
        stroke="#F9F5E9"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M19.2 29.2a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6c0 4.3-8.8 9.1-8.8 9.1s-8.8-4.8-8.8-9.1Z"
        fill="#E9A36F"
        stroke="#F9F5E9"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M21 21.5h6"
        stroke="#F9F5E9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Brand({ compact = false, inverse = false, compactOnMobile = false }) {
  return (
    <Link
      href="/"
      aria-label="NeighbourNest home"
      className={`group inline-flex items-center gap-2.5 ${
        inverse ? "text-white" : "text-ink"
      }`}
    >
      <BrandMark className="h-10 w-10 shrink-0 text-brand transition-transform duration-300 group-hover:-rotate-3" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-bold tracking-tight sm:text-[1.2rem]">
            Neighbour<span className={inverse ? "text-sunlight" : "text-brand"}>Nest</span>
          </span>
          <span
            className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
              compactOnMobile ? "hidden sm:block " : ""
            }${
              inverse ? "text-white/60" : "text-ink/50"
            }`}
          >
            Good grows here
          </span>
        </span>
      )}
    </Link>
  );
}
