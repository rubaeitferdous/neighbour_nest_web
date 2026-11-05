export default function Newsletter() {
  return (
    <section className="bg-base-100 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-content shadow-xl sm:px-10 sm:py-14 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full border-[40px] border-primary-content/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary-content/10 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="max-w-xl">
              <span className="badge border-primary-content/30 bg-primary-content/10 text-primary-content">
                Stay in the loop
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                A little good news for your inbox.
              </h2>
              <p className="mt-4 text-base leading-7 text-primary-content/80">
                Keep an eye out for community stories, upcoming service
                opportunities, and simple ways to make a difference nearby.
              </p>
            </div>

            <div
              aria-label="Newsletter sign-up preview"
              className="rounded-2xl border border-primary-content/15 bg-primary-content/10 p-4 sm:p-5"
            >
              <label
                htmlFor="newsletter-email"
                className="mb-2 block text-sm font-medium"
              >
                Your email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled
                  className="input w-full border-0 bg-base-100 text-base-content placeholder:text-base-content/45 disabled:cursor-not-allowed disabled:opacity-90"
                />
                <button
                  type="button"
                  disabled
                  className="btn border-0 bg-base-100 text-primary hover:bg-base-100 disabled:cursor-not-allowed disabled:opacity-90"
                >
                  Coming soon
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-primary-content/75">
                Newsletter sign-ups are not available yet. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}