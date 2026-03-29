-- Workers Toolkit Behavioral Spec v1 schema additions

ALTER TABLE stories
  ADD COLUMN IF NOT EXISTS worker_number integer GENERATED ALWAYS AS IDENTITY,
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'ongoing';

CREATE TABLE IF NOT EXISTS tool_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL,
  metadata jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE OR REPLACE FUNCTION increment_toolkit_usage()
RETURNS void AS $$
  UPDATE site_metrics
  SET start_here_visits = start_here_visits + 1
  WHERE id = 1;
$$ LANGUAGE sql;

INSERT INTO site_metrics (id, start_here_visits)
VALUES (1, 0)
ON CONFLICT DO NOTHING;


CREATE TABLE IF NOT EXISTS declarations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  text text NOT NULL,
  created_at timestamptz DEFAULT now()
);
