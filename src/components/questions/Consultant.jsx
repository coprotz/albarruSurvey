import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Consultant = ({previous, go, next, setForm, formData}) => {

    const {consultant} = formData
  return (
    <div className='firm_Name'>
    <button onClick={() => {go('8')}} className='back'><FaChevronLeft/></button>
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
            <span>e.</span>
        
        </div>
     
        <div className='ques_2'>
            <h3 className='body_que'>Consultant</h3>
            <div className="radio" value={consultant} onChange={setForm}>
                    <input type="radio" className="radio_input" value='architect' name='consultant' id='a'/>
                    <label htmlFor="a" className='radio_label'  >Architect</label>
                    <input type="radio" className="radio_input" value='qs' name='consultant' id='b'/>
                    <label htmlFor="b" className='radio_label'  >Quantity Surveying</label>
                    <input type="radio" className="radio_input" value='Engineering' name='consultant' id='c'/>
                    <label htmlFor="c" className='radio_label'  >Engineering</label>
                </div>
 
           
            <button className='get_start'  onClick={() => {go('11')}}>Ok</button>
        </div>            
        
    </motion.div>
</div>
  )
}

export default Consultant
