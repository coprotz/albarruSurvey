import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const FirmName = ({previous, next, setForm, formData}) => {

    const { firmName} = formData
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
                <span>a.</span>
               
            </div>
            <div className='ques_2'>
                <h3 className='body_que'>Name of your firm</h3>
                <input type="text" placeholder='Type your answe here..' className='input_text' value={firmName} name='firmName' onChange={setForm}/>
                <button className='get_start'  onClick={() => {next()}}>Ok</button>
            </div>            
            
        </motion.div>
       
      
    </div>
  )
}

export default FirmName
