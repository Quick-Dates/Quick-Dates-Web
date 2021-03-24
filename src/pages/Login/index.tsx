import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoMain from '../../assets/logo-main.svg';

import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function Login() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('student');

  function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setShow(!show);
  }

  function setProfessor() {
    setUser('teacher');
  }

  function setAluno() {
    setUser('student');
  }

  return (
    <div className="login">
      <div className="loginR">
        <h1>Login</h1>
        <div className="acesso">
          <div className="lista-acesso">
            <span onClick={setAluno} role="presentation" className={user === 'student' ? 'perfil selected' : 'perfil'}> Aluno </span>
            <span onClick={setProfessor} role="presentation" className={user === 'teacher' ? 'perfil selected' : 'perfil'}> Professor </span>
          </div>
          <div className="login-loginInputMatricula">
            <MdEmail />
            <input
              placeholder={user === 'student' ? 'Matricula' : 'Login'}
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
            <Link to={user === 'student' ? '/activities' : '/shedule-activity'}> Entrar </Link>
          </button>
        </div>
      </div>
      <div className="logo">
        <img src={LogoMain} alt="logo" />
      </div>
    </div>
  );
}
