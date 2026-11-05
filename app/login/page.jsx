"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
const field = "input input-bordered w-full";
function LoginForm() {
 const router = useRouter();
 const redirect = useSearchParams().get("redirect") || "/";
 const [loading, setLoading] = useState(false);
 async function handleSubmit(e) {
 e.preventDefault();
 const f = new FormData(e.currentTarget);
 setLoading(true);
 try {
 const { error } = await authClient.signIn.email({
  email: f.get("email"),
  password: f.get("password"),
 });
 if (error) {
  toast.error(error.message || "Wrong email or password");
  return;
 }
 toast.success("Welcome back!");
 router.push(redirect);
 } catch (error) {
 toast.error(error.message || "Could not sign in");
 } finally {
 setLoading(false);
 }
 }
 async function googleLogin() {
 try {
 const { error } = await authClient.signIn.social({
  provider: "google",
  callbackURL: redirect,
 });
 if (error) toast.error(error.message || "Google sign-in failed");
 } catch (error) {
 toast.error(error.message || "Google sign-in failed");
 }
 }
 return (
 <div className="mx-auto max-w-md px-4 py-12">
 <h1 className="mb-6 text-3xl font-bold">Login</h1>
 <form onSubmit={handleSubmit} className="space-y-4">
 <input name="email" type="email" required placeholder="Email" className={field} />
 <input name="password" type="password" required placeholder="Password" className={field} />
 <button disabled={loading} className="btn btn-primary w-full">
 {loading ? "Signing in..." : "Login"}
 </button>
 </form>
 <button onClick={googleLogin} disabled={loading} className="btn btn-outline mt-3 w-full">
 Continue with Google
 </button>
 <p className="mt-4 text-sm">
 New here? <Link href="/register" className="link link-primary">Create an account</Link>
 </p>
 </div>
 );
}
export default function LoginPage() {
 return (
 <Suspense fallback={null}>
 <LoginForm />
 </Suspense>
 );
}