import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nozuwtxqiomhgnovcxdd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5venV3dHhxaW9taGdub3ZjeGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MTc5MjEsImV4cCI6MjA4Njk5MzkyMX0.1XwrPS6WMsnWeg_EBGPKz_VBs_vgSZ0MjYyOVZIp2tY'

export const supabase = createClient(supabaseUrl, supabaseKey)