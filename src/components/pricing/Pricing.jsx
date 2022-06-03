import React, {useState} from 'react'
import './pricing.css'
import {motion} from 'framer-motion'
// import { useForm } from 'react-hooks-helper'

import { Link } from "react-router-dom";
import Footer from '../footer/Footer'
import TopBar from '../topbar/TopBar'


// const defaultData = {
//     questionnaires: '100',
//     questions: '0.05',
//     periods: '1'
// }

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
  



const Pricing = () => {

    

    // const [formData, setForm] = useForm(defaultData)
    const [questionnaires, setQuestionnaires] = useState('100')
    const [questions, setQuestions] = useState(0.05)
    const [period, setPeriod] = useState(1)

    const qns = ques?.find((q) => q?.id === questions)  
    const time = periods?.find((p) => p?.id === period) 
    const totalCost = (questionnaires * 2 * qns?.value * time?.value).toLocaleString(undefined, {minimumFractionDigits:2})

    // const {questionnaires, questions, periods} = formData

  
  return (
      <>
      <TopBar/>
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}  
        className='account__container'>
        
        <div className="pricing">
            <h1 className='container_title'>Simple pricing calculator</h1>
            <div className="pricing_group">          
                <div className="pricing_left">
                    <h2>Define your audience target</h2>
                    <div className="define">
                        <div className="group_define">
                            <label htmlFor="">How many completed questionnaires do you plan<span>(min 100)</span></label>
                            <div className="input">
                                <input 
                                    type="number" 
                                    min={100} 
                                    max='1000'
                                    name='questionnaires'
                                    className='group_input'  
                                    step='1' 
                                    value={questionnaires}
                                    onChange={(e) => setQuestionnaires(e.target.value)}
                                />
                            </div>
                            
                        </div>
                        <div className="group_define">
                            <label htmlFor="">How many questions in each questionnaire do you need?</label>
                            <div className="input">                        
                                <select 
                                    name="questions" id="" 
                                    className='group_input'
                                    value={questions}
                                    onChange={(e) => setQuestions(e.target.value)}
                                >
                                    {/* <option value="">--Select</option> */}
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
                            <label htmlFor="">How long does your survey last?</label>
                            <div className="input">                        
                                <select 
                                    name="periods" id="" 
                                    className='group_input'
                                    value={period}
                                    onChange={(e) => setPeriod(e.target.value)}                                >
                                    {/* <option value="">--Select</option> */}
                                    <option value="1 - 3 months">1 - 3 months</option>
                                      <option value="4 - 6 months">4 - 6 months</option>
                                      <option value="7 - 9 months">7 - 9 months</option>
                                      <option value="10 - 12 months">10 - 12 months</option>                                                           
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing_right">
                    <h2>Total Cost</h2>
                    <div className='figure'>$ {totalCost}</div>
                    <div className="figure_submt">
                        <Link to='/register'><button className='btn_submit'>Get Started</button></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </motion.div>
    <Footer/>
    </>
  )
}

export default Pricing
