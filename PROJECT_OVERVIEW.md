# Shivamogga District Civic Watch — Complete Project Overview

> **A zero-cost, citizen-powered civic transparency platform for Shivamogga District, Karnataka, India.**

---

## Table of Contents

1. [What Is This Project?](#what-is-this-project)
2. [Why Shivamogga District?](#why-shivamogga-district)
3. [How It Works — User Flow](#how-it-works--user-flow)
4. [Technology Stack](#technology-stack)
5. [Architecture Overview](#architecture-overview)
6. [How It's Built — Deep Dive](#how-its-built--deep-dive)
7. [Database Design](#database-design)
8. [Authentication & Authorization](#authentication--authorization)
9. [Image Upload Flow](#image-upload-flow)
10. [Admin Moderation System](#admin-moderation-system)
11. [Deployment Guide](#deployment-guide)
12. [Free Tier Limits & Scaling](#free-tier-limits--scaling)
13. [Future Roadmap](#future-roadmap)

---

## What Is This Project?

**Shivamogga District Civic Watch** is a full-stack web application that empowers ordinary citizens to report instances of:

- 🛣️ **Road damage & potholes**
- 💧 **Water supply issues**
- 🗑️ **Waste management failures**
- 💰 **Public fund mismanagement**
- 🌳 **Environmental violations**
- 🏛️ **Public infrastructure decay**
- 🎓 **Education & healthcare issues**
- ⚠️ **Corruption & bribery**

### Key Features

| Feature | Description |
|---------|-------------|
| **Anonymous Reporting** | Users can post without revealing their identity |
| **Photo Evidence** | Attach up to 3 photos per report |
| **Location Tagging** | Pick exact location on an interactive map |
| **Admin Moderation** | Every report is reviewed before going public |
| **District-Wide Coverage** | All 7 talukas of Shivamogga District |
| **Bilingual Support** | English + Kannada (ಕನ್ನಡ) |
| **Social Sharing** | Dynamic OG images for WhatsApp/Twitter sharing |
| **Instagram Ready** | Architecture prepared for auto-posting |
| **Zero Cost** | Every service runs on free tiers |

### The Problem It Solves

In many Indian districts, citizens witness civic issues daily but have no safe, structured way to:
1. Document and report these issues
2. Share them publicly without fear of retaliation
3. Track whether anything gets done

This platform bridges that gap — **anonymous, evidence-backed, moderated, and public.**

---

## Why Shivamogga District?

Shivamogga (Shimoga) is a major district in Karnataka's **Malnad** region, covering:

| Taluka | Name in Kannada |
|--------|-----------------|
| Shivamogga | ಶಿವಮೊಗ್ಗ |
| Sagara | ಸಾಗರ |
| Thirthahalli | ತೀರ್ಥಹಳ್ಳಿ |
| Hosanagara | ಹೊಸನಗರ |
| Shikaripura | ಶಿಕಾರಿಪುರ |
| Soraba | ಸೊರಬ |
| Bhadravati | ಭದ್ರಾವತಿ |

From urban centers to rural hinterlands, citizens across all talukas need a unified voice for civic accountability.

---

## How It Works — User Flow

### For Citizens (Public Users)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Visit Website  │────▶│  Browse Reports  │────▶│  View Details   │
│  (No login req)  │     │  (Filter/Search) │     │  (Photos, Map)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Sign In with   │────▶│  Fill Report    │────▶│  Pick Location  │
│  Google OAuth   │     │  (Category,     │     │  (Map + Address)│
│                 │     │   Description)  │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         ▼                                               ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Upload Photos  │────▶│  Choose Identity│────▶│  Submit Report  │
│  (Max 3 images) │     │  (Anonymous or  │     │  (Goes to admin │
│                 │     │   Named)        │     │   queue)        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  Get Reference  │────▶│  Track Status   │
│     ID (SCW-xxx)│     │  (Pending →     │
│                 │     │   Approved/     │
│                 │     │   Resolved)     │
└─────────────────┘     └─────────────────┘
```

### For Admins

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Log In as     │────▶│  View Dashboard │────▶│  Review Queue   │
│   Admin (Auto   │     │  (Stats, Charts)│     │  (Pending list) │
│   for 1st user) │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         ▼                                               ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Approve/Reject │────▶│  Mark Resolved  │────▶│  Manage Users   │
│  (With note)    │     │  (When fixed)   │     │  (Ban spammers) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐
│  View Activity  │
│     Logs        │
└─────────────────┘
```

### Report Lifecycle

```
[User Submits] ──▶ [Status: PENDING] ──▶ [Admin Reviews]
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
              [Status: APPROVED]        [Status: REJECTED]       [Status: RESOLVED]
                    │                         │                         ▲
                    ▼                         │                         │
              [Public Feed]                   │                         │
                    │                         │                         │
                    ▼                         │                         │
              [Social Sharing]                │                         │
                                              │                         │
                                              └─────────────────────────┘
                                                    (Admin marks resolved)
```

---

## Technology Stack

### 100% Free Tier — Every Service

| Layer | Technology | Free Tier Limit | Role |
|-------|-----------|----------------|------|
| **Frontend Framework** | Next.js 14 (App Router) | Unlimited on Vercel | React framework with SSR, API routes, file-based routing |
| **Language** | TypeScript | Free | Type-safe JavaScript |
| **Styling** | Tailwind CSS | Free | Utility-first CSS |
| **UI Components** | shadcn/ui | Free | Accessible, customizable components |
| **Database** | Neon PostgreSQL | 500MB storage, 190 compute hours/mo | Managed Postgres with branching |
| **ORM** | Prisma | Free | Type-safe database queries & migrations |
| **Authentication** | NextAuth.js | Free | OAuth 2.0 (Google) with JWT sessions |
| **Image Storage** | Cloudinary | 25GB storage, 25K transforms/mo | Image upload, optimization, CDN delivery |
| **Maps** | Leaflet + OpenStreetMap | Free | Interactive map picker, no API key |
| **Charts** | Recharts | Free | Admin dashboard data visualization |
| **OG Images** | @vercel/og (Satori) | Free on Vercel | Dynamic social share images |
| **i18n** | next-intl | Free | English + Kannada translations |
| **Hosting** | Vercel | 100GB bandwidth/mo | Global CDN, serverless functions |
| **Icons** | Lucide React | Free | Consistent icon set |

### Why These Choices?

| Paid Alternative | Why We Didn't Use It | What We Used Instead |
|-----------------|----------------------|----------------------|
| Google Maps API | Requires billing account | **Leaflet + OpenStreetMap** (truly free) |
| Supabase Auth | Bundled, less flexible | **NextAuth.js** (works with any DB) |
| Supabase Storage | Bandwidth limits | **Cloudinary** (generous free tier + CDN) |
| AWS S3 | Complex setup, credit card required | **Cloudinary** (simpler API, free tier) |
| Auth0 / Clerk | Paid after low limits | **NextAuth.js** (open source, unlimited) |
| Firebase | Vendor lock-in | **Neon + NextAuth** (standard, portable) |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Browser)                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐ │
│  │  Next.js    │  │  React      │  │  Leaflet    │  │  Cloudinary│ │
│  │  Pages      │  │  Components │  │  Map Picker │  │  Upload    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘ │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────▼──────────────────────────────────────────┐
│                     VERCEL (Serverless)                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐ │
│  │  App Router │  │  API Routes │  │  Middleware │  │  @vercel/og│ │
│  │  (SSR/SSG)  │  │  (NextAuth, │  │  (Auth check│  │  (Images)  │ │
│  │             │  │   CRUD)     │  │   + i18n)   │  │            │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘ │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ PostgreSQL connection
┌──────────────────────────▼──────────────────────────────────────────┐
│                      NEON (PostgreSQL)                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐ │
│  │  Users      │  │  Reports    │  │  Categories │  │  Activity │ │
│  │  (NextAuth) │  │  (Core)     │  │  (10 types) │  │  Logs     │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘ │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │  Talukas    │  │  Settings   │  │  Sessions   │                │
│  │  (7 areas)  │  │  (Config)   │  │  (NextAuth) │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
└─────────────────────────────────────────────────────────────────────┘
                           │ HTTPS (signed uploads)
┌──────────────────────────▼──────────────────────────────────────────┐
│                     CLOUDINARY (CDN)                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │  Upload     │  │  Transform  │  │  Deliver    │                │
│  │  (signed)   │  │  (resize)   │  │  (global)   │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## How It's Built — Deep Dive

### 1. Project Structure

```
shivamogga-civic-watch/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Group: public pages
│   │   ├── page.tsx              # Homepage (SSR)
│   │   ├── submit/               # Report submission form
│   │   ├── reports/              # Public feed + single report
│   │   ├── taluka/[slug]/        # Taluka-specific pages
│   │   └── about/                # About + FAQ
│   ├── (admin)/                  # Group: admin panel
│   │   ├── admin/                # Dashboard
│   │   ├── admin/reports/        # Moderation queue
│   │   ├── admin/users/          # User management
│   │   └── admin/settings/       # Site configuration
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/   # NextAuth handler
│   │   ├── reports/              # CRUD for reports
│   │   ├── admin/                # Admin-only endpoints
│   │   ├── upload/presign/       # Cloudinary signature
│   │   └── og/                   # Dynamic OG images
│   └── layout.tsx                # Root layout with fonts
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/                   # Navbar, Footer
│   ├── maps/                     # Leaflet location picker
│   ├── reports/                  # Report cards, grids
│   ├── admin/                    # Admin tables, modals
│   └── providers/                # SessionProvider
├── lib/
│   ├── auth/                     # NextAuth config + helpers
│   ├── prisma.ts                 # Prisma singleton
│   ├── cloudinary.ts             # Cloudinary SDK config
│   ├── i18n/                     # English + Kannada strings
│   └── utils/                    # Validators, formatters, rate limiter
├── prisma/
│   └── schema.prisma             # Full database schema
├── middleware.ts                 # Route protection
└── types/index.ts                # Shared TypeScript types
```

### 2. Server-Side Rendering Strategy

| Page | Strategy | Why |
|------|----------|-----|
| Homepage | SSR | Stats need fresh data |
| Reports Feed | SSR + Client filters | Fast initial load, then filter client-side |
| Report Detail | SSR | SEO + social sharing needs complete HTML |
| Submit Form | Client | Needs interactivity (maps, multi-step) |
| Admin Pages | Client | Heavy interactivity, data tables |

### 3. API Design Principles

- **Consistent response format:** `{ success: boolean, data: {}, error: {}, meta: {} }`
- **Zod validation** on every endpoint
- **Rate limiting** on write operations (3 reports/hour per user)
- **Proper HTTP status codes:** 200, 201, 400, 401, 403, 404, 429, 500

---

## Database Design

### Core Tables

```
┌─────────────┐       ┌─────────────────┐       ┌──────────────┐
│   users     │◄──────│     reports     │──────►│  categories  │
│  (NextAuth) │       │    (CORE)       │       │  (10 types)  │
└─────────────┘       └─────────────────┘       └──────────────┘
       │                       │
       │              ┌────────┴────────┐
       │              │                 │
       │       ┌──────▼──────┐  ┌──────▼──────┐
       │       │   talukas   │  │activity_logs │
       │       │   (7 areas) │  │  (audit)     │
       │       └─────────────┘  └─────────────┘
       │
┌──────▼──────┐
│admin_settings│
│  (singleton) │
└─────────────┘
```

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **UUID primary keys** | Prevent enumeration attacks, URL-safe |
| **Human-readable reference IDs** | `SCW-2026-00001` — easy to reference |
| **Status enum** | `pending → approved → resolved` (or `rejected`) |
| **Soft delete** | Never hard-delete; use `rejected` status |
| **JSONB images array** | Flexible, no separate table needed |
| **Indexed queries** | `status + created_at` composite index for feed |
| **No RLS policies** | Auth handled in application code (simpler with Neon) |

---

## Authentication & Authorization

### How Login Works

```
User clicks "Sign In"
    │
    ▼
NextAuth redirects to Google OAuth
    │
    ▼
User selects Google account → grants permission
    │
    ▼
Google redirects back with authorization code
    │
    ▼
NextAuth exchanges code for tokens
    │
    ▼
Prisma Adapter creates/updates User + Account + Session in Neon
    │
    ▼
JWT token created (contains user.id + user.role)
    │
    ▼
Signed JWT stored in httpOnly cookie
    │
    ▼
User is now authenticated
```

### Auto-Admin Feature

The **first user to sign in** automatically gets `role: "admin"`:

```typescript
events: {
  async signIn({ user, isNewUser }) {
    if (isNewUser) {
      const userCount = await prisma.user.count()
      if (userCount === 1) {
        await prisma.user.update({
          where: { id: user.id },
          data: { role: "admin" }
        })
      }
    }
  }
}
```

No manual database editing needed.

### Authorization Layers

| Layer | What It Protects | How |
|-------|------------------|-----|
| **Middleware** | `/admin/*`, `/submit` | JWT token check at edge |
| **API Routes** | All admin endpoints | `getServerSession()` + role DB check |
| **Frontend UI** | Admin links, buttons | `session.user.role` conditional render |

### Permission Matrix

| Action | Public | User | Admin |
|--------|--------|------|-------|
| View approved reports | ✅ | ✅ | ✅ |
| Submit report | ❌ | ✅ | ✅ |
| Edit own pending report | ❌ | ✅ | ✅ |
| Access admin dashboard | ❌ | ❌ | ✅ |
| Approve/reject reports | ❌ | ❌ | ✅ |
| Ban/unban users | ❌ | ❌ | ✅ |
| Change site settings | ❌ | ❌ | ✅ |

---

## Image Upload Flow

### Why Cloudinary?

| Feature | Benefit |
|---------|---------|
| **Signed uploads** | Prevents abuse, controls who can upload |
| **Auto-optimization** | WebP conversion, responsive sizing |
| **Global CDN** | Fast image delivery worldwide |
| **Transformations** | Resize, crop, quality adjust on-the-fly |
| **Free tier** | 25GB storage, 25K transformations/month |

### Upload Sequence

```
User selects images
    │
    ▼
Client-side compression (browser-image-compression)
    │
    ▼
Call /api/upload/presign → get Cloudinary signature
    │
    ▼
Client uploads directly to Cloudinary (bypasses our server)
    │
    ▼
Cloudinary returns public_id + secure_url
    │
    ▼
Store {url, public_id} in form state
    │
    ▼
On report submit, save image metadata to Neon DB (JSONB)
```

### Security

- **Server generates signature** — client can't upload arbitrary files
- **Max 3 images** — enforced in Zod schema
- **Max 5MB per image** — enforced before upload
- **Only authenticated users** — signature endpoint requires login

---

## Admin Moderation System

### The Queue

Admins see a table of all reports with tabs:
- **Pending** — needs review (default view)
- **Approved** — live on site
- **Rejected** — hidden, kept for records
- **Resolved** — issue fixed
- **All** — everything

### Review Actions

| Action | Result | Side Effects |
|--------|--------|--------------|
| **Approve** | Report goes public | OG image generated, activity logged |
| **Reject** | Report hidden | Activity logged, images scheduled for cleanup |
| **Resolve** | Mark as fixed | Activity logged, public status updated |

### Activity Logging

Every admin action is recorded:
```
Action: approve
Report: "Potholes on Sagara Road"
Admin: admin@example.com
Note: "Verified with photos"
Time: 2026-08-24 10:30 AM
```

This creates an **audit trail** for accountability.

---

## Deployment Guide

### Prerequisites

- [ ] GitHub account
- [ ] Vercel account
- [ ] Neon account
- [ ] Google Cloud Console account (for OAuth)
- [ ] Cloudinary account

### Step-by-Step

```bash
# 1. Clone & install
git clone <your-repo>
cd shivamogga-civic-watch
npm install

# 2. Configure environment
cp .env.example .env.local

# Fill in:
# DATABASE_URL=          (from Neon Console → Connection Details)
# NEXTAUTH_SECRET=       (random 32+ character string)
# NEXTAUTH_URL=          (http://localhost:3000 for local)
# GOOGLE_CLIENT_ID=      (from Google Cloud Console → APIs & Services → Credentials)
# GOOGLE_CLIENT_SECRET=  (same as above)
# CLOUDINARY_CLOUD_NAME= (from Cloudinary Dashboard)
# CLOUDINARY_API_KEY=    (from Cloudinary Dashboard → Settings → API Keys)
# CLOUDINARY_API_SECRET= (same as above)

# 3. Set up database
npx prisma migrate dev --name init
npx prisma db seed

# 4. Run locally
npm run dev

# 5. Deploy to Vercel
# - Import GitHub repo on vercel.com
# - Add all environment variables
# - Update NEXTAUTH_URL and Google OAuth redirect URI to production domain
# - Deploy
```

### Post-Deployment

1. **First sign-in = Admin** — visit the site, click "Sign In with Google"
2. **Configure settings** — go to `/admin/settings`
3. **Test end-to-end** — submit a report, approve it, verify it appears publicly

---

## Free Tier Limits & Scaling

### Current Limits

| Service | Free Tier | Your Usage Estimate |
|---------|-----------|---------------------|
| **Vercel** | 100GB/mo bandwidth | ~1-5GB (text + small images) |
| **Neon** | 500MB storage, 190 compute hours | ~50-100MB (text data) |
| **Cloudinary** | 25GB storage, 25K transforms | ~1-5GB (compressed images) |
| **NextAuth.js** | Unlimited | N/A (self-hosted) |

### When to Upgrade

| Threshold | Upgrade To | Cost |
|-----------|-----------|------|
| DB > 400MB | Neon Pro | ~$19/mo |
| Bandwidth > 80GB | Vercel Pro | ~$20/mo |
| Images > 20GB | Cloudinary Plus | ~$25/mo |

### Funding Options (India)

- Local NGO sponsorship
- Crowdfunding (Milaap, Ketto)
- Municipal partnership (if platform gains traction)
- CSR initiatives from local businesses

---

## Future Roadmap

| Phase | Feature | Status |
|-------|---------|--------|
| **Phase 1** | Core platform (report, moderate, display) | ✅ Complete |
| **Phase 2** | Instagram auto-share via Meta Graph API | 🏗️ Architecture ready |
| **Phase 3** | Government official read-only dashboard | 📋 Planned |
| **Phase 4** | SMS notifications for status updates | 📋 Planned |
| **Phase 5** | PWA / Mobile app | 📋 Planned |
| **Phase 6** | Multi-district expansion (Karnataka-wide) | 📋 Planned |

### Instagram Integration (Phase 2)

Already architected:
- `reports.instagram_shared` (boolean)
- `reports.instagram_post_url` (string)
- OG images auto-generated for every approved report
- Admin can manually trigger "Generate Instagram Post" → downloadable image + caption template

Just needs Meta Graph API integration when you're ready.

---

## Security Checklist

- [x] **HTTPS only** — enforced by Vercel
- [x] **httpOnly cookies** — JWT can't be stolen by XSS
- [x] **Signed uploads** — Cloudinary signature prevents abuse
- [x] **Rate limiting** — 3 reports/hour per user
- [x] **Input validation** — Zod on every endpoint
- [x] **SQL injection prevention** — Prisma parameterized queries
- [x] **XSS protection** — React escapes by default
- [x] **No passwords stored** — Google OAuth handles authentication
- [x] **Anonymous option** — identity never exposed publicly
- [x] **Admin audit trail** — every action logged

---

## Glossary

| Term | Meaning |
|------|---------|
| **OG Image** | Open Graph image — preview when sharing on social media |
| **Taluka** | Administrative subdivision in Karnataka (like a tehsil) |
| **Malnad** | Hilly, rain-heavy region of Karnataka where Shivamogga is located |
| **JWT** | JSON Web Token — signed token containing user identity |
| **SSR** | Server-Side Rendering — HTML generated on server |
| **ISR** | Incremental Static Regeneration — cache + revalidate |
| **Zod** | TypeScript schema validation library |
| **Prisma** | Type-safe database ORM |

---

## License & Disclaimer

**License:** MIT — free for personal and community use.

**Disclaimer:** This platform is **citizen-run** and not affiliated with any government body. It serves as a transparency and accountability tool. All reports are user-generated and moderated to the best of our ability. This does not replace formal RTI applications or government grievance mechanisms.

---

*Built with ❤️ for Shivamogga District, Karnataka, India.*

*For questions or contributions, contact: admin@shivamoggacivicwatch.org*
