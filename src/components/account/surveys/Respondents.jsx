import React from 'react'
import { FaChevronLeft } from "react-icons/fa";

const Respondents = ({values, setRespondents, userResponces}) => {

    const completed = userResponces.filter((u) => u.completed)
   
  return (
    <div className='ndents'>
        <div className="ndents_wrapper">
            <button onClick={() => setRespondents(null)}className='back1'><FaChevronLeft/></button>
            <h4>Companies responded to this survey({values.length})</h4>
        </div>
        <div className="res_table">
             <table className="table">
                <thead>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {values.map((item, index) => (
                    <tr key={index} className='tr'>  
                        <td data-label='SN'>{index+1}</td>                  
                        <td data-label='Company Name'>{item.fname}</td>
                        <td data-label='Company Email'>{item.fEmail}</td>
                        <td data-label='Status'>{item?.taneps? 'Completed' : 'NA'}</td>
                        <td data-label='Action'>action</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
    </div>
  )
}

export default Respondents
