alter table public.ai_usage add column if not exists tutor_chat_used integer not null default 0;
alter table public.ai_usage add column if not exists tutor_chat_limit integer not null default 10;
alter table public.ai_usage add column if not exists tutor_ai_daily_count integer default 0;
alter table public.ai_usage add column if not exists tutor_ai_last_reset_date date default current_date;
alter table public.ai_usage add column if not exists daily_test_count integer default 0;
alter table public.ai_usage add column if not exists daily_test_last_reset_date date default current_date;

update public.ai_usage
set
  tutor_ai_daily_count = coalesce(tutor_ai_daily_count, 0),
  tutor_ai_last_reset_date = coalesce(tutor_ai_last_reset_date, current_date),
  daily_test_count = coalesce(daily_test_count, 0),
  daily_test_last_reset_date = coalesce(daily_test_last_reset_date, current_date)
where
  tutor_ai_daily_count is null
  or tutor_ai_last_reset_date is null
  or daily_test_count is null
  or daily_test_last_reset_date is null;

alter table public.ai_usage alter column tutor_ai_daily_count set default 0;
alter table public.ai_usage alter column tutor_ai_last_reset_date set default current_date;
alter table public.ai_usage alter column daily_test_count set default 0;
alter table public.ai_usage alter column daily_test_last_reset_date set default current_date;

alter table public.ai_usage alter column tutor_ai_daily_count set not null;
alter table public.ai_usage alter column tutor_ai_last_reset_date set not null;
alter table public.ai_usage alter column daily_test_count set not null;
alter table public.ai_usage alter column daily_test_last_reset_date set not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'ai_usage_tutor_ai_daily_count_nonnegative'
  ) then
    alter table public.ai_usage
      add constraint ai_usage_tutor_ai_daily_count_nonnegative
      check (tutor_ai_daily_count >= 0) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'ai_usage_daily_test_count_nonnegative'
  ) then
    alter table public.ai_usage
      add constraint ai_usage_daily_test_count_nonnegative
      check (daily_test_count >= 0) not valid;
  end if;
end $$;

alter table public.ai_usage validate constraint ai_usage_tutor_ai_daily_count_nonnegative;
alter table public.ai_usage validate constraint ai_usage_daily_test_count_nonnegative;
