import React from 'react'

const Poor = ({name, value, setForm}) => {
  return (
    <div className="radio" value={value} onChange={setForm}>
        <input type="radio" className="radio_input" value='1' name={name} id='1'/>
        <label htmlFor="1" className='radio_label'  >Poor</label>
        <input type="radio" className="radio_input" value='2' name={name} id='2'/>
        <label htmlFor="2" className='radio_label'  >Fair</label>   
        <input type="radio" className="radio_input" value='3' name={name} id='3'/>
        <label htmlFor="3" className='radio_label'  >Good</label> 
        <input type="radio" className="radio_input" value='4' name={name} id='4'/>
        <label htmlFor="4" className='radio_label'  >Very Good</label> 
        <input type="radio" className="radio_input" value='5' name={name} id='5'/>
        <label htmlFor="5" className='radio_label'  >Excellent</label>                 
    </div>
  )
}

export default Poor
