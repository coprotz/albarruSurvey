import React from 'react'
import './reset.css'
import {motion} from 'framer-motion'
import { useNavigate} from "react-router-dom";
// import { useForm, useStep } from 'react-hooks-helper'
import { useState } from 'react';


// const defaultData = {   
//     email: '',
   
   
// }

const Reset = () => {

    // const [formData, setForm] = useForm(defaultData)

    // const { email } = formData
    const navigate = useNavigate();

    const[email, setEmail] = useState('')

    const handleReset = (e) => {
        e.preventDefault()

        const newLogin = {
          
            email: email,            
           
           
        }

        console.log(newLogin)
    }

    // console.log(plan)


  return (
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='request_form'>        
        <div className="request_inner">
            <div className="register_top">
                <h2 className='request_title'>Reset Password?</h2>           
              
            </div>       
        
    
        <div className="group">
            <label htmlFor="">Email</label>
            <div className="request_input">
                <input 
                    type="text" 
                    placeholder='Your Email Address'
                    value={email} 
                    name='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    />
              
            </div>
        </div>
       
         
        <div className="request_check">
            <button 
                className=' request_btn'
                type='submit'
                onClick={handleReset}
                >Submit
            </button>
            <button 
                className=' request_btn'
                type='submit'
                onClick={() => navigate('/login')}
                >Cancel
            </button>
                  
        </div>
       

          
    </div>
    
    </motion.div>
  )
}

export default Reset