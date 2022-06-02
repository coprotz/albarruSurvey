import React from 'react'


const Quests = ({Questionnaires, users}) => {

  const ft = Questionnaires.map((f) => f.userId)



  const tem_user = users.map((u) =>{
    if(ft.includes(u.id)) return u
    
  })
  console.log('users', users)

  console.log('tem_user', tem_user)
  return (
    <div>
        <h4 className='admin_tab_title'>QUESTIONNAIRES</h4>
      
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Title</th>
          <th className='total'>Researcher Name</th>              
    
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {Questionnaires?.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Title' className='tab_column'>{s.title}</td>    
              <td data-label='Researcher Name'>{users.find((u) => u.id === s.userId)?.username}</td>              
              <td data-label='Actions'><button>Reply</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Quests
