import React from 'react'
import './request.css'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useForm, useStep } from 'react-hooks-helper'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';


const defaultData = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    questionnaires: '100',
    questions: '',
    period: '',
    plan: ''
}

const Request = () => {

    const [formData, setForm] = useForm(defaultData)

    const {firstname, lastname, email, phone, password, confirmPassword, questionnaires, questions, period, plan} = formData

    const handleRegister = (e) => {
        e.preventDefault()

        const newRegister = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            questionnaires: questionnaires,
            questions: questions,
            password: password,
            period: period
        }

        console.log(newRegister)
    }

    console.log(plan)


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
                <h3 className='request_title'>Register</h3>
                <div className="have_account">
                    <small>Do you have an account</small>
                    <Link to='/login'><span>Login</span></Link>
                </div>
              
            </div>       
        
        <div className="group">
            <label htmlFor="name">Name</label>
            <div className="request_input">
                <input 
                    type="text" 
                    placeholder='FirstName' 
                    value={firstname} 
                    name='firstname' 
                    onChange={setForm}
                    />
                <input 
                    type="text" 
                    placeholder='LasttName'
                    value={lastname} 
                    name='lastname' 
                    onChange={setForm}
                    />
            </div>
        </div>
        <div className="group">
            <label htmlFor="">Contacts</label>
            <div className="request_input">
                <input 
                    type="text" 
                    placeholder='Your Email Address'
                    value={email} 
                    name='email' 
                    onChange={setForm}
                    />
                <input 
                    type="text" 
                    placeholder='Your Mobile Numbers'
                    value={phone} 
                    name='phone' 
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
                 <input 
                    type="text" 
                    placeholder='Confirm Password'
                    value={confirmPassword} 
                    name='confirmPassword' 
                    onChange={setForm}
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
                />
            </div>
                            
        </div>
        <div className="group_define">
        <label htmlFor="" className='label'>How many questions in each questionnaire do you need?</label>
            <div className="input">                        
                <select 
                name="questions" id="" 
                className='request_input'
                value={questions}
                onChange={setForm}
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
                    name="period" id="" 
                    className='request_input'
                    value={period}
                    onChange={setForm} >                               
                    <option value="">--Select months--</option>                 
                    <option value="1 - 3 months">1 - 3 months</option>
                    <option value="4 - 6 months">4 - 6 months</option>
                    <option value="7 - 9 months">7 - 9 months</option>
                    <option value="10 - 12 months">10 - 12 months</option>                                                           
                </select>
            </div>
        </div>
        <div className="request_check">
            <div className="check_group">
                <input 
                    type="checkbox"                    
                    value={plan} 
                    name='plan' 
                    onChange={setForm}
                    />By Submit this request, you have accepted our <Link to='/pricing'>Pricing plan</Link>
            </div>
            {plan ===  '' || plan === false?
            <button 
            className='request_btn invalid'

           
            >Submit
            </button>
                :
            <button 
                className=' request_btn'
                type='submit'
                onClick={handleRegister}
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

export default Request
