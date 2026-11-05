import Link from "next/link";
export default function EventCard({ event }) {
 const date = new Date(event.eventDate).toLocaleDateString("en-GB", {
 day: "numeric", month: "short", year: "numeric",
 });
 return (
 <div className="card h-full bg-base-100 shadow-md">
 <figure>
 <img src={event.thumbnail} alt={event.title} className="h-48 w-full object-cover" />
 </figure>
 <div className="card-body">
 <span className="badge badge-primary">{event.eventType}</span>
 <h3 className="card-title line-clamp-1">{event.title}</h3>
 <p className="text-sm">{event.location}</p>
 <p className="text-sm opacity-70">{date}</p>
 <div className="card-actions mt-auto justify-end">
 <Link href={`/events/${event._id}`} className="btn btn-primary btn-sm">
 View Event
 </Link>
 </div>
 </div>
 </div>
 );
}