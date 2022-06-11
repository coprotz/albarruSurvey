import "@stripe/stripe-js"
import './App.css';
import Home from './components/Home';
import './components/styles/main.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Account from './components/account/Account';
import Request from './components/request/Request';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Pricing from './components/pricing/Pricing';
import Works from './components/account/Works';
import Terms from './components/account/Terms';
import Privacy from './components/account/Privacy';
import Reset from './components/reset/Reset';
// import { AuthContext } from './context/AuthContext'
// import { useContext } from 'react';
import { useState } from 'react';
import Thanks from './components/thanks/Thanks';
import Settings from './components/settings/Settings';
import {
  collection,
  // getDocs,
  // deleteDoc,
  // doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../src/firebase";
import { useEffect } from 'react';
import Admin from './components/admin/Admin';
import RenderSurvey from './components/account/createForm/RenderSurvey';
import { useUserAuth } from './context/UserAuthContext';
import Subscriptions from "./components/account/Subscriptions";


function App() {
  const [surveys, setSurveys] = useState([])
  const [responces, setResponces] = useState([])
  const [users, setUsers] = useState([])
  const [terms, setTerms] = useState([])
  const [privacy, setPrivacy] = useState([])
  const [subscribes, setSubscribes] = useState([])
  const { user } = useUserAuth();

  const term = terms?.find((u) => u.id)
  const priv = privacy?.find((u) => u.id)


  // console.log("user", terms)
  // console.log("priv", priv)

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list)
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

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "subscriptions"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSubscribes(list)
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


useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "surveys"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setSurveys(list)
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

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "responces"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setResponces(list)
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

  const cuUser = users?.find((u) => u.id === user?.uid)



  console.log('surveys', surveys)


 
  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/login"/>
  }


  
  return (
    <div className='main_wrraper'>
      <div className="inner_wrapper">
          
          <Router>    
          
              <Routes>                          
                  <Route exact path="/" element={<Home />} />
                  {/* <Route exact path={`/questionnaires/${activeQue?.id}`} element={<Questionnaire activeQue={activeQue} />} />   */}
                  <Route exact path='/questionnaires/:queId' element={<RenderSurvey />} />   
                  <Route exact path="/account" element={
                    <RequireAuth>
                      <Account 
                        users={users}
                        surveys={surveys}
                        responces={responces}
                        setSurveys={setSurveys}
                        subscribes={subscribes}
                        // viewInvoice={viewInvoice}
                        // setViewInvoice={setViewInvoice}
                        // setUsers={setUsers}
                        user={user}
                        // activeSurvey={activeSurvey} 
                        // setActiveSurvey={setActiveSurvey}
                        // activeQuestionnaire={activeQuestionnaire}
                        // setActiveQuestionnaire={setActiveQuestionnaire}
                      />
                    </RequireAuth>} 
                  />  
                   <Route exact path="/settings" element={
                    <RequireAuth>
                      <Settings users={users}/>
                    </RequireAuth>} 
                  />
                  <Route exact path="/register" element={<Request  user={user} />} />   
                  <Route exact path="/contact" element={<Contact />} />  
                  <Route exact path="/login" element={<Login user={user}/>} />   
                  <Route exact path="/pricing" element={<Pricing />} />  
                  <Route exact path="/works" element={<Works />} />      
                  <Route exact path="/terms" element={<Terms term={term}/>} />   
                  <Route exact path="/privacy" element={<Privacy priv={priv}/>} />  
                  <Route exact path="/reset" element={<Reset />} />   
                  <Route exact path="/thanks" element={<Thanks />} />  
                  <Route exact path="/subscriptions" element={
                    <RequireAuth>
                      <Subscriptions user={user} surveys={surveys} cuUser={cuUser} />
                    </RequireAuth>                 
                  } />  
                  <Route exact path="/admin" element={
                    <RequireAuth>
                    <Admin 
                      users={users}
                      surveys={surveys}
                      responces={responces}
                      setSurveys={setSurveys}
                      setUsers={setUsers}
                      setResponces={setResponces}
                      subscribes={subscribes}
                      user={user}
                    />
                    </RequireAuth>
                    } />  
                       
              </Routes> 
              
               
              {/* <Footer/> */}
            </Router>     
         
      </div>
    </div>
  );
}

export default App;
