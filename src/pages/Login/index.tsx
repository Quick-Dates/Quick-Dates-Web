/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import LogoMain from '../../assets/logo-main.svg';

import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from '@unform/web';
import Input from '../../components/Input';

interface DataForm {
  login: string,
  password: string;
}

export default function Login() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('student');

  function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setShow(!show);
  }

  // eslint-disable-next-line consistent-return
  function handleAuthenticate(data: DataForm) {
    // eslint-disable-next-line no-console
    const { login, password } = data;

    if (user === 'student') {
      if (login === '123' && password === 'aluno123') {
        return history.push('/activities');
      }
      return toast.error('Matricula ou senha inválidos');
    }
    if (user === 'teacher') {
      if (login === 'professor' && password === 'professor123') {
        return history.push('/shedule-activity');
      }
      return toast.error('Login ou senha inválidos');
    }
  }

  function setProfessor() {
    setUser('teacher');
  }

  function setAluno() {
    setUser('student');
  }

  return (
    <div className="login">
      <div className="logo">
        <img src={LogoMain} alt="logo" />
      </div>
      <div className="loginR">
        <h1>Login</h1>
        <Form className="acesso" onSubmit={handleAuthenticate}>
          <div className="lista-acesso">
            <span onClick={setAluno} role="presentation" className={user === 'student' ? 'perfil selected' : 'perfil'}> Aluno </span>
            <span onClick={setProfessor} role="presentation" className={user === 'teacher' ? 'perfil selected' : 'perfil'}> Professor </span>
          </div>
          <div className="login-loginInputMatricula">
            <MdEmail />
            <Input
              name="login"
              type="text"
            />
          </div>
          <div className="login-loginInputPassword">
            <MdLock />
            <Input
              name="password"
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
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
