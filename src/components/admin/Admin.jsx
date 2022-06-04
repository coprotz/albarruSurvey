import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import '../styles/admin.css'
import TopBar from '../topbar/TopBar';
import Footer from '../footer/Footer';
import {Questionnaires} from '../../data/surveys';
import Users from './Users'
import Dashboard from './Dashboard';
import Responces from './Responces';
import Quests from './Quests'
import Surveys from './Surveys'
import Messages from './Messages';
import {
  collection,
 
  onSnapshot,

} from "firebase/firestore";
import { db } from "../../firebase";
import NewMessage from './NewMessage';
import Terms from './Terms';
import Privacy from './Privacy';


const Admin = ({users, surveys, responces, questionnaires, currentUser, user}) => {

  const cuUser = users?.find((u) => u.id === user?.uid)
  
  const totalPaid = surveys.filter((s) => s.status === 'Paid')
  const totalUnpaid = surveys.filter((s) => s.status === 'Unpaid')
  const [active, setActive] = useState(1)
  const [messages, setMessages] = useState([])
  const [newMsg, setNewMsg] = useState(null)
  const [terms, setTerms] = useState([])
  const [privacy, setPrivacy] = useState([])



  const paid = totalPaid.reduce((a, b) => a + b.totalCost, 0)
  const unPaid = totalUnpaid.reduce((a, b) => a + b.totalCost, 0)


 
  useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "messages"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setMessages(list)
 
    },
    (error) => {
      console.log(error)
    }  
  );
  
  return () => {
      unsub();
}

},[]);

useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "terms"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setTerms(list)
 
    },
    (error) => {
      console.log(error)
    }  
  );
  
  return () => {
      unsub();
}

},[]);

useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "privacy"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setPrivacy(list)
 
    },
    (error) => {
      console.log(error)
    }  
  );
  
  return () => {
      unsub();
}

},[]);


  const [messageAlert, setMessageAlert] = useState('')
  const [page, setPage] = useState(0)
  const [errMessage, setErrMessage] = useState('')

  const props = { terms, privacy, responces, setErrMessage, surveys, questionnaires, users, messages, currentUser, Questionnaires,newMsg, setNewMsg, user, setPage, setMessageAlert }

  
  const PageDisplay = () => {
    if(page === 0){
      return <Dashboard {...props}/>
    }else if(page === 1){
      return <Users {...props}/>
    }else if(page === 2){
      return <Quests {...props}/>
    }else if(page === 3){
      return <Surveys {...props}/>
    }else if(page === 4){
      return <Responces {...props}/>
    }else if (page === 5){
      return <Messages {...props}/>
    }else if (page === 6){
      return <Terms {...props}/>
    }else if (page === 7){
      return <Privacy {...props}/>
    }
    
    
  }

  return (
    <>
    {cuUser ? 
    <>
    {newMsg && 
      <NewMessage newMsg={newMsg} setNewMsg={setNewMsg} user={user} setMessageAlert={setMessageAlert}/>
    }
    
    <TopBar user={user} cuUser={cuUser}/>
    {messageAlert && <div className='success'>{messageAlert}</div>}
    {errMessage && <div className='error'>{errMessage}</div>}
    <motion.div 
        initial={{ x: '-100vw'}}
        animate={{x:0}} 
        transition={{ ease: "easeOut", duration: 0.5 }}  
        className='account__container'>
         <div className="admin_wrraper">
          <div className="admin_left">
            <span className={active === 1? 'admin_active' : 'admin_link'}  onClick={() => {setPage(0); setActive(1)}}>Dashboard</span>
            <span className={active === 2? 'admin_active' : 'admin_link'}  onClick={() => {setPage(1); setActive(2)}}>Researchers</span>
            <span className={active === 3? 'admin_active' : 'admin_link'}  onClick={() => {setPage(2); setActive(3)}}>Questionnaires</span>
            <span className={active === 4? 'admin_active' : 'admin_link'}  onClick={() => {setPage(3); setActive(4)}}>Surveys</span>
            <span className={active === 5? 'admin_active' : 'admin_link'}  onClick={() => {setPage(4); setActive(5)}}>Responces</span>
            <span className={active === 6? 'admin_active' : 'admin_link'}  onClick={() => {setPage(5); setActive(6)}}>Messages</span>
            <span className={active === 7? 'admin_active' : 'admin_link'}  onClick={() => {setPage(6); setActive(7)}}>Terms</span>
            <span className={active === 8? 'admin_active' : 'admin_link'}  onClick={() => {setPage(7); setActive(8)}}>Privacy</span>
          </div>

          <div className="admin_right">
            <div className="admin_right_inner">
              <div className="admin_right_top">
                  {/* <div className="admin_card">
                    Invoices

                  </div> */}
                  <div className="admin_card">
                    <small>Researchers Rolled In:</small>
                    <h2>{users?.length}</h2>
                  </div>
                  <div className="admin_card">
                  <small>Questionnaires Prepared:</small>
                    
                    <h2>{Questionnaires.length}</h2>
                  </div>
                  <div className="admin_card">
                  <small>Surveys Created:</small>
                    
                    <h2>{surveys?.length}</h2>
                  </div>
                  <div className="admin_card">
                  <small>Completed Respondents:</small>
                    
                    <h2>{responces.length}</h2>
                  </div>
                  <div className="admin_card">
                  <small>Total Paid:</small>
                    
                    <h2>$ {paid}</h2>
                  </div>
                  <div className="admin_card">
                  <small>Total Unpaid:</small>
                    
                    <h2>$ {unPaid}</h2>
                  </div>
              </div>
              {PageDisplay()}
            </div>
            
          </div>
      </div>

    </motion.div>
    <Footer />
    </>
    : <div>You are not allowed..</div>}</>
  )
}

export default Admin
