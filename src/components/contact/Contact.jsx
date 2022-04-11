import React from 'react'

import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import './contact.css'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';

const Contact = () => {
  return (
      <>
      <TopBar/>
      <div className="contact_wrapper">
      <motion.div initial={{ x: '-100vw'}}
        animate={{x:0}} className="contact_top">
          <form action="" className='form'>
            <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter your Name'
                className='app_input'
                />
            </div>
            <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter a valid email address '
                className='app_input'
                />
            </div>
            <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter a valid mobile number'
                className='app_input'
                />
            </div>
            <div className="form_group">
              <textarea 
                name=""                 
                placeholder='Enter your message'
                className='app_textarea'
                >

              </textarea>
            </div>
            <button className='btn_submit'>Submit</button>
          </form>
        </motion.div>
        <div className="contact_middle">
          <h1>GET IN TOUCH</h1>
          <h4>Hey! We are looking forward to get your message..</h4>
          <div className="social_icons">
            <span><FaFacebookF/></span>
            <span><FaYoutube/></span>
            <span><FaTwitter/></span>
            <span><FaInstagram/></span>
          </div>
        </div>
        <motion.div initial={{ y: '-100vh'}}
        animate={{y:0}} className="contact_bottom">
          <div className="top">
            <h3>CALL US</h3>
            <span>+255 7584 525 555</span>
            <span>+255 7584 525 555</span>
          </div>
          <div className="top">
            <h3>LOCATION</h3>
            <span>+255 7584 525 555</span>
            <span>+255 7584 525 555</span>
          </div>
          <div className="top">
            <h3>EMAIL</h3>
            <span>info@albarrusurvey.com</span>
            <span>www.albarrusurvey.com</span>
          </div>
        </motion.div>
      </div>
      <Footer/>
      </>

  )
}

export default Contact