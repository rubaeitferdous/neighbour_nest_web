import { authClient } from "./auth-client";
const API = process.env.NEXT_PUBLIC_API_URL;
// Use in client components. Set withAuth = true for protected routes.
export async function apiFetch(path, options = {}, withAuth = false) {
    const headers = { "Content-Type": "application/json", ...options.headers };
    if (withAuth) {
        const { data } = await authClient.token();
        if (data?.token) headers.Authorization = `Bearer ${data.token}`;
    }
    const res = await fetch(`${API}${path}`, { ...options, headers, cache: "no-store" });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.message || "Request failed");
    return body;
}
// Use in server components (public pages). No auth client needed.
export async function getPublic(path) {
    const res = await fetch(`${API}${path}`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
}