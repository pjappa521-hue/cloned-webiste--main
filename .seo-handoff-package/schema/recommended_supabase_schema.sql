-- ==============================================================================
-- Supabase PostgreSQL Schema & Security Blueprint for The Internet Ads SEO
-- Designated Administrator UID: 5153fbf1-3199-47ee-aaae-afd03a12e804 (pjappa521@gmail.com)
-- ==============================================================================

-- 1. Table: seo_pages
CREATE TABLE IF NOT EXISTS public.seo_pages (
  path TEXT PRIMARY KEY,
  page_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  canonical TEXT NOT NULL,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  og_type TEXT DEFAULT 'website',
  twitter_card TEXT DEFAULT 'summary_large_image',
  robots_directive TEXT DEFAULT 'index, follow',
  structured_data_json JSONB,
  changefreq TEXT DEFAULT 'weekly',
  priority TEXT DEFAULT '0.8',
  in_sitemap BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

-- 2. Table: seo_global_settings
CREATE TABLE IF NOT EXISTS public.seo_global_settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  site_name TEXT NOT NULL DEFAULT 'The Internet Ads',
  site_url TEXT NOT NULL DEFAULT 'https://theinternetads.com',
  default_og_image TEXT NOT NULL,
  google_search_console_verification TEXT DEFAULT '',
  robots_txt_custom TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

-- 3. Table: seo_audit_history
CREATE TABLE IF NOT EXISTS public.seo_audit_history (
  id TEXT PRIMARY KEY,
  timestamp TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()),
  action TEXT NOT NULL,
  details TEXT,
  user_email TEXT,
  user_id UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_global_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_audit_history ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- Row Level Security Policies
-- ==============================================================================

-- Designated Admin UID constant
-- 5153fbf1-3199-47ee-aaae-afd03a12e804

-- Public/Anonymous can READ page metadata (required for public website hydration)
CREATE POLICY "Public Read Access for SEO Pages"
  ON public.seo_pages FOR SELECT
  USING (true);

CREATE POLICY "Public Read Access for Global SEO Settings"
  ON public.seo_global_settings FOR SELECT
  USING (true);

-- Only authenticated designated administrator can INSERT, UPDATE, DELETE
CREATE POLICY "Admin Modify Access for SEO Pages"
  ON public.seo_pages FOR ALL
  TO authenticated
  USING (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid)
  WITH CHECK (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid);

CREATE POLICY "Admin Modify Access for Global SEO Settings"
  ON public.seo_global_settings FOR ALL
  TO authenticated
  USING (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid)
  WITH CHECK (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid);

CREATE POLICY "Admin Read & Write Access for Audit History"
  ON public.seo_audit_history FOR ALL
  TO authenticated
  USING (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid)
  WITH CHECK (auth.uid() = '5153fbf1-3199-47ee-aaae-afd03a12e804'::uuid);

-- ==============================================================================
-- Initial Seed Data
-- ==============================================================================

INSERT INTO public.seo_global_settings (id, site_name, site_url, default_og_image, google_search_console_verification, robots_txt_custom)
VALUES (
  'default',
  'The Internet Ads',
  'https://theinternetads.com',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80',
  '',
  'User-agent: *' || E'\n' || 'Allow: /' || E'\n\n' || 'Sitemap: https://theinternetads.com/sitemap.xml'
)
ON CONFLICT (id) DO UPDATE SET
  site_name = EXCLUDED.site_name,
  site_url = EXCLUDED.site_url,
  default_og_image = EXCLUDED.default_og_image,
  robots_txt_custom = EXCLUDED.robots_txt_custom;

INSERT INTO public.seo_pages (path, page_name, title, description, canonical, og_title, og_description, og_image, og_type, twitter_card, robots_directive, changefreq, priority, in_sitemap, structured_data_json)
VALUES
(
  '/',
  'Homepage',
  'The Internet Ads | Market Analysis, Ad Films & Branding',
  'The Internet Ads — market analysis, ad films, internet ads and branding for small businesses. Big results don''t need a bigger budget. They need the right target.',
  'https://theinternetads.com/',
  'The Internet Ads | Market Analysis, Ad Films & Branding',
  'The Internet Ads — market analysis, ad films, internet ads and branding for small businesses. Big results don''t need a bigger budget. They need the right target.',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80',
  'website',
  'summary_large_image',
  'index, follow',
  'weekly',
  '1.0',
  TRUE,
  '{"@context":"https://schema.org","@type":"ProfessionalService","name":"The Internet Ads","url":"https://theinternetads.com","description":"Market analysis, ad films, internet ads and branding for small businesses.","telephone":"+91 00000 00000","email":"hello@theinternetads.com","address":{"@type":"PostalAddress","addressCountry":"India"}}'::jsonb
),
(
  '/training',
  'Training Academy',
  'Training Academy | The Internet Ads — 100% Placement Commitment',
  'Learn high-demand career tracks at The Internet Ads Academy: AI Engineer, Data Analytics, Forward Deployed Engineer & Performance Marketing with 100% placement commitment.',
  'https://theinternetads.com/training',
  'Training Academy | The Internet Ads — 100% Placement Commitment',
  'Learn high-demand career tracks at The Internet Ads Academy: AI Engineer, Data Analytics, Forward Deployed Engineer & Performance Marketing with 100% placement commitment.',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80',
  'website',
  'summary_large_image',
  'index, follow',
  'daily',
  '0.9',
  TRUE,
  '{"@context":"https://schema.org","@graph":[{"@type":"EducationalOccupationalProgram","name":"The Internet Ads Career Training Academy","description":"Live instructor-led training on real client briefs across AI Engineering, Forward Deployed Engineering, Data Analytics, and Performance Marketing with 100% placement commitment.","provider":{"@type":"Organization","name":"The Internet Ads","url":"https://theinternetads.com"},"educationalCredentialAwarded":"Industry Certification & Placement Guarantee","occupationalCategory":"Technology & Performance Marketing","timeToComplete":"P3M","url":"https://theinternetads.com/training"},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need prior experience?","acceptedAnswer":{"@type":"Answer","text":"No for most tracks. AI Engineer and Forward Deployed Engineer expect basic programming familiarity, confirmed on your call."}},{"@type":"Question","name":"How does the placement commitment work?","acceptedAnswer":{"@type":"Answer","text":"Our placement team works your interviews until you''re placed or your 90-day window closes. Full terms and eligibility are explained during counselling before you enrol."}},{"@type":"Question","name":"Can I study while working full-time?","acceptedAnswer":{"@type":"Answer","text":"Yes. Evening and weekend batches are available for most tracks."}},{"@type":"Question","name":"What if I am not placed by day 90?","acceptedAnswer":{"@type":"Answer","text":"If you attended sessions, completed projects and engaged with every interview, and still aren’t placed, we refund your programme fee in full."}}]}]}'::jsonb
),
(
  '/work',
  'Work & Case Studies',
  'Work & Case Studies | The Internet Ads',
  'Explore verified client case studies, commercial ad films, salon growth campaigns, and performance marketing by The Internet Ads.',
  'https://theinternetads.com/work',
  'Work & Case Studies | The Internet Ads',
  'Explore verified client case studies, commercial ad films, salon growth campaigns, and performance marketing by The Internet Ads.',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80',
  'website',
  'summary_large_image',
  'index, follow',
  'weekly',
  '0.8',
  TRUE,
  '{"@context":"https://schema.org","@type":"CollectionPage","name":"The Internet Ads Case Studies & Portfolio","url":"https://theinternetads.com/work"}'::jsonb
),
(
  '/reviews',
  'Client Reviews & Testimonials',
  'Client Reviews & Testimonials | The Internet Ads',
  'Verified reviews and measurable ROI metrics from business owners, directors, and partners working with The Internet Ads.',
  'https://theinternetads.com/reviews',
  'Client Reviews & Testimonials | The Internet Ads',
  'Verified reviews and measurable ROI metrics from business owners, directors, and partners working with The Internet Ads.',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=630&q=80',
  'website',
  'summary_large_image',
  'index, follow',
  'weekly',
  '0.8',
  TRUE,
  '{"@context":"https://schema.org","@type":"CollectionPage","name":"The Internet Ads Client Reviews","url":"https://theinternetads.com/reviews"}'::jsonb
)
ON CONFLICT (path) DO UPDATE SET
  page_name = EXCLUDED.page_name,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  canonical = EXCLUDED.canonical,
  og_title = EXCLUDED.og_title,
  og_description = EXCLUDED.og_description,
  og_image = EXCLUDED.og_image,
  robots_directive = EXCLUDED.robots_directive,
  structured_data_json = EXCLUDED.structured_data_json,
  changefreq = EXCLUDED.changefreq,
  priority = EXCLUDED.priority,
  in_sitemap = EXCLUDED.in_sitemap;
