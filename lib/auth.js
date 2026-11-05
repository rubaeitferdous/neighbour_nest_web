
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { getMongoClient } from "./mongodb";

let auth;

export function getAuth() {
  if (auth) return auth;

  const baseURL = process.env.BETTER_AUTH_URL;
  const secret = process.env.BETTER_AUTH_SECRET;
  if (!baseURL) {
    throw new Error("BETTER_AUTH_URL must be configured before using authentication");
  }
  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET must be configured before using authentication");
  }

  const client = getMongoClient();
  auth = betterAuth({
    baseURL,
    secret,
    database: mongodbAdapter(client.db("communityEventsAuth"), { client }),
    emailAndPassword: { enabled: true, minPasswordLength: 6 },
    socialProviders:
      process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
        ? {
            google: {
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            },
          }
        : {},
    plugins: [jwt(), nextCookies()],
  });

  return auth;
}
