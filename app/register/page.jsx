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
 const { error } = await authClient.signUp.email({
 name, email, password, image: photoURL,
 });
 setLoading(false);
 if (error) return toast.error(error.message || "Registration failed");
 toast.success("Account created. Welcome to the community!");
 router.push("/");
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
 <p className="mt-4 text-sm">
 Already have an account? <Link href="/login" className="link link-primary">Login</Link>
 </p>
 </div>
 );
}