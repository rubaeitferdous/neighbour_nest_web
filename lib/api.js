import { authClient } from "./auth-client";
const API = process.env.NEXT_PUBLIC_API_URL;

function getApiUrl(path) {
    if (!API) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    return new URL(path, API).toString();
}

async function readResponse(res) {
    const text = await res.text();
    if (!text) return {};

    try {
        return JSON.parse(text);
    } catch {
        throw new Error(`API returned an invalid response (${res.status})`);
    }
}

export async function apiFetch(path, options = {}, withAuth = false) {
    const headers = new Headers(options.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }

    if (withAuth) {
        const { data, error } = await authClient.token();
        if (error) {
            throw new Error(error.message || "Could not get an authentication token");
        }
        if (!data?.token) {
            throw new Error("Login required: authentication token is missing");
        }
        headers.set("Authorization", `Bearer ${data.token}`);
    }

    const res = await fetch(getApiUrl(path), {
        ...options,
        headers,
        cache: "no-store",
    });
    const body = await readResponse(res);
    if (!res.ok) {
        const error = new Error(body.message || `Request failed (${res.status})`);
        error.status = res.status;
        throw error;
    }

    return body;
}

export async function getPublic(path) {
    const res = await fetch(getApiUrl(path), { cache: "no-store" });
    const body = await readResponse(res);
    if (!res.ok) {
        const error = new Error(body.message || `Request failed (${res.status})`);
        error.status = res.status;
        throw error;
    }

    return body;
}