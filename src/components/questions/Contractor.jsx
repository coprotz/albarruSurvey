import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Contractor = ({previous, next, go, setForm, formData}) => {

    const { contractor} = formData
    console.log(contractor)
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
        className="ques"
    >
        <div className='ques_1'>
            <span>e.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Contractor</h3>
            <div className="radio" value={contractor} onChange={setForm}>
                <input type="radio" className="radio_input" value='civil' name='contractor' id='a'/>
                <label htmlFor="a" className='radio_label'  >Civil</label>
                <input type="radio" className="radio_input" value='building' name='contractor' id='b'/>
                <label htmlFor="b" className='radio_label'  >Building</label>
                <input type="radio" className="radio_input" value='civilBuilding' name='contractor' id='c'/>
                <label htmlFor="c" className='radio_label'  >Civil & Building</label>
            </div>      
            <button className='get_start'  onClick={() => {go('11')}}>Ok</button>
          
            
        </div>            
        
    </motion.div>
</div>
  )
}

export default Contractor
