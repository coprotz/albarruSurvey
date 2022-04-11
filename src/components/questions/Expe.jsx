import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Expe = ({previous, next, formData, setForm}) => {

    const { experience } = formData
    console.log(experience)
  return (
    <div className='firm_Name'>
        <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button>
        <motion.div 
        initial={{ y: '-100vh'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 1.2 }} 
        className='heading_qu'>
        Question 1
        <h1 className='title'>Tell me something about your firm</h1>
    </motion.div>
        <motion.div 
            initial={{ y: '100vh'}}
            animate={{y:0}} 
            transition={{ ease: "easeOut", duration: 0.5 }} 
            className="ques">
            <div className='ques_1'>
                <span>c.</span>
            
            </div>
            <div className='ques_2'>
                <h3 className='body_que'>Your year(s) of firm experience</h3>
                <div className="radio" value={experience} onChange={setForm}>
                    <input type="radio" className="radio_input" value='a' name='experience' id='a'/>
                    <label htmlFor="a" className='radio_label'  >Less than 5 years</label>
                    <input type="radio" className="radio_input" value='b' name='experience' id='b'/>
                    <label htmlFor="b" className='radio_label'  >Between 5 and 10 years</label>
                    <input type="radio" className="radio_input" value='c' name='experience' id='c'/>
                    <label htmlFor="c" className='radio_label'  >More than 10 years</label>
                </div>
               
              
                <button className='get_start'  onClick={() => {next()}}>Ok</button>
            </div>            
            
        </motion.div>
    
    
    </div>
  )
}

export default Expe
