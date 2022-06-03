import React, {useState} from 'react'
import {motion} from 'framer-motion'
// import { useForm } from 'react-hooks-helper'
import { AiOutlineClose } from "react-icons/ai";

import { collection,  addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase';

const defaultData = {   
    sendTo: '',
    body: '',
    from: ''

   
}



const NewMessage = ({currentUser, s, setNewMsg, newMsg, user, setMessageAlert}) => {

  // const [sendTo, setSendTo] = useState(newMsg?.id)
    const [err, setErr] = useState('')
   
    const [body, setBody] = useState('')
    // const [formData, setForm] = useForm(defaultData)
    // const { sendTo, from, body } = formData
    const [sending, setSending] = useState(null)

    const handleMessage = async(e) => {
        e.preventDefault();
    
        setSending(true)
    
        const data = {
          sendTo: newMsg?.id,
          from: user?.uid,
          body:body,
        }
        // console.log('data',data)
        try {
          await addDoc(collection(db, "sentItems"), {
            ...data,
            timeStamp: serverTimestamp(),
            
          });
          setMessageAlert('Your message has been delivered successiful!')
          setTimeout(() => {
            setMessageAlert('')
          }, 4000);
          setSending(null)
          setNewMsg(null)
        } catch (error) {
          setErr(error.message)
        }
        
       
      }

      console.log('s',newMsg)


  return (
    <div className='modal_outer'>
        
        <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}     
        className='new_message'> 
        <button className='invoice__btn' onClick={() => setNewMsg(null)}><AiOutlineClose/></button>       
        <form >
          {err && <span className='error'>{err}</span>}
         
            <div className="register_top">
                <h2 className='new_title'>New Message</h2>
            </div> 
            <div className="group">
                <label htmlFor="" className='new_label'>Send To:</label>
                <div className="request_input">
                    <input 
                        type="text" 
                        // placeholder='Your Email Address'
                        value={newMsg?.name} 
                        name='sendTo' 
                        className='new_input'
                        
                        />
                
                </div>
            </div>
            <div className="group">
                <label htmlFor="name" className='new_label'>Message</label>
                <div className="request_input">
                    <div className="password">
                      <textarea
                        type='text' 
                        placeholder='Message'
                        value={body} 
                        name='body' 
                        onChange={(e) =>setBody(e.target.value)}
                        className='new_input'
                        >
                        </textarea> 
                        
                    </div>
                         
                </div>
        
            </div>  
            
            <div className="request_check">
                                
                <button 
                    className=' btn_submit'
                    type='submit'
                    onClick={handleMessage}
                    >
                    {sending? 'Submiting...':'Send Message'}
                </button>
                        
            </div>     
        </form>
    
    </motion.div>
      
    </div>
  )
}

export default NewMessage
