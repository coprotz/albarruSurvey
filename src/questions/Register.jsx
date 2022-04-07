import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Register = ({go, setForm, formData}) => {

    const {firmName, email, experience, category, consultant, contractor, register, taneps} = formData;

    const handleSubmit = (e) => {
        e.preventDefault()

        const noRegister = {
            firmName : firmName,
            email: email,
            category: category,
            contractor: contractor,
            consultant: consultant,
            experience: experience,
            register: register,
            taneps: taneps
        }

        console.log(noRegister)

        go('73')
    }
  return (
    <div className='firm_Name'>
    <button onClick={() => {go('11')}} className='back'><FaChevronLeft/></button>
    <motion.div 
        initial={{ y: '-100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 1.2 }} 
        className='heading_qu'>
        Question 1
        <h1 className='title'>Tell me something about your firm</h1>
    </motion.div>
    <motion.div 
        initial={{ y: '100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.7 }}
        className="ques">
        <div className='ques_1'>
            <span>g.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Why your firm is not registered with TANeps?</h3>
            <div className="radio" value={register} onChange={setForm}>
                    <input type="radio" className="radio_input" value='a' name='register' id='a'/>
                    <label htmlFor="a" className='radio_label'  >We don't know it</label>
                    <input type="radio" className="radio_input" value='b' name='register' id='b'/>
                    <label htmlFor="b" className='radio_label'  >We are not ready for now</label>
                    <input type="radio" className="radio_input" value='c' name='register' id='c'/>
                    <label htmlFor="c" className='radio_label'  >We don't have a genuine reason</label>
                </div>
          
           
            <button className='get_start'  onClick={handleSubmit}>SUBMIT</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Register
