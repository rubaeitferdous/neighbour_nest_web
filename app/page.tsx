import { Suspense } from "react";
import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";
import Gallery from "@/components/home/Gallery";
import Newsletter from "@/components/home/Newsletter";
import RecentEvents from "@/components/home/RecentEvents";

function RecentEventsFallback() {
  return (
    <section
      aria-label="Loading recent events"
      className="mx-auto max-w-6xl px-4 py-14"
    >
      <div className="skeleton mb-8 h-10 w-72 max-w-full" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="skeleton h-80 w-full" />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Suspense fallback={<RecentEventsFallback />}>
        <RecentEvents />
      </Suspense>
      <Gallery />
      <Newsletter />
    </>
  );
}
