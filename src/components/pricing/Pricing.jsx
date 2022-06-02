import React from 'react'
import './pricing.css'
import {motion} from 'framer-motion'
import { useForm, useStep } from 'react-hooks-helper'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer'
import TopBar from '../topbar/TopBar'


const defaultData = {
    questionnaires: '100',
    questions: '0.05',
    periods: '1'
}



const Pricing = () => {

    

    const [formData, setForm] = useForm(defaultData)

    const {questionnaires, questions, periods} = formData

    // const {value, setValue} = useState(100)

    console.log('qest', questionnaires)
    console.log('que', questions)
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
                                    onChange={setForm}
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
                                    onChange={setForm}
                                >
                                    {/* <option value="">--Select</option> */}
                                    <option value="0.05">1 - 5 questions</option>
                                    <option value="0.07">6 - 10 questions</option>
                                    <option value="0.09">11 - 15 questions</option>
                                    <option value="0.11">16- 20 questions</option>
                                    <option value="0.13">21 - 25 questions</option>
                                    <option value="0.15">26 - 30 questions</option>
                                    <option value="0.17">31 - 35 questions</option>
                                    <option value="0.19">36 - 40 questions</option>
                                    <option value="0.21">41 - 45 questions</option>
                                    <option value="0.22">46 - 50 questions</option>                         
                                </select>
                            </div>
                            
                        </div>
                        <div className="group_define">
                            <label htmlFor="">How long does your survey last?</label>
                            <div className="input">                        
                                <select 
                                    name="periods" id="" 
                                    className='group_input'
                                    value={periods}
                                    onChange={setForm}                                >
                                    {/* <option value="">--Select</option> */}
                                    <option value="1">1 - 3 months</option>
                                    <option value="1.5">4 - 6 months</option>
                                    <option value="2">7 - 9 months</option>
                                    <option value="2.5">10 - 12 months</option>                                                           
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing_right">
                    <h2>Total Cost</h2>
                    <div className='figure'>$ {(questionnaires * 2 * questions * periods).toLocaleString()}</div>
                    <div className="figure_submt">
                        <Link to='/request'><button className='btn_submit'>Get Started</button></Link>
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
