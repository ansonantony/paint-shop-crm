import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

const supabase = createClient("https://ifqdtmvcxwfifugamoyt.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcWR0bXZjeHdmaWZ1Z2Ftb3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5OTQ4MTYsImV4cCI6MjAxNjU3MDgxNn0.lKBvFyrntH6kjR3g3beIR8Ez48wZgPaiR-isSMIzmxA"
,
);

export default function LoginForm(){

    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) =>{
        if(event == "SIGNED_IN"){
            //success url
           navigate("/home");
        } 
    })
    return(
        <>
        <div className='containerr App'>
            <header className="login App-Header">
                <Auth
                    supabaseClient={supabase}
                    appearance={{theme : ThemeSupa}}
                    theme='light'
                    providers={["google"]}
                />
            </header>
        </div>
        </>
    );
}