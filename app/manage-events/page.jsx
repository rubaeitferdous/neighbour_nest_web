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
 return <div className="mx-auto max-w-4xl space-y-3 p-10">
 {[1, 2, 3].map((n) => <div key={n} className="skeleton h-16 w-full" />)}
 </div>;
 }
 return (
 <div className="mx-auto max-w-4xl px-4 py-10">
 <h1 className="mb-6 text-3xl font-bold">Manage Events</h1>
 {events.length === 0 && <p>You have not created any events yet.</p>}
 <div className="space-y-3">
 {events.map((e) => (
 <div key={e._id} className="flex items-center justify-between rounded-xl bg-base-200 p-4">
 <div>
 <p className="font-semibold">{e.title}</p>
 <p className="text-sm opacity-70">
 {e.location} | {new Date(e.eventDate).toLocaleDateString("en-GB")}
 </p>
 </div>
 <div className="flex gap-2">
 <Link href={`/manage-events/${e._id}/edit`}
 className="btn btn-sm btn-outline">Update</Link>
 <button onClick={() => handleDelete(e._id)}
 className="btn btn-sm btn-error">Delete</button>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
}