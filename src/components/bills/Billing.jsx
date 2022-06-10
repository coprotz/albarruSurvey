import React, {useEffect}from 'react'
import {motion} from 'framer-motion'
import Logo from '../images/icon1.png'
import { useState } from 'react';
import './billing.css'
import { AiOutlineClose } from "react-icons/ai";
import { collection, addDoc, serverTimestamp, doc,updateDoc, onSnapshot} from "firebase/firestore";
import { db, functions } from '../../firebase';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { useUserAuth } from '../../context/UserAuthContext';
import StripeCheckout from 'react-stripe-checkout';
import { httpsCallable } from 'firebase/functions';
// import Stripe from 'stripe';


const Billing = ({cuUser,  viewInvoice, setViewInvoice, setMessageAlert, subscribes, setActive, setPdfReceipt, setPage }) => {
  // const Stripe = require('stripe')
  const [sending, setSending] = useState(null)
  const { user } = useUserAuth()

  // console.log('sub', subscribes)

  const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');

  const handlePay = async(e) => {
    e.preventDefault();
     setSending(true)

     const stripePromise = loadStripe("pk_test_51L7BhfEk74y2bHhrlDyIuTasaYeh5lQ1HwJ49FOUCbL4KvFsRkNnJWXlmaeakpoPybk1Sox6NdyP4K9XR3DzTwGu007evrqtpi")
     const stripe = await stripePromise;
     const data = {
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "https://albarrusurvey.com/subscriptions",
        cancel_url: "https://albarrusurvey.com/account",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: "usd",
                    unit_amount: (viewInvoice?.totalCost) * 100,
                    product_data: {
                        name: `For Invoice No. ${viewInvoice.invoiceNo}`,
                    },
                },
            },         
        ],
        metadata: {
          id: viewInvoice.id,
          user:viewInvoice.name,
          userId: user.uid,
          paid_amount: viewInvoice.totalCost,
        },
       
    
     };

     createStripeCheckout(data).then(response => {
       const sessionId = response.data.id      
       stripe.redirectToCheckout({ sessionId })
     })

  }

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
                  <h4>Email: info@albarrusurvey.com</h4>
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
                      {subscribes?.find((s)=> s.surveyId === viewInvoice.id)?.status ==='paid'?  
                      <div className='receipt_get'>
                         <h1 className='paidInvoice'>PAID</h1> 
                         <button className='btn' onClick={() => {setPdfReceipt(viewInvoice); setPage(8); setActive(8)}}>View Receipt</button>
                      </div>
                     
                      :                   
                      <button className='btn_submit' onClick={handlePay}>{sending? 'Open Secured Payment Gateway...' : 'Pay a Bill'}</button> 
                      }
                    </div>
                    
                </div>
                <div className="bill_body_right">
                  <div className="right_inner">
                    <label htmlFor="">Amount Due</label>
                    <h1><span>$ {subscribes?.find((s)=> s.surveyId === viewInvoice.id)?.status ==='paid'?  '0' : viewInvoice?.totalCost}</span></h1>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">Bill To</label>
                    <h4>{ cuUser?.firstname} {cuUser?.lastname}</h4>
                    <h4>{ cuUser?.email}</h4>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">{subscribes?.find((s)=> s.surveyId === viewInvoice.id)?.status ==='paid'?  'Receipt Number' : 'Invoice Number'}</label>
                    <h4>{viewInvoice?.invoiceNo}</h4>
                  </div>
                  <div className="right_inner">
                    <label htmlFor="">{subscribes?.find((s)=> s.surveyId === viewInvoice.id)?.status ==='paid'?  'Paid Date' : 'Date of Issue'}</label>
                    <h4>{new Date(subscribes?.find((s)=> s.surveyId === viewInvoice.id)?.time?.seconds * 1000).toLocaleDateString("en-US")}</h4>
                  </div>
                 
                

                  

                </div>
              </div>
          </motion.div>
       
      
    // </motion.div>
   
  )
}

export default Billing
