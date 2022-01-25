import './login.css';
import { useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user,isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    
    return (
        <div  className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Snias</h3>
                    <span className="loginDesc">Connect with your friends with Snias</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = {(e) => handleSubmit(e)}>
                        <input placeholder='Email' type= 'email' className= "loginInput" ref = {email} required/>
                        <input type = "password" placeholder='Password' className="loginInput" ref = {password} required minLength='4'/>
                        <button 
                            className="loginButton" 
                            disabled = {isFetching}>
                                {isFetching ? <CircularProgress style = {{'color' : 'white' }} size ='25px'/> : 'Login'}
                            </button>
                        <span className="forgotPassword">Forgot Password ?</span>
                        <button 
                            className="loginRegisterButton"
                            onClick={event =>  window.location.href='/register'}>
                                {isFetching ? <CircularProgress style = {{'color' : 'white' }} size ='25px'/> : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
