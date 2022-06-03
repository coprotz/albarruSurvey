import React from 'react'
import { useContext } from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Billing from '../bills/Billing'
import Invoice from '../bills/Invoice'
import Payment from '../bills/Payment'
import Thanks from '../bills/Thanks'
import { AuthContext } from '../../context/AuthContext'
import {motion} from 'framer-motion'



const BillingMain = ({cuUser, users, invoices, setInvoices, setMessageAlert}) => {

    const { currentUser } = useContext(AuthContext)


    const props = { currentUser, cuUser, users, invoices, setInvoices, setMessageAlert }
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
          <Component {...props}/>
        
    </motion.div>
  )
}

export default BillingMain
