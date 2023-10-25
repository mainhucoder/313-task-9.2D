import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="p1">
            <div className="explore">
            EXPLORE
            <ul className="footer-options">
            <li>Home</li>
            <li>Question</li>
            <li>Article</li>
            <li>Tutorials</li>
            </ul>
            </div>
        <div className="center">
            SUPPORT
            <ul className="footer-options">
            <li>FAQ's</li>
            <li>Help</li>
            <li>Contact us</li>
            </ul>
        </div>
        <div className="right">
            STAY CONNECTED
            <div className="social-icons">
            <a href="https://www.instagram.com"><img src="/insta.png" alt="Instagram" /></a>
            <a href="https://www.facebook.com"><img src="/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/twitter.png" alt="Twitter" /></a>
            </div>
        </div>
        </div>
     
      <div className="footer2">
        <div className="footer-text2">
          <div className="deakin"><strong>DEV@ Deakin 2022</strong></div>
        </div>
        <div className="POP">Privacy Policy</div>
        <div className="COC">Code of Conduct</div>
        <div className="Terms">Terms</div>
      </div>
    </div>
        
    </>
  );
};

export default Footer;