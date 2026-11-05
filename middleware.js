import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
const PRIVATE = ["/create-event", "/manage-events", "/joined-events", "/profile"];
export function middleware(request) {
    const { pathname } = request.nextUrl;
    const isPrivate = PRIVATE.some((route) => pathname.startsWith(route));
    // Only the cookie is checked, so a logged-in user reloading a private
    // page is NOT sent to /login.
    if (isPrivate && !getSessionCookie(request)) {
        const url = new URL("/login", request.url);
        url.searchParams.set("redirect", pathname);
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}
export const config = {
    matcher: ["/create-event/:path*", "/manage-events/:path*",
        "/joined-events/:path*", "/profile/:path*"],
};
