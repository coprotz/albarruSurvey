import React from 'react'
import './login.css'
import {motion} from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";
import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { BiShow, BiHide} from "react-icons/bi";
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'


const defaultData = {   
    email: '',
    password: '',
    terms: ''
   
}

const Login = () => {

    const [formData, setForm] = useForm(defaultData)
    const [error, setError] = useState(false)
    const { email, password, terms } = formData
    const navigate = useNavigate()
    const [type, setType] = useState('password')

    const {dispatch} = useContext(AuthContext)



    const handleLogin = (e) => {
        e.preventDefault()
      
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navigate("/account")
              
            })
            .catch((error) => {
                setError(true)
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });

    
    }

 
  return (
      <>
      <TopBar/>
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='request_form'>        
        <form className="request_inner" onSubmit={handleLogin}>
            <div className="register_top">
                <h2 className='request_title'>Login</h2>
                <div className="have_account">
                    <small>Don't you have an account</small>
                    <Link to='/register'><span>Register</span></Link>
                </div>
              
            </div> 
            {error && <div className="error">Wrong email or password, please check and try again!</div> } 
  
            <div className="group">
                <label htmlFor="">Email</label>
                <div className="request_input">
                    <input 
                        type="email" 
                        placeholder='Your Email Address'
                        value={email} 
                        name='email' 
                        onChange={setForm}
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
                        onChange={setForm}
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
                <div className="check_group">
                    <input 
                        type="checkbox"                    
                        value={terms} 
                        name='terms' 
                        onChange={setForm}
                        />By Submit this request, you have accepted our <Link to='/terms'>Terms of Use</Link>
                        </div>
                        {terms ===  '' || terms === false?
                        <button 
                        className='request_btn invalid'

                    
                        >Submit
                        </button>
                            :
                        <button 
                            className=' request_btn'
                            type='submit'
                            onClick={handleLogin}
                            >Submit
                        </button>
                        }
            </div>     
        </form>
    
    </motion.div>
    <Footer/>
    </>
  )
}

export default Login
