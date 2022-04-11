import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Que7 = ({go, next, previous}) => {
  return (
    <div className='que_wrapper'>
    <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
    <motion.div 
          initial={{ x: '-100vw'}}
          animate={{x:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
        className="ques">
        <div className='ques_1'>
            <span>7</span>
            <span className='svg'><BsArrowRightShort/></span> 
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>The way forward: What can you advise on the best way to achieve full-fledged e-Procurement system (Every thing to be done online - no paperwork) on the public construction projects?</h3>
            <button className='get_start'  onClick={() => {next()}}>Continue</button>
        </div>            
        
    </motion.div>
    
</div>
  )
}

export default Que7