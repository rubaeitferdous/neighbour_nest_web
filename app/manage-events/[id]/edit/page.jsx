"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import EventForm from "@/components/events/EventForm";
import { apiFetch } from "@/lib/api";
export default function EditEventPage({ params }) {
 const { id } = use(params);
 const router = useRouter();
 const [event, setEvent] = useState(null);
 useEffect(() => {
 apiFetch(`/events/${id}`).then(setEvent).catch((e) => toast.error(e.message));
 }, [id]);
 async function updateEvent(form) {
 await apiFetch(`/events/${id}`, { method: "PUT", body: JSON.stringify(form) }, true);
 toast.success("Event updated");
 router.push("/manage-events");
 }
 if (!event) return <div aria-label="Loading event form" className="skeleton mx-auto mt-14 h-96 max-w-2xl rounded-2xl" />;
 return (
 <section className="page-shell px-5 py-14 sm:px-8">
  <div className="mx-auto max-w-2xl">
   <p className="section-kicker">Keep your neighbors in the loop</p>
   <h1 className="mt-2 font-display text-4xl font-semibold">Update event</h1>
   <div className="surface-card mt-8 p-5 sm:p-8">
    <EventForm initial={event} onSubmit={updateEvent} buttonText="Save Changes" />
   </div>
  </div>
 </section>
 );
}
