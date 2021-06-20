/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import LogoMain from "../../assets/logo-main.svg";
import NewLogo from "../../assets/logo-new-login.svg";
import LogoGray from "../../assets/logo-gray.svg";
import Bro from "../../assets/bro.svg";
import Winners from "../../assets/winners.svg";
import Calendar from "../../assets/calendar.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import TwitterGray from "../../assets/twitter-gray.svg";
import LinkedinGray from "../../assets/linkedin-gray.svg";
import InstagramGray from "../../assets/instagram-gray.svg";
import Meeting from "../../assets/meeting.svg";
import Universidade from "../../assets/universidade.svg";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Container from "../../components/Container/Container";

import Data from "./FakeData.json";
import Carousel from "react-elastic-carousel";

interface DataForm {
  login: string;
  password: string;
}

export default function Login() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("student");

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setShow(!show);
  }

  // eslint-disable-next-line consistent-return
  function handleAuthenticate(data: DataForm) {
    // eslint-disable-next-line no-console
    const { login, password } = data;

    if (user === "student") {
      if (login === "123" && password === "aluno123") {
        return history.push("/activities");
      }
      return toast.error("Matricula ou senha inválidos");
    }
    if (user === "teacher") {
      if (login === "professor" && password === "professor123") {
        return history.push("/shedule-activity");
      }
      return toast.error("Login ou senha inválidos");
    }
  }

  function setProfessor() {
    setUser("teacher");
  }

  function setAluno() {
    setUser("student");
  }

  return (
    <div className="login">
      <div className="headerLogin">
        <div className="containerLogo">
          <img src={NewLogo} alt="Logo" />
        </div>
        <div className="containerLinks">
          <a href="#" className="optionsText">
            <p className="option">Login</p>
          </a>
          <a href="#Sobre" className="optionsText">
            <p className="option">Sobre</p>
          </a>
          <a href="#Opinioes" className="optionsText">
            <p className="option">Opiniões</p>
          </a>
          <a href="#Funcionalidades" className="optionsText">
            <p className="option">Funcionalidades</p>
          </a>
          <a href="#" className="linkbutton">
            <button className="buttonHeader" type="button">
              Entrar
            </button>
          </a>
        </div>
      </div>

      <div className="container1">
        <div className="form">
          <h1 className="titleLogin" id="Login">
            Ganhe tempo visualizando suas atividades de forma organizada
          </h1>
          <p className="descricaoLogin">
            O Quick Dates te ajuda a agilizar o processo de desenvolvimento de
            sua atividades
          </p>

          <Form className="acesso" onSubmit={handleAuthenticate}>
            <div className="lista-acesso">
              <span
                onClick={setAluno}
                role="presentation"
                className={user === "student" ? "perfil selected" : "perfil"}
              >
                {" "}
                Aluno{" "}
              </span>
              <span
                onClick={setProfessor}
                role="presentation"
                className={user === "teacher" ? "perfil selected" : "perfil"}
              >
                {" "}
                Professor{" "}
              </span>
            </div>
            <div className="login-loginInputMatricula">
              <MdEmail />
              <Input placeholder="Usuário" name="login" type="text" />
            </div>
            <div className="login-loginInputPassword">
              <MdLock />
              <Input
                placeholder="Senha"
                name="password"
                type={show ? "text" : "password"}
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
        <img className="bro" src={Bro} alt="" />
      </div>

      <div className="container2">
        <h2 className="titleContainer2" id="Funcionalidades">
          Funcionalidades
        </h2>
        <div className="contentLogin">
          <Container
            image={Winners}
            title="Ranking de Alunos"
            text="Veja o ranking de alunos que detém as melhores médias de sua sala"
            width="30"
          />

          <Container
            image={Calendar}
            title="Calendário de avaliações"
            text="Visualize data, horário, descrição e pontuação das atividades marcadas por professores"
            width="37.2"
          />
        </div>
      </div>

      <div className="container3">
        <h2 className="titleContainer3" id="Sobre">
          Sobre
        </h2>
        <div className="content3">
          <div className="text">
            <p className="sobre">
              O Quick Dates é um projeto Open Source desenvolvido e mantido por
              um grupo de 8 alunos do Instituto Federal de Educação, Ciência e
              Tecnologia de Mato Grosso (IFMT), campus Rondonópolis. <br />{" "}
              <br /> O projeto foi idealizado durante a disciplina de projeto
              integrador do curso técnico em informática. O sistema tem como seu
              objetivo digitalizar o gerenciamento de atividades acadêmicas no
              campus.
            </p>

            <div className="redesSociais">
              <a href="https://www.instagram.com/quick.dates/?hl=pt-br">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/company/quick-dates/">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a href="https://twitter.com/DatesQuick">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <img className="meeting" src={Meeting} alt="Meeting" />
        </div>
      </div>

      <div className="container4">
        <h2 className="titleContainer2" id="Opinioes">
          Opiniões
        </h2>
        <div className="content4">
          <Carousel
            style={{
              width: "50%",
              height: "80%",
            }}
            showArrows={false}
            enableAutoPlay
          >
            {Data.map((item) => (
              <div className="opinioes">
                <p className="opiniao">“{item.opiniao}.”</p>

                <div className="pessoa">
                  <span className="nome">{item.nome}</span>
                  <span className="curso">
                    {item.sexo} do curso técnico em {item.curso}
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
          {/* <div className="opinioes">
            <p className="opiniao">
              “O sistema é muito bom, com certeza irá empactar positivamente na
              vida acadêmica dentro do instituto.”
            </p>

            <div className="pessoa">
              <span className="nome">Marcela Lima</span>
              <span className="curso">
                Aluna do curso técnico em Informática
              </span>
            </div>
          </div> */}

          <img src={Universidade} alt="Image" />
        </div>
      </div>

      <footer>
        <div className="top">
          <img src={LogoGray} alt="Logo Footer" />
          <div className="subTop">
            <a href="#Login" className="optionsText">
              <p className="option optionFooter">Login</p>
            </a>
            <a href="#Sobre" className="optionsText">
              <p className="option optionFooter">Sobre</p>
            </a>
            <a href="#Opinioes" className="optionsText">
              <p className="option optionFooter">Opiniões</p>
            </a>
            <a href="#Funcionalidades" className="optionsText">
              <p className="option optionFooter">Funcionalidades</p>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div className="subBottom">
            <a href="#" className="optionsText">
              <p className="option optionFooter">Termo de uso</p>
            </a>
            <a href="#" className="optionsText">
              <p className="option optionFooter">Politica de privacidade</p>
            </a>

            <div className="sociaisGray">
              <a href="https://www.instagram.com/quick.dates/?hl=pt-br">
                <img src={InstagramGray} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/company/quick-dates/">
                <img src={LinkedinGray} alt="linkedin" />
              </a>
              <a href="https://twitter.com/DatesQuick">
                <img src={TwitterGray} alt="twitter" />
              </a>
            </div>
          </div>
          <span className="option optionFooter">
            Copyright © 2021 Quick Dates
          </span>
        </div>
      </footer>

      {/* <div className="logo">
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
      </div> */}
      <ToastContainer />
    </div>
  );
}
