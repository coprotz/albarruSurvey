
import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Elements from '../../elements/Elements';
import RenderButtons from '../../elements/RenderButtons';
import { FormContext } from '../../../contexts/FormContext';

const test = 
    [   
        {test_id: "1", name: 'fname', value:"", type: 'text'},
        {test_id: "2", name: 'lname', value:"", type: 'text'},
        {test_id: "3", name: 'email', value:"", type: 'text'},
        {test_id: "4", name: 'city', value:"", type: 'text'},
        {test_id: "5", name: 'region', value:"", type: 'text'},
    ]

const Questionnaire = ({activeQue}) => {
    let { register, handleSubmit, formState: { errors, isValid },  watch } = useForm({mode: 'all'});

    

    // const temp_elements = questionnaire?.map((q) => q.elements)

    // console.log("temp",temp_elements)
    const [elements, setElements] = useState(null)

    const { queId } = useParams();
    const quest = activeQue.find((f) => f.id === queId)
    const pages = quest?.pages

    const [questionnaire, setQuestionnaire] = useState(pages)

    const [tests, setTests] = useState(null)

    useEffect(() => {
        setTests(test)
    })

    // console.log("test", tests)

    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage(cur => cur + 1)
    }

    const previousPage = () => {
        setPage(cur => cur -1)
    }

    useEffect(() => {
        setQuestionnaire(questionnaire[0].elements)
    },[])

    console.log("kwesh", questionnaire)

    const submitSurvey = () => {
        console.log(questionnaire)
    }

 

    const handleChange = (id, event) => {
       
        const values = [...questionnaire];
     
        console.log(values)
        values.forEach(field => {
            const { que_id, name, value, type } = field
            if(id === que_id){
                switch (type){
                    case 'boolean':
                        field['value'] = event.target.checked;
                        break;

                    default:
                        field['value'] = event.target.value;
                        break;
                }
                
            }
        })
   
        setQuestionnaire(values)

    }

 
 
  return (
      <FormContext.Provider value={{ handleChange }}>
        <form onSubmit={handleSubmit(submitSurvey)}>
            <motion.div 
                initial={{ y: '-100vw'}}
                animate={{y:0}} 
                transition={{ ease: "easeOut", duration: 0.5 }} 
                className="survey_wrapper3">  
                
                    <div className="survey_body">
                        <h1>{quest?.title} </h1>
                    </div>
                    <div className="welcome">
                        <h2>{quest?.description}</h2>
                    </div>
                    <div className="superv__2">
                        {quest?.pages.map((p, index) => (
                            <div className="pages_wrapper" key={index}>
                                {page === index &&
                                    <>
                                        <h3  className='pages_title'>{p.title}</h3>
                                        <h4 className='pages_description'>{p.description}</h4>
                                        <div className="elements_wrapper"> 
                                            {p.elements.map((e, i) => (                         
                                                <Elements 
                                                    e={e} 
                                                    i={i} 
                                                    index={index} 
                                                    nextPage={nextPage} 
                                                    watch={watch} 
                                                    register={register} 
                                                    errors={errors} 
                                                    key={e.que_id}
                                                   
                                                    />
                                            ))}                        
                                                                    
                                        </div> 
                                    </> 
                                }
                            </div>
                            
                        ))}
                    
                    </div>
                    <div className='form_btn'>
                        {page > 0 && 
                        <button className='back_page' onClick={previousPage}>Previous</button>}
                        <RenderButtons page={page} nextPage={nextPage} errors={errors} isValid={isValid}/>
                    </div>

            </motion.div>
        </form>
    </FormContext.Provider>
  )
}



export default Questionnaire
