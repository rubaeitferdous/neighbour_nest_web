import Link from "next/link";
import Brand from "./Brand";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <Brand inverse />
          <p className="max-w-md text-sm leading-7 text-white/70">
            Neighbors coming together to make a difference. Discover local
            community events, lend a hand, and help build a kinder Bangladesh.
          </p>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit X"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-sunlight hover:text-sunlight"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.4L5.58 22H2.46l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.27 3.89H5.41L17.8 20Z" />
            </svg>
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Explore
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <Link className="transition-colors hover:text-sunlight" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-sunlight"
                href="/upcoming-events"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-sunlight"
                href="/register"
              >
                Join the Community
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Get involved
          </h2>
          <p className="text-sm leading-7 text-white/70">
            Find an event near you and take part in making a positive local
            impact.
          </p>
          <p className="mt-3 text-sm font-semibold text-white/90">Dhaka, Bangladesh</p>
          <Link
            href="/upcoming-events"
            className="btn btn-primary btn-sm mt-4"
          >
            Find an Event
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-content/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {currentYear} NeighbourNest. Together, we make a difference.
          </p>
          <p>Made for communities, by the community.</p>
        </div>
      </div>
    </footer>
  );
}