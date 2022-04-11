import './App.css';
import Home from './components/Home';
import Questions from './components/questions/Questions';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import TopBar from './components/topbar/TopBar';
// import Footer from './components/footer/Footer';
import Account from './components/account/Account';
import Request from './components/request/Request';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Pricing from './components/pricing/Pricing';
import Works from './components/account/Works';
import Terms from './components/account/Terms';
import Privacy from './components/account/Privacy';
import Reset from './components/reset/Reset';
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react';


function App() {


  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }
  
  return (
    <div className='main_wrraper'>
      <div className="inner_wrapper">
          
          <Router>    
              {/* <TopBar/>     */}
              <Routes>                          
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/amzuu/questionnaire" element={<Questions />} />   
                  <Route exact path="/account" element={<RequireAuth><Account /></RequireAuth>} />  
                  <Route exact path="/register" element={<Request />} />   
                  <Route exact path="/contact" element={<Contact />} />  
                  <Route exact path="/login" element={<Login />} />   
                  <Route exact path="/pricing" element={<Pricing />} />  
                  <Route exact path="/works" element={<Works />} />      
                  <Route exact path="/terms" element={<Terms />} />   
                  <Route exact path="/privacy" element={<Privacy />} />  
                  <Route exact path="/reset" element={<Reset />} />        
              </Routes> 
               
              {/* <Footer/> */}
            </Router>     
         
      </div>
    </div>
  );
}

export default App;
