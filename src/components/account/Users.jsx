import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { HiOutlineX } from "react-icons/hi";
import { useEffect } from 'react';
import Billing from '../bills/Billing';

const Users = ({users}) => {

const [invoice, setInvoice] = useState(null)

    console.log(users)

    const handleDelete = async (id) => {
        // try {
        //     await deleteDoc(doc, "users", id);
        //     setData(data.filter((item) => item.id !== id))
        // } catch (error) {
        //     console.log(error)
        // }
    }
  return (
    <motion.div 
        initial={{ y: '-100vw'}}
        animate={{y:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
        className="account_body">
            {/* <div className="inner_users"> */}
                <h3>Users</h3>
                {invoice ?
                <div className='invoice'>
                    <button onClick={() => setInvoice(null)} className='invoice_cls_btn'><HiOutlineX/></button>
                    <Billing user={invoice}/>
                </div>
                
                :
                <table className="user_table">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Questionnaires</th>
                        <th>Questions</th>
                        <th>Survey Period</th>
                        <th>Ques Attached</th>
                        <th>Invoice</th>
                        <th>Expired</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {users.map((user) => (

                          
                           
                                <tr>                                                                     
                                    <td data-label="Name">{user.firstname} {user.lastname}</td>
                                    <td data-label="Email">{user.email}</td>
                                    <td data-label="Questionnaires">{user.questionnaires}</td>
                                    <td data-label="Questions">{user.questions}</td>
                                    <td data-label="Survey Period">{user.period}</td>
                                    <td data-label="Ques Attached">{user.file? <a href={`${user.file}`} target="_blank">Questions</a> : 'No Questions'}</td>
                                    <td data-label="Invoice"><button onClick={() => setInvoice(user)} className='btn_submit'>View Invoice</button></td>
                                    <td data-label="Expired">Juma Shabani</td>
                                    <td data-label="Actions">
                                        <div className="actions">
                                            <button>View</button>
                                            <button onClick={handleDelete}>Delete</button>
                                        </div>
                                    </td>
                                </tr> 
                        ))}
                    </tbody>
                </table>
                 }
            {/* </div> */}
      
    </motion.div>
  )
}

export default Users
