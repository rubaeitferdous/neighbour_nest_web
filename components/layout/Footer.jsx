import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 sm:col-span-2">
          <Link href="/" className="inline-block text-2xl font-bold text-primary">
            HelpingHands BD
          </Link>
          <p className="max-w-md text-sm leading-6 opacity-80">
            Neighbors coming together to make a difference. Discover local
            community events, lend a hand, and help build a kinder Bangladesh.
          </p>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit X"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-content/20 transition-colors hover:border-primary hover:text-primary"
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
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Explore
          </h2>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link className="transition-colors hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-primary"
                href="/upcoming-events"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-primary"
                href="/login"
              >
                Join the Community
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Get involved
          </h2>
          <p className="text-sm leading-6 opacity-80">
            Find an event near you and take part in making a positive local
            impact.
          </p>
          <p className="mt-3 text-sm font-medium">Dhaka, Bangladesh</p>
          <Link
            href="/upcoming-events"
            className="btn btn-primary btn-sm mt-4"
          >
            Find an Event
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-content/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {currentYear} HelpingHands BD. Together, we make a difference.
          </p>
          <p>Made for communities, by the community.</p>
        </div>
      </div>
    </footer>
  );
}