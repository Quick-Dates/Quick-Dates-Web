import React from 'react';
import Image404 from '../../assets/404.svg';
import './styles.css';

export default function NotFound404() {
  return (
    <div className="container-not-found">
      <img src={Image404} alt="404" className="image" />
      <p className="anim-typewriter title">PÁGINA NÃO ENCONTRADA</p>
    </div>
  );
}
