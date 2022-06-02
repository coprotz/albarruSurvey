import React from 'react'

const Textarea = ({e, setName, setActiveField, register, watch, errors}) => {

  const { name, placeholder, title, validation, value, que_id,} = e

  return (
    <div className="element_single">
      <h4 className='element_que'>{title}</h4>    
        <textarea 
            name={name}                                      
            rows="5"
            className='panel_input'
            placeholder={placeholder} 
            // value={value? value : ''} 
            id={que_id}     
            onFocus={() => setActiveField(e)} 
            {...register(`${name}`, validation)}     
            // onChange={(e) => setName(e.target.value)} 
            type='comment'
            >

      </textarea>
      {errors[name] && <span className='err_message'>{errors[name]['message']}</span>}
    </div>
  )
}

export default Textarea
