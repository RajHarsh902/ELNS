import React, {useEffect, useState} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';


function Footer() {
  
  const buttonRef = React.useRef(null);

  useEffect(() => {
    emailjs.init({
    publicKey: 'c9KCtn7L8DsMyoS40',
    blockHeadless: true,
    
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 5s
      throttle: 5000,
    },
  });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Disable the button to prevent multiple submissions
    const text = buttonRef.current.innerText;
    buttonRef.current.innerText = 'Sending...';
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    emailjs.send('service_qllajcf', 'template_cd1oaot', {
      name: name,
      email: email,
      message: message,
      time: new Date().toISOString()
    })
      .then((response) => {
        //('Email sent successfully:', response);
        buttonRef.current.innerText = text; // Reset the button text
        alert('Thank you for contacting us! We will get back to you soon.');
        e.target.reset(); // Reset the form fields
      }
      )
      .catch((error) => {
        console.error('Error sending email:', error);
        buttonRef.current.innerText = text; // Reset the button text
        alert('There was an error sending your message. Please try again later.');

      }
      );
  };
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='about-us'>
          <h4>About Us</h4>
          <p>Our mission is to provide the best learning material to our users.</p>
          <p>&copy; 2023 ELNS. All rights reserved.</p>
        </div>
        <div className='contact-us'>
          <h4>Contact Us</h4>
          <form onSubmit={handleSubmit} className='contact-form'>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <textarea placeholder='Your Message'></textarea>
            <button type='submit' ref={buttonRef}  >Send</button>
          </form>
          
        
            <div className='social-media'>
                <p>Email: contactuselns@gmail.com</p>
                <p>Phone: +919643539031</p>
                <h4>Follow Us</h4>
              
                <div className='social-icons'>
                    <a href='https://www.instagram.com/eln_news?igsh=MTZxcG9iNzZhOXU2MA=='>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='https://www.linkedin.com/in/rajharsh-sisodia-a8b4a41b1/'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://wa.me/qr/3MN47ERLVYGQE1'>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>

                </div>
            </div>
        </div>
      </div>

      <a className='update' href="/login"><FontAwesomeIcon icon={faWrench} /></a>
    </div>
  );
}

export default Footer;