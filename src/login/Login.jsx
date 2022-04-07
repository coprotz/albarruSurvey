import React from 'react'
import './login.css'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';


const defaultData = {   
    email: '',
    password: '',
    terms: ''
   
}

const Login = () => {

    const [formData, setForm] = useForm(defaultData)

    const { email, password, terms } = formData

    const handleLogin = (e) => {
        e.preventDefault()

        const newLogin = {
          
            email: email,            
            password: password,
           
        }

        console.log(newLogin)
    }

    // console.log(plan)


  return (
      <>
      <TopBar/>
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='request_form'>        
        <div className="request_inner">
            <div className="register_top">
                <h2 className='request_title'>Login</h2>
                <div className="have_account">
                    <small>Don't you have an account</small>
                    <Link to='/register'><span>Register</span></Link>
                </div>
              
            </div>       
        
    
        <div className="group">
            <label htmlFor="">Email</label>
            <div className="request_input">
                <input 
                    type="text" 
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
                <input 
                    type="text" 
                    placeholder='Password'
                    value={password} 
                    name='password' 
                    onChange={setForm}
                />      
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
       

          
    </div>
    
    </motion.div>
    <Footer/>
    </>
  )
}

export default Login
