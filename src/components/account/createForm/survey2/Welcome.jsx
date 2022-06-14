import React, {useState} from 'react'
import {motion} from 'framer-motion'
// import RenderFields from '../../../elements/RenderFields'
// import { SurveyContext } from '../../../../contexts/SurveyContext';
// import { useContext } from 'react';
import Share from '../../Share'
import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../../../firebase';
import { async } from '@firebase/util';

const Welcome = ({go, next, activeQue, activeQuestionnaire, share, setShare, setActiveQuestionnaire, setPage, user, currentQue}) => {

  // console.log('user', user)

  const [sending, setSending] = useState(null)

  const surveyId = activeQue?.id || activeQuestionnaire?.id

  console.log('surid', surveyId)

  const handleNext =  async(e) => {
    e.preventDefault()
    setSending(true)

    // setPage(1)
    if(activeQue){
      try {

        addDoc(collection(db, "views"), {
          surveyId:surveyId,
          timeStamp: serverTimestamp()
  
        })
        setSending(null)
         setPage(1)
        
      } catch (error) {
        console.log(error)
      }
    }else{
      setPage(1)
    }

  }

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
                <h1>{activeQue?.title || activeQuestionnaire?.title} </h1>
          </div>
          <div className="welcome">
                <h2>{activeQue?.description || activeQuestionnaire?.description}</h2>
          </div>
          <button className='get_start' onClick={ handleNext} type='submit'>{sending? 'Waiting...' : 'Get Started'}</button>
        </div>
  </motion.div>
  )
}

export default Welcome
