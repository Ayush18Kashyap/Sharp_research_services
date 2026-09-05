# Sharp Research Services — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS build of the Sharp
Research Services marketing site.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Folder structure

```
app/
  layout.tsx              Root layout — fonts, metadata, global widgets
  page.tsx                Home page — composes all sections
  globals.css              Tailwind entrypoint + shared form-input styles
  privacy-policy/          Placeholder privacy policy page
  terms-and-conditions/    Placeholder terms & conditions page

components/
  layout/
    Header.tsx             Sticky nav with mobile menu
    Footer.tsx              Footer with links & contact info
  sections/                One component per home-page section
    Hero.tsx, About.tsx, WhyChooseUs.tsx, Services.tsx, Process.tsx,
    Industries.tsx, Coverage.tsx, WhyBGVMatters.tsx, FAQ.tsx,
    Contact.tsx, CTABand.tsx
  ui/
    Button.tsx              Shared button (primary/outline/navy/dark variants)
    SectionHeading.tsx       Shared eyebrow + title + description block
  EnquiryPanel.tsx          Side sliding "quick enquiry" panel + tab trigger
  WhatsAppButton.tsx         Floating WhatsApp button

lib/
  site-config.ts            Company name, contact details, nav links — single
                             source of truth used across components
  content.ts                Services, industries, process steps, FAQs, etc.
```

## Backend: storing enquiries

Both forms — the main contact form and the side quick-enquiry panel — POST
to `app/api/enquiries/route.ts`, which validates the submission and writes
it to a Postgres table in Supabase.

### 1. Create a Supabase project

Free at [supabase.com](https://supabase.com). Takes about a minute.

### 2. Create the table

Dashboard → **SQL Editor** → New query → paste the contents of
`supabase/schema.sql` → Run. This creates the `enquiries` table and turns on
row-level security with no public policies, so the anon/public API key
can't read or write it — only the server-side service role key can.

### 3. Add your environment variables

```bash
cp .env.local.example .env.local
```

Fill in `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from
**Project Settings → API** in your Supabase dashboard. Use the
**service_role** secret key, not the anon public one — and never commit
`.env.local` or expose that key to the browser (it isn't, by default, since
it has no `NEXT_PUBLIC_` prefix and `lib/supabase.ts` is only ever imported
from the server-side API route).

### 4. Install the new dependencies and run

```bash
npm install
npm run dev
```

Submit either form and the row should appear in Supabase under
**Table Editor → enquiries** — that's also how you'll review incoming
enquiries day to day; no custom admin dashboard needed for that.

### What's included

- **Validation** (`lib/validation.ts`, zod) — server-side, so a request that
  bypasses the browser form still gets rejected if required fields are
  missing or malformed.
- **Honeypot spam filter** — a hidden `company_website` field real visitors
  never see. If it's filled in, the API quietly returns success without
  writing a row, so bots don't learn to try something else.
- **Loading / success / error states** on both forms, driven by the actual
  API response instead of a fake local confirmation.

### Not included yet (natural next steps)

- **Email notification on new enquiry** — the hybrid approach from our
  earlier architecture discussion. Easiest add: call an email API (e.g.
  Resend) from inside `app/api/enquiries/route.ts` right after the insert
  succeeds.
- **Real rate limiting** — the honeypot stops simple bots; a determined one
  isn't slowed down. Adding a store like Upstash Redis for IP-based rate
  limiting, or a CAPTCHA (reCAPTCHA/hCaptcha) on the main form, would
  harden this further.
- **Status management UI** — the `status` column (`new` / `contacted` /
  `closed`) exists in the schema for when you're ready to track enquiries
  beyond Supabase's table editor.

## Other notes

- **No client-logo section**, per your instruction to leave current clients
  off the site.
- **Icons** come from `lucide-react`. Swap any icon by importing a different
  one from the library in `lib/content.ts` or the relevant component.
- **Google Map** is embedded via a keyless `maps.google.com` iframe in
  `lib/site-config.ts` (`mapEmbedUrl`). Swap in a Places API key later if you
  want a fully interactive map.
- **Privacy Policy / Terms & Conditions** pages are placeholders — replace
  the copy once you have finalized text (ideally reviewed by counsel).
