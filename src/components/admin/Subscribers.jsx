import React from 'react'


const Subscribers = ({subscribes, users}) => {

  // const ft = Questionnaire.map((f) => f.userId)



  // const tem_user = users.map((u) =>{
  //   if(ft.includes(u.id)) return u
    
  // })
  // console.log('users', users)

  // console.log('tem_user', tem_user)
  return (
    <div>
        <h4 className='admin_tab_title'>SUBSCRIBERS</h4>
      
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Survey Id</th>
          <th className='total'>User Name</th>       
          <th className='total'>Amount Paid</th>
        </thead>
        <tbody className='total'>
          {subscribes?.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Survey Id' className='tab_column'>{s.surveyId}</td>    
              <td data-label='UserName'>{s.user}</td>              
              <td data-label='Amount Paid'>{s.paid_amount}</td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Subscribers
