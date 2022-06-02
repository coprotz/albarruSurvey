import React from 'react'
import { useState } from 'react'
import Billing from './Billing'
import {motion} from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai";




const Invoice = ({

    userSurveys, 

    cuUser, 

    setViewInvoice,
    viewInvoice,
    setMessageAlert
  }) => {

   
   
  return (
    
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
         {!viewInvoice ? 
         <>
          {userSurveys.length != '0' ?
             <table className="table">
                <thead>
                  <th>Invoice No</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </thead>
                <tbody>
                  {userSurveys?.map((item) => (
                    <tr key={item.id}>
                    <td data-label='Invoice No'>
                      <button className='billing__btn' onClick={() => setViewInvoice(item)}>{item.invoiceNo}</button>
                    </td>
                    <td data-label='Description'>Questions: {item.questions}, Questionnaires: {item.questionnaires}, Period: {item.period} </td>
                    <td data-label='Amount'>$ {item.totalCost}</td>
                    <td data-label='Status'>{item.status}</td>
                  </tr>
                  ))}
                  
                </tbody>
              </table>

              : <span className='dont_hv'>You dont have any unpaid Invoice</span>
            
          }
        </>
        
        : <Billing 
            setMessageAlert={setMessageAlert}
            cuUser={cuUser}
            setViewInvoice={setViewInvoice}
            viewInvoice={viewInvoice}
            /> }
        
        
        
        
        
    </motion.div>
   
   
  
    
  )
}

export default Invoice
