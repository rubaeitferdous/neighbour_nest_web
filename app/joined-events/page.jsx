"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
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
 return <div aria-label="Loading joined events" className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
 {[1, 2, 3].map((n) => <div key={n} className="skeleton h-80" />)}
 </div>;
 }
 return (
 <section className="page-shell">
 <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
 <p className="section-kicker">Good things you are part of</p>
 <h1 className="mb-8 mt-2 font-display text-4xl font-semibold">Events I Joined</h1>
 {events.length === 0 && <div className="surface-card mb-6 p-8 text-center text-ink/65">You have not joined any events yet. <Link className="font-semibold text-brand hover:underline" href="/upcoming-events">Find an event to join.</Link></div>}
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e) => <EventCard key={e._id} event={{ ...e, _id: e.eventId }} />)}
 </div>
 </div>
 </section>
 );
}