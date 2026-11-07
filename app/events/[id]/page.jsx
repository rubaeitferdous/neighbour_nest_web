import { Suspense } from "react";
import { notFound } from "next/navigation";
import JoinButton from "@/components/events/JoinButton";
import { getPublic } from "@/lib/api";

function DetailsFallback() {
 return (
 <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8" aria-label="Loading event">
  <div className="skeleton h-72 w-full rounded-3xl" />
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
  <p role="alert" className="mx-auto max-w-4xl px-5 py-14 text-error sm:px-8">
   Event details could not be loaded: {error.message}
  </p>
 );
 }

 return (
 <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
 <div className="relative h-64 overflow-hidden rounded-3xl bg-base-200 sm:h-[26rem]">
  <img src={event.thumbnail} alt={event.title} className="h-full w-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
 </div>
 <div className="mx-auto max-w-3xl">
 <span className="mt-7 inline-flex rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">{event.eventType}</span>
 <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{event.title}</h1>
 <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/65">
 <span>{event.location}</span><span aria-hidden="true">·</span><span>{new Date(event.eventDate).toLocaleDateString("en-GB")}</span>
 </p>
 <p className="mt-8 whitespace-pre-line text-base leading-8 text-ink/80">{event.description}</p>
 <p className="mt-6 border-t border-ink/10 pt-5 text-sm text-ink/60">Organised by <strong className="text-ink">{event.creatorName}</strong></p>
 <div className="surface-card mt-7 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
  <div><p className="font-semibold">Ready to lend a hand?</p><p className="mt-1 text-sm text-ink/60">Join your neighbors and be part of this event.</p></div>
 <JoinButton eventId={event._id} />
 </div>
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