"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { validatePassword } from "@/lib/validators";
const field = "input input-bordered w-full";
export default function RegisterPage() {
 const router = useRouter();
 const [loading, setLoading] = useState(false);
 async function googleSignup() {
 setLoading(true);
 try {
 const { error } = await authClient.signIn.social({
  provider: "google",
  callbackURL: "/",
 });
 if (error) toast.error(error.message || "Google sign-up failed");
 } catch (error) {
 toast.error(error.message || "Google sign-up failed");
 } finally {
 setLoading(false);
 }
 }
 async function handleSubmit(e) {
 e.preventDefault();
 const f = new FormData(e.currentTarget);
 const name = f.get("name");
 const email = f.get("email");
 const photoURL = f.get("photoURL");
 const password = f.get("password");
 const problem = validatePassword(password);
 if (problem) return toast.error(problem);
 setLoading(true);
 try {
 const { error } = await authClient.signUp.email({
  name, email, password, image: photoURL,
 });
 if (error) {
  toast.error(error.message || "Registration failed");
  return;
 }
 toast.success("Account created. Welcome to the community!");
 router.push("/");
 } catch (error) {
 toast.error(error.message || "Registration failed");
 } finally {
 setLoading(false);
 }
 }
 return (
 <div className="mx-auto max-w-md px-4 py-12">
 <h1 className="mb-6 text-3xl font-bold">Create your account</h1>
 <form onSubmit={handleSubmit} className="space-y-4">
 <input name="name" required placeholder="Full name" className={field} />
 <input name="email" type="email" required placeholder="Email" className={field} />
 <input name="photoURL" type="url" required placeholder="Photo URL" className={field} />
 <input name="password" type="password" required placeholder="Password" className={field} />
 <button disabled={loading} className="btn btn-primary w-full">
 {loading ? "Creating..." : "Register"}
 </button>
 </form>
 <div className="divider">OR</div>
 <button
  type="button"
  onClick={googleSignup}
  disabled={loading}
  className="btn btn-outline w-full"
 >
 {loading ? "Redirecting..." : "Continue with Google"}
 </button>
 <p className="mt-4 text-sm">
 Already have an account? <Link href="/login" className="link link-primary">Login</Link>
 </p>
 </div>
 );
}