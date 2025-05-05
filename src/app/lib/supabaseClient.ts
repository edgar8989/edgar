
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjqdjggfhkaozyoxqavt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcWRqZ2dmaGthb3p5b3hxYXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MjkwODcsImV4cCI6MjA2MjAwNTA4N30.aL6qbclPp90iygni-JRydSd6ojMxYyqZRW7dSuIrzlg';


export const supabase = createClient(supabaseUrl, supabaseKey);
