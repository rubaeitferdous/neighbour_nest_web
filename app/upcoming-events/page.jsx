import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
export default async function UpcomingEventsPage() {
 const events = await getPublic("/events");
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