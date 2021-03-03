import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Login: FC = () => {
  const message = 'Login';
  return (
    <div>
      <h1>{ message }</h1>
      <Link to="/atividades"> Entrar </Link>
    </div>
  );
};

export default Login;
