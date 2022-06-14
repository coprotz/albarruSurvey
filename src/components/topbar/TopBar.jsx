import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import './topbar.css'
import { useState } from 'react';
import {motion} from 'framer-motion'
import Logo from '../images/albarru.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  // deleteDoc,
  // doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useEffect } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { GrNotification} from "react-icons/gr";
import moment from 'moment'



const TopBar = () => {

  const {user, logOut} = useUserAuth()

  const navigate = useNavigate()
  // const {dispatch} = useContext(AuthContext)

  const [active, setActive] = useState(null)
  const [users, setUsers] = useState([])
  // const {currentUser} = useContext(AuthContext)
  const [show,setShow] = useState(null)
  const [noti, showNoti] = useState(null)
  const [notificatios, setNotifications] = useState(null)

  // console.log('user', user)

  

  const cuUser = users.find((u) => u.id === user?.uid)
// console.log('nav', cuUser)
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

useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "notifications"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setNotifications(list)
      // console.log(list)
    },
    (error) => {
      console.log(error)
    }  
  );
  
  return () => {
      unsub();
}

},[]);


// console.log('users', users)

// console.log('cu', cuUser)

const handleLogout = async () => {
  try {
     await logOut()
    navigate('/')
  } catch (error) {
    console.log(error)
  }
 
}

const handleUpdate = (e) => {
  e.preventDefault();
  setShow(!show);
  navigate('/settings');
}

// console.log('user', user)

  
  return (
    <div className="topbar">
      <div className="inner_topbar">     
        <div className="top_left">
          <div className="logo">
            <Link to='/'><img src={Logo} alt='ALBARRU'></img></Link>
          </div>
           <Link to='/works'><button className='top_btn'>How it goes</button></Link> 
           <Link to='/pricing'><button className='top_btn'>Pricing</button></Link> 
        </div>
        <div className="top_right"> 
        <Link to='/contact'><button className='top_btn'>Let's talk</button></Link> 
          {user ? 
             <>
             
             
             <Link to='/account' onClick={() => setActive(!active)}><button className='top_btn'>My Dashboard</button></Link>
             {user?.admin?.admin && 
             <div className="notification">
               <button className='noti_on'><GrNotification/></button>
               <div className="noti_last" onClick={() => showNoti(!noti)}>{notificatios && notificatios?.length}</div>
               {noti &&
               <div className="not_items">
                 <ul>
                   {notificatios && notificatios?.map(item => {
                     return (
                       <li key={item.id}>
                         <div className='item_span'>
                            <span>{item.user}</span>
                            <span>{item.content}</span>
                         </div>
                         
                         <div className="item_moment">
                          {moment(item.time.toDate()).fromNow()}
                         </div>
                       </li>
                     )
                   })}
                
                 </ul>
               </div>}
             </div>}
               
             <div className="username_wrapper">            
                <div className={cuUser? 'username' : 'photo_url'} onClick={() => setShow(!show)}>{!cuUser? <div ><img src={`${user?.photoURL}`} alt='B' ></img></div> : cuUser?.username[0] }</div>  
                {show && 
                <div className="menu_toggle">
                  
                  {cuUser && <span onClick={handleUpdate}>Setting</span>}
                  {user?.admin?.admin && <span onClick={() => {navigate('/admin');setShow(!show)}}>Admin</span>}
                  <span onClick={() => {navigate('/account'); setShow(!show)}}>My Account</span>
                  <span onClick={handleLogout}>LOG OUT</span>
                  
                </div>} 
             </div>
            
            </>     
            :<>           
            <Link to='/login'><button className='top_btn'>LOG IN</button></Link>
            <Link to='/register'><button className='top_btn btn_submit'>REGISTER</button></Link>
            </>}
          
           
        </div>
      </div>
    </div>
  )
}

export default TopBar
