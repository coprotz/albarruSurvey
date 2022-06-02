import React from 'react'

const Users = ({users, surveys}) => {

  const title = surveys.find(s => s.userId === 'fo9bqahj5XgnnuADRqEngiJ42mJ2').title

  console.log('users', users)

  console.log('ti', title)
  return (
    <div>
        <h4 className='admin_tab_title'>RESEARCHERS</h4>
        {/* <div className="messages_inner">
            <button>Inbox</button>
            <button>Outbox</button>
        </div> */}
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Name</th>
          <th className='total'>Email</th>
          <th className='total'>No of Surveys</th>        
          {/* <th className='total'>Status</th> */}
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
        {/* {surveys.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='From' className='tab_column'>{users.find(us => us.id === s.userId)?.username}</td>
              <td data-label='Email'>{users.find(us => us.id === s.userId)?.email}</td>
              <td data-label='No of Survey'>{users.filter(us => us.id === s.userId)?.length}</td>
            
              <td data-label='Actions'><button>Delete</button></td>
            </tr>
           ))} */}
           
            {users.map((s, index) => (
              <tr key={s.id}>
                <td data-label='SN'>{index+1}</td>     
                <td data-label='From' className='tab_column'>{s.username}</td>
                <td data-label='Email'>{s.email}</td>
                <td data-label='No of Survey'>{surveys?.filter(su => su?.userId === s.id)?.length}</td>
              
                <td data-label='Actions'><button>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
