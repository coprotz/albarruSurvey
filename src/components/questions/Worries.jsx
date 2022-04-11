import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Worries = ({next, previous, go, setForm, formData}) => {


    const {worries} = formData
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
            <span>e.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>My firm worries on the security and safety of e-Procurement system </h3>
            <div className="radio" value={worries} onChange={setForm}>
                <input type="radio" className="radio_input" value='1' name='worries' id='1'/>
                <label htmlFor="1" className='radio_label'  >Strong Disagree</label>
                <input type="radio" className="radio_input" value='2' name='worries' id='2'/>
                <label htmlFor="2" className='radio_label'  >Disagree</label>   
                <input type="radio" className="radio_input" value='3' name='worries' id='3'/>
                <label htmlFor="3" className='radio_label'  >Neutral</label> 
                <input type="radio" className="radio_input" value='4' name='worries' id='4'/>
                <label htmlFor="4" className='radio_label'  >Agree</label> 
                <input type="radio" className="radio_input" value='5' name='worries' id='5'/>
                <label htmlFor="5" className='radio_label'  >Strong Agree</label>                 
            </div>
          
            <button className='get_start'  onClick={() => {next()}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Worries