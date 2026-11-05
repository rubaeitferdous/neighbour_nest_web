import Link from "next/link";

export default function NotFound() {
 return (
  <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
   <p className="badge badge-primary badge-outline">404</p>
   <h1 className="mt-5 text-4xl font-bold text-base-content">
    This page could not be found
   </h1>
   <p className="mt-4 text-base-content/70">
    The page may have moved, or the link may be incorrect.
   </p>
   <div className="mt-8 flex flex-wrap justify-center gap-3">
    <Link href="/" className="btn btn-primary">
     Go home
    </Link>
    <Link href="/upcoming-events" className="btn btn-outline">
     Browse events
    </Link>
   </div>
  </main>
 );
}