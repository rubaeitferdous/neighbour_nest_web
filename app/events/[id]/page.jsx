import { Suspense } from "react";
import { notFound } from "next/navigation";
import JoinButton from "@/components/events/JoinButton";

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
 let res;
 try {
 res = await fetch(
  new URL(`/events/${encodeURIComponent(id)}`, process.env.NEXT_PUBLIC_API_URL),
  { cache: "no-store" },
 );
 } catch (error) {
 return (
  <p role="alert" className="mx-auto max-w-3xl px-4 py-10 text-error">
   Event details could not be loaded: {error.message}
  </p>
 );
 }
 if (res.status === 404) notFound();
 if (!res.ok) {
 return (
  <p role="alert" className="mx-auto max-w-3xl px-4 py-10 text-error">
   Event details could not be loaded (request failed with status {res.status}).
  </p>
 );
 }

 let event;
 try {
 event = await res.json();
 } catch {
 return (
  <p role="alert" className="mx-auto max-w-3xl px-4 py-10 text-error">
   Event details could not be loaded: the API returned invalid data.
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