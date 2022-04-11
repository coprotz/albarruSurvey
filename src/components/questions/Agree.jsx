import React from 'react'

const Agree = ({value, name, setForm}) => {
  return (
    <div className="radio" value={value} onChange={setForm} >
        <input type="radio" className="radio_input" value='1' name={name} id='1'/>
        <label htmlFor="1" className='radio_label'  >Strong Disagree</label>
        <input type="radio" className="radio_input" value='2' name={name} id='2'/>
        <label htmlFor="2" className='radio_label'  >Disagree</label>   
        <input type="radio" className="radio_input" value='3' name={name} id='3'/>
        <label htmlFor="3" className='radio_label'  >Neutral</label> 
        <input type="radio" className="radio_input" value='4' name={name} id='4'/>
        <label htmlFor="4" className='radio_label'  >Agree</label> 
        <input type="radio" className="radio_input" value='5' name={name} id='5'/>
        <label htmlFor="5" className='radio_label'  >Strong Agree</label>                 
    </div>
  )
}

export default Agree
