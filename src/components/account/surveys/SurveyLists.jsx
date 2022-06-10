
import {motion} from 'framer-motion'
import Billing from '../../bills/Billing'
import CreateSurvey from './CreateSurvey'
import { IoIosCreate, IoIosStats, IoMdShare, IoIosAddCircle, IoIosAttach } from "react-icons/io";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useState } from 'react'
import useStorage from '../../../hook/useStorage';
import { useEffect } from 'react';
import { Questionnaires } from '../../../data/surveys';


const SurveyLists = ({
    go, 
    setPage,
    surveys, 
    cuUser, 
    setSurveys, 
    userSurveys, 
    setCreateInvoices, 
    createInvoice,
    viewInvoice,
    setViewInvoice,
    createSurvey,
    setCreateSurvey,  
    activeSurvey,
    setActiveSurvey,
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

    const ft = Questionnaires.map((f) => f.id)

    // console.log('filter', ft)

    // console.log('su', surveys)

    const types = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']

    const tem_sur = userSurveys.find((d) =>{
      if(ft.includes(d.id)) return d.id
      
    })

  
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

    

    // const paid = subscribes?.find((s)=> s.surveyId === "3yn8aqIG37nLvxq3vcyu").status

    // console.log('paid', paid)
    
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          {userSurveys?.length != '0'?
          <>
          {!createSurvey?
            <>
            {!viewInvoice?
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
                      {/* <th>Payment Status</th> */}
                      <th>Invoice No.</th>
                      <th>Payment Status</th>
                      <th>Actions</th>
                    </thead>
                    <tbody>
                      {userSurveys?.map((item) => (
                        <tr key={item.id}>
                        {/* <td>
                          <button className='billing__btn' onClick={() => {go('5'); setSurvey(item)}}>{item.title}</button>
                        </td> */}
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
                            // <button className='attach_btn' onClick={() =>handleQues(item.id)}>Attach Questions</button>
                            }
                          </a>
                        </td>  
                        {/* <td data-label='Payment Status'>{item.status}</td>                 */}
                        <td data-label='Invoice No'><button className='billing__btn' onClick={() => setViewInvoice(item)}>{item.invoiceNo}</button></td>
                        {/* <td data-label='Status'>{tem_sur?.id == item.id? 'Completed' :  item.status === 'Unpaid'? 'Pending' : 'Processing' }</td> */}
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
            
            : <Billing 
                createInvoice={createInvoice} 
                setCreateInvoices={setCreateInvoices} 
                cuUser={cuUser}
                viewInvoice={viewInvoice}
                setViewInvoice={setViewInvoice}
                setMessageAlert={setMessageAlert}
                subscribes={subscribes}
                setActive={setActive}
                setPage={setPage}
                setPdfReceipt={setPdfReceipt}
            /> 
            }
            </>
            : <CreateSurvey 
                createSurvey={createSurvey} 
                setCreateSurvey={setCreateSurvey} 
                go={go} 
                cuUser={cuUser}
                user={user}
                
            /> 
          }
          </>
         :
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
       
       
      }
    </motion.div>
  )
}

export default SurveyLists
