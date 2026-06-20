alter table public.ai_usage add column if not exists tutor_chat_used integer not null default 0;
alter table public.ai_usage add column if not exists tutor_chat_limit integer not null default 10;
