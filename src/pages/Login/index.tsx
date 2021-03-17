import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Login() {
  const mensagem = 'Login git';
  return (
    <div className="containerLogin">
      <h1>{ mensagem }</h1>
      <Link to="/activities"> Entrar </Link>
    </div>
  );
}
