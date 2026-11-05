"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EventCard from "@/components/events/EventCard";
import { apiFetch } from "@/lib/api";
export default function JoinedEventsPage() {
 const [events, setEvents] = useState(null);
 useEffect(() => {
 apiFetch("/joined", {}, true)
 .then(setEvents)
 .catch((e) => { toast.error(e.message); setEvents([]); });
 }, []);
 if (events === null) {
 return <div className="mx-auto grid max-w-6xl gap-6 p-10 sm:grid-cols-2 lg:grid-cols-3">
 {[1, 2, 3].map((n) => <div key={n} className="skeleton h-80" />)}
 </div>;
 }
 return (
 <section className="mx-auto max-w-6xl px-4 py-10">
 <h1 className="mb-8 text-3xl font-bold">Events I Joined</h1>
 {events.length === 0 && <p>You have not joined any events yet.</p>}
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={{ ...e, _id: e.eventId }} />)}
 </div>
 </section>
 );
}