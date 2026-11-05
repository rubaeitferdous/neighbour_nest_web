import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-base-200">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <div className="badge badge-primary badge-outline gap-2 px-3 py-4 font-medium">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
            Small acts. Stronger communities.
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-base-content sm:text-5xl lg:text-6xl">
            Good things happen when{" "}
            <span className="text-primary">we show up</span> for each other.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
            Find local service events, meet neighbors who care, and turn a few
            hours of your time into a lasting difference across your community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/upcoming-events" className="btn btn-primary btn-lg">
              Explore Upcoming Events
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/create-event" className="btn btn-outline btn-lg">
              Organize an Event
            </Link>
          </div>

          <p className="mt-5 text-sm text-base-content/60">
            From neighborhood cleanups to helping families in need.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rotate-3 rounded-[2rem] bg-primary/10"
          />
          <div className="card relative overflow-hidden rounded-[1.5rem] bg-base-100 shadow-xl">
            <div className="bg-primary px-6 py-5 text-primary-content">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
                Community in action
              </p>
              <p className="mt-2 text-2xl font-bold">
                Every helping hand matters.
              </p>
            </div>
            <div className="card-body gap-5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-success/10 text-success">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <path
                      d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 12h2l1.2-2.2 1.6 4.4 1.1-2.2h1.1"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="font-bold text-base-content">
                    Care that reaches close to home
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-base-content/65">
                    Discover meaningful ways to support people and places
                    around you.
                  </p>
                </div>
              </div>

              <div className="divider my-0" />

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Cleanups</span>
                <span className="badge badge-outline">Tree planting</span>
                <span className="badge badge-outline">Community care</span>
              </div>

              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm font-semibold text-base-content">
                  Your time can make someone&apos;s day brighter.
                </p>
                <p className="mt-1 text-sm text-base-content/65">
                  Find an event and be part of something good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}