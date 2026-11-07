import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-0 h-96 w-96 rounded-full bg-sunlight/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-base-100 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand shadow-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sunlight" />
            Small acts. Stronger neighborhoods.
          </div>
          <h1 className="mt-7 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.35rem]">
            Good grows when we{" "}
            <span className="relative whitespace-nowrap text-brand">
              show up.
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                fill="none"
                className="absolute -bottom-2 left-0 w-full text-sunlight"
              >
                <path d="M3 10C55 2 161 2 217 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">
            Meet the neighbors who care. Find a local cause, lend a hand, and
            make your corner of Bangladesh a little brighter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/upcoming-events" className="btn btn-primary btn-lg">
              Find your next good thing
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/create-event" className="btn btn-ghost btn-lg border border-ink/15 bg-base-100 hover:border-brand/40 hover:bg-base-100">
              Bring people together
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-ink/60">
            <div className="flex -space-x-2">
              {["/gallery/neighbors-helping.jpg", "/gallery/community-cleanup.jpg", "/gallery/volunteer-event.jpg"].map((src, index) => (
                <span key={src} className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-cream bg-base-200">
                  <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                  <span className="sr-only">Community volunteer {index + 1}</span>
                </span>
              ))}
            </div>
            <span><strong className="text-ink">Good people,</strong> doing good nearby.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div aria-hidden="true" className="absolute -right-4 -top-5 h-28 w-28 rounded-full border border-sunlight/50 sm:-right-8 sm:-top-8 sm:h-40 sm:w-40" />
          <div className="relative aspect-[0.94] overflow-hidden rounded-[2rem] bg-base-200 shadow-[0_30px_75px_rgb(35_51_43/18%)] sm:rounded-[2.5rem]">
            <Image
              src="/gallery/neighbors-helping.jpg"
              alt="Neighbors joining hands to support one another"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">A little time goes a long way</p>
              <p className="mt-2 max-w-sm font-display text-3xl leading-tight sm:text-4xl">Your neighborhood is better with you in it.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 flex max-w-[16rem] items-center gap-3 rounded-2xl border border-ink/5 bg-base-100 p-4 shadow-xl sm:-left-10 sm:bottom-8 sm:p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sunlight/20 text-brand">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M20.8 8.6c0 5-8.8 10.2-8.8 10.2S3.2 13.6 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M8.5 11h2l1.2-2.2 1.5 4.1 1.2-1.9h1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong className="block text-sm text-ink">Care lives close to home</strong>
              <span className="mt-1 block text-xs leading-5 text-ink/60">Find a cause that feels like yours.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
