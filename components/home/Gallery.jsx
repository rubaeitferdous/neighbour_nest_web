import Image from "next/image";

const photos = [
  {
    src: "/gallery/community-cleanup.jpg",
    alt: "Volunteer giving time and energy to a community event",
    title: "Showing up together",
    category: "Community service",
  },
  {
    src: "/gallery/neighbors-helping.jpg",
    alt: "A group of people joining hands in support of one another",
    title: "A little help goes a long way",
    category: "Neighbors helping neighbors",
  },
  {
    src: "/gallery/community-donation.jpg",
    alt: "Hands offering a donation to support people in need",
    title: "Giving with care",
    category: "Donation drive",
  },
  {
    src: "/gallery/volunteer-event.jpg",
    alt: "Volunteers organizing donated food and supplies",
    title: "Making kindness practical",
    category: "Volunteer day",
  },
];

export default function Gallery() {
  return (
    <section className="bg-base-200 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Neighbors in action</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-base-content sm:text-4xl">
              Moments that bring us closer
            </h2>
            <p className="mt-4 text-base leading-7 text-base-content/70">
              Every shared effort tells a story of care, generosity, and
              community.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group overflow-hidden rounded-2xl border border-ink/5 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="card-body gap-1 p-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand">
                  {photo.category}
                </span>
                <h3 className="text-lg font-bold text-base-content">
                  {photo.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}