import React, {useState} from 'react'
import Charts from '../Charts'
import Respondents from './Respondents'

const Responces = ({
    setActiveResponce, 
    activeQuestionnaire, 
    responces,
    activeResponce,
    cuUser,
    go,
    s
}) => {

    const userResponces = responces?.filter((q) => q?.surveyId === activeResponce?.id)

 
    const values = activeResponce.map((s) => s.values)

    console.log('activeRes', activeResponce)
    console.log('Res1', responces)

    console.log('values', values)

    // const name = values.map(item => item.fname)
    // const email = values.map(item => item.fEmail)

    const [respondents, setRespondents] = useState(null)

    

    const civil = values.filter(item => item.contractor === 'civil').length
    const build = values.filter(item => item.contractor === 'building').length
    const civbid = values.filter(item => item.contractor === 'civil_building').length

    const contractor = values.filter(item => item.category === 'contractor').length
    const consultant = values.filter(item => item.category === 'consultant').length
    const supplier = values.filter(item => item.category === 'supplier').length

    const qs = values.filter(item => item.consultant === 'qs').length
    const arch = values.filter(item => item.consultant === 'architect').length
    const eng = values.filter(item => item.consultant === 'engineer').length

    const bel5 = values.filter(item => item.experience === 'less5yrs').length
    const betw = values.filter(item => item.experience === 'bwt5_10').length
    const abv10 = values.filter(item => item.experience === 'abv10yrs').length

    const yesTan = values.filter(item => item.taneps === true).length
    const noTan = values.filter(item => item.taneps === false).length

    const dont = values.filter(item => item.whyNo === 'dont_know').length
    const nt_ready = values.filter(item => item.whyNo === 'not_ready').length
    const no_reason = values.filter(item => item.whyNo === 'no_reason').length



    // const below5 = userResponces?.values.filter((v) => v.experience === 'less5yrs')

    // console.log('bel', below5)


  return (
    <div className="account_body">
      <button className='survey_active_close' onClick={() =>  go('Dashbord')}>X</button>
      <h2 className='dashbord_title1'>{activeResponce?.title}</h2>
      {!respondents?
      <>
      <div className='res_wrapper'>
        <div className="res_number">
          <h4>Total Respondents: {userResponces.length}</h4>
          <button onClick={() => setRespondents(true)} className='btn'>View</button>
        </div>
        <div className="res_upload">
          <h4>Export file as Excell:</h4>
          <button onClick={() => alert('Haaaaa... umbea tu bado...')}>Upload</button>
        </div>
        
      </div>
      
      <div className="analysis">
          <div className="analysis_card">
              
            <h4>Firm's years Experience</h4>
            <Charts series={[bel5,betw,abv10]} labels={['Below 5 yrs', '5 and 10 yrs', 'Above 10 yrs']}/>
          </div>
          <div className="analysis_card">
            <h4>Firm's Categories</h4>
            <Charts series={[contractor,consultant,supplier]} labels={['Contractors', 'Consultants', 'Suppliers']}/>
          </div>
          <div className="analysis_card">
            <h4>Contractors</h4>
            <Charts series={[civil,build,civbid]} labels={['Civil', 'Building', 'Civil and Building']}/>
          </div>
          <div className="analysis_card">
            <h4>Consultants</h4>
            <Charts series={[arch,qs, eng]} labels={['Architect', 'Quantity Surveying', 'Engineering']}/>
          </div>
          <div className="analysis_card">
            <h4>Registered with TANEPS</h4>
            <Charts series={[yesTan,noTan]} labels={['Yes', 'No']}/>
          </div>
          <div className="analysis_card">
            <h4>Reasons why not registered with Taneps</h4>
            <Charts series={[dont,nt_ready, no_reason]} labels={['Do not know', 'Not ready', 'No reason']}/>
          </div>
        </div>
        </>
        :
        <Respondents values={values} setRespondents={setRespondents} userResponces={userResponces}/>
        }
      
     
  </div> 
  )
}

export default Responces
