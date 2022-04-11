import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Topbar from '../topbar/TopBar'
import Footer from '../footer/Footer'
import {motion} from 'framer-motion'
import { GrView, GrBarChart, GrAnalytics, GrLogout, GrNodes, GrShareOption, GrMoney } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import './account.css'
import { useForm, useStep } from 'react-hooks-helper'
import Dashbord from './Dashbord';
import Questions from '../questions/Questions';
import Analysis from './Analysis';
import Billing from '../bills/Billing';
import { useState } from 'react';
import Share from './Share';
import Users from './Users';
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useEffect } from 'react';
import { signOut } from "firebase/auth";




const steps = [
    {id: '1', Component: Dashbord},
    {id: '2', Component: Questions},
    {id: '3', Component: Analysis},
    {id: '4', Component: Billing},
    {id: '5', Component: Share},
    {id: '6', Component: Users},
]




const Account = () => {

  const { currentUser } = useContext(AuthContext)

    const { step, navigation} = useStep({ steps, initialStep: 0 })
    const { Component} = step
    const { go, next, previous } = navigation

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)
    

    // console.log(currentUser)

    const [show, setShow] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
      const fetchData = async () => {
              try {
              const data = await getDocs(collection(db, "users"));             
                  setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id })));        
         
          } catch (error) {
              console.log(error)
          }
          
          
      };
      fetchData()
  },[]);

  const cuUser = users.find((u) => u.id === currentUser.uid)
  // console.log('currentUser', cuUser)
  const props = { go, next, previous, steps, currentUser, cuUser, users }

    // console.log(step.id)


  const handleLogout = () => {
    signOut(auth).then(() => {
     
      dispatch({type: "LOGOUT"})
      console.log('successful')
      navigate('/')
      
    }).catch((error) => {
      console.log(error)
    })
  }

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
                <button className={`${step.id === '6'? 'active_btn' : 'account_btn'}`} onClick={() => {go('6')}}><HiOutlineUsers/>Users</button>
                <button className='account_btn'><GrLogout/>Logout</button>
            </div>  
            {show?     
            <div className="account_sidebar showUp">
                <button className={`${step.id === '1'? 'active_btn' : 'account_btn'}`} onClick={() => {go('1');setShow(!show)}}><GrBarChart/>Dashbord</button>
                <button className={`${step.id === '3'? 'active_btn' : 'account_btn'}`} onClick={() => {go('3');setShow(!show)}}><GrAnalytics/>Data Analysis</button>
                <button className={`${step.id === '2'? 'active_btn' : 'account_btn'}`} onClick={() => {go('2');setShow(!show)}}><GrView/>View Questionnaire</button>
                <button className={`${step.id === '5'? 'active_btn' : 'account_btn'}`} onClick={() => {go('5');setShow(!show)}}><GrShareOption/>Share Questionnaire</button>
                <button className={`${step.id === '4'? 'active_btn' : 'account_btn'}`} onClick={() => {go('4');setShow(!show)}}><GrMoney/>Billing and Invoice</button>
                <button className={`${step.id === '6'? 'active_btn' : 'account_btn'}`} onClick={() => {go('6');setShow(!show)}}><HiOutlineUsers/>Users</button>
                <button className='account_btn' onClick={handleLogout}><GrLogout/>Logout</button>
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