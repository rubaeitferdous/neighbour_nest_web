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
 <form onSubmit={handleSubmit} className="space-y-4">
 <input name="title" defaultValue={initial.title} placeholder="Event title" className={field} />
 <textarea name="description" defaultValue={initial.description}
 placeholder="Describe the event" className="textarea textarea-bordered h-32 w-full" />
 <select name="eventType" defaultValue={initial.eventType || ""}
 className="select select-bordered w-full">
 <option value="" disabled>Select event type</option>
 {TYPES.map((t) => <option key={t}>{t}</option>)}
 </select>
 <input name="thumbnail" defaultValue={initial.thumbnail}
 placeholder="Thumbnail image URL" className={field} />
 <input name="location" defaultValue={initial.location}
 placeholder="Location (e.g. Mirpur 10, Dhaka)" className={field} />
 <input name="eventDate" type="date" min={tomorrowString()}
 defaultValue={initial.eventDate?.slice(0, 10)} className={field} />
 <button disabled={busy} className="btn btn-primary w-full">
 {busy ? "Please wait..." : buttonText}
 </button>
 </form>
 );
}
