<div align="center">

# 🤝 HelpingHands BD — Web App

**NeighbourNest · Community Service Events Platform (Client)**

Create, join and track social service events near you.

[Live Site](https://neighbournest-eight.vercel.app/) · [Server Repository](https://github.com/rubaeitferdous/NeighbourNest_server) · [Client Repository](https://github.com/rubaeitferdous/neighbour_nest_web)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

</div>

---

## 📖 Table of Contents

1. [About the Project](#-about-the-project)
2. [Live Demo & Links](#-live-demo--links)
3. [Key Features](#-key-features)
4. [Tech Stack](#-tech-stack)
5. [Application Pages](#-application-pages)
6. [Authentication Flow](#-authentication-flow)
7. [Project Structure](#-project-structure)
8. [Environment Variables](#-environment-variables)
9. [Getting Started](#-getting-started)
10. [Available Scripts](#-available-scripts)
11. [Deployment](#-deployment)
12. [Connecting to the Server](#-connecting-to-the-server)
13. [Roadmap](#-roadmap)
14. [Author](#-author)

---

## 🌱 About the Project

**HelpingHands BD** (repository name: *NeighbourNest*) is a community-driven platform that makes it easy for people in Bangladesh to find, organize and take part in local social service events — neighborhood cleanups, tree planting days, donation drives, volunteer days and other community care activities.

The web app is the **client** half of a two-part system. It is built with the Next.js App Router and talks to a separate Express + MongoDB REST API (see the [server repository](https://github.com/rubaeitferdous/NeighbourNest_server)).

> *"Good things happen when we show up for each other."*

---

## 🔗 Live Demo & Links

| Resource | Link |
| --- | --- |
| 🌐 Live Site | https://neighbournest-eight.vercel.app/ |
| 💻 Client Repository | https://github.com/rubaeitferdous/neighbour_nest_web |
| 🛠️ Server Repository | https://github.com/rubaeitferdous/NeighbourNest_server |

---

## ✨ Key Features

- **Discover events** — browse upcoming community service events on a dedicated listing page.
- **Organize events** — logged-in users can create an event with the details neighbors need to show up.
- **Join & track** — join events and keep track of the ones you created and the ones you joined in one place.
- **Secure authentication** — email/password sign-in and optional Google OAuth, powered by Better Auth with a MongoDB adapter.
- **Light & dark mode** — theme toggle built with DaisyUI themes.
- **Responsive UI** — mobile-first layout built with Tailwind CSS v4 and DaisyUI components.
- **Friendly feedback** — toast notifications (`react-hot-toast`) and confirmation dialogs (`SweetAlert2`).
- **Rich landing page** — hero section, "how it works" steps, a photo gallery of community moments and a footer with quick links.
- **Protected routes** — a `proxy.js` request interceptor guards pages that require a signed-in user.

---

## 🧰 Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI library | [React 19](https://react.dev/) |
| Language | TypeScript 5 / JSX |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/) |
| Auth | [Better Auth](https://www.better-auth.com/) (MongoDB adapter, Google OAuth) |
| Database driver | [MongoDB Node.js driver](https://www.mongodb.com/docs/drivers/node/current/) (used by the auth adapter) |
| Notifications | `react-hot-toast`, `sweetalert2` |
| Linting | ESLint 9 + `eslint-config-next` |
| Hosting | [Vercel](https://vercel.com/) |

---

## 🗺️ Application Pages

| Route | Description | Access |
| --- | --- | --- |
| `/` | Landing page — hero, how it works, gallery, newsletter teaser | Public |
| `/upcoming-events` | List of upcoming community service events | Public |
| `/login` | Sign in / join the community (email & Google) | Public |
| `/create-event` | Form to organize a new event | Signed-in users |

> Additional pages for event details and personal event management follow the same App Router conventions inside the `app/` directory.

---

## 🔐 Authentication Flow

1. The user signs in or registers on `/login` using **Better Auth** (email/password or Google).
2. Better Auth stores users and sessions in **MongoDB** through its MongoDB adapter.
3. Protected pages are checked by `proxy.js` — unauthenticated visitors are redirected to `/login`.
4. For protected API calls, the client sends the user's **JWT** to the Express server, which verifies it (using `jose`) before touching any data.

---

## 📁 Project Structure

```text
neighbour_nest_web/
├── app/                  # Next.js App Router — routes, layouts and pages
├── components/           # Reusable UI components (navbar, footer, cards, forms…)
├── lib/                  # Shared helpers — auth config, API client, utilities
├── public/               # Static assets (images, gallery, icons)
├── proxy.js              # Route protection / request interception
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS (Tailwind CSS v4)
├── eslint.config.mjs     # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── .env.example          # Template for environment variables
└── package.json
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | :---: | --- |
| `MONGODB_URI` | ✅ | MongoDB connection string used by Better Auth |
| `BETTER_AUTH_SECRET` | ✅ | Long random secret used to sign sessions/tokens |
| `BETTER_AUTH_URL` | ✅ | Base URL of the app (e.g. `http://localhost:3000`) |
| `GOOGLE_CLIENT_ID` | ➖ | Google OAuth client ID (set both Google variables to enable Google sign-in) |
| `GOOGLE_CLIENT_SECRET` | ➖ | Google OAuth client secret |
| `NEXT_PUBLIC_API_URL` | ✅ | Base URL of the NeighbourNest Express server (e.g. `http://localhost:5000`) |

> ⚠️ Check `.env.example` for the exact variable names used in this repo — the names above follow the project conventions. Never commit `.env.local`.

Generate a strong secret with:

```bash
openssl rand -base64 32
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20 or later
- **npm** (or yarn / pnpm / bun)
- A **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- The **NeighbourNest server** running locally or deployed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rubaeitferdous/neighbour_nest_web.git
cd neighbour_nest_web

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# …then edit .env.local

# 4. Start the development server
npm run dev
```

Open the local URL printed in the terminal (usually <http://localhost:3000>).

> The app needs the server running to load and manage events. Start it first by following the [server README](https://github.com/rubaeitferdous/NeighbourNest_server).

---

## 📜 Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm start` | Runs the production build |
| `npm run lint` | Lints the project with ESLint |

---

## ☁️ Deployment

The client is deployed on **Vercel**.

1. Push the repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — the Next.js preset is detected automatically.
3. Add every variable from `.env.example` under **Project → Settings → Environment Variables**.
4. Set `BETTER_AUTH_URL` to your production domain (e.g. `https://neighbournest-eight.vercel.app`).
5. Add the production callback URL to your Google OAuth client:
   `https://<your-domain>/api/auth/callback/google`
6. Redeploy.

---

## 🔌 Connecting to the Server

The web app consumes the REST API from the [NeighbourNest server](https://github.com/rubaeitferdous/NeighbourNest_server):

- Point `NEXT_PUBLIC_API_URL` at the server's base URL.
- Make sure the server's CORS settings allow the client origin (local and production).
- Authenticated requests send the user's JWT in the `Authorization: Bearer <token>` header.

---

## 🛣️ Roadmap

- [ ] Newsletter sign-up (currently shown as "Coming soon")
- [ ] Event search, filters and categories
- [ ] Event comments and volunteer messaging
- [ ] Email / push reminders for joined events
- [ ] Map view for events around Dhaka
- [ ] Bangla language support

---

## 👤 Author

**S M Rubaeit Ferdus**
GitHub: [@rubaeitferdous](https://github.com/rubaeitferdous)

---

<div align="center">

*Small acts. Stronger communities.* 💚

</div>
