import React from 'react'
// import {Questionnaires} from '../../data/surveys';

const Quests = ({Questionnaires, users, currentUser}) => {

  const ft = Questionnaires.map((f) => f.userId)

  // const temp_users = users.filter((u) => u.id)

  console.log('ft', ft)

  const tem_user = users.map((u) =>{
    if(ft.includes(u.id)) return u
    
  })
  console.log('users', users)

  console.log('tem_user', tem_user)
  return (
    <div>
        <h4 className='admin_tab_title'>QUESTIONNAIRES</h4>
        {/* <div className="messages_inner">
            <button>Inbox</button>
            <button>Outbox</button>
        </div> */}
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Title</th>
          <th className='total'>Researcher Name</th>              
          {/* <th className='total'>Status</th> */}
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {Questionnaires?.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Title' className='tab_column'>{s.title}</td>
              {/* <td data-label='Researcher Name'>{tem_user?.id === s.userId ? tem_user?.firstname : null}</td> */}
              <td data-label='Researcher Name'>{users.find((u) => u.id === s.userId)?.username}</td>
              {/* <td data-label='Messages' className='messages_text'>{s.message}</td> */}
            
              <td data-label='Actions'><button>Reply</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Quests
