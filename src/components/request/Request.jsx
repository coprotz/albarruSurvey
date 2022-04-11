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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from 'react';



const defaultData = {
    firstname: '',
    lastname: '',
    email: '', 
    password: '',
    confirmPassword: '',
    questionnaires: '100',
    questions: '',
    period: '',
   
  
}

const Request = () => {

    const [formData, setForm] = useForm(defaultData)
    const {firstname, lastname, email, password, confirmPassword, questionnaires, questions, period } = formData
    const [file, setFile] = useState(null)
    const [perc, setPerc] = useState(null)
    const [url, setUrl] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const uploadFile = () => {

            const name = new Date().getTime() + file.name

            console.log(name)

            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("upload is " + progress + "% done");
                    setPerc(progress)
                    switch (snapshot.state) {
                        case "paused":
                            console.log("upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                async () => {
                    const url = await getDownloadURL(uploadTask.snapshot.ref)
                        setUrl(url)
                        console.log("File available at", url)
                        
                    
             
                }
             
            );
        };
        file && uploadFile()
    },[file])

    // const [error, setError] = useState(errorMessage)

    console.log(url)

    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,  
        questionnaires: questionnaires,
        questions: questions,
        password: password,
        period: period,
        file: url
    }

    // console.log(file)

    const handleRegister = async (e) => {
        e.preventDefault();       

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );   

            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
                
            });
            navigate('/login')
          
        } catch (error) {
            console.log(error)
            // setError(true)
            // const errorMessage = error.message
        }
    };


  
  return (
    <>
    <TopBar/>
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='request_form'>        
        <form className="request_inner" onSubmit={handleRegister}>
            <div className="register_top">
                <h3 className='request_title'>Register</h3>
                <div className="have_account">
                    <small>Do you have an account</small>
                    <Link to='/login'><span>Login</span></Link>
                </div>
              
            </div> 
            {/* {errorMessage}       */}
        
            <div className="group">
                <label htmlFor="name">Name</label>
                <div className="request_input">
                    <input 
                        type="text" 
                        placeholder='FirstName' 
                        value={firstname} 
                        name='firstname' 
                        onChange={setForm}
                        required
                        id='firstname'
                        />
                    <input 
                        type="text" 
                        placeholder='LasttName'
                        value={lastname} 
                        name='lastname' 
                        onChange={setForm}
                        required
                        id='lastname'
                        />
                </div>
            </div>
            <div className="group">
                <label htmlFor="">Email</label>
                <div className="request_input">
                    <div className="email">                
                        <input 
                            type="text" 
                            placeholder='Your Email Address'
                            value={email} 
                            name='email' 
                            onChange={setForm}
                            required
                            id='email'
                        />
                        </div>
                        {/* <div className="mobile">
                            <input 
                                type="text" 
                                placeholder='Your Mobile Numbers'
                                value={phone} 
                                name='phone' 
                                onChange={setForm}
                                required
                                /> 
                            
                        </div> */}
                
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
            <div className="group_define">
                <label htmlFor="" className='label'>How many completed questionnaires do you plan<span>(min 100)</span></label>
                <div className="input">
                    <input 
                    type="number" 
                    min={100} 
                    max='1000'
                    name='questionnaires'
                    className='request_input'  
                    step='1' 
                    value={questionnaires}
                    onChange={setForm}
                    required
                    id='questionnaires'
                    />
                </div>
                                
            </div>
            <div className="group_define">
                <label htmlFor="" className='label'>How many questions in each questionnaire do you need?</label>
                <div className="input">                        
                    <select 
                        name="questions" 
                        id='questions'
                        className='request_input'
                        value={questions}
                        onChange={setForm}
                        required
                        >
                        <option value="">--Select questions--</option>
                        <option value="1 - 5 questions">1 - 5 questions</option>
                        <option value="6 - 10 questions">6 - 10 questions</option>
                        <option value="11 - 15 questions">11 - 15 questions</option>
                        <option value="16- 20 questions">16- 20 questions</option>
                        <option value="21 - 25 questions">21 - 25 questions</option>
                        <option value="26 - 30 questions">26 - 30 questions</option>
                        <option value="31 - 35 questions">31 - 35 questions</option>
                        <option value="36 - 40 questions">36 - 40 questions</option>
                        <option value="41 - 45 questions">41 - 45 questions</option>
                        <option value="46 - 50 questions">46 - 50 questions</option>                         
                    </select>
                </div>
            </div>
            <div className="group_define">
                <label htmlFor="" className='label'>How long does your survey last?</label>
                <div className="input">                        
                    <select 
                        name="period" id="period" 
                        className='request_input'
                        value={period}
                        onChange={setForm} 
                        required
                        >                               
                        <option value="">--Select months--</option>                 
                        <option value="1 - 3 months">1 - 3 months</option>
                        <option value="4 - 6 months">4 - 6 months</option>
                        <option value="7 - 9 months">7 - 9 months</option>
                        <option value="10 - 12 months">10 - 12 months</option>                                                           
                    </select>
                </div>
            </div>
            <div className="group_file">           
                {file &&
                    <div className="file_display">
                        <div>{file.name}</div>           
                        <button onClick={() => setFile("")}><BiX/></button>      
                    </div>
                }
                <div className="file_input">                
                    <label 
                        htmlFor="file" 
                        className='file_label'><IoIosAttach/>Attach Questions</label>
                    <input 
                        type="file"
                        id='file'
                        style={{display: "none"}}                
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                
            </div>
            <div className="request_check">
                {/* <div className="check_group">
                    <input 
                        type="checkbox"                    
                        value={plan} 
                        name='plan' 
                        onChange={setForm}
                        />By Submit this request, you have accepted our <Link to='/pricing'>Pricing plan</Link>
                </div> */}
                {/* {plan ===  '' || plan === false?
                <button 
                    className='request_btn invalid'            
                    >Register
                </button>
                    : */}
                <button 
                    className=' request_btn'
                    type='submit'
                    disabled={perc !== null && perc <100}
                    // onClick={handleRegister}
                    // onClick={() => alert("mambo?")}
                    >Register
                </button>
                {/* } */}
            </div>
        

          
        </form>
    
    </motion.div>
    <Footer/>
    </>
  )
}

export default Request
