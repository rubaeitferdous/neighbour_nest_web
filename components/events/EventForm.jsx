"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { tomorrowString, validateEventForm } from "@/lib/validators";
const TYPES = ["Cleanup", "Plantation", "Donation", "Blood Drive", "Education", "Health Camp"];
export default function EventForm({ initial = {}, onSubmit, buttonText }) {
 const [busy, setBusy] = useState(false);
 async function handleSubmit(e) {
 e.preventDefault();
 const form = Object.fromEntries(new FormData(e.currentTarget));
 const problem = validateEventForm(form);
 if (problem) return toast.error(problem);
 setBusy(true);
 try {
 await onSubmit(form);
 } catch (err) {
 toast.error(err.message);
 } finally {
 setBusy(false);
 }
 }
 const field = "input input-bordered w-full";
 return (
 <form onSubmit={handleSubmit} className="space-y-5">
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Event title</span>
  <input name="title" defaultValue={initial.title} placeholder="e.g. Gulshan community garden day" className={field} />
 </label>
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Description</span>
  <textarea name="description" defaultValue={initial.description}
  placeholder="Tell your neighbors what the event is about" className="textarea textarea-bordered min-h-32 w-full" />
 </label>
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Event type</span>
  <select name="eventType" defaultValue={initial.eventType || ""}
  className="select select-bordered w-full">
  <option value="" disabled>Select event type</option>
  {TYPES.map((t) => <option key={t}>{t}</option>)}
  </select>
 </label>
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Cover image URL</span>
  <input name="thumbnail" defaultValue={initial.thumbnail}
  placeholder="https://example.com/image.jpg" className={field} />
 </label>
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Location</span>
  <input name="location" defaultValue={initial.location}
  placeholder="e.g. Mirpur 10, Dhaka" className={field} />
 </label>
 <label className="block space-y-2">
  <span className="text-sm font-semibold">Event date</span>
  <input name="eventDate" type="date" min={tomorrowString()}
  defaultValue={initial.eventDate?.slice(0, 10)} className={field} />
 </label>
 <button disabled={busy} className="btn btn-primary mt-2 w-full">
 {busy ? "Please wait..." : buttonText}
 </button>
 </form>
 );
}
