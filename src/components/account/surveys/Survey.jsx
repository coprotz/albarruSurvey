import React from 'react'
import {motion} from 'framer-motion'
import './survey.css'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
// import Quest from './Quest';
// import Analysis from '../Analysis';


const Survey = ({go, activeSurvey}) => {

    const [activePage, setActivePage] = useState(true)

    console.log(activePage)

  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          <div className="survey__wrapper">
            <div className="surv_top">
              <span onClick={() => setActivePage(true)} className={activePage === true? 'active_top' : 'nomal_top'}>QUESTIONNAIRE</span>
              <span onClick={() => setActivePage(false)} className={activePage === false? 'active_top' : 'nomal_top'}>RESPONSES</span>             
            </div>
            <button className='invoice__btn2' onClick={() => go('Dashbord')}><AiOutlineClose/></button>
          </div>
          {/* <div className="survey__body">
            {activePage ?              
              <Quest activeSurvey={activeSurvey} go={go}/>            
            : 
            
            <Analysis activeSurvey={activeSurvey}/>
            
            }
          </div> */}
            {/* <Component {...props}/> */}
               
    </motion.div>
  )
}

export default Survey
