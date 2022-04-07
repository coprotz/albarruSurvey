import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Opinion = ({previous, next}) => {
  return (
    <div className='firm_Name'>
        <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
        <motion.div 
            initial={{ y: '-100vh'}}
            animate={{y:0}} 
            transition={{ ease: "easeOut", duration: 1.2 }} 
            className='heading_qu'>
            Question 7
            <h1 className='title'>The way forward: What can you advise on the best way...</h1>
        </motion.div>
        <motion.div 
            initial={{ y: '100vh'}}
            animate={{y:0}} 
            transition={{ ease: "easeOut", duration: 0.5 }} 
            className="ques">
            <div className='ques_1'>
                <span>f.</span>
            
            </div>
            <div className='ques_2'>
                <h3 className='body_que'>With your own words what is your general recommendations/ opinion/ editions/ comments/etc in establishing the full-fledged e-procurement system on public construction projects</h3>
                <textarea placeholder='Type your answer here..' className='input_text'></textarea>
                <button className='get_start'  onClick={() => {next()}}>SUBMIT</button>
            </div>            
            
        </motion.div>
    
    
    </div>
)
}

export default Opinion