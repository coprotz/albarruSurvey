import React, {useEffect} from 'react'
import './login.css'
import {motion} from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";
// import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import { useState } from 'react';
import { BiShow, BiHide} from "react-icons/bi";
import { FcGoogle} from "react-icons/fc";
import { useUserAuth } from '../../context/UserAuthContext';



// const defaultData = {   
//     email: '',
//     password: '',
//     // terms: ''
   
// }

const Login = () => {

    // const [formData, setForm] = useForm(defaultData);
    // const { email, password } = formData;
    const navigate = useNavigate();
    const [type, setType] = useState('password');
    const [sending, setSending] = useState(null);
    const [err, setErr] = useState(null);
    const { signIn, user, googleSignIn } = useUserAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

    const handleLogin = async (e) => {
        e.preventDefault();  
        setSending(true)  
        
        try {
            await signIn(email, password)  
            setSending(null)
            navigate('/account')

          
          
        } catch (error) {
            setErr(error.message)
           
        }

        
    };

    const signWithGoogle = async (e) => {
        e.preventDefault();

        try {
           await googleSignIn()
           navigate('/account')
            
        } catch (error) {
            setErr(error.message)
        }

    }



 
  return (
      <>
      <TopBar user={user}/>
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='request_form'>        
        <form className="request_inner" >
            <div className="register_top">
                <h2 className='request_title'>Login</h2>
                <div className="have_account">
                    <small>Don't you have an account</small>
                    <Link to='/register'><span>Register</span></Link>
                </div>
              
            </div> 
            {err && <div className="error">{err}</div> } 
  
            <div className="group">
                <label htmlFor="">Email</label>
                <div className="request_input">
                    <input 
                        type="email" 
                        placeholder='Your Email Address'
                        value={email} 
                        name='email' 
                        autocomplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                
                </div>
            </div>
            <div className="group">
                <label htmlFor="name">Password</label>
                <div className="request_input">
                    <div className="password">
                      <input 
                        type={type} 
                        placeholder='Password'
                        value={password} 
                        name='password' 
                        autocomplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        /> 
                        {type === 'password'? <span onClick={() => setType('text')}><BiShow/></span> : 
                        <span onClick={() => setType("password")}><BiHide/></span>  }
                    </div>
                         
                </div>
        
            </div>  
            <div className="forget">
            <small>Forget Password?</small>
            <Link to='/reset'><span>Reset</span></Link>
            </div>   
            <div className="request_check">
                                 
                <button 
                    className=' request_btn'
                    type='submit'
                    onClick={handleLogin}
                    >
                    {sending && !err? 'Submiting...':'Login'}
                </button>
                        
            </div>  
            <div className="google">
                <h3>OR</h3>
                <button onClick={signWithGoogle}><FcGoogle/>Sign In with Google</button>
            </div>    
        </form>
    
    </motion.div>
    <Footer/>
    </>
  )
}

export default Login
