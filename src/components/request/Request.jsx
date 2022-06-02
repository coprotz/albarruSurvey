import React from 'react'
import './request.css'
import {motion} from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";
import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import { GrAttachment, GrClose } from "react-icons/gr";
import { BiX } from "react-icons/bi";
import { useState } from 'react';
import { IoIosAttach } from "react-icons/io";
import { addDoc, collection, serverTimestamp, setDoc, doc } from 'firebase/firestore' 
import { auth, db, storage } from '../../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from 'react';
import { FcGoogle} from "react-icons/fc";
import { useUserAuth } from '../../context/UserAuthContext';



const defaultData = {
    username: '',  
    email: '', 
    password: '',
    confirmPassword: '',
  
  
}

const Request = () => {

    const [formData, setForm] = useForm(defaultData)
    const {username, email, password, confirmPassword, terms } = formData
    const [sending, setSending] = useState(null)
    const navigate = useNavigate()
    const [err, setErr] = useState(null)
    const { signUp, user, googleSignIn } = useUserAuth();

    console.log('terms', user)

   
    const data = {
        username: username,    
        email: email,        
        password: password,      
        role: 'user',
       
    }

    const handleRegister = async (e) => {
        e.preventDefault();  
        setSending(true)  
        setErr("")   

        try {
            await signUp(email, password)  
                console.log(user)
        
                await setDoc(doc(db, "users", user.user.uid), {
                    ...data,
                    timeStamp: serverTimestamp(),
                    
                
            });
            // JSON.parse(localStorage.getItem(user,'user'));
            setSending(null)
            navigate('/account')

          
          
        } catch (error) {
            setErr(error.message)
            // setError(true)
            // const errorMessage = error.message
        }
        
        // localStorage.setItem("user", JSON.stringify(user))
        
    };


    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     });
    //     return () => {
    //         unsubscribe();
    //     }
    // },[])



    // const handleRegister = async (e) => {
    //     e.preventDefault();  
    //     setSending(true)     

    //     try {
    //         const user = await createUserWithEmailAndPassword(
    //             auth,
    //             email,
    //             password
    //         );   
    //             console.log(user)
    //             await setDoc(doc(db, "users", user.user.uid), {
    //                 ...data,
    //                 timeStamp: serverTimestamp(),
                    
                
    //         });
    //         setSending(null)
    //         localStorage.setItem("user", JSON.stringify(user))
    //         navigate('/account')
      
          
          
    //     } catch (error) {
    //         setErr(error.message)
            
    //     }
        
    // };

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
                            onChange={setForm}
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
                            onChange={setForm}
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
                        onChange={setForm}
                        required
                        id='password'
                    />
                    <input 
                        type="password" 
                        placeholder='Confirm Password'
                        value={confirmPassword} 
                        name='confirmPassword' 
                        onChange={setForm}
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
                        onChange={setForm}
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
