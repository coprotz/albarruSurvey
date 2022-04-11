import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'

const Category = ({previous, go, next, setForm, formData}) => {

    const {category} = formData;

    const handleCategory = () => {
        if(category === 'contractor'){
            go('9')
        }
        if(category === 'consultant'){
            go('10')
        }
        if(category === 'supplier'){
            go('11')
        }
      
    }
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
                <span>d.</span>
            
            </div>
            <div className='ques_2'>
                <h3 className='body_que'>Category of your firm</h3>
                <div className="radio" value={category} onChange={setForm}>
                    <input type="radio" className="radio_input" value='contractor' name='category' id='a'/>
                    <label htmlFor="a" className='radio_label'  >Contractor</label>
                    <input type="radio" className="radio_input" value='consultant' name='category' id='b'/>
                    <label htmlFor="b" className='radio_label'  >Consultant</label>
                    <input type="radio" className="radio_input" value='supplier' name='category' id='c'/>
                    <label htmlFor="c" className='radio_label'  >Supplier</label>                    
                </div>
              
                <button className='get_start'  onClick={handleCategory}>Ok</button>
            </div>            
            
        </motion.div>
    </div>
    
    
  )
}

export default Category
