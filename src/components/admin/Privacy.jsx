import React from 'react'
import { useState } from 'react'
import {
    collection,  
    addDoc,
    serverTimestamp,
    setDoc,
    doc
    
  } from "firebase/firestore";
  import { auth, db, storage, database } from '../../firebase';
import Tiptak from '../Tiptap';

const Privacy = ({setMessageAlert, setError, privacy, user}) => {
    const [sending, setSending] = useState(null)
    const [body, setBody] = useState('')
  
    const priv = privacy.find((t) => t?.createdBy === user?.uid)

    console.log('privacy', priv)

    const handlePrivacy = async (e) => {
        e.preventDefault();       
        setSending(true)
     
  
        if(!priv){
              try {
                await addDoc(collection(db, "privacy"), {
                    createdBy: user?.uid,
                    body:body,
                    timeStamp: serverTimestamp(),
                      
                });
                setSending(null)
                setMessageAlert('Privacy terms created successiful')
                setTimeout(() => {
                  setMessageAlert('')
                }, 3000);
             
              } catch (error) {
                setError(error.message)
         
                
              }
            }
            else{
              try {
                  await setDoc(doc(db, "privacy", `${priv.id}`), {
                    createdBy: user?.uid,
                    body:body,
                    timeStamp: serverTimestamp()
                })
                setSending(null)
                setMessageAlert('Privacy terms updated successiful')
              } catch (error) {
                setError(error.message)
              }
              
            }
  
           
      
   
    };
    



  return (
    <div className='admin_terms'>
        <h1>Privacy Policy</h1>
        <small>Last updated on: {new Date(priv?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</small>
        <Tiptak setBody={setBody}/>
        <textarea
            name='body'
            value={body  || priv?.body}
            // onChange={(e) => setBody(e.target.value)}
            className='body_terms'
        >

        </textarea>
        <div className="admin_terms">
            <button className='btn_submit' onClick={handlePrivacy}>{sending? 'Sending...' : priv? 'Edit Terms' : 'Add Terms'}</button>
        </div>
      
    </div>
  )
}



export default Privacy
