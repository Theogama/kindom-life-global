-- Kingdom Life Global Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create user_profiles table to store additional user information
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donations table to track giving
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'ZAR',
  payment_method TEXT,
  status TEXT DEFAULT 'pending', -- pending, completed, failed, refunded
  transaction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create planned_visits table to track visit planning
CREATE TABLE IF NOT EXISTS planned_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  visit_date DATE NOT NULL,
  service_type TEXT DEFAULT 'sunday', -- sunday, friday, special
  notes TEXT,
  status TEXT DEFAULT 'planned', -- planned, confirmed, attended, cancelled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ministry_interest table to track user ministry interests
CREATE TABLE IF NOT EXISTS ministry_interest (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ministry_name TEXT NOT NULL,
  interest_level TEXT DEFAULT 'interested', -- interested, applied, approved, active
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create volunteer_activities table to track volunteer work
CREATE TABLE IF NOT EXISTS volunteer_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_name TEXT NOT NULL,
  activity_date DATE,
  hours_volunteered DECIMAL(4,2),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE planned_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE ministry_interest ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_activities ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_profiles
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for donations
CREATE POLICY "Users can view own donations" ON donations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own donations" ON donations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for planned_visits
CREATE POLICY "Users can view own visits" ON planned_visits
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own visits" ON planned_visits
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own visits" ON planned_visits
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for ministry_interest
CREATE POLICY "Users can view own ministry interests" ON ministry_interest
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own ministry interests" ON ministry_interest
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own ministry interests" ON ministry_interest
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for volunteer_activities
CREATE POLICY "Users can view own volunteer activities" ON volunteer_activities
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own volunteer activities" ON volunteer_activities
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own volunteer activities" ON volunteer_activities
  FOR UPDATE USING (auth.uid() = user_id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON donations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_planned_visits_updated_at BEFORE UPDATE ON planned_visits
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ministry_interest_updated_at BEFORE UPDATE ON ministry_interest
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_volunteer_activities_updated_at BEFORE UPDATE ON volunteer_activities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_donations_user_id ON donations(user_id);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at);
CREATE INDEX IF NOT EXISTS idx_planned_visits_user_id ON planned_visits(user_id);
CREATE INDEX IF NOT EXISTS idx_planned_visits_date ON planned_visits(visit_date);
CREATE INDEX IF NOT EXISTS idx_ministry_interest_user_id ON ministry_interest(user_id);
CREATE INDEX IF NOT EXISTS idx_volunteer_activities_user_id ON volunteer_activities(user_id);

-- Insert some sample ministries for reference
INSERT INTO ministry_interest (user_id, ministry_name, interest_level) VALUES
  (gen_random_uuid(), 'Worship Team', 'interested'),
  (gen_random_uuid(), 'Teaching Ministry', 'interested'),
  (gen_random_uuid(), 'Children''s Ministry', 'interested'),
  (gen_random_uuid(), 'Hospitality Team', 'interested'),
  (gen_random_uuid(), 'Prayer Ministry', 'interested'),
  (gen_random_uuid(), 'Outreach & Missions', 'interested'),
  (gen_random_uuid(), 'Media Ministry', 'interested'),
  (gen_random_uuid(), 'Counseling Ministry', 'interested')
ON CONFLICT DO NOTHING;
