import React, { useContext, useState }  from 'react'
import { FormContext } from '../../contexts/FormContext'

const Email = ({e, i, setActiveField, setName, register, watch, errors}) => {

  const { que_id, name, placeholder, title, validation, value, type} = e

  return (
    <div className="element_single" key={i}>
      <h4 className='element_que'>{title}</h4> 
      <input 
        type='email' 
        placeholder={placeholder? placeholder : ""}  
        name={name} 
        // value={value || ''}
        className='que_input_text'
        id={que_id}
        onFocus={() => setActiveField(e)}
        // value={value} 
        // onChange={(e) => setName(e.target.value)}        
        // required  
        {...register(`${name}`, validation)} 

      /> 
     {errors[name] && <span className='err_message'>{errors[name]['message']}</span>}

    </div>
  )
}

export default Email
