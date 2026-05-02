create table public.inquiry(
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    phone text not null,
    service text not null,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.inquiry enable row level security;

create policy "Allow anonymous insert" on public.inquiry
    for insert with check (true);
