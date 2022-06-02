import React from 'react'

const Rating = ({e, i, setName, setActiveField,register, watch, errors}) => {

    // let id = (i * 3.2518 + index + 2.1205 * 6)*12.589 -index
    const { que_id, name, title, validation, minRateDescription, maxRateDescription} = e
   
  return (  
    <div className="element_single" key={i}>
    <h4 className='element_que'>{title}</h4> 
        <div className="element_inputs">
            <span>{minRateDescription}</span>
            <div className='check_rating' 
                // value={name} 
                id={que_id}
                name={name} 
                // onChange={setForm}
                onClick={() => setActiveField(e)}
                // onChange={(e) => setName(e.target.value)}
                
            >
                <label htmlFor={que_id+'a'} className='radio1'>                    
                    <input type="radio" className="radi" value='1' name={name} id={que_id+'a'}  {...register(`${name}`, validation)} />
                    <div className='active_check'>1</div>
                </label>
                <label htmlFor={que_id+'b'} className='radio1'>                    
                    <input type="radio" className="radi" value='2' name={name} id={que_id+'b'}  {...register(`${name}`, validation)} />
                    <div className='active_check'>2</div>
                </label>
                <label htmlFor={que_id+'c'} className='radio1'>                    
                    <input type="radio" className="radi" value='3' name={name} id={que_id+'c'} {...register(`${name}`, validation)} />
                    <div className='active_check'>3</div>
                </label>
                <label htmlFor={que_id+'d'} className='radio1'>                    
                    <input type="radio" className="radi" value='4' name={name} id={que_id+'d'} {...register(`${name}`, validation)} />
                    <div className='active_check'>4</div>
                </label>
                <label htmlFor={que_id+'e'} className='radio1'>                    
                    <input type="radio" className="radi" value='5' name={name} id={que_id+'e'} {...register(`${name}`, validation)} />
                    <div className='active_check'>5</div>
                </label>
            
            </div>
            <span>{maxRateDescription}</span>
                        
        </div>
        {errors[name] && <span className='err_message'>{errors[name]['message']}</span>}
    </div>
  )
}

export default Rating
