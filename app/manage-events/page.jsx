"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { apiFetch } from "@/lib/api";
export default function ManageEventsPage() {
 const [events, setEvents] = useState(null);
 useEffect(() => {
 apiFetch("/events/mine", {}, true)
 .then(setEvents)
 .catch((e) => { toast.error(e.message); setEvents([]); });
 }, []);
 async function handleDelete(id) {
 const result = await Swal.fire({
 title: "Delete this event?",
 text: "This cannot be undone.",
 icon: "warning",
 showCancelButton: true,
 confirmButtonText: "Yes, delete it",
 });
 if (!result.isConfirmed) return;
 try {
 await apiFetch(`/events/${id}`, { method: "DELETE" }, true);
 setEvents((prev) => prev.filter((e) => e._id !== id));
 toast.success("Event deleted");
 } catch (err) {
 toast.error(err.message);
 }
 }
 if (events === null) {
 return <div aria-label="Loading your events" className="mx-auto max-w-4xl space-y-3 px-5 py-14">
 {[1, 2, 3].map((n) => <div key={n} className="skeleton h-16 w-full" />)}
 </div>;
 }
 return (
 <section className="page-shell">
 <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
 <p className="section-kicker">Your corner of the community</p>
 <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
  <div>
   <h1 className="mt-2 font-display text-4xl font-semibold">Manage Events</h1>
   <p className="mt-2 text-sm text-ink/60">Keep your neighbors in the loop.</p>
  </div>
  <Link href="/create-event" className="btn btn-primary">Create event <span aria-hidden="true">+</span></Link>
 </div>
 {events.length === 0 && <div className="surface-card p-8 text-center"><p className="text-ink/65">You have not created any events yet.</p><Link href="/create-event" className="btn btn-primary mt-5">Create your first event</Link></div>}
 <div className="space-y-3">
 {events.map((e) => (
 <div key={e._id} className="surface-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
 <div>
 <p className="font-semibold text-ink">{e.title}</p>
 <p className="mt-1 text-sm text-ink/60">
 {e.location} <span aria-hidden="true">·</span> {new Date(e.eventDate).toLocaleDateString("en-GB")}
 </p>
 </div>
 <div className="flex gap-2">
 <Link href={`/manage-events/${e._id}/edit`}
 className="btn btn-sm btn-outline">Edit event</Link>
 <button onClick={() => handleDelete(e._id)}
 className="btn btn-sm btn-outline border-error/30 text-error hover:bg-error hover:text-white">Delete</button>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}