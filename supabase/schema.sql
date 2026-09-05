-- Run this once in your Supabase project's SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run).

create extension if not exists "pgcrypto";

create table if not exists enquiries (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text,
  phone         text not null,
  service       text,
  message       text,
  source        text not null default 'contact_form', -- 'contact_form' | 'quick_panel'
  status        text not null default 'new',           -- 'new' | 'contacted' | 'closed'
  created_at    timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on enquiries (created_at desc);
create index if not exists enquiries_status_idx on enquiries (status);

-- Lock the table down completely. No public policies are added below,
-- which means the anon/public API key can neither read nor write this
-- table — only the service role key (used server-side in the API route,
-- never shipped to the browser) can touch it.
alter table enquiries enable row level security;
