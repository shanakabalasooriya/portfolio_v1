import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://lk.linkedin.com/in/shanaka-d-balasooriya-1264b71b0'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://mobile.twitter.com/shanaka65163386'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/shanaka.dba'><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/shanaka.dba/'><BsInstagram /></a> 
    </div>
  </div>
);

export default SocialMedia;
