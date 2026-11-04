-- Ejecutar en Supabase > SQL Editor. Sin login: acceso abierto con la anon key.
create table if not exists public.studio_state (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);
alter table public.studio_state enable row level security;
drop policy if exists "studio_state_open" on public.studio_state;
create policy "studio_state_open" on public.studio_state
  for all to anon using (true) with check (true);
