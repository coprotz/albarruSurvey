import React from 'react'
import { GrView, GrBarChart, GrAnalytics, GrLogout, GrNodes, GrCompliance, GrMoney } from "react-icons/gr";

const Dashbord = () => {
  return (
    <div className="account_body">
        <h2 className='dashbord_title'>Framework for Adoption of a Full-fledged e-Procurement System on Public Construction Projects in Tanzania</h2>
        <div className="dashboard">
            <div className="card">
                <GrView/>
                <h1>120</h1>
                <h3>Viewed</h3>
            </div>
            <div className="card">
                <GrNodes/>
                <h1>120</h1>
                <h3>Start Responding</h3>
            </div>
            <div className="card">
                <GrCompliance/>
                <h1>120</h1>
                <h3>Completed</h3>
            </div>
        </div>
    </div> 
  )
}

export default Dashbord
