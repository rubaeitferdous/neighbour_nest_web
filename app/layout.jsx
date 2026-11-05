import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata = {
 title: "HelpingHands BD | Community Service Events",
 description: "Create, join and track social service events near you.",
};
export default function RootLayout({ children }) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body className="flex min-h-screen flex-col">
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 <Toaster position="top-right" />
 </body>
 </html>
 );
}