-- SafeWalk database schema

-- Customers table
create table if not exists customers (
    id uuid primary key default gen_random_uuid(),
    email text unique not null,
    business_name text not null,
    business_address text,
    business_city text,
    business_state text,
    business_zip text,
    contact_name text not null,
    phone text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Purchases table
create table if not exists purchases (
    id uuid primary key default gen_random_uuid(),
    customer_id uuid references customers(id) on delete cascade not null,
    stripe_session_id text unique not null,
    stripe_customer_id text,
    tier text not null check (tier in ('basic', 'contract')),
    amount_cents integer not null,
    status text not null default 'pending' check (status in ('pending', 'completed', 'failed')),
    documents_generated boolean default false,
    created_at timestamptz default now()
);

-- Downloads table
create table if not exists downloads (
    id uuid primary key default gen_random_uuid(),
    purchase_id uuid references purchases(id) on delete cascade not null,
    document_type text not null check (document_type in ('policy', 'poster', 'log_form', 'contract')),
    file_url text not null,
    download_count integer default 0,
    created_at timestamptz default now(),
    expires_at timestamptz default (now() + interval '1 year')
);

-- Indexes
create index if not exists idx_customers_email on customers(email);
create index if not exists idx_purchases_customer on purchases(customer_id);
create index if not exists idx_purchases_stripe_session on purchases(stripe_session_id);
create index if not exists idx_downloads_purchase on downloads(purchase_id);

-- Updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger customers_updated_at
    before update on customers
    for each row
    execute function update_updated_at();
