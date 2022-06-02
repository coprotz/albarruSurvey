import React from 'react'
import {Questionnaires} from '../../data/surveys';

const Surveys = ({surveys, users, currentUser}) => {

  // console.log('cu', currentUser)

  const ft = surveys.map((s) => s.userId)

  console.log('ft', ft)

  const tem_user = users.find((u) =>{
    if(ft.includes(u.id)) return u.id
    
  })

   const res = users.find((u) => u.id === 'Cjv2DKEnVSbYCbEuqNI9pYuqera2').firstname

   console.log('res', res)
  // const reseracher = users.find((d) => d.id === currentUser?.uid)
  return (
    <div>
        <h4 className='admin_tab_title'>SURVEYS</h4>
        {/* <div className="messages_inner">
            <button>Inbox</button>
            <button>Outbox</button>
        </div> */}
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Title</th>
          <th className='total'>Questionnaires</th>
          <th className='total'>Questions</th>  
          <th className='total'>Period</th>
          <th className='total'>Total Costs</th>
          <th className='total'>Invoice No</th>
          <th className='total'>Payment Status</th>
          <th className='total'>Completed?</th>
          <th className='total'>Researcher Name</th>      
          {/* <th className='total'>Status</th> */}
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {surveys.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Title' className='tab_column'>{s.title}</td>
              <td data-label='Questionnaires'>{s.questionnaires}</td>
              <td data-label='Questions'>{s.questions}</td>
              <td data-label='Period'>{s.period}</td>
              <td data-label='Totla Cost'>$ {s.totalCost}</td>
              <td data-label='Invoice No'>{s.invoiceNo}</td>
              <td data-label='Payment Status'>{s.status}</td>
              <td data-label='Completed'>{s.status}</td>
              <td data-label='Researcher Name'>{users.find((u) => u.id === s.userId)?.username }</td>
              {/* <td data-label='Messages' className='messages_text'>{s.message}</td> */}
            
              <td data-label='Actions'><button>Reply</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Surveys
