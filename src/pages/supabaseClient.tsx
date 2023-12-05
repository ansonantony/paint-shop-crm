import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://ifqdtmvcxwfifugamoyt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcWR0bXZjeHdmaWZ1Z2Ftb3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5OTQ4MTYsImV4cCI6MjAxNjU3MDgxNn0.lKBvFyrntH6kjR3g3beIR8Ez48wZgPaiR-isSMIzmxA"

//to be more secure use .env
export const supabase = createClient(supabaseURL,supabaseAnonKey);