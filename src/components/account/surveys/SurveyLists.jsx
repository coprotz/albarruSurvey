
import {motion} from 'framer-motion'
import { IoIosCreate, IoIosStats, IoMdShare, IoIosAddCircle } from "react-icons/io";
import { deleteDoc, doc, serverTimestamp, updateDoc,} from "firebase/firestore";
import { db } from "../../../firebase";
import { useState } from 'react'
import useStorage from '../../../hook/useStorage';




const SurveyLists = ({
    setPage,
    surveys, 
    setSurveys, 
    userSurveys, 
    setViewInvoice,
    setCreateSurvey,   
    setActive,
    setMessageAlert,
    user,
    subscribes,
    setPdfReceipt,
  }) => {


  
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const [sending, setSending] = useState(null)
    const { url, perc } = useStorage(file)
    // const ft = Questionnaires.map((f) => f.id)
    const types = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']
   
    // console.log('creat', surveys)

    // console.log('user', user.uid)

    const uSurveys = surveys.filter((s) => s.userId === user.uid)

    // console.log('u',uSurveys)

  
    const selectedFile = (e, id) => {
      let selected = e.target.files[0]
    
      setSending(true)
      if (selected && types.includes(selected.type)){
        setFile(selected)
        setError('')
      }else {
        setFile(null);
        setError('Please select a word file (doc or docx)')
      }
   
      
        if(url !== null){
           setSending(null)
         }
        
        }

    const deleteSurvey = async (id) => {
     
      try {
        await deleteDoc(doc(db, 'surveys', id))
        setSurveys(surveys.filter((item) => item.id !==id))
      } catch (error) {
        console.log(error
          )
      }
      setMessageAlert('Survey deleted successiful')
      setTimeout(() => {
        setMessageAlert('')
      }, 3000);
    };

    const handleQues = async(id) => {
    
      try {
        const surveyRef = doc(db, 'surveys', `${id}`)
        await updateDoc(surveyRef, {
          file: url,
          timeStamp: serverTimestamp()
        })
      } catch (error) {
          console.log(error)
      }
      setMessageAlert('Questions attached successifull')
      setTimeout(() => {
        setMessageAlert('')
      }, 5000);

    }

    const RenderDashboard = () => {
    

      if(uSurveys.length > 0){
        return (
          <div className="surveys">
                <div className="survey_top">
                    <div className="survey_top_1">
                        You have {userSurveys?.length} survey(s)
                    </div>
                    <div className="survey_top_2">
                        <button className='survey_btn'onClick={() => {setPage(7); setActive(1)}}>Create A Survey</button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                      <th>Title</th>
                      <th>Questions</th>              
                      <th>Invoice No.</th>
                      <th>Payment Status</th>
                      <th>Actions</th>
                    </thead>
                    <tbody>
                      {uSurveys?.map((item) => (
                        <tr key={item.id}>                     
                        <td data-label='Title'>{item.title}</td>
                        <td data-label='Questions'>
                          <a href={item.file} target='_blank'>
                            {item.file? 
                            
                            'View Questions' 
                            : 
                            <>
                              {url!== null? <span onClick={() => handleQues(item.id)} className='attach_que'>Attach Now</span>:
                                <div className="file_input">                
                                  <label 
                                    htmlFor="file" 
                                    className='file_attach'>{sending? 'Please Wait...' : 'Attach Questions'}</label>
                                  <input 
                                    type="file"
                                    id='file'
                                    style={{display: "none"}}                
                                    onChange={selectedFile}
                                  />
                                </div>
                              }
                            </>
                    
                            }
                          </a>
                        </td>                        
                        <td data-label='Invoice No'><button className='billing__btn' onClick={() => {setViewInvoice(item); setPage(4); setActive(3)}}>{item.invoiceNo}</button></td>
                        <td data-label='Payment Status'>{subscribes?.find((s)=> s.surveyId === item.id)?.status ==='paid'? 'Paid' : 'Unpaid' }</td>
                        <td data-label='Actions'>
                          {subscribes?.find((s)=> s.surveyId === item.id)?.status ==='paid'? <button onClick={() => {setPdfReceipt(item); setPage(8); setActive(8)}} className='btn'>View Receipt</button>:
                          <>
                          <button onClick={() => setCreateSurvey(item)}>Update</button>
                          <button onClick={() => deleteSurvey(item.id)}>Delete</button>
                          </>}
                        </td>
                      </tr>
                      ))}
                      
                    </tbody>
                  </table>
            </div> 
        )

      }else {
        return (
          <div className="dash_body">
          <div className="dash_body_inner">
              <div className="inner__1">                    
                  <h3>To get started is only <span>Four Simple steps</span> from here..</h3>
                  <div className="dash_body_cards">
                      <div className="card_grid" onClick={() =>setPage(7)}>
                          <IoIosCreate/>
                          <h4>Create A Survey</h4>
                      </div>
                      <div className="card_grid">
                          <IoIosAddCircle/>
                          <h4>Add Questions</h4>
                      </div>
                      <div className="card_grid">
                          <IoMdShare/>
                          <h4>Share A Questionnaire</h4>
                      </div>
                      <div className="card_grid">
                          <IoIosStats/>
                          <h4>Analyse Results Roll In!</h4>
                      </div>
                  </div>
              </div>

              <button className='btn_create' onClick={() => {setPage(7); setActive(1)}}>Create a Survey</button>
          </div>
      </div>
        )
      }
    }


  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
        {RenderDashboard()}
    </motion.div>
  )
}

export default SurveyLists
