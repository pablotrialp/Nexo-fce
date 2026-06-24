create table if not exists public.ai_usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  used_count integer not null default 0 check (used_count >= 0),
  limit_count integer not null default 4 check (limit_count >= 0),
  is_premium boolean not null default false,
  tutor_ai_daily_count integer not null default 0 check (tutor_ai_daily_count >= 0),
  tutor_ai_last_reset_date date not null default current_date,
  daily_test_count integer not null default 0 check (daily_test_count >= 0),
  daily_test_last_reset_date date not null default current_date,
  updated_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.ai_usage enable row level security;

grant select, insert, update on public.ai_usage to authenticated;

drop policy if exists "Users can read own ai usage" on public.ai_usage;
create policy "Users can read own ai usage"
on public.ai_usage
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert own ai usage" on public.ai_usage;
create policy "Users can insert own ai usage"
on public.ai_usage
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own ai usage" on public.ai_usage;
create policy "Users can update own ai usage"
on public.ai_usage
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_ai_usage_updated_at on public.ai_usage;
create trigger set_ai_usage_updated_at
before update on public.ai_usage
for each row
execute function public.set_updated_at();
