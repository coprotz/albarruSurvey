import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { HiOutlineX } from "react-icons/hi";
import { useEffect } from 'react';
import Billing from '../bills/Billing';
import { useForm, useStep } from 'react-hooks-helper'
import { AiOutlineClose } from "react-icons/ai";
import { doc, setDoc, collection, addDoc, serverTimestamp,  } from "firebase/firestore";  
import { db } from "../../firebase";


const defaultData = {
    description: '',
    cost: '',
    userId: '',
    invoiceNo:'',
    date:'',
    status:'Unpaid'
}

const setupFee = {
    name: 'Setup Questionnaires Fee', cost: '7'
}

const Users = ({users}) => {

    const [formData, setForm] = useForm(defaultData)

    const {description, cost, date, status} = formData

    const [invoice, setInvoice] = useState(null)
    const [createInvoice, setCreateInvoice] = useState(null)

    console.log(setupFee.name)

    const getRandomId = (min = 0, max = 500000) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const num =  Math.floor(Math.random() * (max - min + 1)) + min;
        return num.toString().padStart(6, "0")
      };
      
      console.log(getRandomId());



    console.log(users)

    const handleDelete = async (id) => {
        // try {
        //     await deleteDoc(doc, "users", id);
        //     setData(data.filter((item) => item.id !== id))
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const handleCreateInvoice = async (e) => {
        e.preventDefault()

        await addDoc(collection(db, "invoices"), {            
            userId: createInvoice.id,
            description: description,
            cost: description === setupFee.name && setupFee.cost,
            date: date,
            status:status,
            invoiceNo: 1026+getRandomId(),
            timeStamp: serverTimestamp(),
          });
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
                                            <button onClick={() => setCreateInvoice(user)}>Create Invoice</button>
                                        </div>
                                    </td>
                                </tr> 
                        ))}
                    </tbody>
                </table>
                 }
                 {createInvoice? 
                    <div className="invoice_create">
                        <div className="inner__create"> 
                            <button className='invoice__btn' onClick={() => setCreateInvoice(null)}><AiOutlineClose/></button>                       
                            <h3>Create Invoice</h3>
                            <div className="bill_to">
                                Bill to:
                                <div>
                                    {createInvoice?.firstname} {createInvoice?.lastname}
                                </div>
                                    {createInvoice?.email}
                                
                            </div>
                            <div className="invoice_input">
                                <label htmlFor="">Description</label>
                                <select name="description" id="" value={description} onChange={setForm}>
                                    <option value="">--select--</option>
                                    <option value="Setup Questionnaires Fee">Setup Questionnaires Fee</option>
                                </select>
                            </div>
                            <div className="invoice_input" >
                                <label htmlFor="">Rate</label>
                                <input type="number" name='cost' value={description === setupFee.name? setupFee.cost : cost} onChange={setForm}/>
                                
                            </div>
                            <div className="invoice_input" >
                                <label htmlFor="">Due Date</label>
                                <input type="date" name='date' value={date} onChange={setForm}/>
                                
                            </div>
                            <button className='btn_submit' onClick={handleCreateInvoice}>Create Invoice</button>
                        </div> 
                    </div>
                 : null}
           
      
    </motion.div>
  )
}

export default Users
