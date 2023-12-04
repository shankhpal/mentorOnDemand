import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer(rops) {
  return (
    <div className='footers px-3'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='p-3 text-center text-light'>
              <h3><strong>CONTACT</strong></h3>
              <p><strong>+91 8888888888</strong></p>
              <p><strong>+91 9999999999</strong></p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='p-3 text-center text-light'>
            <h3><strong>LOCATION</strong></h3>
            <p><strong>Kalyan road MIDC</strong></p>
            <p><strong>Andheri west, Mumbai, 006712</strong></p>
          </div>
        </div>
        <div className='col-md-4'>
        <div className='p-3 text-center text-light'>
            <h3><strong>EMAIL</strong></h3>
            <p><strong>mentorondemand@gmail.com</strong></p>
          </div>
          </div>
        </div>

      </div>
    
  )
}

export default Footer;
