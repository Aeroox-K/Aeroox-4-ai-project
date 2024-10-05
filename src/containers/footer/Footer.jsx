import React from 'react';
import gpt3Logo from '../../assets/logo-main.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        {/* <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p> */}
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        {/* <p>Crechterwoord K12 182 DK Alknjkcb</p> */}
        <p>info@wisdomkayea.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 AEROOX-4. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;