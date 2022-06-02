import React, { useContext, useState }  from 'react'
import { GoCheck } from "react-icons/go"
import { FormContext } from '../../contexts/FormContext'


const Checkbox = ({e,i, register, errors, watch, setName, setActiveField}) => {

    const { que_id, name, title, choices, value, validation } = e
    
    const [submit, setSubmit] = useState(e)
    // const { fName } = name
  
    // console.log('name', name)
  
  
    // const handleChange = (field, value) => {
    //   let newQuest = {...e};
    //   newQuest[field] = value;
    //   setSubmit(newQuest)
    //   console.log(submit)
    // }

  return (
    <div className="element_single" >
        <h4 className='element_que'>{title}</h4>        
        {choices.map((c, index) => (
            <div className="ques_check" key={index}> 
                <div className="check_wrapper" 
                    // value={value}
                    id={que_id}
                    name={name}                
                    // value={submit[name]} 
                    // name={name}
                    onClick={() => setActiveField(e)}
                    // onChange={(e) => setName(e.target.value)} 
                    // onChange={e => handleChange(name, e.target.value)}
                    // {...register(name, { required: true })}
                    {...register(`${name}`, validation)} 
                  
                    >                               
                    <label 
                        htmlFor={c.que_id} 
                        className='check_Input_3'>
                            <input 
                                type="radio"                                 
                                name={c.name} 
                                value={c.value}
                                id={c.que_id}
                              
                                /> 
                            <button className='btn_que_check' type='button'>
                                <GoCheck/>
                            </button>{c.label} 
                    </label> 
                   
                </div>
            </div>
        ))} 
        {errors[name] && <span className='err_message'>{errors[name]['message']}</span>}
    </div> 
  )
}

export default Checkbox
