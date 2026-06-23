create table if not exists public.feedback_nexo (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  user_email text,
  origen text not null check (origen in ('panel', 'tutor_ia')),
  tipo text,
  rating integer check (rating is null or rating between 1 and 5),
  mensaje text,
  seccion text,
  util boolean,
  created_at timestamp with time zone default now()
);

alter table public.feedback_nexo enable row level security;

drop policy if exists "Usuarios autenticados insertan su feedback" on public.feedback_nexo;
create policy "Usuarios autenticados insertan su feedback"
on public.feedback_nexo
for insert
to authenticated
with check (
  auth.uid() = user_id
  and (
    user_email is null
    or lower(user_email) = lower(auth.jwt() ->> 'email')
  )
);

drop policy if exists "Usuarios leen su propio feedback" on public.feedback_nexo;
create policy "Usuarios leen su propio feedback"
on public.feedback_nexo
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Admin NEXO lee todos los feedback" on public.feedback_nexo;
create policy "Admin NEXO lee todos los feedback"
on public.feedback_nexo
for select
to authenticated
using (
  auth.jwt() ->> 'email' = 'pablotrialp@gmail.com'
);

create index if not exists feedback_nexo_user_id_idx on public.feedback_nexo (user_id);
create index if not exists feedback_nexo_created_at_idx on public.feedback_nexo (created_at desc);
