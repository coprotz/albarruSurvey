import React from 'react'
import { useNavigate } from 'react-router-dom'


const Subscriptions = ({user, surveys, cuUser, viewInvoice}) => {

    const navigate = useNavigate()
    // console.log('user', surveys)
  return (
    <div className='subscrip'>
        <div className="sub_wrapper">
            <h2>Thank you {cuUser?.username}, we have received your payment for survey, our team will send you a link for your questionnaire within 12 hours</h2>
            <small>You can get your receipt from the dashboard</small>
            <div className="subscrip_btn">
                <button onClick={() => navigate('/account')} className='btn_submit'>Dashbord</button>
                {/* <button className='btn'>Download Receipt</button> */}
            </div>
        </div>
        

    </div>
  )
}

export default Subscriptions
