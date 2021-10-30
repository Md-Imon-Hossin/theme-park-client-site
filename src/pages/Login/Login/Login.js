import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../context/useAuth';
import './Login.css'
const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/orderPlace'
    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className='login-content'>
            <h1>Login Page </h1>
            <button 
            
            // onClick={signInUsingGoogle}
            onClick={handleGoogleLogin}
            className='btn btn-success'
            >Google SignIn</button>
        </div>
    );
};

export default Login;