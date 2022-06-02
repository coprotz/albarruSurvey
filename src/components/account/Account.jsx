import React from 'react'
import Topbar from '../topbar/TopBar'
import Footer from '../footer/Footer'
import {motion} from 'framer-motion'
import './account.css'
import { useForm, useStep } from 'react-hooks-helper'
import Dashbord from './Dashbord';
import BillingMain from './BillingMain';
import { useState } from 'react';
import Share from './Share';
import Users from './Users';
import Survey from './surveys/Survey';
import SurveyLists from './surveys/SurveyLists';
import Invoice from '../bills/Invoice';
import CreateSurvey from './surveys/CreateSurvey';
import RenderSurvey from './createForm/RenderSurvey';
import RenderReponces from './createForm/RenderReponces';

const defaultData = {
  title: '',
  welcome: '',
  prefix: '',
  firstname:'',
  lastname:'',
  supervisors:'',
  target: '',
  sec_Name:'',

}


const steps = [
    {id: 'SurveyList', Component: SurveyLists},
    {id: 'Dashbord', Component: Dashbord},
    {id: 'Questionnaire', Component: RenderSurvey},
    {id: 'Analysis', Component: RenderReponces},
    {id: 'Billing', Component: BillingMain},
    {id: 'Share', Component: Share},
    {id: 'Users', Component: Users},
    {id: 'Survey', Component: Survey},    
    {id: 'Invoices', Component: Invoice},
    {id: 'CreateSurvey', Component: CreateSurvey},

]





const Account = ({responces, users, surveys, setSurveys, user}) => {

    const [activeSurvey, setActiveSurvey] = useState(false)
    const [activeQuestionnaire, setActiveQuestionnaire] = useState(null)
    const { step, navigation} = useStep({ steps, initialStep: 0 })
    const { Component} = step
    const { go, next, previous } = navigation
    const [formData, setForm] = useForm(defaultData)
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

  
 
  const props = { 
    go, 
    setActive,
    next, 
    previous,
    userSurveys, 
    steps, 
    userInvoices, 
    cuUser, users, 
    invoices, 
    setInvoices, 
    setForm, 
    formData, 
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
    user
  }
  

  return (

    
    <>
    {user?.email? 

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
                   {!unPaidInvoice.length != '0' ? null
                      
                    : <small className="unpaid_invoice" onClick={() => {go('Invoices'); setActive(3)}}>
                        {`You have ${unPaidInvoice?.length} unpaid Invoice(s)`}
                      </small> 
                    }
    
                </div>
            </div>        
            
        </div>  
          <div className="components">
          <div className="survey_inner1_top">
                <div className="inner1_top_left">
                    <span className={`${active === 1? 'inner1_active_item': 'inner_item '}`} onClick={() => {go('SurveyList'); setActive(1)}}>Home</span>
                    <span className={`${active === 2? 'inner1_active_item': 'inner_item '}`} onClick={() => {go('Dashbord'); setActive(2)}}>Surveys</span> 
                    <span className={`${active === 3? 'inner1_active_item': 'inner_item '}`} onClick={() => {go('Invoices'); setActive(3)}}>Invoices</span> 
                </div>                
            </div>

            <Component {...props}/> 
          </div>
                
     
    </motion.div>
    <Footer/>
    </>
    : <div className='loading'>Loading....</div>
  }

    </>
  )
}

// export {surveyRef}
export default Account