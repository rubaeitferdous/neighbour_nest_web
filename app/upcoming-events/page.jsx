import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
import { Suspense } from "react";
import Link from "next/link";

function EventsFallback() {
 return (
  <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8" aria-label="Loading events">
   <div className="skeleton mb-3 h-3 w-36" />
   <div className="skeleton mb-8 h-10 w-72 max-w-full" />
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((item) => (
     <div key={item} className="skeleton h-80 w-full" />
    ))}
   </div>
  </section>
 );
}

async function UpcomingEvents() {
 let events;
 try {
  events = await getPublic("/events");
 } catch (error) {
  return (
   <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
    <h1 className="mb-3 font-display text-4xl font-semibold">Upcoming Events</h1>
    <p role="alert" className="text-error">
     Events could not be loaded: {error.message}
    </p>
   </section>
  );
 }

 return (
 <section className="page-shell">
 <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
 <p className="section-kicker">Find your next good thing</p>
 <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
  <div>
   <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Upcoming Events</h1>
   <p className="mt-3 max-w-xl text-ink/65">Show up for a cause, meet your neighbors, and make something better together.</p>
  </div>
  <Link href="/create-event" className="btn btn-primary">Organize an event <span aria-hidden="true">→</span></Link>
 </div>
 {events.length === 0 ? (
 <p className="rounded-2xl border border-dashed border-ink/20 bg-base-200 px-6 py-14 text-center text-ink/65">No upcoming events yet. Be the first to create one!</p>
 ) : (
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={e} />)}
 </div>
 )}
 </div>
 </section>
 );
}

export default function UpcomingEventsPage() {
 return (
  <Suspense fallback={<EventsFallback />}>
   <UpcomingEvents />
  </Suspense>
 );
}