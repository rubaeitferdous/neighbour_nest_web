import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
export default async function RecentEvents() {
 const events = await getPublic("/events?limit=6");
 return (
 <section className="mx-auto max-w-6xl px-4 py-14">
 <h2 className="mb-8 text-3xl font-bold">Recent Upcoming Events</h2>
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={e} />)}
 </div>
 </section>
 );
}