import React from 'react';
import './footer.css';
import icon2 from '../images/Icon2.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-head">
      <div className="logo-footer">
      <img src={icon2} alt="Positivus Logo" className="footer-image" />
      <span>Positivus</span>
     </div>


    <div className="footer-nav">
      <nav className="nav-links-footer">
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Use cases</a>
        <a href="#blog">Pricing</a>
        <a href="#contact">Blog</a>
      </nav>
    </div>

        <div className="footer-social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-contact">
          <h3>Contact Us:</h3>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555 567 8901</p>
          <p>Address: 1234 Main St,<br/>  Moonstone City, Stardust state 12345</p>
        </div>

        <div className="footer-newsletter">
          <input type="email" placeholder="Email" className='email' />
          <button>Subscribe to news</button>
        </div>
        <div className="footer-social2 two">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <hr />
      <div className="footer-footer">
        <p>@2023 Positivus. All Rights Reserved. </p>
        <p>Privacy Policy </p>
      </div>
    </footer>
  );
}

export default Footer;
