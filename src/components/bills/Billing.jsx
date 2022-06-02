import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import Logo from '../images/icon1.png'
import { useState } from 'react';
import './billing.css'
import { AiOutlineClose } from "react-icons/ai";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useForm, useStep } from 'react-hooks-helper'

import {
  collection,  
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
  updateDoc
 
  
} from "firebase/firestore";

import { auth, db, storage, database } from '../../firebase';
import { useEffect } from 'react';




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

const queners = [
  {id: '1 - 3 months', value: 1},
  {id: '4 - 6 months', value: 1.5},
  {id: '7 - 9 months', value: 2},
  {id: '10 - 12 months', value: 2.5}
]


const Billing = ({cuUser,  viewInvoice, setViewInvoice, setMessageAlert}) => {


  const [sending, setSending] = useState(null)



  const handlePay = async(e) => {
    e.preventDefault();
     setSending(true)

    try {
        const surveyRef = doc(db, 'surveys', `${viewInvoice.id}`)
        await updateDoc(surveyRef, {
          status: 'Paid',
          timeStamp: serverTimestamp()
        })
        setMessageAlert('Your bill has been paid successifull, notification has been sent to your email')
        setTimeout(() => {
          setMessageAlert('')
        }, 5000);
        setSending(null)
        setViewInvoice(null)
    } catch (error) {
        console.log(error)
    }
  

    const data = {
      name: cuUser.lastname,
      email: cuUser.email,
      message: `${cuUser?.firstname} ${cuUser?.lastname} has paid his/her invoice no ${viewInvoice?.invoiceNo} the total of $ ${viewInvoice?.totalCost} for title ${viewInvoice?.title}`,
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        timeStamp: serverTimestamp(),
        
      });
    } catch (error) {
      console.log(error)
    }

    
    


  }

  useEffect(() => {

  },[])

  return (                  
        <motion.div 
              initial={{ y: '-100vw'}}
              animate={{y:0}} 
              transition={{ ease: "easeOut", duration: 0.5 }} 
              className="bill_inner">   
              <div className="bill_top">
                <div className="bill_left">
                  <img src={Logo} alt="ALBARRU" />
                  <h4>123-1125-555</h4>
                </div>
                <div className="bill_right">
                  <h4>AlBarru Survey Inc.</h4>
                  <h4>Email: sales@albarrusurvey.com</h4>
                  <h4>Mobile Number: +44 8885 8888</h4>

                </div>
                <button className='invoice__btn' onClick={() => setViewInvoice(null)}><AiOutlineClose/></button>
              </div>
              <div className="bill_body">
                <div className="bill_body_left">
                 
                    <table className='table'>
                      <thead>
                        <th className='descr'>Description</th>
                        <th className='qty'>Qty</th>
                        <th className='total'>Line Total</th>
                      </thead>
                      <tbody className='total'>
                        <tr >
                          <td data-label='Deceription' className='desc_wrapper'>
                            <div className="dec_grup">
                              Title: <span>{viewInvoice?.title}</span>
                            </div>
                            <div className="dec_grup">
                              Questionnaires: <span>{viewInvoice?.questionnaires}</span>
                            </div>
                            <div className="dec_grup">
                              Questions: <span>{viewInvoice?.questions}</span>
                            </div>
                            <div className="dec_grup">
                              Period: <span>{viewInvoice?.period}</span>
                            </div>
                          </td>
                          <td data-label='Qty'>1</td>
                          <td data-label='Line Total'>$ {viewInvoice?.totalCost}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bill_btn">
                      {viewInvoice?.status === 'Paid'? <h1 className='paidInvoice'>PAID</h1> :
                      <button className='btn_submit' onClick={handlePay}>{sending? 'Paying...' : 'Pay a Bill'}</button> 
                      }
                    </div>
                    
                </div>
                <div className="bill_body_right">
                  <div className="right_inner">
                    <label htmlFor="">Amount Due</label>
                    <h1><span>$ {viewInvoice?.status === 'Paid'? '0' : viewInvoice?.totalCost}</span></h1>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">Bill To</label>
                    <h4>{ cuUser?.firstname} {cuUser?.lastname}</h4>
                    <h4>{ cuUser?.email}</h4>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">{viewInvoice?.status === 'Paid'? 'Receipt Number' : 'Invoice Number'}</label>
                    <h4>{viewInvoice?.invoiceNo}</h4>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">{viewInvoice?.status === 'Paid' ? 'Paid Date' : 'Date of Issue'}</label>
                    <h4>{new Date(viewInvoice?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</h4>
                  </div>
                 
                

                  

                </div>
              </div>
          </motion.div>
       
      
    // </motion.div>
   
  )
}

export default Billing
