import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import RenderFields from '../../../elements/RenderFields'
import { FaChevronLeft } from "react-icons/fa";
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { useContext } from 'react';
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

const Implementation = ({go, responces, next, activeQue, previous, setPage, name, setName, activeField, setActiveField, activeQuestionnaire, sub, setSub}) => {

  let { register, handleSubmit, formState: { errors, isValid }, setError, clearError, watch } = useForm({mode: 'all'});

  const { pages, setPages } = useContext(SurveyContext)
  const page3 = pages.find((p) => p.name === 'page3')

  const temp_elements = page3.elements;
  const [data, setData] = useState(temp_elements);

  const [sending, setSending] = useState(null)

  

  let watchValues = watch(activeField?.name['name']) ;

  // console.log('show2', watchValues)


  // console.log('sub', sub)

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
     if(pg.name === 'page2'){
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

  console.log('sub', sub)
 
//  console.log('survey3', pages)

const handleNext = async(e) => {
  e.preventDefault()
  setSending(true)

  const newValues = Object.assign(sub.values, watchValues)

  setSub({
    title: sub.title,
    userId: sub.userId,
    surveyId: sub.surveyId,
    values: newValues
  })


  setSending(null) 
  setPage(4)
 
}

  return (
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="survey_wrapper3"> 
    <div className="welcome_input">
        <div className="welcome_action">
          <button onClick={() => {setPage(2)}} className='back1'><FaChevronLeft/></button>
          <small className='main__title'>{activeQue?.title || activeQuestionnaire.title}</small>
        </div>
        <h3  className='pages_title'>{page3.title}</h3>
        <h4 className='pages_description'>{page3.description}</h4>
      </div>
    
          <div className="elements_wrapper"> 
            {page3?.elements.map((e, i) => (                         
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
              onClick={handleNext} 
              disabled={!isValid}
              >{sending? 'Please wait' : 'Next'}</button> 
                                  
         </div> 
         {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

    </motion.div>
  )
}

export default Implementation
