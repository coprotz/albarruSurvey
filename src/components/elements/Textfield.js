const Textfield = ({e, setName, setActiveField, register, watch, errors, sub}) => {

  

  const { que_id, placeholder, title, validation, value, type, name } = e


 
  return (
    <div className="element_single">
      <h4 className='element_que'>{title}</h4> 
      <input 
        type='text' 
        placeholder={placeholder? placeholder : ""}    
        name={name}   
        // value={value}
        className='que_input_text'
        id={que_id}     
        onFocus={() => setActiveField(e)}     
        // onChange={(e) => setName(e.target.value)} 
        {...register(`${name}`, validation)} 
  
      /> 
      {errors[name] && <span className='err_message'>{errors[name]['message']}</span>}

    </div>
  )
}

export default Textfield
