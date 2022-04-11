import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';

const Works = () => {
  return (
      <>
      <TopBar/>
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="how_works">
        
            <h1 className='works_title'>How it works?</h1>
            <div className="works_inner">
                <div className="works_body">
                    <h2>Define your audience</h2>
                    <p>One you prepare your sample, you need then to prepare your audience and know the group can fit for your work</p>
                </div>
                <div className="works_body">
                    <h2>Prepare your questions</h2>
                    <p>Arrange your questions to the best of your, Takwimu will prepare the questions in the format that will be suitable 
                        for your targets and then send the question during the get started</p>
                </div>
                <div className="works_body">
                    <h2>Create an account</h2>
                    <p>Through your account, you can easily mastering your entire process of the data collection and get feedback from the respondents instantly</p>
                </div>
                <div className="works_body">
                    <h2>Review your questionnaire</h2>
                    <p>Takwimu will create a nice and well presenation flow of questions that will no be bored to you audience and seek 
                        your comment before creating a questionnare for you and provide a link that you can share to you audience to various platforms.</p>
                </div>
                <div className="works_body">
                    <h2>Pay your costs</h2>
                    <p>Once after your reviewal of questionnaire, then you will need to pay your cost as per your invoice that will be availble in your dashbord account</p>
                </div>
                <div className="works_body">
                    <h2>Watch your results roll in</h2>
                    <p>Our system can be easily get the responces from your audience and the results will be presented with nice looking graphical diagrams and also you can easily download to pdf or excel.</p>
                </div>
                <Link to='/request'><button className='btn_submit'>Get Started</button></Link>
            </div>
       
      
    </motion.div>
    <Footer/>
    </>
  )
}

export default Works
