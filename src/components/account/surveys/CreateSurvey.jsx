import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import './survey.css'
import {
  collection,  
  addDoc,
  serverTimestamp,
  setDoc,
  doc
  
} from "firebase/firestore";
import { auth, db, storage, database } from '../../../firebase';
import { BiX } from "react-icons/bi";
import { IoIosAttach } from "react-icons/io";

import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import ProgressBar from '../../progress/Progress';
import useStorage from '../../../hook/useStorage';
import { uid } from 'uid'
import { updateCurrentUser } from 'firebase/auth';


const ques = [
  {id: '1 - 5 questions', value: 0.05},
  {id: '6 - 10 questions', value: 0.07},
  {id: '11 - 15 questions', value: 0.09},
  {id: '16 - 20 questions', value: 0.11},
  {id: '21 - 25 questions', value: 0.13},
  {id: '26 - 30 questions', value: 0.13},
  {id: '31 - 35 questions', value: 0.17},
  {id: '36 - 40 questions', value: 0.19},
  {id: '41 - 45 questions', value: 0.21},
  {id: '46 - 50 questions', value: 0.23},
  
  
]

const periods = [
  {id: '1 - 3 months', value: 1},
  {id: '4 - 6 months', value: 1.5},
  {id: '7 - 9 months', value: 2},
  {id: '10 - 12 months', value: 2.5}
]



