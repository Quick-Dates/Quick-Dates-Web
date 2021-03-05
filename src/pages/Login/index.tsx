import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Login: FC = () => {
  const mensagem = 'Login git';
  return (
    <div>
      <h1>{ mensagem }</h1>
      <Link to="/atividades"> Entrar </Link>
    </div>
  );
};

export default Login;
