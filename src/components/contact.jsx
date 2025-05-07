import React from 'react';
import './contact.css';
import illustration3 from '../images/illustration3.png';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="form-container">
        <form className="contact-form">
          <div className="radio-buttons">
            <label>
              <input 
                type="radio" 
                name="contactType" 
                className="custom-radio"
                defaultChecked 
                disabled
              />
              Say Hi
            </label>
            <label>
              <input 
                type="radio" 
                name="contactType" 
                className="custom-radio"
                disabled
              />
              Get a Quote
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              disabled
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              disabled
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="message">Message*</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              rows="6" 
              disabled
            ></textarea>
          </div>
          
          <button type="button" className="submit-button" disabled>
            Send Message
          </button>
        </form>
      </div>

      <div className="image-container">
        <img src={illustration3} alt="Contact Us" />
      </div>
    </div>
  );
};

export default Contact;
