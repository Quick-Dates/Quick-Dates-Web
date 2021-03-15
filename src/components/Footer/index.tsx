/* eslint-disable react/jsx-no-target-blank */
import React, { FC } from 'react';
import InstagramIcon from '../../assets/instagram.svg';
import './styles.css';

const Footer: FC = () => (
  <footer className="footer">
    <p className="text">© Quick Dates 2020</p>
    <a href="https://www.instagram.com/quick.dates/" target="_blank">
      <img src={InstagramIcon} alt="instagram" />
    </a>
  </footer>
);

export default Footer;
