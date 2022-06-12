import React from 'react'
import moment from 'moment'


const Subscribers = ({subscribes, users}) => {

  console.log('sub', subscribes)
  return (
    <div>
        <h4 className='admin_tab_title'>SUBSCRIBERS</h4>
      
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Survey Id</th>
          <th className='total'>User Name</th>  
          <th className='total'>User Id</th>      
          <th className='total'>Amount Paid</th>
          <th className='total'>Time</th>
        </thead>
        <tbody className='total'>
          {subscribes?.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Survey Id' className='tab_column'>{s.surveyId}</td>    
              <td data-label='UserName'>{s.user}</td>   
              <td data-label='UserName'>{s.userId}</td>             
              <td data-label='Amount Paid'>$ {s.paid_amount}</td>
              <td data-label='Amount Paid'>{moment(s?.time.toDate()).fromNow()}</td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Subscribers
