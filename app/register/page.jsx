"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  <section className="page-shell px-5 py-12 sm:px-8 sm:py-16">
   <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[1.75rem] border border-ink/10 bg-base-100 shadow-xl md:grid-cols-[0.85fr_1fr]">
    <div className="relative hidden min-h-[38rem] overflow-hidden bg-brand md:block">
     <Image src="/gallery/volunteer-event.jpg" alt="" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover opacity-50 mix-blend-multiply" />
     <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand/55 to-brand/20" />
     <div className="relative flex h-full flex-col justify-end p-10 text-white">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Find your place here</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">Better things begin with neighbors.</h2>
      <p className="mt-4 max-w-sm leading-7 text-white/75">Start small. Bring people together. Watch kindness ripple through your community.</p>
     </div>
    </div>
    <div className="p-6 sm:p-10 lg:p-12">
     <p className="section-kicker">Let good grow</p>
     <h1 className="mt-2 font-display text-4xl font-semibold">Join the neighborhood</h1>
     <p className="mt-2 text-sm leading-6 text-ink/60">Create an account to find, join, and organize local events.</p>
     <form onSubmit={handleSubmit} className="mt-7 space-y-4">
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Full name</span>
       <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </label>
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Email address</span>
       <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
      </label>
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Profile photo URL</span>
       <input name="photoURL" type="url" required autoComplete="url" placeholder="https://example.com/photo.jpg" className={field} />
      </label>
      <label className="block space-y-2">
       <span className="text-sm font-semibold">Password</span>
       <input name="password" type="password" required autoComplete="new-password" placeholder="Create a password" className={field} />
      </label>
      <button disabled={loading} className="btn btn-primary mt-2 w-full">
       {loading ? "Creating..." : "Create account"}
      </button>
     </form>
     <div className="divider my-5 text-xs text-ink/40">OR</div>
     <button
      type="button"
      onClick={googleSignup}
      disabled={loading}
      className="btn btn-outline w-full border-ink/15 bg-base-100"
     >
      {loading ? "Redirecting..." : "Continue with Google"}
     </button>
     <p className="mt-6 text-center text-sm text-ink/65">
      Already a neighbor? <Link href="/login" className="font-bold text-brand hover:underline">Log in</Link>
     </p>
    </div>
   </div>
  </section>
 );
}
