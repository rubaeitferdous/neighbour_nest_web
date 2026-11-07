import Link from "next/link";

export default function EventCard({ event }) {
 const date = new Date(event.eventDate).toLocaleDateString("en-GB", {
 day: "numeric", month: "short", year: "numeric",
 });
 return (
 <article className="group surface-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <Link href={`/events/${event._id}`} className="relative block h-52 overflow-hidden bg-base-200" aria-label={`View ${event.title}`}>
   <img src={event.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
   <span className="absolute left-4 top-4 rounded-full bg-base-100/95 px-3 py-1.5 text-xs font-bold text-brand shadow-sm">{event.eventType}</span>
  </Link>
  <div className="flex flex-1 flex-col p-5 sm:p-6">
   <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{date}</p>
   <h3 className="mt-2 line-clamp-2 font-display text-xl font-semibold leading-snug text-ink">{event.title}</h3>
   <p className="mt-3 flex items-center gap-2 text-sm text-ink/65">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-brand">
     <path d="M20 10.2c0 5.2-8 11-8 11s-8-5.8-8-11a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" />
     <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
    <span className="line-clamp-1">{event.location}</span>
   </p>
   <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-5 mt-5">
    <span className="text-xs font-medium text-ink/50">Be part of something good</span>
    <Link href={`/events/${event._id}`} className="btn btn-primary btn-sm">Details <span aria-hidden="true">→</span></Link>
   </div>
  </div>
 </article>
 );
}