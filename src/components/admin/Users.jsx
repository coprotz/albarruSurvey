import React from 'react'

const Users = ({users, surveys}) => {

  return (
    <div>
        <h4 className='admin_tab_title'>RESEARCHERS</h4>    
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Name</th>
          <th className='total'>Email</th>
          <th className='total'>No of Surveys</th> 
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
      
           
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
