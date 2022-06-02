import React,  { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import RenderFields from '../../../elements/RenderFields'
import '../../../styles/createSurvey.css'
import { FaChevronLeft } from "react-icons/fa";
import { SurveyContext } from '../../../../contexts/SurveyContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {
  collection,  
  addDoc,
  serverTimestamp,
 
  
} from "firebase/firestore";
import {  db } from '../../../../firebase';
import { useForm } from 'react-hook-form'




const FirmDetails = ({
    go, 
    previous, 
    activeQue, 
    name, 
    setName, 
    activeField, 
    setActiveField, 
    activeQuestionnaire,
    setActiveQuestionnaire,
    responces,
    sub,
    setSub
   }) => {

  let { register, formState: { errors, isValid }, watch } = useForm({mode: 'all'});
  
  const { pages, setPages } = useContext(SurveyContext)
  const page1 = pages.find((p) => p.name === 'page1')
  const [err, setErr] = useState(null)
  let watchValues = watch(name['name']) ;
 
  const [values, setValues] = useState(null)



  useEffect(() => {
    setValues(watchValues)
  },[])

 
  const navigate = useNavigate()

  const temp_elements = page1.elements;
  const [data, setData] = useState(temp_elements);



 useEffect(() => {
   const newData = data.map(obj => {
     if(obj.que_id === activeField?.que_id){
       return {...obj, value: name}
     }
     return obj;
   })

   setData(newData)
 },[name])


const btnBack = () => {
  previous();
}



const [sending, setSending] = useState(null)

const temp_res = responces?.filter((f) => f?.surveyId === activeQuestionnaire?.id || activeQue?.userId)

const next2 = temp_res?.find(v => v?.values?.fEmail === watchValues?.fEmail)




  const handleNext = async(e) => {
    e.preventDefault()
    setSending(true)

    const newSurvey = {
      title: activeQue?.title || activeQuestionnaire?.title,
      userId: activeQue?.userId || activeQuestionnaire?.userId,
      surveyId: activeQue?.id || activeQuestionnaire?.id,
      values: watchValues
    }


    if(watchValues.taneps){
      setSub(newSurvey)
      go('3')
    }else{
       try {
          await addDoc(collection(db, "responces"), {
              ...newSurvey,
              timeStamp: serverTimestamp(),
              
          });
          setSending(null)
          if(activeQuestionnaire && !watchValues.taneps){
            setActiveQuestionnaire(null)
          }else if(!activeQuestionnaire && !watchValues.taneps){
            navigate('/thanks')
          }
          

        } catch (error) {
          setErr(error.message)
       
        }

    }

  
  }


  return (
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="survey_wrapper3"> 
      <div className="welcome_input">
        <div className="welcome_action">
          <button type='button' onClick={btnBack} className='back1'><FaChevronLeft/></button>
          <small className='main__title'>{activeQue?.title || activeQuestionnaire.title}</small>
        </div>
        <h3  className='pages_title'>{page1.title}</h3>
        <h4 className='pages_description'>{page1.description}</h4>
   
      </div>    
      <div className="elements_wrapper"> 
            {page1?.elements.map((e) => (                         
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
                sub={sub}
                />
            ))} 

            {/* {watchValues.taneps?  */}
            <button 
              className='btn_submit' 
              type='submit' 
              onClick={handleNext} 
              disabled={!isValid}
            >{watchValues.taneps? sending? 'Please wait...' : 'Next' : sending? 'Sending...' : 'Submit'}</button> 
            {/* : 
            <button className='btn_submit' type='submit' onClick={submitResponce} disabled={!isValid}>{sending? 'Sending...' : 'Submit'}</button>
            } */}
                                  
      </div> 
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

</motion.div>
  )
}

export default FirmDetails
