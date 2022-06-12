import React, {useState, useRef} from 'react'
import Charts from '../../Charts'
import Respondents from '../../surveys/Respondents'
import { useReactToPrint } from 'react-to-print';
import { GrPrint } from "react-icons/gr";
import { BiPrinter } from "react-icons/bi";

const Responce2 = ({
    setActiveResponce, 
    activeQuestionnaire, 
    responces,
    setPage,
    activeResponce,
    cuUser,
    go,
    s
}) => {

    const userResponces = responces?.filter((q) => q?.surveyId === activeResponce?.id)

    console.log('res', responces)

    console.log('activeRes', activeResponce)

    const values = userResponces?.map((s) => s.values)

    const [respondents, setRespondents] = useState(null)

    
    const under18 = values.filter(item => item.age === 'under18').length
    const btw18_35 = values.filter(item => item.age === 'btw18_35').length
    const btw35_55 = values.filter(item => item.age === 'btw35_55').length
    const above55 = values.filter(item => item.age === 'above55').length

    const female = values.filter(item => item.gender === 'female').length
    const male = values.filter(item => item.gender === 'male').length
  
    const muslem = values.filter(item => item.religion === 'muslem').length
    const christian = values.filter(item => item.religion === 'christian').length
    const other = values.filter(item => item.religion === 'other').length

    const primary = values.filter(item => item.education === 'primary').length
    const secondary = values.filter(item => item.education === 'secondary').length
    const college = values.filter(item => item.education === 'college').length
    const versity = values.filter(item => item.education === 'versity').length

    const single = values.filter(item => item.marital === 'single').length
    const married = values.filter(item => item.marital === 'married').length
    const divorce = values.filter(item => item.marital === 'divorce').length
    const widor = values.filter(item => item.marital === 'widor').length

    const employee = values.filter(item => item.job === 'employee').length
    const student = values.filter(item => item.job === 'student').length
    const unemployee = values.filter(item => item.job === 'unemployee').length
 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <div className="account_body">
      <button className='survey_active_close' onClick={() =>  setPage(1)}>X</button>
      <h2 className='dashbord_title1'>{activeResponce?.title}</h2>
      {!respondents?
      <>
      <div className='res_wrapper'>
        <div className="res_number">
          <h4>Total Respondents: {userResponces.length}</h4>
          <button onClick={() => setRespondents(true)} className='btn'>View</button>
        </div>
        <div className="res_upload">         
          <button className='get_start res_print' onClick={ handlePrint }><BiPrinter/>Print</button>       
        </div>
        
      </div>
      
      <div className="analysis" ref={componentRef}>
          <div className="analysis_card">
              
            <h4>Age</h4>
            <Charts series={[under18,btw18_35,btw35_55, above55]} labels={['Under 18', '18 and 35 yrs', ' 35 and 55 yrs','Above 55 yrs']}/>
          </div>
          <div className="analysis_card">
            <h4>Gender</h4>
            <Charts series={[female,male]} labels={['Female', 'Male']}/>
          </div>
          <div className="analysis_card">
            <h4>Religion</h4>
            <Charts series={[muslem,christian,other]} labels={['Muslem', 'Christian', 'Other']}/>
          </div>
          <div className="analysis_card">
            <h4>Education</h4>
            <Charts series={[primary,secondary, college, versity]} labels={['Primary', 'Secondary', 'College', 'University']}/>
          </div>
          <div className="analysis_card">
            <h4>Merital Status</h4>
            <Charts series={[single,married, divorce, widor]} labels={['Single', 'Married', 'Divorce', 'Widor']}/>
          </div>
          <div className="analysis_card">
            <h4>Employment Status</h4>
            <Charts series={[employee,student, unemployee]} labels={['Employees', 'Students', 'Unemployees']}/>
          </div>
        </div>
        </>
        :
        <Respondents values={values} setRespondents={setRespondents} userResponces={userResponces}/>
        }
      
     
  </div> 
  )
}

export default Responce2
