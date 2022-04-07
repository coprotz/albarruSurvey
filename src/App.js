import './App.css';
import Home from './Home';
import Questions from './questions/Questions';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import Account from './account/Account';
import Request from './request/Request';
import Contact from './contact/Contact';
import Login from './login/Login';
import Pricing from './pricing/Pricing';
import Works from './account/Works';
import Terms from './account/Terms';
import Privacy from './account/Privacy';
import Reset from './reset/Reset';

function App() {
  return (
    <div className='main_wrraper'>
      <div className="inner_wrapper">
          
          <Router>    
              {/* <TopBar/>     */}
              <Routes>                          
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/amzuu/questionnaire" element={<Questions />} />   
                  <Route exact path="/account" element={<Account />} />  
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
