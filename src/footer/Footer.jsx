import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner_footer">
        <div className="footer_left">
          <small>&copy; 2022 Takwimu Survey Inc. All Rights Reserved</small>
        </div>
      
        <div className="footer_right">
          <small><Link to='/contact'>Contact</Link></small>
          <small><Link to='/terms'>Terms of Use</Link></small>
          <small> <Link to='/privacy'>Privacy</Link>  </small>       
        </div>
      </div>
    </div>
  )
}

export default Footer
