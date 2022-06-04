import React,{useState} from 'react'
import './settings.css'
import {motion} from 'framer-motion'
import Footer from '../footer/Footer'
import TopBar from '../topbar/TopBar'
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
    collection,  
    addDoc,
    serverTimestamp,
    setDoc,
    updateDoc,
    doc
    
  } from "firebase/firestore";
  import { auth, db, storage, database } from '../../firebase';

const Settings = ({users, user}) => {

    const navigate = useNavigate()

    const {currentUser} = useContext(AuthContext)
    const cuUser = users?.find((u) => u?.id === user?.uid)

    const [firstname, setFname] = useState(cuUser?.firstname)
    const [lastname, setLname] = useState(cuUser?.lastname)
    const [email, setEmail] = useState(cuUser?.email)
    const [password, setPassword] = useState(cuUser?.password)
    const [sending, setSending] = useState(null)

    

    console.log('user',cuUser)

    const updateUser = async(e) => {
        e.preventDefault();

        setSending(true)

        const data = {            
            firstname: firstname, 
            lastname: lastname,
            email: email,
            password: password,            
                
          }
        try {
            const userRef = doc(db, 'users', `${cuUser.id}`)
            await updateDoc(userRef, {
                ...data,
                timeStamp: serverTimestamp()
              })
        } catch (error) {
            console.log(error)
        }
        setSending(null)
    }

  return (
    <>
    <TopBar/>
  <motion.div 
      initial={{ x: '-100vw'}}
      animate={{x:0}} 
      transition={{ ease: "easeOut", duration: 0.5 }}  
      className='account__container'>
      
      <div className="pricing">
        <button className='invoice__btn' onClick={() => navigate('/account')}><AiOutlineClose/></button>
        <h1 className='container_title'>Update User Info</h1>          
      </div>
      <div className="define">
        <div className="group_define2">
            <label htmlFor="">FIRSTNAME</label>
            <input 
                type="text"                         
                name='fname'
                className='group_input' 
                value={firstname} 
                onChange={(e) => setFname(e.target.value)}
                       
                        // value={name}
                        // onChange={setForm}
            />
          
                            
        </div>
        <div className="group_define2">
            <label htmlFor="">LASTNAME</label>
            <input 
                type="text"                         
                name='lname'
                className='group_input' 
                value={lastname} 
                onChange={(e) => setLname(e.target.value)} 
                       
                        // value={name}
                        // onChange={setForm}
            />
          
                            
        </div>
        <div className="group_define2">
            <label htmlFor="">EMAIL</label>
            <input 
                type="email"                         
                name='email'
                className='group_input' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                       
                        // value={name}
                        // onChange={setForm}
            />
          
                            
        </div>
        <div className="group_define2">
            <label htmlFor="">PASSWORD</label>
            <input 
                type="password"                         
                name='password'
                className='group_input'  
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                       
                        // value={name}
                        // onChange={setForm}
            />
          
                            
        </div>
        <div className="figure_submt">
           <button className='btn_submit' type='submit' onClick={updateUser}>{sending? 'Updating...' : 'UPDATE'}</button>
        </div>
      </div>
      
  </motion.div>
  <Footer/>
  </>
  )
}

export default Settings
