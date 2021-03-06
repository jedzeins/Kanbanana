import React from 'react'
import LoginSignupController from '../components/login&signup/controller';
import AuthProvider from '../providers/auth';


function Login() {

    return (
        <AuthProvider>
          <LoginSignupController type='login'/>
        </AuthProvider>      
    )

  }
  
  export default Login