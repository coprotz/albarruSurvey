import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';

const Billing = () => {
  return (
   


    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
      <div className="bill_inner">   
        <div className="bill_top">
          <div className="bill_left">
            <h1>Takwimu</h1>
            <h4>123-1125-555</h4>
          </div>
          <div className="bill_right">
            <h4>Takwimu Survey Inc.</h4>
            <h4>Email: info@takwimu.com</h4>
            <h4>Mobile Number: +44 8885 8888</h4>

          </div>
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
                    <td className='descr'>Questionnaires 101 ea; Questions (16 - 30 questions); last 1 - 3 months</td>
                    <td className='qty'>1</td>
                    <td className='total'>TZS 350,000</td>
                  </tr>
                </tbody>
              </table>
              <div className="bill_btn">
                <button className='btn_submit'>Pay your Invoice</button>
              </div>
              
          </div>
          <div className="bill_body_right">
            <div className="right_inner">
              <label htmlFor="">Amount Due</label>
              <h1><span>TZS 250,452</span></h1>
            </div>
            <div className="right_inner">
              <label htmlFor="">Bill To</label>
              <h4>Mr. Osward Juma</h4>
            </div>
            <div className="right_inner">
              <label htmlFor="">Invoice Number</label>
              <h4>10025</h4>
            </div>
            <div className="right_inner">
              <label htmlFor="">Date of Issue</label>
              <h4>{Date()}</h4>
            </div>
           

            

          </div>
        </div>
        </div>
    </motion.div>
   
  )
}

export default Billing
