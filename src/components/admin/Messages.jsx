import React from 'react'

const Messages = ({messages, setNewMsg}) => {
  return (
    <div className='messages_wrapper'>
        
        <h4 className='admin_tab_title'>Messages</h4>
        <div className="messages_inner">
            <button>Inbox</button>
            <button>Outbox</button>
        </div>
       <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>From</th>
          <th className='total'>Email</th>
          <th className='total'>Messages</th>        
          {/* <th className='total'>Status</th> */}
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {messages.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='From' className='tab_column'>{s.name}</td>
              <td data-label='Email' className='tab_column'>{s.email}</td>
              <td data-label='Messages' className='tab_column'>{s.message}</td>
            
              <td data-label='Actions'><button onClick={() => setNewMsg(s)}>Reply</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Messages
