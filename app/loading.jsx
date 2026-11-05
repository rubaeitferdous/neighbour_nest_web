export default function Loading() {
 return (
  <main
   aria-label="Loading page"
   className="mx-auto min-h-[60vh] max-w-6xl px-4 py-10"
  >
   <div className="skeleton mb-8 h-10 w-72 max-w-full" />
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((item) => (
     <div key={item} className="skeleton h-80 w-full" />
    ))}
   </div>
  </main>
 );
}