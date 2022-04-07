import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Submit = ({previous, next, go}) => {

    const navigate = useNavigate();
  return (     

        <motion.div 
            initial={{ x: '-100vw'}}
            animate={{x:0}} 
            transition={{ ease: "easeOut", duration: 0.5 }} 
            className='container'
            >
            {/* <button onClick={() => {previous()}} className='back'><FaChevronLeft/></button> */}
            <h2 className='body_inner'>
                Thank you for your time, I real appreciate your thoughts.
            </h2>
            <h2 className='body_inner'>May the Almighty God solve your problems
            </h2>
            <h3 className='body_foote'>In case of any query please contact me through</h3>
            <h3 className='body_foote'><a href='mailto:ally@allyphd.site'>ally@allyphd.site</a> </h3>
            <button className='get_start' onClick={() => {navigate('https://624f229eeec04935f9f3165f--dazzling-kashata-2ef301.netlify.app/')}}>Finish my Questionnaire</button>
        
        </motion.div>
    
    
 
)
}

export default Submit