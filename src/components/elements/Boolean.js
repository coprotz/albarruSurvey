const Boolean = ({e, i,  setName, setActiveField, activeField, register, watch, errors}) => {

  const { que_id, name, placeholder, title, validation, value, type } = e

  let watchValues = watch(e.name['taneps']) ;
  let showField = e.visibleIf ? watchValues[e.visibleIf['name']] === e.visibleIf['value'] : true;

  // console.log('log', activeField?.name)
  // console.log('bolenValue', value)

  console.log('show', watchValues.taneps)

  return (
    <div className="element_single" key={i}>
      <h4 className='element_que'>{title}</h4> 
      <label className="boolean" key={name}>                                   
        <input type='checkbox' 
          name={name} 
          id={que_id} 
          // checked={value} 
          onClick={() => setActiveField(e)}
          // onChange={(e) => setName(e.target.checked)} 
          {...register(`${name}`)}  
        />
        <div className="checker">{watchValues.taneps? 'YES' : 'NO'}</div>                                                                      
    </label> 
    </div>
  )
}

export default Boolean
