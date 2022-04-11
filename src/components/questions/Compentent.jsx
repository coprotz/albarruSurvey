import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Compentent = ({next, previous, go, formData, setForm}) => {


    const {compentent} = formData
  return (
    <div className='firm_Name'>
    <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
    <motion.div 
        initial={{ y: '-100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 1.2 }} 
        className='heading_qu'>
        Question 4
        <h1 className='title'>Do your firm face the following challenges on the e-Pro...</h1>
    </motion.div>
    <motion.div 
        initial={{ y: '100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="ques">
        <div className='ques_1'>
            <span>d.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Lack of competent human resource critically to manage e-Procurement system in my firm </h3>
            <div className="radio" value={compentent} onChange={setForm}>
                <input type="radio" className="radio_input" value='1' name='compentent' id='1'/>
                <label htmlFor="1" className='radio_label'  >Strong Disagree</label>
                <input type="radio" className="radio_input" value='2' name='compentent' id='2'/>
                <label htmlFor="2" className='radio_label'  >Disagree</label>   
                <input type="radio" className="radio_input" value='3' name='compentent' id='3'/>
                <label htmlFor="3" className='radio_label'  >Neutral</label> 
                <input type="radio" className="radio_input" value='4' name='compentent' id='4'/>
                <label htmlFor="4" className='radio_label'  >Agree</label> 
                <input type="radio" className="radio_input" value='5' name='compentent' id='5'/>
                <label htmlFor="5" className='radio_label'  >Strong Agree</label>                 
            </div>
         
            <button className='get_start'  onClick={() => {next()}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Compentent