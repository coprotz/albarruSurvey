import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Taneps = ({go, setForm, formData}) => {

    const { taneps} = formData;
    const handleYes = () => {
        if(taneps === 'Y'){
            go('12')
        }
        if(taneps === 'N'){
            go('13')
        }
    }

    console.log(taneps)

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
            <span>f.</span>
        
        </div>
        <div className='ques_2'>
            <h3 className='body_que'>Is your firm registered with TANeps?</h3>
            <div className="radio" value={taneps} onChange={setForm}>
                <input type="radio" className="radio_input" value='N' name='taneps' id='a'/>
                <label htmlFor="a" className='radio_label'  >No</label>
                <input type="radio" className="radio_input" value='Y' name='taneps' id='b'/>
                <label htmlFor="b" className='radio_label'  >Yes</label>                   
            </div>

            {taneps === 'Y' || taneps === 'N'?          
                <button className='get_start'  onClick={() => {handleYes()}}>OK</button>
                : 
                <button className='get_start invalid' >OK</button>
            } 
          
           
            {/* <button className='get_start'  onClick={handleYes}>Ok</button> */}
        </div>            
        
    </motion.div>
</div>
  )
}

export default Taneps
