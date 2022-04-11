import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Evaluation = ({next, previous, go, formData, setForm}) => {

    const {evaluation} = formData
  return (
    <div className='firm_Name'>
    <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
    <motion.div 
        initial={{ y: '-100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 1.2 }} 
        className='heading_qu'>
        Question 3
        <h1 className='title'>In the implementation of e-Procurement system, please...</h1>
    </motion.div>
    <motion.div 
        initial={{ y: '100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="ques">
        <div className='ques_1'>
            <span>l.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Online bid evaluation</h3>
            <div className="radio" value={evaluation} onChange={setForm}>
                <input type="radio" className="radio_input" value='1' name='evaluation' id='1'/>
                <label htmlFor="1" className='radio_label'  >Poor</label>
                <input type="radio" className="radio_input" value='2' name='evaluation' id='2'/>
                <label htmlFor="2" className='radio_label'  >Fair</label>   
                <input type="radio" className="radio_input" value='3' name='evaluation' id='3'/>
                <label htmlFor="3" className='radio_label'  >Good</label> 
                <input type="radio" className="radio_input" value='4' name='evaluation' id='4'/>
                <label htmlFor="4" className='radio_label'  >Very Good</label> 
                <input type="radio" className="radio_input" value='5' name='evaluation' id='5'/>
                <label htmlFor="5" className='radio_label'  >Excellent</label>                 
            </div>
          
            <button className='get_start'  onClick={() => {next()}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Evaluation