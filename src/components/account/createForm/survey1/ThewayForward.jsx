import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import RenderFields from '../../../elements/RenderFields'
import { FaChevronLeft } from "react-icons/fa";
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import {
  collection,  
  addDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  doc
  
} from "firebase/firestore";
import {  db } from '../../../../firebase';

const ThewayForward = ({go, sub, setSub, responces, setPage, currentQue, activeQue, quest, name, setName, activeField, setActiveField, activeQuestionnaire, setActiveQuestionnaire }) => {

  let { register, handleSubmit, formState: { errors, isValid }, setError, clearError, watch } = useForm({mode: 'all'});

  const { pages, setPages } = useContext(SurveyContext)
  const page6 = pages.find((p) => p.name === 'page6')

  const temp_elements = page6.elements;
  const [data, setData] = useState(temp_elements);
  const [sending, setSending] = useState(null)
  const [err, setErr] = useState(null)



  const navigate = useNavigate()

 useEffect(() => {
   const newData = data.map(obj => {
     if(obj.que_id === activeField?.que_id){
       return {...obj, value: name}
     }
     return obj;
   })

   setData(newData)
 },[name])

 useEffect(() => {
  const newPage = pages.map(pg => {
    if(pg.name === 'page6'){
      return {...pg, elements: data}
    }
    return pg;
  })
  setPages(newPage)
//  }
},[data])

const temp_res = responces?.find((f) => f.values.id === sub?.id)

  useEffect(() => {
    setSub(sub)
  },[temp_res])

  // console.log('sub', sub)

// console.log('survey6', pages)

const submitResponce = async(e) => {
  e.preventDefault()
  setSending(true)

  // const submitData = pages.map((item) => item)
  const newValues = Object.assign(sub.values, watchValues)

  setSub({
    title: sub.title,
    userId: sub.userId,
    surveyId: sub.surveyId,
    // completed: 'true',
    values: newValues
  })

   try {
          await addDoc(collection(db, "responces"), {        
          ...sub,
          completed:'true',
          timeStamp: serverTimestamp(),
          
    });
    
  } catch (error) {
    console.log(error)
  }

  console.log('log', sub)
  // console.log('newSurvey',newSurvey)
  setSending(null) 
  if(activeQuestionnaire){
    setActiveQuestionnaire(null)
  }else{
    navigate('/thanks')
  }
 
}

let watchValues = watch(activeField?.name['name']) ;

  return (
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="survey_wrapper3"> 
    <san>{err? err : null}</san>
       <div className="welcome_input">
        <div className="welcome_action">
          <button onClick={() => {setPage(5)}} className='back1'><FaChevronLeft/></button>
          <small className='main__title'>{activeQue?.title || activeQuestionnaire.title}</small>
        </div>
        <h3  className='pages_title'>{page6.title}</h3>
        <h4 className='pages_description'>{page6.description}</h4>
      </div>
  
          <div className="elements_wrapper"> 
            {page6?.elements.map((e) => (                         
              <RenderFields 
              e={e} 
              key={e.que_id}           
              setActiveField={setActiveField}
              activeField={activeField}
              setName={setName}
              data={data}
              register={register}
              watch={watch}
              errors={errors}
                />
            ))} 
            <button 
              className='btn_submit' 
              type='submit' 
              onClick={submitResponce} 
              disabled={!isValid}
              >{sending? 'Sending...' : 'Submit'}</button>
                                  
         </div> 

    </motion.div>
  )
}

export default ThewayForward
