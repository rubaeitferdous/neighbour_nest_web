import { Suspense } from "react";
import { notFound } from "next/navigation";
import JoinButton from "@/components/events/JoinButton";
import { getPublic } from "@/lib/api";

function DetailsFallback() {
 return (
 <article className="mx-auto max-w-3xl px-4 py-10" aria-label="Loading event">
  <div className="skeleton h-72 w-full rounded-xl" />
  <div className="skeleton mt-6 h-8 w-40" />
  <div className="skeleton mt-4 h-10 w-3/4" />
  <div className="skeleton mt-8 h-28 w-full" />
 </article>
 );
}

async function EventDetails({ params }) {
 const { id } = await params;
 let event;
 try {
 event = await getPublic(`/events/${encodeURIComponent(id)}`);
 } catch (error) {
 if (error.status === 404) notFound();
 return (
  <p role="alert" className="mx-auto max-w-3xl px-4 py-10 text-error">
   Event details could not be loaded: {error.message}
  </p>
 );
 }

 return (
 <article className="mx-auto max-w-3xl px-4 py-10">
 <img src={event.thumbnail} alt={event.title} className="h-72 w-full rounded-xl object-cover" />
 <span className="badge badge-primary mt-6">{event.eventType}</span>
 <h1 className="mt-2 text-3xl font-bold">{event.title}</h1>
 <p className="mt-1 opacity-70">
 {event.location} | {new Date(event.eventDate).toLocaleDateString("en-GB")}
 </p>
 <p className="mt-6 whitespace-pre-line leading-relaxed">{event.description}</p>
 <p className="mt-4 text-sm opacity-70">Organised by {event.creatorName}</p>
 <div className="mt-8">
 <JoinButton eventId={event._id} />
 </div>
 </article>
 );
}

export default function EventDetailsPage({ params }) {
 return (
  <Suspense fallback={<DetailsFallback />}>
   <EventDetails params={params} />
  </Suspense>
 );
}