import React from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import './topbar.css'
import { useState } from 'react';
import {motion} from 'framer-motion'
import Logo from '../images/albarru.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const TopBar = () => {

  const [active, setActive] = useState(null)

  const {currentUser} = useContext(AuthContext)
  
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
          {currentUser ? 
            <Link to='/account'><button className='top_btn'>My Account</button></Link>      
            :<>           
            <Link to='/login'><button className='top_btn'>LOG IN</button></Link>
            <Link to='/register'><button className='top_btn btn_submit'>REGISTER</button></Link>
            </>}
            <div className="humbug">
               <button className='hambug' onClick={() => setActive(!active)}>{active? <AiOutlineClose/> : <GiHamburgerMenu/>}</button>
               {active? 
               <motion.div 
               initial={{ x: '100vw'}}
               animate={{x:0}} 
               transition={{ ease: "easeOut", duration: 0.5 }} 
                className="humbug_menu">
                 <Link to='/works' onClick={() => setActive(!active)}><button>How it Works</button></Link>
                 <Link to='/pricing' onClick={() => setActive(!active)}><button>Pricing</button></Link>
                 <Link to='/contact' onClick={() => setActive(!active)}><button>Let's talk</button></Link>
                 {currentUser?
                 <Link to='/account' onClick={() => setActive(!active)}><button>My Account</button></Link>
                 : <>
                  <Link to='/login' onClick={() => setActive(!active)}><button>LogIn</button></Link>
                  <Link to='/register' onClick={() => setActive(!active)}><button>Register</button></Link>
                 </>}
                 
                 
               </motion.div> : null}
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default TopBar
