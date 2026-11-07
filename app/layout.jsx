import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata = {
 title: "NeighbourNest | Good grows here",
 description: "Find local volunteer events, meet your neighbors, and make good things happen together.",
 icons: {
  icon: [{ url: "/neighbour-nest-icon.svg", type: "image/svg+xml" }],
 },
};
export default function RootLayout({ children }) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body className="flex min-h-screen flex-col">
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
 </body>
 </html>
 );
}