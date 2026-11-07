"use client";

import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import { EVENT_TYPES } from "@/lib/validators";

export default function EventFilters({ events }) {
 const [search, setSearch] = useState("");
 const [eventType, setEventType] = useState("");
 const normalizedSearch = search.trim().toLowerCase();
 const filteredEvents = useMemo(
  () => events.filter((event) => {
   const matchesSearch = !normalizedSearch
    || event.title.toLowerCase().includes(normalizedSearch)
    || event.location.toLowerCase().includes(normalizedSearch);
   const matchesType = !eventType || event.eventType === eventType;
   return matchesSearch && matchesType;
  }),
  [events, eventType, normalizedSearch]
 );

 return (
  <>
   <div className="surface-card mb-8 grid gap-4 p-4 sm:grid-cols-[1fr_16rem] sm:p-5">
    <label className="block space-y-2">
     <span className="text-sm font-semibold">Search events</span>
     <input
      type="search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search by event or location"
      className="input input-bordered w-full"
     />
    </label>
    <label className="block space-y-2">
     <span className="text-sm font-semibold">Event type</span>
     <select
      value={eventType}
      onChange={(event) => setEventType(event.target.value)}
      className="select select-bordered w-full"
     >
      <option value="">All event types</option>
      {EVENT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
     </select>
    </label>
   </div>
   <p className="mb-4 text-sm text-ink/60" aria-live="polite">
    {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} found
   </p>
   {filteredEvents.length === 0 ? (
    <div className="rounded-2xl border border-dashed border-ink/20 bg-base-200 px-6 py-12 text-center">
     <p className="text-ink/65">No events match your search and filters.</p>
     <button
      type="button"
      onClick={() => {
       setSearch("");
       setEventType("");
      }}
      className="btn btn-outline mt-4"
     >
      Clear filters
     </button>
    </div>
   ) : (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {filteredEvents.map((event) => <EventCard key={event._id} event={event} />)}
    </div>
   )}
  </>
 );
}
