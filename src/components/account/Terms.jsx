import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import TopBar from '../topbar/TopBar';
import parser from 'html-react-parser'

const Terms = ({term}) => {
  return (
      <>
      <TopBar/>
    <motion.div 
    initial={{ y: '-100vw'}}
    animate={{y:0}} 
    transition={{ ease: "easeOut", duration: 0.5 }} 
    className="how_works">        
        <h1 className='works_title'>Terms and Condtions</h1>
        <h3>Last updated on:  {new Date(term.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</h3>
        <p>{parser(term.body)}</p>
     </motion.div>
    <Footer/>
    </>
  )
}

export default Terms
