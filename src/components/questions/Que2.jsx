import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Que2 = ({go, next, previous}) => {
  return (
    <div className='que_wrapper'>
    <button onClick={() => {go('11')}} className='back'><FaChevronLeft/></button>
    <motion.div 
          initial={{ x: '-100vw'}}
          animate={{x:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
        className="ques">
        <div className='ques_1'>
            <span>2</span>
            <span className='svg'><BsArrowRightShort/></span> 
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Establishment and implementation of e-Procurement system in the Country by TANeps</h3>
            <button className='get_start'  onClick={() => {go('14')}}>Continue</button>
        </div>            
        
    </motion.div>
    
</div>
  )
}

export default Que2
