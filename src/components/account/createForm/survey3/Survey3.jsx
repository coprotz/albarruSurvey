import React, {useState} from 'react'
import { useStep } from 'react-hooks-helper'
// import { userSurveys } from '../../data/surveys';
import { useParams } from 'react-router-dom';
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
// import { Questionnaires } from '../../../../data/surveys';
import { useContext } from 'react';
import Dashbord from '../../Dashbord';
import { ValuesContext } from '../../../../contexts/ValuesContext';



const steps = [
    {id: '1', Component: Welcome},
    {id: '2', Component: FirmDetails},
    {id: '3', Component: Establishment},
    {id: '4', Component: Implementation},
  
    // {id: 'Dashbord', Component: Dashbord},
]

const Survey3 = ({ activeQuestionnaire, share, setShare, setActiveQuestionnaire, setActiveResponce, responces, Questionnaires}) => {
    const { queId } = useParams();

    const activeQue = Questionnaires?.find(q => q.id === queId)

    // console.log('active', activeQue)

    const { step, navigation, index } = useStep({ steps, initialStep: 0 })
    const { Component } = step

    const [pages, setPages] = useState(activeQue?.pages || activeQuestionnaire?.pages)

    const [values, setValues] = useState(null)
    const [sub, setSub] = useState(null)
  

    // console.log('formPage', pages)
    const { go, next, previous } = navigation
    
    const width = (step.id/steps.length)*100
    let { register, handleSubmit, formState: { errors, isValid }, setError, clearError, watch } = useForm({mode: 'all'});

    const [name, setName] = useState(true)
    const [activeField, setActiveField] = useState(null)
    const [survey, setSurvey] = useState(activeQue)

    // const { pages } = useContext(surveyContext)

    const props = { 
        go, 
        next, 
        previous, 
        steps, 
        // quest, 
        register, 
        handleSubmit, 
        watch, 
        // setPages, 
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
        setSub
      }
    // console.log("quest",responces)

  return (
  <SurveyContext.Provider value={{ pages, setPages }}>
      <div className='progress'>
              <div className="lineer_progress" style={{width:`${width}%`}}>
                {/* {step.id} step */}
              </div>
              
            </div>
        <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className={`${activeQuestionnaire? 'survey_wrapper5' : 'survey_wrapper4'}`}>   
          <ValuesContext.Provider value={{values, setValues}}>                   
            <div className={`${activeQuestionnaire? 'main_body2' : 'main_body'}`}>  
              <Component {...props} />
            </div>
          </ValuesContext.Provider>  
      </motion.div>
    </SurveyContext.Provider>
  )
}

export default Survey3
