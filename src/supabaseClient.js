// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Check for missing Supabase URL and Key individually for better error messages
if (!supabaseUrl) {
    throw new Error('Missing Supabase URL. Ensure REACT_APP_SUPABASE_URL is set in .env');
}

if (!supabaseAnonKey) {
    throw new Error('Missing Supabase Anon Key. Ensure REACT_APP_SUPABASE_ANON_KEY is set in .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
