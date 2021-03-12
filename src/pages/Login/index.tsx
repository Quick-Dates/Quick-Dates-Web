import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

const Login: FC = () => {
  const mensagem = 'Login git';
  return (
    <div>
      <Helmet>
        <title>Quick Dates | Login</title>
      </Helmet>
      <h1>{ mensagem }</h1>
      <Link to="/activities"> Entrar </Link>
    </div>
  );
};

export default Login;
