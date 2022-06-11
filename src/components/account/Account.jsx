import React from 'react'
import Topbar from '../topbar/TopBar'
import Footer from '../footer/Footer'
import {motion} from 'framer-motion'
import './account.css'
import Dashbord from './Dashbord';
import { useState } from 'react';
import SurveyLists from './surveys/SurveyLists';
import Invoice from '../bills/Invoice';
import CreateSurvey from './surveys/CreateSurvey';
import RenderSurvey from './createForm/RenderSurvey';
import RenderReponces from './createForm/RenderReponces';
import Loading from '../Loading'
import PdfReceipt from './PdfReceipt'
import Billing from '../bills/Billing'


const Account = ({responces, users, surveys, setSurveys, user, subscribes}) => {

    const [activeSurvey, setActiveSurvey] = useState(false)
    const [activeQuestionnaire, setActiveQuestionnaire] = useState(null)
    const [invoices, setInvoices] = useState([])
    const [createInvoice, setCreateInvoices] = useState(null)
    const [payInvoice, setPayInvoice] = useState(null)  
    const [viewInvoice, setViewInvoice] = useState(null)  
    const [createSurvey, setCreateSurvey] = useState(null)
    const [messageAlert, setMessageAlert] = useState('')
    const cuUser = users?.find((u) => u.id === user?.uid)
    const [active, setActive] = useState(1)
    const userInvoices = invoices.filter((i) => i.userId === cuUser.id).filter((f) => f.status === 'Unpaid')
    const unPaidInvoice = surveys.filter((s) => s.userId === cuUser?.id).filter((f) => f.status === 'Unpaid')
    const userSurveys = surveys.filter((s) => s.userId === cuUser?.id)
    const [activeResponce, setActiveResponce] = useState(null)
    const [pdfReceipt, setPdfReceipt] = useState(null)


    const [page, setPage] = useState(0);

    // console.log('cu', cuUser)
    console.log('surveys', surveys)

     
 
    const props = { 
      setPage,
      setActive, 
      userSurveys,  
      userInvoices, 
      cuUser, users, 
      invoices, 
      setInvoices, 
      // setForm, 
      // formData, 
      setActiveSurvey, 
      activeSurvey ,
      createInvoice,
      setCreateInvoices,
      payInvoice,
      setPayInvoice,
      viewInvoice,
      setViewInvoice,
      createSurvey,
      setCreateSurvey,
      surveys,
      setSurveys,
      setActiveQuestionnaire,
      activeQuestionnaire,
      responces,
      unPaidInvoice, 
      setMessageAlert,
      activeResponce,
      setActiveResponce,
      user,
      cuUser,
      subscribes,
      pdfReceipt,
      setPdfReceipt,
    }

    const PageDisplay = () => {
      if(page === 0){
        return <SurveyLists {...props}/>
      }else if(page === 1){
        return <Dashbord {...props}/>
      }else if(page === 2){
        return <RenderSurvey {...props}/>
      }else if(page === 3){
        return <RenderReponces {...props}/>     
      }else if(page === 4){
        return <Billing {...props}/>
      }else if(page === 6){
        return <Invoice {...props}/>
      }else if(page === 7){
        return <CreateSurvey {...props}/>
      }else if(page === 8){
        return <PdfReceipt {...props}/>
      }
      
      
    }

    const user_survey = surveys.filter((s) => s.userId === user.uid)?.length;
    const paid_survey = subscribes.filter((s) => s.userId === user.uid)?.length
    const unpaid_surveys = user_survey - paid_survey

    // console.log('user_serv', user_survey)
    // console.log('psid_serv', paid_survey)
  

  return (
    <>
    {user?.photoURL || cuUser?.username ? 

    <>
    <Topbar cuUser={cuUser} user={user}/>
    <motion.div 
          initial={{ x: '-100vw'}}
          animate={{x:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
          className='account__container'> 
            {messageAlert != '' &&
            <div className="message_alert">
              {messageAlert}
            </div>
            }
            <div className="dashboard">
            <div className="dashbord_top">
                <div className="dash_left">
                  <div className="dash__home">
                    {/* <h1>Welcome, {cuUser?.userame}</h1>   */}
                    <h1>Welcome, {!cuUser? user?.displayName : cuUser?.username}</h1>                
                  </div>                    
                  <h3>{!cuUser? user?.email : cuUser?.email}</h3>
                </div>
                <div className="dash_right">
                   {unpaid_surveys > '0' &&
                      
                     <small className="unpaid_invoice" onClick={() => {setPage(6); setActive(3)}}>
                        {`You have ${unpaid_surveys} unpaid Invoice(s)`}
                      </small> 
                    }
    
                </div>
            </div>        
            
        </div>  
          <div className="components">
          <div className="survey_inner1_top">
                <div className="inner1_top_left">
                    <span className={`${active === 1? 'inner1_active_item': 'inner_item '}`} onClick={() => {setPage(0); setActive(1)}}>Home</span>
                    <span className={`${active === 2? 'inner1_active_item': 'inner_item '}`} onClick={() => {setPage(1); setActive(2)}}>Questionnaires</span> 
                    <span className={`${active === 3? 'inner1_active_item': 'inner_item '}`} onClick={() => {setPage(6); setActive(3)}}>Invoices</span>
                    {/* {active === 8 && 
                    <span className={`${active === 8? 'inner1_active_item': 'inner_item '}`} onClick={() => {setPage(8); setActive(8)}}>Receipt</span> 
                    } */}
                </div>                
            </div>
                {PageDisplay()}
            {/* <Component {...props}/>  */}
          </div>
                
     
    </motion.div>
    <Footer/>
    </>
    : <Loading />
  }

    </>
  )
}

// export {surveyRef}
export default Account