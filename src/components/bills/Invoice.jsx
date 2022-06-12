import React from 'react'
import { useState } from 'react'
import Billing from './Billing'
import {motion} from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai";




const Invoice = ({
    user,
    userSurveys, 
    cuUser, 
    setViewInvoice,
    viewInvoice,   
    setMessageAlert,
    subscribes,
    setPage,
    setActive,
    setPdfReceipt,
    surveys
  }) => {

    // console.log('surveys', surveys)
   
  return (
    
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
       
         <>
          {userSurveys.length != '0' ?
             <table className="table">
                <thead>
                  <th>Invoice No</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {userSurveys?.map((item) => (
                    <tr key={item.id}>
                    <td data-label='Invoice No'>
                      <button className='billing__btn' onClick={() => {setViewInvoice(item); setPage(4); setActive(3)}}>{item.invoiceNo}</button>
                    </td>
                    <td data-label='Description'>Questions: {item.questions}, Questionnaires: {item.questionnaires}, Period: {item.period} </td>
                    <td data-label='Amount'>$ {item.totalCost}</td>
                    <td data-label='Status'>{subscribes?.find((s)=> s.surveyId === item.id)?.status ==='paid'? 'Paid' : 'Unpaid' }</td>
                    <td data-label='Action'>
                      {subscribes?.find((s)=> s.surveyId === item.id)?.status ==='paid'? 
                      <button className='btn' onClick={() => {setPdfReceipt(viewInvoice); setPage(8); setActive(8)}}>View Receipt</button>
                      : 
                      <button className='btn_black' onClick={() => {setViewInvoice(item); setPage(4); setActive(3)}}>Pay a Bill</button> 
                      }
                      
                    </td>
                  </tr>
                  ))}
                  
                </tbody>
              </table>

              : <span className='dont_hv'>You dont have an invoice</span>
            
          }
        </>
        
    
        
        
        
        
        
    </motion.div>
   
   
  
    
  )
}

export default Invoice