const CreateSurvey = ({ createSurvey, setCreateSurvey, setActive, setMessageAlert, setPage, user, cuUser}) => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState(null)
  const [questionnaires, setQuestionnaires] = useState(100)
  const [period, setPeriod] = useState(null)
  const [file, setFile] = useState(null)
  const [sending, setSending] = useState(null)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  
  const { url, perc } = useStorage(file)

  // console.log(createSurvey)

  const navigate = useNavigate()
  
  
  const qns = ques?.find((q) => q?.id === questions)  
  const time = periods?.find((p) => p?.id === period)  
  const totalCost = (questionnaires * 2 * qns?.value * time?.value).toLocaleString(undefined, {minimumFractionDigits:2})
  
  const types = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']
  
  const selectedFile = (e) => {
    let selected = e.target.files[0]
  
  
    if (selected && types.includes(selected.type)){
      setFile(selected)
      setError('')
    }else {
      setFile(null);
      setError('Please select a word file (doc or docx)')
    }
  }
  
    const getRandomId = (min = 0, max = 500000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num =  Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(6, "0")
    };

    
    
  
  
  
    const handleSurvey = async (e) => {
      e.preventDefault();       
      setSending(true)
    
       const data = {
        userId: user.uid,
        name: user?.displayName || cuUser?.username,
        title: title, 
        questions: questions,
        questionnaires: questionnaires,
        period: period,
        totalCost: Number(totalCost),
        message: message,
        invoiceNo: 1026+getRandomId(),
        status: 'Unpaid', 
        file: url,
            
      }

      if(!createSurvey){
            try {
              await addDoc(collection(db, "surveys"), {
                    ...data,
                    timeStamp: serverTimestamp(),
                    
              });
              setMessageAlert('Survey created successiful')
              setTimeout(() => {
                setMessageAlert('')
              }, 3000);
      
              // setCreateSurvey(null)
              setSending(null)
              // setPeriod(null)
              // setTitle('')
              // setMessage('')
              // setQuestionnaires(100)
              // setQuestions(null)
              // setFile(null)
              setPage(0)
              setActive(1)
                      
            } catch (error) {
              setError(error.message)
                // console.log(error)
              
            }
          }
          else{
            try {
                await setDoc(doc(db, "surveys", `${createSurvey.id}`), {
                ...data,
                timeStamp: serverTimestamp()
              })
            } catch (error) {
              setError(error.message)
            }
            
          }

         
    
 
  };
  

  
    return (
      <motion.div 
      initial={{ y: '-100vw'}}
      animate={{y:0}} 
      transition={{ ease: "easeOut", duration: 0.5 }} 
      className="account_body">
        <div className="survey_inner1">
            <div className="form_heading">
              <h3>{createSurvey?.id? 'Edit Survey' : 'Create a Survey'}</h3>
              <button className='invoice__btn' onClick={() => {setCreateSurvey(null);setPage(0)}}><AiOutlineClose/></button>
            </div>
            { error && <span className='error'>{error}</span>}
              
              <div className="survey_main_body">
                <form className='survey_form' onSubmit={handleSurvey}>
                  <div className= "survey__title">               
                      <div className='define'>
                        <div className="group__price">
                          <label htmlFor="" className='label'>Title of Study</label>
                         
                          <textarea 
                            name="title" 
                            value={title || createSurvey?.title}                         
                            placeholder='Type your Title of your Study'
                            onChange={(e) => setTitle(e.target.value)}
                            className='group_input1' 
                            ></textarea>
                        </div>
                        <div className="group_define">
                            <label htmlFor="" className='label'>How many completed questionnaires do you plan<span>(min 100)</span></label>
                            <div className="input">
                              <input 
                                  type="number" 
                                  min='100' 
                                  max='1000'
                                  name='questionnaires'
                                  className='group_input'  
                                  step='1' 
                                  value={questionnaires}
                                  onChange={(e) => setQuestionnaires(e.target.value)}
                                  required
                                  id='questionnaires'
                              />
                            </div>
                           
                                            
                        </div>
                        <div className="group_define">
                            <label htmlFor="" className='label'>How many questions in each questionnaire do you need?</label>
                            <div className="input">
                              <select 
                                      name="questions" 
                                      id='questions'
                                      className='group_input' 
                                      value={questions}
                                      onChange={(e) => setQuestions(e.target.value)}
                                      required
                                      >
                                      <option value="">--Select questions--</option>
                                      <option value="1 - 5 questions">1 - 5 questions</option>
                                      <option value="6 - 10 questions">6 - 10 questions</option>
                                      <option value="11 - 15 questions">11 - 15 questions</option>
                                      <option value="16 - 20 questions">16- 20 questions</option>
                                      <option value="21 - 25 questions">21 - 25 questions</option>
                                      <option value="26 - 30 questions">26 - 30 questions</option>
                                      <option value="31 - 35 questions">31 - 35 questions</option>
                                      <option value="36 - 40 questions">36 - 40 questions</option>
                                      <option value="41 - 45 questions">41 - 45 questions</option>
                                      <option value="46 - 50 questions">46 - 50 questions</option>                         
                              </select>
                            </div>
                            
                        </div>
                        <div className="group_define">
                            <label htmlFor="" className='label'>How long does your survey last?</label>
                            <div className="input">
                              <select 
                                      name="period" id="period" 
                                      className='group_input' 
                                    
                                      value={period}
                                      onChange={(e) => setPeriod(e.target.value)}
                                      required
                                      >                               
                                      <option value="">--Select months--</option>                 
                                      <option value="1 - 3 months">1 - 3 months</option>
                                      <option value="4 - 6 months">4 - 6 months</option>
                                      <option value="7 - 9 months">7 - 9 months</option>
                                      <option value="10 - 12 months">10 - 12 months</option>                                                           
                              </select>
                            </div>
                        
                        </div>
                        <div className="group__price">
                          <label htmlFor="" className='label'>Message</label>
                         
                          <textarea 
                            name="message" 
                            value={message || createSurvey?.message}                         
                            placeholder='Type addition comments'
                            onChange={(e) => setMessage(e.target.value)}
                            className='group_input1' 
                          ></textarea>
                        </div>
                        {totalCost !== 'NaN'?
                          <div className="group_define">
                              <label htmlFor="" className='label_cost'>Total Survey Costs</label>
                              
                              <span className='total_cost'>$ {totalCost}</span>
                          </div>
                        : null}
                        <div className="group_file">           
                          {file &&
                              <div className="file_display">
                                  <div>{file.name}</div>           
                                  <button onClick={() => setFile("")}><BiX/></button>      
                              </div>
                          }
                          {url === null?
                          <div className="file_input">                
                              <label 
                                  htmlFor="file" 
                                  className='file_label'><IoIosAttach/>Attach Questions(only doc or docx accepts)</label>
                              <input 
                                  type="file"
                                  id='file'
                                  style={{display: "none"}}                
                                  onChange={selectedFile}
                              />
                          </div> : 'Questions attached Successiful'}
                          
                          
                      </div>
                        {error && <div className='error'>{error}</div>}
                        {file && <ProgressBar file={file} setFile={setFile}/>}
                        <div className="btn_wrapper">
                          <button 
                            className='btn_submit'
                            disabled={perc !== null && perc <100}
                            >{sending? 'Sending...' : 'Submit'}
                          </button>
                          {/* {file? file.name : null} */}
                        </div>
                       
                      </div>          
                  </div> 
                </form>
               
              </div> 
                 
        </div>
      </motion.div>
    )
  }
  

export default CreateSurvey
