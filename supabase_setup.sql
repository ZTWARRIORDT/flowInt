-- ==========================================================
-- SCRIPT DE CONFIGURACIÓN SUPABASE - FLOW NATURAL STUDIO
-- Ejecuta este script en el SQL Editor de tu panel de Supabase:
-- https://supabase.com/dashboard/project/vqezqrqlxxdrldqldphc/sql
-- ==========================================================

-- 1. Crear tabla para ingredientes, empaques y elementos personalizados del estudio
create table if not exists public.studio_custom_items (
  id text primary key,
  category text not null, -- 'ingredients', 'packagings', 'surfaces', 'moods', 'photoTypes', 'shots', 'lenses', 'lightings'
  label text not null,
  badge text default 'Propio',
  short_desc text,
  prompt_es text not null,
  prompt_en text not null,
  is_custom boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Habilitar Row Level Security (RLS)
alter table public.studio_custom_items enable row level security;

-- 3. Políticas públicas para permitir lectura, inserción y borrado desde la web
drop policy if exists "Permitir lectura publica de studio_custom_items" on public.studio_custom_items;
create policy "Permitir lectura publica de studio_custom_items"
on public.studio_custom_items for select
using (true);

drop policy if exists "Permitir insercion publica de studio_custom_items" on public.studio_custom_items;
create policy "Permitir insercion publica de studio_custom_items"
on public.studio_custom_items for insert
with check (true);

drop policy if exists "Permitir eliminacion publica de studio_custom_items" on public.studio_custom_items;
create policy "Permitir eliminacion publica de studio_custom_items"
on public.studio_custom_items for delete
using (true);

-- 4. Índice para búsquedas rápidas por categoría
create index if not exists idx_studio_custom_items_category on public.studio_custom_items(category);
