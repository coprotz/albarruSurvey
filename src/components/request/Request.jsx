import React from 'react'
import './request.css'
import {motion} from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";
// import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import { useState } from 'react';
import {  serverTimestamp, setDoc, doc } from 'firebase/firestore' 
import { db } from '../../firebase';
import { FcGoogle} from "react-icons/fc";
import { useUserAuth } from '../../context/UserAuthContext';

const Request = () => {

    const [sending, setSending] = useState(null)
    const navigate = useNavigate()
    const [err, setErr] = useState(null)
    const { signUp, user, googleSignIn } = useUserAuth();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState('')

    // console.log('terms', terms)

   
 

    const handleRegister = async (e) => {
        e.preventDefault();  
        setSending(true)  
        setErr("")  
        
        const data = {
            username: username,    
            email: email,        
            password: password,      
            role: 'user',
            terms: terms
           
        }

        signUp(email, password).then(cred => {
            return setDoc(doc(db, 'users', `${cred.user.uid}`) ,{
                ...data,
                timeStamp: serverTimestamp(),
            });
            
        }).then(() => {
            setSending(null)
            navigate('/account')
        }).catch((error) => {
            setErr(error.message)
        })

        // try {
        //     await signUp(email, password)  
        //         console.log(user)
        
        //         await setDoc(doc(db, "users", `${user?.uid}`), {
        //             ...data,
        //             timeStamp: serverTimestamp(),
                    
                
        //     });

        //     // console.log('id', user.uid)
  
        //     setSending(null)
        //     navigate('/account')

          
          
        // } catch (error) {
        //     setErr(error.message)
      
        // }
        

        
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
        <form className="request_inner" onSubmit={handleRegister}>
            {err && <div className="error">{err}</div> } 
            <div className="register_top">
                <h3 className='request_title'>Register</h3>
                <div className="have_account">
                    <small>Do you have an account</small>
                    <Link to='/login'><span>Login</span></Link>
                </div>
              
            </div> 

            <div className="group">
                <label htmlFor="">Username</label>
                <div className="request_input">
                    <div className="email">                
                        <input 
                            type="text" 
                            placeholder='Your Username'
                            value={username} 
                            name='username' 
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            id='username'
                        />
                        </div>
                                       
                </div>
            </div>
            <div className="group">
                <label htmlFor="">Email</label>
                <div className="request_input">
                    <div className="email">                
                        <input 
                            type="email" 
                            placeholder='Your Email Address'
                            value={email} 
                            name='email' 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            id='email'
                        />
                        </div>
                                       
                </div>
            </div>
            <div className="group">
                <label htmlFor="name">Password</label>
                <div className="request_input">
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password} 
                        name='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        id='password'
                    />
                    <input 
                        type="password" 
                        placeholder='Confirm Password'
                        value={confirmPassword} 
                        name='confirmPassword' 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                
                </div>
                {password !==confirmPassword? <div className='error'>Password not match</div> : null}
            </div>

            <div className="request_check">
                <div className="check_group">
                    <input 
                        type="checkbox"                    
                        value={terms} 
                        name='terms' 
                        onChange={(e) => setTerms(e.target.checked)}
                        />By Submit this request, you have accepted our <Link to='/terms'>Terms of Use</Link>
                        </div>
                        {!terms?
                            <button 
                                className='request_btn invalid'                    
                                >
                                Register
                            </button>
                            :
                            <button 
                                className=' request_btn'
                                type='submit'
                                onClick={handleRegister}
                                >
                                {sending? 'Registering...':'Register'}
                            </button>
                        }
            </div> 
            <div className="google">
                <h3>OR</h3>
                <button onClick={signWithGoogle}><FcGoogle/>Sign In with Google</button>
            </div> 
            
            
          
      
            {/* <div className="request_check">
              
                <button 
                    className=' request_btn'
                    type='submit'
                    // disabled={perc !== null && perc <100}
                    // onClick={handleRegister}
                    // onClick={() => alert("mambo?")}
                    >{sending? 'Registering...':'Register'}
                </button>
               
            </div> */}
        

          
        </form>
    
    </motion.div>
    <Footer/>
    </>
  )
}

export default Request
