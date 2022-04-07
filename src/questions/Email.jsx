import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Email = ({previous, next, formData, setForm}) => {

    const {email} = formData
  return (
    <div className='firm_Name'>
        <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
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
            transition={{ ease: "easeOut", duration: 0.5 }} 
            className="ques">
            <div className='ques_1'>
                <span>b.</span>
            
            </div>
            <div className='ques_2'>
                <h3 className='body_que'>Your Email</h3>
                <input type="email" placeholder='name@example.com' className='input_text' value={email} name='email' onChange={setForm}/>
                <button className='get_start'  onClick={() => {next()}}>Ok</button>
            </div>            
            
        </motion.div>
    
    
    </div>
)
}

export default Email
