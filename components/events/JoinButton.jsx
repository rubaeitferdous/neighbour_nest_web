"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";
export default function JoinButton({ eventId }) {
 const router = useRouter();
 const pathname = usePathname();
 const { data: session } = authClient.useSession();
 const [joined, setJoined] = useState(false);
 const [busy, setBusy] = useState(false);
 async function handleJoin() {
 if (!session) {
 toast.error("Please log in to join this event");
 return router.push(`/login?redirect=${pathname}`);
 }
 setBusy(true);
 try {
 await apiFetch(`/events/${eventId}/join`, { method: "POST" }, true);
 toast.success("You have joined this event!");
 setJoined(true);
 } catch (err) {
 toast.error(err.message);
 if (err.message.includes("already")) setJoined(true);
 } finally {
 setBusy(false);
 }
 }
 return (
 <button onClick={handleJoin} disabled={busy || joined} className="btn btn-primary btn-lg shrink-0">
 {joined ? "Joined" : busy ? "Joining..." : "Join Event"}
 </button>
 );
}