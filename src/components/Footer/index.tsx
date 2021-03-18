import React from 'react';
import InstagramIcon from '../../assets/instagram.svg';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="text">© Quick Dates 2020</p>
      <a href="https://www.instagram.com/quick.dates/" target="_blank">
        <img src={InstagramIcon} alt="instagram" />
      </a>
    </footer>
  );
}
