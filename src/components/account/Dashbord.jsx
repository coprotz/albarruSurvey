import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { Questionnaires } from '../../data/surveys';
import RenderSurvey from './createForm/RenderSurvey';



const Dashbord = ({
    setPage,    
    user,
    activeQuestionnaire,
    setActiveQuestionnaire,
    responces,
    setActive,
    setActiveResponce, 
    surveys
}) => {

   

        const userQuestionnaires = Questionnaires?.filter((q) => q?.userId === user?.uid)
        const userResponces = responces?.filter((q) => q?.userId === user?.uid)   
        const currentQue = userQuestionnaires.find((u) => u.type)
        const completed = userResponces.filter((u) => u.completed === 'true')  
        const [share, setShare] = useState(null)


        

        const userSurvey =  surveys.find((u) => u.userId === 'LW9yzBTqH2VxnPFTq7r9im9j6BB3').status === 'Paid'
        console.log('userSurv', userSurvey)
     
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
                                            <div className="dash_h">
                                                 <h5>{completed? completed.length : '0'}</h5>
                                            </div>                                           
                                        </span>
                                        <span>
                                            <h4>Target</h4>
                                            <div className="dash_h">
                                            <h5>{surveys.find(u => u.id === s.id)?.questionnaires}</h5></div>
                                        </span>
                                        <span>
                                            <h4>Completion Rate</h4>
                                            <div className="dash_h">
                                            <h5>{(completed.length)/(surveys.find(u => u.id === s.id)?.questionnaires)*100}%</h5></div>
                                        </span>
                                        <span>
                                            <h4>Period</h4>
                                            <div className="dash_h">
                                            <h5>{surveys.find(u => u.id === s.id)?.period}</h5></div>
                                        </span>
                                        <span>
                                            <h4>Started</h4>
                                            <div className="dash_h">
                                            <h5>{new Date(surveys.find(su => su.id ===s.id)?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</h5></div>
                                        </span>
                                        <span>
                                            <h4>Responces</h4>
                                            <div className="dash_h">
                                            <button onClick={() =>  {setActiveResponce(s); setPage(3)}}>View</button></div>
                                        </span>
                                        <span>
                                            <h4>Questionnaires</h4>
                                            <div className="dash_h">
                                            <button onClick={() => setActiveQuestionnaire(s)}>View</button></div>
                                        </span>
                                    </div> 
                                </div>
                                ))}
                            </div>
                        
                        </div>
                        
                    
                    
                    </div>                    
                    :
                    <div className='no_survey_wrapper'>
                        <span className='dont_hv'>{surveys.find((u) => u.userId === user.uid)?.status === 'Paid' ? 'Your Survey is processing' : 'No survey created'}</span> 
                        <div className="no_btn">
                            <button className="btn_submit" onClick={() => {setPage(7); setActive(1)}}>Create A Survey</button>
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
                    user={user}
                /> 
                
  
            </div>
           }
      
    </motion.div> 
  )
}

export default Dashbord
