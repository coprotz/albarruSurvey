import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import RenderFields from '../../../elements/RenderFields'
import { FaChevronLeft } from "react-icons/fa";
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { ValuesContext } from '../../../../contexts/ValuesContext';
import {
  collection,  
  addDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  doc
  
} from "firebase/firestore";
import {  db } from '../../../../firebase';

const Benefits = ({go, next, previous, quest, name, setName, activeField, setActiveField, activeQuestionnaire, activeQue, responces, sub, setSub}) => {

  let { register, handleSubmit, formState: { errors, isValid }, setError, clearError, watch } = useForm({mode: 'all'});

  const { pages, setPages } = useContext(SurveyContext)
  const page5 = pages.find((p) => p.name === 'page5')

  const temp_elements = page5.elements;
  const [data, setData] = useState(temp_elements);

  const [sending, setSending] = useState(null)

  // const { values, setValues } = useContext(ValuesContext)

  // let watchValues = watch(activeField?.name['name']) ;

  // useEffect(() => {
  //   setValues(watchValues)
  // },[])

  let watchValues = watch(name['name']) ;

  console.log('show2', watchValues)

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
    if(pg.name === 'page5'){
      return {...pg, elements: data}
    }
    return pg;
  })
  setPages(newPage)
//  }
},[data])

const temp_res = responces?.find((f) => f?.values?.id === sub?.id)

useEffect(() => {
  setSub(sub)
},[temp_res])

console.log('sub', sub)


const handleNext = async(e) => {
  e.preventDefault()
  setSending(true)
  try {
    const surveyRef = doc(db, 'responces', `${sub.id}`)

    const newValues = Object.assign(sub.values, watchValues)
    await updateDoc(surveyRef, {
        
        values: newValues,
        timeStamp: serverTimestamp(),
        
  });
    
  } catch (error) {
    console.log(error)
  }
  // console.log('newSurvey',newSurvey)
  setSending(null) 
  go('7')
 
}

// const submitData = JSON.stringify(values, null, 2)

// console.log('submitData',submitData)

// console.log('survey5', pages)

  return (
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="survey_wrapper3"> 
          <div className="welcome_input">
            <div className="welcome_action">
              <button onClick={() => {previous()}} className='back1'><FaChevronLeft/></button>
              <small className='main__title'>{activeQue?.title || activeQuestionnaire.title}</small>
            </div>
            <h3  className='pages_title'>{page5.title}</h3>
            <h4 className='pages_description'>{page5.description}</h4>
          </div> 
      
          <div className="elements_wrapper"> 
            {page5?.elements.map((e) => (                         
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
       

    </motion.div>
  )
}

export default Benefits