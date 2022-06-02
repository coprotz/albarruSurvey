import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Thanks = () => {

    const navigate = useNavigate()


  return (
    <div className='thanks_wrapper'>
      Thank you for your time for accomplishing my survey
      <div>
        <button onClick={() => navigate('/')}>Complete Questionnaire</button>
      </div>
      
    </div>
  )
}

export default Thanks
