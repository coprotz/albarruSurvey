import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Costs = ({next, previous, go, formData, setForm}) => {

    const {costs} = formData
  return (
    <div className='firm_Name'>
    <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
    <motion.div 
        initial={{ y: '-100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 1.2 }} 
        className='heading_qu'>
        Question 5
        <h1 className='title'>Benefits of e-Procurement system implementation yo...</h1>
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
            <h3 className='body_que'>Reduces procurement and transaction costs </h3>
            <div className="radio" value={costs} onChange={setForm}>
                <input type="radio" className="radio_input" value='1' name='costs' id='1'/>
                <label htmlFor="1" className='radio_label'  >Strong Disagree</label>
                <input type="radio" className="radio_input" value='2' name='costs' id='2'/>
                <label htmlFor="2" className='radio_label'  >Disagree</label>   
                <input type="radio" className="radio_input" value='3' name='costs' id='3'/>
                <label htmlFor="3" className='radio_label'  >Neutral</label> 
                <input type="radio" className="radio_input" value='4' name='costs' id='4'/>
                <label htmlFor="4" className='radio_label'  >Agree</label> 
                <input type="radio" className="radio_input" value='5' name='costs' id='5'/>
                <label htmlFor="5" className='radio_label'  >Strong Agree</label>                 
            </div>
        
            <button className='get_start'  onClick={() => {next()}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Costs