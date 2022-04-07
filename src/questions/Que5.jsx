import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Que5 = ({go, next, previous}) => {
  return (
    <div className='que_wrapper'>
    <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
    <motion.div 
          initial={{ x: '-100vw'}}
          animate={{x:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
        className="ques">
        <div className='ques_1'>
            <span>5</span>
            <span className='svg'><BsArrowRightShort/></span> 
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Benefits of e-Procurement system implementation your firm enjoys</h3>
            <button className='get_start'  onClick={() => {next()}}>Continue</button>
        </div>            
        
    </motion.div>
    
</div>
  )
}

export default Que5