import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { Questionnaires } from '../../data/surveys';
import RenderSurvey from './createForm/RenderSurvey';



const Dashbord = ({
    go,    
    cuUser,
    activeQuestionnaire,
    setActiveQuestionnaire,
    responces,
    setActive,
    setActiveResponce, 
    surveys
}) => {

   

        const userQuestionnaires = Questionnaires?.filter((q) => q?.userId === cuUser?.id)
        const userResponces = responces?.filter((q) => q?.userId === cuUser?.id)

        const t = surveys.find(u => u.id === 'frXPvYTjoiVsOztljAUR').period

        const currentQue = userQuestionnaires.find((u) => u.type)

        const completed = userResponces.filter((u) => u.completed === 'true')
   
  
        const [share, setShare] = useState(null)

     
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body"> 
            {!activeQuestionnaire ?
                <>
                {userQuestionnaires.length > '0' ? 
                    <div className="dash_body">
                        <div className="dash_body_inner">
                            <h2 className='inner__title_1'>Recent Surveys:</h2>

                            <div className="recent_surv">
                                {userQuestionnaires.map((s, index) => (                       
                                <div className="survey_card" key={index}>
                                    <div className="dash_title">
                                        <h6>Title:</h6>
                                        <h4>{s.title}</h4>
                                        {/* <small>Created since: {new Date(s?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</small> */}
                                    </div> 
                                    <div className="dash_span">                                   
                                     
                                        <span>
                                            <h4>Completed</h4>
                                            <h5>{completed? completed.length : '0'}</h5>
                                        </span>
                                        <span>
                                            <h4>Target</h4>
                                            <h5>{surveys.find(u => u.id === s.id).questionnaires}</h5>
                                        </span>
                                        <span>
                                            <h4>Achievement</h4>
                                            <h5>{(completed.length)/(surveys.find(u => u.id === s.id).questionnaires)*100}%</h5>
                                        </span>
                                        <span>
                                            <h4>Period</h4>
                                            <h5>{surveys.find(u => u.id === s.id).period}</h5>
                                        </span>
                                        <span>
                                            <h4>Started</h4>
                                            <h5>{new Date(surveys.find(su => su.id ===s.id).timeStamp.seconds * 1000).toLocaleDateString("en-US")}</h5>
                                        </span>
                                        <span>
                                            <h4>Responces</h4>
                                            <button onClick={() =>  {setActiveResponce(s); go('Analysis')}}>View</button>
                                        </span>
                                        <span>
                                            <h4>Questionnaires</h4>
                                            <button onClick={() => setActiveQuestionnaire(s)}>View</button>
                                        </span>
                                    </div> 
                                </div>
                                ))}
                            </div>
                        
                        </div>
                        
                    
                    
                    </div>                    
                    :
                    <div className='no_survey_wrapper'>
                        <span className='dont_hv'>You have either unprocessed survey or no Survey at all</span> 
                        <div className="no_btn">
                            <button className="btn_submit" onClick={() => {go('CreateSurvey'); setActive(1)}}>Create A Survey</button>
                        </div>
                    </div>
            
            
                }
            </> 
            : 
            <div>
                           
                <RenderSurvey
                    activeQuestionnaire={activeQuestionnaire} 
                    share={share} 
                    setShare={setShare} 
                    setActiveQuestionnaire={setActiveQuestionnaire}
                    setActiveResponce={setActiveResponce}
                    responces={responces}
                    currentQue={currentQue}
                /> 
                
  
            </div>
           }
      
    </motion.div> 
  )
}

export default Dashbord
