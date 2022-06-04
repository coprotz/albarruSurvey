import React from 'react'

const Responces = ({responces, users, Questionnaires, surveys}) => {

  // const t = surveys.map(s => s.period)

  // console.log('t', t)
  
  // const RenderPeriod =() => {
  //   // switch()
  // }


  return (
    <div>
        <h4 className='admin_tab_title'>RESPONCES STATUS</h4>
       
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Title</th>         
          <th className='total'>Completed</th>   
          <th className='total'>Target Questionnaires</th> 
          <th className='total'>Percentanges Achieved</th>  
          <th className='total'>Max Period(Months)</th> 
          <th className='total'>Started</th>  
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {Questionnaires.map((s, index) => (
            <tr key={index}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Title' className='tab_column'>{s.title}</td>
              <td data-label='Completed'>{responces.filter(r => r.surveyId === s.id)?.length}</td>
              <td data-label='Target Questionnaires' className='messages_text'>{surveys.find(su => su.id ===s.id)?.questionnaires}</td>
              <td data-label='Percentages Achieved' className='messages_text'>
                {parseFloat(
                  (responces.filter(r => r.surveyId === s.id)?.length)
                  /(surveys.find(su => su.id ===s.id)?.questionnaires)*100).toFixed(2)}%
              </td>
              <td data-label='Max Period(Months)' className='messages_text'>
                {surveys.find(su => su.id ===s.id)?.period === '7 - 9 months'? '9' 
                : surveys.find(su => su.id ===s.id)?.period === '4 - 6 months'? '6'
                : surveys.find(su => su.id ===s.id)?.period === '1 - 3 months'? '3' : '12'
              }
              </td>
              <td data-label='Started' className='messages_text'>{new Date(surveys.find(su => su.id ===s.id)?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</td>
              <td data-label='Actions'><button>Delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Responces
