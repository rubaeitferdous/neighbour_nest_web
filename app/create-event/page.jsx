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
 <section className="page-shell px-5 py-14 sm:px-8">
  <div className="mx-auto max-w-2xl">
   <p className="section-kicker">Make something good happen</p>
   <h1 className="mt-2 font-display text-4xl font-semibold">Create an event</h1>
   <p className="mt-3 text-ink/65">Share the details and invite your neighbors to make a difference.</p>
   <div className="surface-card mt-8 p-5 sm:p-8">
    <EventForm onSubmit={createEvent} buttonText="Create Event" />
   </div>
  </div>
 </section>
 );
}