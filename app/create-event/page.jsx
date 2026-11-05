"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import EventForm from "@/components/events/EventForm";
import { apiFetch } from "@/lib/api";
export default function CreateEventPage() {
 const router = useRouter();
 async function createEvent(form) {
 await apiFetch("/events", { method: "POST", body: JSON.stringify(form) }, true);
 toast.success("Event created successfully!");
 router.push("/upcoming-events");
 }
 return (
 <div className="mx-auto max-w-2xl px-4 py-10">
 <h1 className="mb-6 text-3xl font-bold">Create a New Event</h1>
 <EventForm onSubmit={createEvent} buttonText="Create Event" />
 </div>
 );
}