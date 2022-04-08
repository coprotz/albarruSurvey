import React from 'react'
import { Link } from "react-router-dom";
import Topbar from '../topbar/TopBar'
import Footer from '../footer/Footer'
import {motion} from 'framer-motion'
import { GrView, GrBarChart, GrAnalytics, GrLogout, GrNodes, GrShareOption, GrMoney } from "react-icons/gr";
import './account.css'
import { useForm, useStep } from 'react-hooks-helper'
import Dashbord from './Dashbord';
import Questions from '../questions/Questions';
import Analysis from './Analysis';
import Billing from './Billing';
import { useState } from 'react';
import Share from './Share';

const steps = [
    {id: '1', Component: Dashbord},
    {id: '2', Component: Questions},
    {id: '3', Component: Analysis},
    {id: '4', Component: Billing},
    {id: '5', Component: Share},
]




const Account = () => {

    const { step, navigation} = useStep({ steps, initialStep: 0 })
    const { Component} = step
    const { go, next, previous } = navigation
    const props = { go, next, previous, steps }

    const [show, setShow] = useState(false)

    // console.log(step.id)

  return (
    <>
    <Topbar/>
    <motion.div 
          initial={{ x: '-100vw'}}
          animate={{x:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
          className='account__container'> 
            <div className="account_sidebar hide_menu">
                <button className={`${step.id === '1'? 'active_btn' : 'account_btn'}`} onClick={() => {go('1')}}><GrBarChart/>Dashbord</button>
                <button className={`${step.id === '3'? 'active_btn' : 'account_btn'}`} onClick={() => {go('3')}}><GrAnalytics/>Data Analysis</button>
                <button className={`${step.id === '2'? 'active_btn' : 'account_btn'}`} onClick={() => {go('2')}}><GrView/>View Questionnaire</button>
                <button className={`${step.id === '5'? 'active_btn' : 'account_btn'}`} onClick={() => {go('5')}}><GrShareOption/>Share Questionnaire</button>
                <button className={`${step.id === '4'? 'active_btn' : 'account_btn'}`} onClick={() => {go('4')}}><GrMoney/>Billing and Invoice</button>
                <button className='account_btn'><GrLogout/>Logout</button>
            </div>  
            {show?     
            <div className="account_sidebar">
                <button className={`${step.id === '1'? 'active_btn' : 'account_btn'}`} onClick={() => {go('1');setShow(!show)}}><GrBarChart/>Dashbord</button>
                <button className={`${step.id === '3'? 'active_btn' : 'account_btn'}`} onClick={() => {go('3');setShow(!show)}}><GrAnalytics/>Data Analysis</button>
                <button className={`${step.id === '2'? 'active_btn' : 'account_btn'}`} onClick={() => {go('2');setShow(!show)}}><GrView/>View Questionnaire</button>
                <button className={`${step.id === '5'? 'active_btn' : 'account_btn'}`} onClick={() => {go('5');setShow(!show)}}><GrShareOption/>Share Questionnaire</button>
                <button className={`${step.id === '4'? 'active_btn' : 'account_btn'}`} onClick={() => {go('4');setShow(!show)}}><GrMoney/>Billing and Invoice</button>
                <button className='account_btn'><GrLogout/>Logout</button>
            </div> : <button onClick={() => setShow(!show)} className='menu_btn'>Menu</button>} 

            {/* <div className="account_body"> */}
              <Component {...props}/>   
            {/* </div> */}
                   
        
        
      
        
    </motion.div>
    <Footer/>
    </>
  )
}

export default Account