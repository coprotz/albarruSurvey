import React from 'react'
import {motion} from 'framer-motion'
// import RenderFields from '../../../elements/RenderFields'
// import { SurveyContext } from '../../../../contexts/SurveyContext';
// import { useContext } from 'react';
import Share from '../../Share'

const Welcome = ({go, next, activeQue, activeQuestionnaire, share, setShare, setActiveQuestionnaire, setPage, user, currentQue}) => {


  return (
    <motion.div 
          initial={{ y: '-100vw'}}
          animate={{y:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
          className='container'>
            {user &&
            <button className='survey_active_close' onClick={() => setActiveQuestionnaire(false)}>X</button>
            }
        <div className="welcom_page">
          {activeQuestionnaire &&
            <div className="action2b">
              <div className='shareIcons' onClick={() => setShare(true)}>
                <small>Share this Questionnaire</small>
                <Share activeQuestionnaire={activeQuestionnaire} userUrl={`https://albarrusurvey.com/questionnaires/${activeQuestionnaire?.id}`}/>
              </div>      
            </div>
          }
          <div className="survey_body">
                <h1>{currentQue?.title || activeQuestionnaire?.title} </h1>
          </div>
          <div className="welcome">
                <h2>{currentQue?.description || activeQuestionnaire?.description}</h2>
          </div>
          <button className='get_start' onClick={() => {setPage(1)}}>Get Started</button>
        </div>
  </motion.div>
  )
}

export default Welcome
