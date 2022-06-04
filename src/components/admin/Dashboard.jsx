import React from 'react'

const Dashboard = ({users, surveys}) => {


 
  return (
    <div className="admin_panel">
    <h4 className='admin_tab_title'>Recent surveys</h4>
    <div className="admin_table">
      <table className='table'>
        <thead>
          <th className='descr'>SN</th>
          <th className='qty'>Survey Title</th>
          <th className='total'>Owners</th>
          <th className='total'>Survey Cost ($)</th>
          <th className='total'>Payment Status</th>
          <th className='total'>Questions Attached</th>
          {/* <th className='total'>Status</th> */}
          <th className='total'>Actions</th>
        </thead>
        <tbody className='total'>
          {surveys.map((s, index) => (
            <tr key={s.id}>
              <td data-label='SN'>{index+1}</td>     
              <td data-label='Survey Title' className='tab_column'>{s.title}</td>
              <td data-label='Researcher'>{s.name}</td>
              <td data-label='Survey Cost'>{s.totalCost}</td>
              <td data-label='Payments Status'>{s.status}</td>
              <td data-label='Questions Attached'>{s.file? 'attached' : 'Not Attached'}</td>
              {/* <td data-label='Status'></td> */}
              <td data-label='Actions'></td>
            </tr>
           ))}
        </tbody>
      </table>
      </div>
  </div>
  )
}

export default Dashboard
