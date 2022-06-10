import React, {useState} from 'react'
// import { useStep } from 'react-hooks-helper'
import FirmDetails from './FirmDetails'
import Establishment from './Establishments'
import Implementation from './Implementation'
import Challenges from './Challenges'
import Benefits from './Benefits'
import ThewayForward from './ThewayForward'
import {motion} from 'framer-motion'
import Welcome from './Welcome';
import { useForm } from 'react-hook-form'
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { ValuesContext } from '../../../../contexts/ValuesContext';





const Survey1 = ({ activeQuestionnaire, share, setShare, setActiveQuestionnaire, setActiveResponce, responces, activeQue, user, currentQue}) => {


    // const { step, navigation } = useStep({ steps, initialStep: 0 })
    // const { Component } = step
    const [pages, setPages] = useState(activeQue?.pages || activeQuestionnaire?.pages)
    const [values, setValues] = useState(null)
    const [sub, setSub] = useState(null)
    // const { go, next, previous } = navigation    
    
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
        }else if(page === 2){
          return <Establishment {...props}/>
        }else if(page === 3){
          return <Implementation {...props}/>
        }else if(page === 4){
          return <Challenges {...props}/>
        }else if (page === 5){
          return <Benefits {...props}/>
        }else if(page === 6){
          return <ThewayForward {...props}/>
    
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

export default Survey1
