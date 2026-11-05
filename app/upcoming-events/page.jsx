import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
import { Suspense } from "react";

function EventsFallback() {
 return (
  <section className="mx-auto max-w-6xl px-4 py-10" aria-label="Loading events">
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
   <section className="mx-auto max-w-6xl px-4 py-10">
    <h1 className="mb-8 text-3xl font-bold">Upcoming Events</h1>
    <p role="alert" className="text-error">
     Events could not be loaded: {error.message}
    </p>
   </section>
  );
 }

 return (
 <section className="mx-auto max-w-6xl px-4 py-10">
 <h1 className="mb-8 text-3xl font-bold">Upcoming Events</h1>
 {events.length === 0 ? (
 <p>No upcoming events yet. Be the first to create one!</p>
 ) : (
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={e} />)}
 </div>
 )}
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