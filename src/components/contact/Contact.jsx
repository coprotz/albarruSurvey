import React, {useState} from 'react'

import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import './contact.css'
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import {
  collection,  
  addDoc,
  serverTimestamp,
  setDoc,
  doc
  
} from "firebase/firestore";
import { auth, db, storage, database } from '../../firebase';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(null)
  const [messageAlert, setMessageAlert] = useState('')

  const handleMessage = async(e) => {
    e.preventDefault();

    setSending(true)

    const data = {
      name: name,
      email: email,
      message:message,
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        timeStamp: serverTimestamp(),
        
      });
    } catch (error) {
      console.log(error)
    }
    setMessageAlert('Your message has been delivered successiful, our team will contact you soon, thank you.')
    setTimeout(() => {
      setMessageAlert('')
    }, 6000);
    setSending(null)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
      <>
      <TopBar/>
      
      <div className="contact_wrapper">
        {messageAlert != '' &&
              <div className="message_alert1">
                {messageAlert}
              </div>
        }
      <motion.div initial={{ x: '-100vw'}}
        animate={{x:0}} className="contact_top">
          <form action="" className='form'>
            <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter your Name'
                className='app_input'
                name='name'
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter a valid email address '
                className='app_input'
                name='email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            {/* <div className="form_group">
              <input 
                type="text" 
                placeholder='Enter a valid mobile number'
                className='app_input'
                />
            </div> */}
            <div className="form_group">
              <textarea 
                placeholder='Enter your message'
                className='app_textarea'
                name='message'
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                >

              </textarea>
            </div>
            <button 
              className='btn_submit'
              onClick={handleMessage}
              >{sending? 'Sending...' : 'Submit'}</button>
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