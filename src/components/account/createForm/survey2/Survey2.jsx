import React, {useState} from 'react'
// import { useStep } from 'react-hooks-helper'
import FirmDetails from './FirmDetails'
import {motion} from 'framer-motion'
import Welcome from './Welcome';
import { useForm } from 'react-hook-form'
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { ValuesContext } from '../../../../contexts/ValuesContext';





const Survey2 = ({ activeQuestionnaire, share, setShare, setActiveQuestionnaire, setActiveResponce, responces, activeQue, user, currentQue}) => {


    const [pages, setPages] = useState(activeQue?.pages || activeQuestionnaire?.pages)
    const [values, setValues] = useState(null)
    const [sub, setSub] = useState(null)
     
    let { register, handleSubmit, watch } = useForm({mode: 'all'});

    const [name, setName] = useState(true)
    const [activeField, setActiveField] = useState(null)
    const [survey, setSurvey] = useState(activeQue)
    const [page, setPage] = useState(0)

    const width = (page/6)*100

    const props = { 
        register, 
        handleSubmit, 
        watch, 
        setPage,
        activeQuestionnaire,
        pages, 
        name, 
        setName, 
        activeField, 
        setActiveField,
        survey, 
        setSurvey,
        setShare,
        share,
        setActiveQuestionnaire,
        setActiveResponce,
        activeQue,
        responces,
        sub,
        setSub, 
        user,
        currentQue
      }

      const PageDisplay = () => {
        if(page === 0){
          return <Welcome {...props}/>
        }else if(page === 1){
          return <FirmDetails {...props}/>    
        }
        
        
      }
 

  return (
  <SurveyContext.Provider value={{ pages, setPages }}>
      <div className='progress'>
              <div className="lineer_progress" style={{width:`${width}%`}}>
       
              </div>
              
            </div>
        <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className={`${activeQuestionnaire? 'survey_wrapper5' : 'survey_wrapper4'}`}>   
          <ValuesContext.Provider value={{values, setValues}}>                   
            <div className={activeQuestionnaire? 'main_body2' : 'main_body'}>  
              {PageDisplay()}
            </div>
          </ValuesContext.Provider>  
      </motion.div>
    </SurveyContext.Provider>
  )
}

export default Survey2
