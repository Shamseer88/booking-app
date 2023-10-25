import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nfewlvekcjinhepshtha.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZXdsdmVrY2ppbmhlcHNodGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNzYzOTQsImV4cCI6MjAxMzY1MjM5NH0.lVl1kVnVyIywGRDSNTeR-wsX1LoRbEm40UZPB8PxgA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
