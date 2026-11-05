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
 if (!event) return <div className="skeleton mx-auto mt-10 h-96 max-w-2xl" />;
 return (
 <div className="mx-auto max-w-2xl px-4 py-10">
 <h1 className="mb-6 text-3xl font-bold">Update Event</h1>
 <EventForm initial={event} onSubmit={updateEvent} buttonText="Save Changes" />
 </div>
 );
}
