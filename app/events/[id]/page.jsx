import { notFound } from "next/navigation";
import JoinButton from "@/components/events/JoinButton";
export default async function EventDetailsPage({ params }) {
 const { id } = await params;
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
 cache: "no-store",
 });
 if (!res.ok) notFound();
 const event = await res.json();
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