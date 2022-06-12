import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import Register from '../images/register.png'
import Que from '../images/survey.png'
import Dash from '../images/achi_dash.png'
import Result from '../images/dash1.png'

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
                    <h2>Create an account</h2> 
                    <div className="work_reg">
                        <img src={Register} alt='Register' />
                    </div>                                   
                    <p>Through your account, you can easily mastering your entire process of the data collection and get feedback from the respondents instantly</p>
                </div>               
                <div className="works_body">
                    <h2>Prepare your questions</h2>
                    <p>Arrange your questions to the best of your, AlBarru Survey will prepare the questions in the format that will be suitable 
                    to your targets and then send the question during the creation of your survey</p>
                    <div className="work_reg">
                        <img src={Que} alt='Register' />
                    </div> 
                </div>
                
                <div className="works_body">
                    <div className="dash_works">                                         
                        <div className="group_work">                    
                            <h2>Review your questionnaire</h2>
                            <p>AlBarru Survey will create a nice and well presenation flow of questions that will no be bored to you audience and seek 
                            your comment before creating a questionnare for you and provide a link that you can share to you audience to various platforms.</p>
                        </div>
                        <img src={Dash} alt='Register' />  
                    </div>
                </div>
                
                <div className="works_body">
                    <h2>Watch your results roll in</h2>
                    <p>Our system can be easily get the responces from your audience and the results will be presented with nice looking graphical diagrams and also you can easily print the responces or save as pdf.</p>
                    <div className="work_reg">
                        <img src={Result} alt='Register' />  
                    </div> 
                    
                </div>
                <Link to='/request'><button className='btn_submit'>Get Started</button></Link>
            </div>
       
      
    </motion.div>
    <Footer/>
    </>
  )
}

export default Works
