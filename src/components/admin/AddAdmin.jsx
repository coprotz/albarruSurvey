import React from 'react'
import { useState } from 'react'
import { httpsCallable } from 'firebase/functions';
import { functions } from "../../firebase";

const AddAdmin = () => {

    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(null)

    const makeAdmin = (e) => {
        e.preventDefault();

        setLoading(true)
        const addAdminRole = httpsCallable(functions, 'addAdminRole');
        addAdminRole({ email :email }).then(result => {
            console.log(result);
        })
        setLoading(null)
        setEmail('')

    }


  return (
    <div className='account_body'>
        <div className="admin_wrapper">
            <h3>Add Admin Role</h3>
            <form action="">
                <div className="element_single">
                    <h4 className='element_que'>Add Email of a user</h4> 
                    <input 
                        type="text" 
                        className='que_input_text' 
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='make_admin'
                    />
                    <div className='btn_div'>
                        <button className='btn_submit' onClick={makeAdmin}>{loading? 'Sending...' : 'Make Admin'}</button>
                    </div>
                    
                </div>
            </form>
        </div>
    
    </div>
  )
}

export default AddAdmin
