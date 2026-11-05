import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
export default async function UpcomingEventsPage() {
 let events;
 try {
  events = await getPublic("/events");
 } catch {
  return (
   <section className="mx-auto max-w-6xl px-4 py-10">
    <h1 className="mb-8 text-3xl font-bold">Upcoming Events</h1>
    <p role="alert" className="text-error">
     Events could not be loaded. Please try again later.
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