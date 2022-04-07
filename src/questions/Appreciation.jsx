import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Appreciation = ({previous, next}) => {
  return (
    <motion.div 
          initial={{ y: '-100vw'}}
          animate={{y:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }}  
          className='container'>
        <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
        <h2 className='body_inner'>
            It is my appreciation that you are the Contractor or
            Consulting Firm (QS, Engineers, Architects) or Supplier 
            or Manufacturer who is going to fill this questionnaire.
        </h2>
        <h2 className='body_inner'>The information you will share with me if you participate in 
            this study will be kept completely confidential to the full 
            extent of the law
        </h2>
        <h3 className='body_foote'>By completing this survey, you are consenting to participate in this study</h3>
        <button className='get_start' onClick={() => {next()}}>CONTINUE</button>
      
    </motion.div>
  )
}

export default Appreciation
