create table if not exists public.exam_goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  exam_date date not null,
  topics text[] not null default '{}',
  created_at timestamptz default now()
);

alter table public.exam_goals enable row level security;

grant select, insert, update, delete on public.exam_goals to authenticated;

create index if not exists exam_goals_user_exam_date_idx
on public.exam_goals (user_id, exam_date);

drop policy if exists "Users can read own exam goals" on public.exam_goals;
create policy "Users can read own exam goals"
on public.exam_goals
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert own exam goals" on public.exam_goals;
create policy "Users can insert own exam goals"
on public.exam_goals
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own exam goals" on public.exam_goals;
create policy "Users can update own exam goals"
on public.exam_goals
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own exam goals" on public.exam_goals;
create policy "Users can delete own exam goals"
on public.exam_goals
for delete
to authenticated
using (auth.uid() = user_id);
