"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "./ThemeToggle";
import Brand from "./Brand";

export default function Navbar() {
 const router = useRouter();
 const { data: session, isPending } = authClient.useSession();
 const user = session?.user;
 async function handleLogout() {
 try {
  const { error } = await authClient.signOut();
  if (error) {
   toast.error(error.message || "Could not log out");
   return;
  }
  toast.success("You have been logged out");
  router.push("/");
 } catch (error) {
  toast.error(error.message || "Could not log out");
 }
 }
 return (
 <header className="sticky top-0 z-50 border-b border-ink/10 bg-base-100/95 shadow-[0_3px_20px_rgb(35_51_43/4%)] backdrop-blur-md">
  <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
   <Brand compactOnMobile />
   <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-3">
    <Link
     href="/upcoming-events"
     className="rounded-lg px-2 py-2 text-sm font-semibold text-ink/75 transition-colors hover:bg-base-200 hover:text-brand sm:px-3"
    >
     <span className="hidden sm:inline">Explore </span>Events
    </Link>
    <ThemeToggle />
    {isPending ? (
     <div aria-label="Loading account" className="skeleton h-10 w-10 shrink-0 rounded-full" />
    ) : !user ? (
     <div className="flex items-center gap-1 sm:gap-2">
      <Link href="/login" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink/75 hover:text-brand sm:inline-flex">
       Log in
      </Link>
      <Link href="/register" className="btn btn-primary btn-sm px-2 sm:btn-md sm:px-4">
       Join us
      </Link>
     </div>
    ) : (
     <>
      <div className="dropdown dropdown-end">
       <button
        type="button"
        tabIndex={0}
        title={user.name}
        aria-label={`Open ${user.name}'s account menu`}
        className="avatar cursor-pointer rounded-full ring-2 ring-brand/20 ring-offset-2 ring-offset-base-100"
       >
        <div className="w-9 rounded-full bg-base-200">
         {user.image ? <img src={user.image} alt="" /> : <span className="grid h-full place-items-center font-semibold text-brand">{user.name?.[0]?.toUpperCase() || "N"}</span>}
        </div>
       </button>
       <ul
        tabIndex={0}
        className="menu dropdown-content z-10 mt-4 w-56 rounded-2xl border border-ink/10 bg-base-100 p-2 shadow-xl"
       >
        <li className="menu-title px-3 py-2 text-ink/50">{user.name}</li>
        <li><Link href="/create-event">Create an event</Link></li>
        <li><Link href="/manage-events">Manage my events</Link></li>
        <li><Link href="/joined-events">Events I joined</Link></li>
        <li><Link href="/profile">My profile</Link></li>
        <li><button onClick={handleLogout}>Log out</button></li>
       </ul>
      </div>
     </>
    )}
   </nav>
  </div>
 </header>
 );
}