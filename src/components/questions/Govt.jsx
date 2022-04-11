import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Govt = ({next, previous, go, formData, setForm}) => {


    const {govt} = formData
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
            <span>b.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>The government should support all professional bodies and other construction stakeholders to build system integration to the TANeps</h3>
            <div className="radio" value={govt} onChange={setForm}>
                <input type="radio" className="radio_input" value='1' name='govt' id='1'/>
                <label htmlFor="1" className='radio_label'  >Strong Disagree</label>
                <input type="radio" className="radio_input" value='2' name='govt' id='2'/>
                <label htmlFor="2" className='radio_label'  >Disagree</label>   
                <input type="radio" className="radio_input" value='3' name='govt' id='3'/>
                <label htmlFor="3" className='radio_label'  >Neutral</label> 
                <input type="radio" className="radio_input" value='4' name='govt' id='4'/>
                <label htmlFor="4" className='radio_label'  >Agree</label> 
                <input type="radio" className="radio_input" value='5' name='govt' id='5'/>
                <label htmlFor="5" className='radio_label'  >Strong Agree</label>                 
            </div>
        
            <button className='get_start'  onClick={() => {next()}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Govt