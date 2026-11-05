import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
export default async function RecentEvents() {
 let events;
 try {
  events = await getPublic("/events?limit=6");
 } catch {
  return (
   <section className="mx-auto max-w-6xl px-4 py-14" aria-live="polite">
    <h2 className="mb-4 text-3xl font-bold">Recent Upcoming Events</h2>
    <p role="alert" className="text-error">
     Upcoming events could not be loaded. Please try again later.
    </p>
   </section>
  );
 }

 return (
 <section className="mx-auto max-w-6xl px-4 py-14">
 <h2 className="mb-8 text-3xl font-bold">Recent Upcoming Events</h2>
 {events.length === 0 ? (
  <p>No upcoming events yet. Be the first to organize one!</p>
 ) : (
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={e} />)}
 </div>
 )}
 </section>
 );
}