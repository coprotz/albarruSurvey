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
  // onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useEffect } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';



const TopBar = () => {

  const {user, logOut} = useUserAuth()

  const navigate = useNavigate()
  // const {dispatch} = useContext(AuthContext)

  const [active, setActive] = useState(null)
  const [users, setUsers] = useState([])
  // const {currentUser} = useContext(AuthContext)
  const [show,setShow] = useState(null)

  

  const cuUser = users.find((u) => u.id === user?.uid)
console.log('nav', user)
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


console.log('users', users)

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

  
  return (
    <div className="topbar">
      <div className="inner_topbar">     
        <div className="top_left">
          <div className="logo">
            <Link to='/'><img src={Logo} alt='ALBARRU'></img></Link>
          </div>
           <Link to='/works'><button className='top_btn'>How it works</button></Link> 
           <Link to='/pricing'><button className='top_btn'>Pricing</button></Link> 
        </div>
        <div className="top_right"> 
        <Link to='/contact'><button className='top_btn'>Let's talk</button></Link> 
          {user ? 
             <>
             
             
             <Link to='/account' onClick={() => setActive(!active)}><button className='top_btn'>My Dashboard</button></Link>
             <div className="username_wrapper">            
                <div className={cuUser? 'username' : 'photo_url'} onClick={() => setShow(!show)}>{!cuUser? <div ><img src={`${user?.photoURL}`} alt='B' ></img></div> : cuUser?.username[0] }</div>  
                {show && 
                <div className="menu_toggle">
                  
                  {cuUser && <span onClick={handleUpdate}>Setting</span>}
                  {cuUser?.role === 'admin' && <span onClick={() => navigate('/admin')}>Admin</span>}
                  <span onClick={() => navigate('/account')}>My Account</span>
                  <span onClick={handleLogout}>LOG OUT</span>
                  
                </div>} 
             </div>
            
            </>     
            :<>           
            <Link to='/login'><button className='top_btn'>LOG IN</button></Link>
            <Link to='/register'><button className='top_btn btn_submit'>REGISTER</button></Link>
            </>}
            {/* <div className="humbug"> */}
               {/* <button className='hambug' onClick={() => setActive(!active)}>{active? <AiOutlineClose/> : <GiHamburgerMenu/>}</button>
               {active? 
               <motion.div 
               initial={{ x: '100vw'}}
               animate={{x:0}} 
               transition={{ ease: "easeOut", duration: 0.5 }} 
                className="humbug_menu">
                 <Link to='/works' onClick={() => setActive(!active)}><button>How it Works</button></Link>
                 <Link to='/pricing' onClick={() => setActive(!active)}><button>Pricing</button></Link>
                 <Link to='/contact' onClick={() => setActive(!active)}><button>Let's talk</button></Link> */}
                 {/* {user?
                 <>
                  <Link to='/account' onClick={() => setActive(!active)}><button>My Account</button></Link>
                  <Link to='/account' onClick={handleLogout} className='top_logout'><button>LOGOUT</button></Link>
                  <div className='username'>
                    {cuUser?.firstname}
                    <div className="menu_toggle">
                      <span onClick={handleLogout}>Logout</span>
                      <span>Setting</span>
                    </div>
                    </div>
                 </>
                
                 : <>
                  <Link to='/login' onClick={() => setActive(!active)}><button>LogIn</button></Link>
                  <Link to='/register' onClick={() => setActive(!active)}><button>Register</button></Link>
                 </>} */}
                 
                 
               {/* </motion.div> : null} */}
            {/* </div> */}
           
        </div>
      </div>
    </div>
  )
}

export default TopBar
