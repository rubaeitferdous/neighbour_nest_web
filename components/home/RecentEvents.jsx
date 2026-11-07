import EventCard from "@/components/events/EventCard";
import { getPublic } from "@/lib/api";
export default async function RecentEvents() {
 let events;
 try {
  events = await getPublic("/events?limit=6");
 } catch (error) {
  return (
   <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8" aria-live="polite">
    <h2 className="mb-4 font-display text-3xl font-semibold">Upcoming ways to help</h2>
    <p role="alert" className="text-error">
     Upcoming events could not be loaded: {error.message}
    </p>
   </section>
  );
 }

 return (
 <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
 <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
 <div>
 <p className="section-kicker">Make a difference nearby</p>
 <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Upcoming ways to help</h2>
 </div>
 <a href="/upcoming-events" className="text-sm font-bold text-brand hover:underline">See all events <span aria-hidden="true">→</span></a>
 </div>
 {events.length === 0 ? (
  <p className="rounded-2xl border border-dashed border-ink/20 bg-base-200 px-6 py-12 text-center text-ink/65">No upcoming events yet. Be the first to organize one!</p>
 ) : (
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={e} />)}
 </div>
 )}
 </section>
 );
}