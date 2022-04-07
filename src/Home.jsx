import React from 'react'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Image from './images/img5.png'
import { FiUsers, FiUser} from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';

const Home = () => {

  return (
    <>
    <TopBar/>
      <motion.div 
            initial={{ x: '-100vw'}}
            animate={{x:0}} 
            transition={{ ease: "easeOut", duration: 0.5 }} 
            className='container'>
            <div className="inner__container">
              <div className="inner__left">
                <h1 className='home_title'>Online <span>Questionnaire</span></h1>
                <h4 className='home_note'>We can create an online questionnaire to suite your market strategies or 
                to meet your study respondents and get the results instantly. Our online questionnare is responsive 
                for any device, laptop, tablet or mobile phone...!</h4>
                <Link to='/request'><button className='btn_submit'>Get Started</button></Link>
              </div>
              <div className="inner__right"></div>           
              
            </div>      
      </motion.div>

     <div className="how_it_works">
        <h1 className='how_title'>How it works?</h1>
        <div className="how_inner">
          {/* <div className="work">
            <FiUsers/>
            <h2>Prepare your audiences</h2>
          </div> */}
          <div className="work">
            <FiUsers/>
            <h2>Prepare your questions</h2>
          </div>
          <div className="work">
            <FiUser/>
            <h2>Create an account</h2>
          </div>
          <div className="work">
            <GrNotes/>
            <h2>Review your questionnaire</h2>
          </div>
          <div className="work">
            <MdOutlinePayment/>
            <h2>Pay your Costs</h2>
          </div>
          <div className="work">
            <VscFiles/>
            <h2>Watch your results roll in</h2>
          </div>
        </div>
        <Link to='/works'><button className='btn_submit'>Read More</button></Link>
   </div>
   <Footer/>
   </>
  )
}

export default Home
