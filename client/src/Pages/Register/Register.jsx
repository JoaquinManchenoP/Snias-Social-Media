import './register.css';
import {Link, Navigate} from "react-router-dom"
import { useRef } from 'react';
import { Password } from '@mui/icons-material';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value);
        password.current.setCustomValidity(`Passwords don't match`);
        
    }

    return (
        <div  className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Snias</h3>
                    <span className="loginDesc">Connect with your friends with Snias</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Username' ref = {username} className="loginInput" required />
                        <input placeholder='Email' ref = {email} className="loginInput" type='email' required/>
                        <input placeholder='Password' ref = {password} className="loginInput" type= 'password' required minLength='5' />
                        <input placeholder='Enter Password Again' ref = {passwordAgain} className="loginInput" type='password' required/>
                        <button className="loginButton" type='submit'  >Sign Up</button>
                        <button className="loginRegisterButton" onClick={event =>  window.location.href='/login'}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
