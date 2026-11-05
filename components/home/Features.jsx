const features = [
  {
    number: "01",
    title: "Find your kind of good",
    description:
      "Browse upcoming cleanups, donation drives, planting days, and other local causes.",
    icon: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5M8 10.8h5.6M10.8 8v5.6" />
      </>
    ),
    tone: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    title: "Bring people together",
    description:
      "Create an event with the details neighbors need to show up and lend a hand.",
    icon: (
      <>
        <path d="M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 18.4V20" />
        <circle cx="9.5" cy="7" r="3.5" />
        <path d="M17 11a3.5 3.5 0 0 0 0-6.8M21 20v-1.6a3.4 3.4 0 0 0-2.6-3.3" />
      </>
    ),
    tone: "bg-secondary/10 text-secondary",
  },
  {
    number: "03",
    title: "Make a real difference",
    description:
      "Join a community effort and turn a little time into meaningful local impact.",
    icon: (
      <>
        <path d="M20.8 8.6c0 5-8.8 10.2-8.8 10.2S3.2 13.6 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
        <path d="M8.5 11h2l1.2-2.2 1.5 4.1 1.2-1.9h1.7" />
      </>
    ),
    tone: "bg-error/10 text-error",
  },
  {
    number: "04",
    title: "Keep it organized",
    description:
      "Manage the events you create and keep track of the ones you join in one place.",
    icon: (
      <>
        <rect x="4" y="4.5" width="16" height="16" rx="2.5" />
        <path d="M8 2.8v3.4m8-3.4v3.4M4 9.5h16M8 13h3m-3 3.5h6" />
      </>
    ),
    tone: "bg-success/10 text-success",
  },
  {
    number: "05",
    title: "Find good close to home",
    description:
      "Explore community events around Dhaka and discover simple ways to help nearby.",
    icon: (
      <>
        <path d="M20 10.2c0 5.2-8 11-8 11s-8-5.8-8-11a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    tone: "bg-info/10 text-info",
  },
];

export default function Features() {
  return (
    <section className="bg-base-100 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge badge-primary badge-outline">
            A community that cares
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Good things grow when we do them together
          </h2>
          <p className="mt-4 text-base leading-7 text-base-content/70">
            HelpingHands BD makes it easier to find local causes, bring
            neighbors together, and keep every act of service moving.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="card h-full border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="card-body p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tone}`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {feature.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-semibold tracking-widest text-base-content/35">
                    {feature.number}
                  </span>
                </div>
                <h3 className="card-title mt-3 text-xl text-base-content">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-base-content/70">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}