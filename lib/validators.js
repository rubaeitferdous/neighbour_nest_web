export const EVENT_TYPES = ["Cleanup", "Plantation", "Donation", "Blood Drive", "Education", "Health Camp"];

export function validatePassword(pw) {
    if (pw.length < 6) return "Password must be at least 6 characters long";
    if (!/[A-Z]/.test(pw)) return "Password must include an uppercase letter";
    if (!/[a-z]/.test(pw)) return "Password must include a lowercase letter";
    return null;
}
// Returns tomorrow as YYYY-MM-DD in the user's local time.
export function tomorrowString() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
export function validateEventForm(form) {
    const required = ["title", "description", "eventType", "thumbnail", "location", "eventDate"];
    for (const key of required) {
        if (!String(form[key] || "").trim()) return "Please fill in every field";
    }
    if (!/^https?:\/\/.+/i.test(form.thumbnail)) return "Thumbnail must be a valid image URL";
    if (new Date(form.eventDate) < new Date(tomorrowString())) {
        return "Event date must be in the future";
    }
    return null;
}