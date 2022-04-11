import React from 'react'
import {motion} from 'framer-motion'

const Welcome = ({next}) => {
  return (
    <motion.div 
          initial={{ y: '-100vw'}}
          animate={{y:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
          className='container'>
        <div className="welcom_page">
            <h2 className='heading'>My Study is;</h2>
            <div className='body_para'>Framework for Adoption of a Full-fledged e-Procurement System 
                    on Public Construction Projects in Tanzania
            </div>
            <h3 className='body_foote'>Supervisors: Dr. Kikwasi & Dr. Monko</h3>
            <button className='get_start' onClick={() => {next()}}>Get Started</button>
        </div>
  </motion.div>
  )
}

export default Welcome
