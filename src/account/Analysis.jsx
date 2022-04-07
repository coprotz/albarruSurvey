import React from 'react'
import Charts from './Charts'

const Analysis = () => {
  return (
    <div className="account_body">
      <h2 className='dashbord_title'>Framework for Adoption of a Full-fledged e-Procurement System on Public Construction Projects in Tanzania</h2>
      <div className="analysis_body">
        <h3 className='analysis_title'>Firm's Particulars</h3>      
        <div className="analysis">
          <div className="analysis_card">
            <h4>Firm's years Experience</h4>
            <Charts series={[5,45,8]} labels={['Below 5 yrs', '5 and 10 yrs', 'Above 10 yrs']}/>
          </div>
          <div className="analysis_card">
            <h4>Firm's Categories</h4>
            <Charts series={[10,5,8]} labels={['Contractors', 'Consultants', 'Suppliers']}/>
          </div>
          <div className="analysis_card">
            <h4>Contractors</h4>
            <Charts series={[5,5,12]} labels={['Civil', 'Building', 'Civil and Building']}/>
          </div>
          <div className="analysis_card">
            <h4>Consultants</h4>
            <Charts series={[1,5,12]} labels={['Architect', 'Quantity Surveying', 'Engineering']}/>
          </div>
          <div className="analysis_card">
            <h4>Registered with TANEPS</h4>
            <Charts series={[5,12]} labels={['Yes', 'No']}/>
          </div>
        </div>
      </div>
      <div className="analysis_body">
        <h3 className='analysis_title'>Establishment and implementation of e-Procurement system in the Country by TANeps</h3>      
        <div className="analysis">
          
          <div className="analysis_card">
            <h4>Firm's attendance during the stakeholders’ meeting by TANeps before launching the system</h4>
            <Charts series={[10,5,8,8,5]} labels={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}/>
          </div>
          <div className="analysis_card">
            <h4>Firm participation in tendering through TANeps</h4>
            <Charts series={[1,15,8,8,5]} labels={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}/>
          </div>
          <div className="analysis_card">
            <h4>Contractors</h4>
            <Charts series={[5,5,12]} labels={['Civil', 'Building', 'Civil and Building']}/>
          </div>
          <div className="analysis_card">
            <h4>Consultants</h4>
            <Charts series={[1,5,12]} labels={['Architect', 'Quantity Surveying', 'Engineering']}/>
          </div>
          <div className="analysis_card">
            <h4>Registered with TANEPS</h4>
            <Charts series={[5,12]} labels={['Yes', 'No']}/>
          </div>
        </div>
      </div>
  </div> 
  )
}

export default Analysis
