/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import LogoMain from '../../assets/logo-main.svg';

import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('student');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setShow(!show);
  }

  function handleAuthenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (user === 'student') {
      if (login === '123' && password === 'aluno123') {
        history.push('/activities');
      } else {
        toast.error('Matricula ou senha inválidos');
      }
    }
    if (user === 'teacher') {
      if (login === 'professor' && password === 'professor123') {
        history.push('/shedule-activity');
      } else {
        toast.error('Login ou senha inválidos');
      }
    }
  }

  function setProfessor() {
    setLogin('');
    setPassword('');
    setUser('teacher');
  }

  function setAluno() {
    setLogin('');
    setPassword('');
    setUser('student');
  }

  return (
    <div className="login">
      <div className="logo">
        <img src={LogoMain} alt="logo" />
      </div>
      <div className="loginR">
        <h1>Login</h1>
        <form className="acesso" onSubmit={(event) => handleAuthenticate(event)}>
          <div className="lista-acesso">
            <span onClick={setAluno} role="presentation" className={user === 'student' ? 'perfil selected' : 'perfil'}> Aluno </span>
            <span onClick={setProfessor} role="presentation" className={user === 'teacher' ? 'perfil selected' : 'perfil'}> Professor </span>
          </div>
          <div className="login-loginInputMatricula">
            <MdEmail />
            <input
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              placeholder="Matricula"
            />
          </div>
          <div className="login-loginInputPassword">
            <MdLock />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Senha"
              type={show ? 'text' : 'password'}
            />
            <div className="login-Eye">
              {show ? (
                <HiEye
                  className="cursor-pointer"
                  size={20}
                  onClick={handleClick}
                />
              ) : (
                <HiEyeOff
                  className="cursor-pointer"
                  size={20}
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <button className="buttonLogin" type="submit">
            Entrar
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
