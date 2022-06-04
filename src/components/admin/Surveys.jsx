import React from 'react'
import { deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase";


const Surveys = ({surveys, users, setErrMessage }) => {

  const deleteSurvey = async (id) => {
    // e.preventDefault()
     
    try {
      await deleteDoc(doc(db, 'surveys', id))
      // setSurveys(surveys.filter((item) => item.id !==id))
    } catch (error) {
      setErrMessage(error.message)
    }
    // setMessageAlert('User deleted successiful')
    // setTimeout(() => {
    //   setMessageAlert('')
    // }, 3000);
  };



  return (
    <div>
      <h4 className='admin_tab_title'>SURVEYS</h4>
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
              <td data-label='Researcher Name'>{s? s.name : users.find((u) => u.id === s.userId)?.username }</td>
                    
              <td data-label='Actions' onClick={() => deleteSurvey(s.id)}><button>Delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Surveys
