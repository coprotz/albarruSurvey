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

const Terms = ({setMessageAlert, setError, terms, user}) => {
    const [sending, setSending] = useState(null)
    const [body, setBody] = useState('')
    // const handleBody = (e) => {
    //     e.preventDefault();
    //     console.log(e)
    //     setBody(e)
    // }

    const term = terms.find((t) => t?.createdBy === user?.uid)

    // console.log('Body', body)
    console.log('terms', term)

    const handleTerms = async (e) => {
        e.preventDefault();       
        setSending(true)
     
  
        if(!term){
              try {
                await addDoc(collection(db, "terms"), {
                    createdBy: user?.uid,
                    body:body,
                    timeStamp: serverTimestamp(),
                      
                });
                setSending(null)
                setMessageAlert('terms created successiful')
                setTimeout(() => {
                  setMessageAlert('')
                }, 3000);
             
              } catch (error) {
                setError(error.message)
         
                
              }
            }
            else{
              try {
                  await setDoc(doc(db, "terms", `${term.id}`), {
                    createdBy: user?.uid,
                    body:body,
                    timeStamp: serverTimestamp()
                })
                setSending(null)
                setMessageAlert('terms updated successiful')
              } catch (error) {
                setError(error.message)
              }
              
            }
  
           
      
   
    };
    



  return (
    <div className='admin_terms'>
        <h1>Terms</h1>
        <small>Last updated on: {new Date(term?.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</small>
        <Tiptak setBody={setBody}/>
        <textarea
            name='body'
            value={body  || term?.body}
            // onChange={(e) => setBody(e.target.value)}
            className='body_terms'
        >

        </textarea>
        <div className="admin_terms">
            <button className='btn_submit' onClick={handleTerms}>{sending? 'Sending...' : term? 'Edit Terms' : 'Add Terms'}</button>
        </div>
      
    </div>
  )
}



export default Terms

