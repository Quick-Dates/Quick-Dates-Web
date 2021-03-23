/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoHeader from '../../assets/logo-header.svg';

// eslint-disable-next-line import/no-extraneous-dependencies
import { MdEmail, MdLock } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function Login() {
  const [show, setShow] = useState(false);

  function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setShow(!show);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState('activities');

  function setProfessor() {
    setUser('schedule-activity');
  }

  function setAluno() {
    setUser('activities');
  }

  return (
    <div className="login">
      <div className="logo">
        <img src={LogoHeader} alt="logo" />
      </div>
      <div className="loginR">
        <h1>Login</h1>
        <div className="acesso">
          <div className="lista-acesso">
            <p onClick={setProfessor}> Professor </p>
            <p onClick={setAluno}> Aluno </p>
          </div>
          <div className="login-loginInputMatricula">
            <MdEmail />
            <input
              placeholder="Matricula"
            />
          </div>
          <div className="login-loginInputPassword">
            <MdLock />
            <input
              placeholder="Senha"
              type={show ? 'text' : 'password'}
            />
            <div className="login-Eye">
              {show ? (
                <HiEye
                  size={20}
                  onClick={handleClick}
                />
              ) : (
                <HiEyeOff
                  size={20}
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <button type="button">
            <Link to={user}> Entrar </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
