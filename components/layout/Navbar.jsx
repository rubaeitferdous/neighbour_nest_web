"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
 const router = useRouter();
 const { data: session, isPending } = authClient.useSession();
 const user = session?.user;
 async function handleLogout() {
 await authClient.signOut();
 toast.success("You have been logged out");
 router.push("/");
 }
 return (
 <header className="navbar sticky top-0 z-50 bg-base-100 shadow-sm px-4">
 <div className="flex-1">
 <Link href="/" className="text-xl font-bold text-primary">HelpingHands BD</Link>
 </div>
 <div className="flex items-center gap-2">
 <Link href="/upcoming-events" className="btn btn-ghost">Upcoming Events</Link>
 <ThemeToggle />
 {isPending ? (
 <div className="skeleton h-10 w-10 shrink-0 rounded-full" />
 ) : !user ? (
 <Link href="/login" className="btn btn-primary">Login</Link>
 ) : (
 <>
 <div className="dropdown dropdown-end">
 <div tabIndex={0} role="button" title={user.name} className="avatar cursor-pointer">
 <div className="w-10 rounded-full">
 <img src={user.image || "/avatar.png"} alt={user.name} />
 </div>
 </div>
 <ul
 tabIndex={0}
 className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
 >
 <li><Link href="/create-event">Create Event</Link></li>
 <li><Link href="/manage-events">Manage Events</Link></li>
 <li><Link href="/joined-events">Joined Events</Link></li>
 <li><Link href="/profile">My Profile</Link></li>
 </ul>
 </div>
 <button onClick={handleLogout} className="btn btn-outline">Logout</button>
 </>
 )}
 </div>
 </header>
 );
}