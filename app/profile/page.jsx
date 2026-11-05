"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
 const { data: session, isPending } = authClient.useSession();
 const [saving, setSaving] = useState(false);

 async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const image = String(form.get("image") || "").trim();

  if (!name) {
   toast.error("Please enter your name");
   return;
  }

  setSaving(true);
  try {
   const { error } = await authClient.updateUser({
    name,
    image: image || null,
   });
   if (error) {
    toast.error(error.message || "Could not update your profile");
    return;
   }
   toast.success("Profile updated");
  } catch (error) {
   toast.error(error.message || "Could not update your profile");
  } finally {
   setSaving(false);
  }
 }

 if (isPending) {
  return <div className="skeleton mx-auto mt-10 h-80 max-w-xl" />;
 }

 if (!session?.user) {
  return (
   <section className="mx-auto max-w-xl px-4 py-12">
    <h1 className="text-3xl font-bold">Your profile</h1>
    <p className="mt-4">Sign in to view and update your profile.</p>
    <Link href="/login" className="btn btn-primary mt-6">
     Log in
    </Link>
   </section>
  );
 }

 return (
  <section className="mx-auto max-w-xl px-4 py-12">
   <h1 className="text-3xl font-bold">Your profile</h1>
   <p className="mt-2 text-base-content/70">
    Update the name and profile photo shown to your community.
   </p>

   <form onSubmit={handleSubmit} className="mt-8 space-y-5">
    <label className="form-control w-full">
     <span className="label-text mb-2 font-medium">Name</span>
     <input
      name="name"
      type="text"
      required
      defaultValue={session.user.name || ""}
      className="input input-bordered w-full"
      autoComplete="name"
     />
    </label>

    <label className="form-control w-full">
     <span className="label-text mb-2 font-medium">Profile photo URL</span>
     <input
      name="image"
      type="url"
      defaultValue={session.user.image || ""}
      className="input input-bordered w-full"
      autoComplete="url"
     />
    </label>

    <p className="text-sm text-base-content/65">
     Signed in as {session.user.email}
    </p>

    <button disabled={saving} className="btn btn-primary">
     {saving ? "Saving..." : "Save profile"}
    </button>
   </form>
  </section>
 );
}
