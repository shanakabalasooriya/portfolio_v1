import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    };

  
    client.create(contact)
      .then(() => {
        
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Do not Hesitate, Contact Me NOW...</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:shanaka.dba@gmail.com" className="p-text">shanaka.dba@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+9 (471) 320-7907" className="p-text">+9 (471) 320-7907</a>
        </div>
      </div>

      
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
      

      <form method='POST' action='https://getform.io/f/928dacaf-34a3-4192-a9ce-9d117b5c8192' className='app__footer-form app__flex'>
        <div className='app__flex'><input className='p-text' type='text' placeholder='Name' name='name'/></div>
        <div className='app__flex'><input className='p-text' type='emai' placeholder='Email' name='email'/></div>
        <div className='app__flex'><textarea className='app__flex p-text' name='message' rows='10' placeholder='Message'></textarea></div>
        <button className='p-text'>Let's Collaborate</button>
      </form>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
