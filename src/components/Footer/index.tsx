import React from 'react';
import LinkedinIcon from '../../assets/linkedin-login.svg';
import TwitterIcon from '../../assets/twitter-login.svg';
import InstagramIcon from '../../assets/instagram.svg';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">&copy; Quick Dates 2021</p>
      <p className="email">quickdates.tech@gmail.com</p>
      <div className="container-social-media">
        <a href="https://www.linkedin.com/in/quick-dates-880850208" target="_blank">
          <img src={LinkedinIcon} alt="linkedin" />
        </a>
        <a href="https://twitter.com/DatesQuick" target="_blank">
          <img src={TwitterIcon} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/quick.dates/" target="_blank">
          <img src={InstagramIcon} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}
