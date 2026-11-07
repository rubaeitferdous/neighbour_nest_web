"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  <section className="page-shell px-5 py-12 sm:px-8 sm:py-16">
   <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[1.75rem] border border-ink/10 bg-base-100 shadow-xl md:grid-cols-[0.85fr_1fr]">
    <div className="relative hidden min-h-[34rem] overflow-hidden bg-brand md:block">
     <Image src="/gallery/community-cleanup.jpg" alt="" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover opacity-50 mix-blend-multiply" />
     <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand/55 to-brand/20" />
     <div className="relative flex h-full flex-col justify-end p-10 text-white">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Welcome to the neighborhood</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">A little care can change a whole community.</h2>
      <p className="mt-4 max-w-sm leading-7 text-white/75">Come meet the people making good things happen, one local act at a time.</p>
     </div>
    </div>
    <div className="p-6 sm:p-10 lg:p-12">
     <p className="section-kicker">Your community is waiting</p>
     <h1 className="mt-2 font-display text-4xl font-semibold">Welcome back</h1>
     <p className="mt-2 text-sm leading-6 text-ink/60">Log in to find your people and pick up where you left off.</p>
     <form onSubmit={handleSubmit} className="mt-7 space-y-4">
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Email address</span>
       <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
      </label>
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Password</span>
       <input name="password" type="password" required autoComplete="current-password" placeholder="Your password" className={field} />
      </label>
      <button disabled={loading} className="btn btn-primary mt-2 w-full">
       {loading ? "Signing in..." : "Log in"}
      </button>
     </form>
     <div className="divider my-5 text-xs text-ink/40">OR</div>
     <button onClick={googleLogin} disabled={loading} className="btn btn-outline w-full border-ink/15 bg-base-100">
      Continue with Google
     </button>
     <p className="mt-6 text-center text-sm text-ink/65">
      New to the neighborhood? <Link href="/register" className="font-bold text-brand hover:underline">Create an account</Link>
     </p>
    </div>
   </div>
  </section>
 );
}

export default function LoginPage() {
 return (
  <Suspense fallback={<div aria-label="Loading login" className="skeleton mx-auto my-14 h-[34rem] max-w-5xl rounded-3xl" />}>
   <LoginForm />
  </Suspense>
 );
}
