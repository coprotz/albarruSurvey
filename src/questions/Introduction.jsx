import React from 'react'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Introduction = ({next}) => {

  return (
    <motion.div 
          initial={{ y: '-100vw'}}
          animate={{y:0}} 
          transition={{ ease: "easeOut", duration: 0.5 }} 
      className='container'>
        <h2 className='welcome_title'>Thank you for visiting my site</h2>
        <p>My name is Ally Ally undertakes Phd Studies at Ardhi University. 
            I am doing a study that aims at establishing a comprehensive and 
            detailed findings on how the e-Procurement system was adopted in 
            Tanzania, what level reached, what pending changes and new requirements 
            needed and how a full-pledged e-Procurement automation system can
            be adopted on Public Construction Projects.
        </p>
        <p>My supervisors are Dr. Kikwasi and Dr. Monko. I would like you to be one 
            of the key respondents in completing my Questionnaire..
        </p>
        <button className='get_start' onClick={() => {next()}}>Fill Questionnaire</button>
    </motion.div>
  )
}

export default Introduction
