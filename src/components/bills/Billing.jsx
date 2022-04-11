import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import Logo from '../images/icon1.png'

const ques = [
  {id: '1 - 5 questions', value: '0.05'},
  {id: '6 - 10 questions', value: '0.07'},
  {id: '11 - 15 questions', value: '0.09'},
  {id: '16 - 20 questions', value: '0.11'},
  {id: '21 - 25 questions', value: '0.13'},
  {id: '30 - 35 questions', value: '0.15'},
  {id: '36 - 40 questions', value: '0.17'},
  {id: '41 - 45 questions', value: '0.19'},
  {id: '46 - 50 questions', value: '0.21'},
  
  
]

const queners = [
  {id: '1 - 3 months', value: '1'},
  {id: '4 - 6 months', value: '1.5'},
  {id: '7 - 9 months', value: '2'},
  {id: '10 - 12 months', value: '2.5'}
]


const Billing = ({ user, cuUser}) => {

 

  const quests = user? user?.questions : cuUser?.questions

  const questions = ques?.find((q) => q.id === quests)

  console.log(questions?.value)

  const time = user? user?.period : cuUser?.period

  const period = queners?.find((q) => q.id === time)

  const questionnaires = user? user?.questionnaires : cuUser?.questionnaires

  console.log(questionnaires)

  const totalCost = (questionnaires * 4 * questions?.value * period?.value).toLocaleString(undefined, {minimumFractionDigits:2})

  console.log(period?.value)

 console.log(cuUser)
  return (
   
    

    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
      <div className="bill_inner">   
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
                    <td className='descr'>                     
                      <>
                        Questionnaires {user? user?.questionnaires : cuUser?.questionnaires} ae; 
                        Questions ({user? user?.questions : cuUser?.questions}); 
                        Period {user? user?.period : cuUser?.period}
                      </>
                    </td>
                    <td className='qty'>1</td>
                    <td className='total'>$ {totalCost}</td>
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
              <h1><span>$ {totalCost}</span></h1>
            </div>
            <div className="right_inner">
              <label htmlFor="">Bill To</label>
              <h4>{user? user?.firstname : cuUser?.firstname} {user? user?.lastname : cuUser?.lastname}</h4>
              <h4>{user? user?.email : cuUser?.email}</h4>
            </div>
            <div className="right_inner">
              <label htmlFor="">Reference Number</label>
              <h4>{user? user?.id : cuUser?.id}</h4>
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
