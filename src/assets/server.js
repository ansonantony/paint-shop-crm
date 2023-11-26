import express from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Initialize Supabase
const supabaseUrl = 'https://ifqdtmvcxwfifugamoyt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcWR0bXZjeHdmaWZ1Z2Ftb3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5OTQ4MTYsImV4cCI6MjAxNjU3MDgxNn0.lKBvFyrntH6kjR3g3beIR8Ez48wZgPaiR-isSMIzmxA';
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
