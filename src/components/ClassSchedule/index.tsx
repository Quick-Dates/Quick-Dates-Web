import React, { FC } from 'react';
import './styles.css';

const ClassSchedule: FC = () => (
  <div className="container">
    <div className="horarios">
      <span className="horario">07:00 - 07:50</span>
      <span className="horario">07:50 - 08:40</span>
      <span className="horario">08:55 - 09:45</span>
      <span className="horario">09:45 - 10:35</span>
      <span className="horario">13:00 - 13:50</span>
      <span className="horario">13:50 - 14:40</span>
      <span className="horario">14:55 - 15:45</span>
      <span className="horario">15:45 - 16:35</span>
      <span className="horario">16:50 - 17:40</span>
      <span className="horario">17:40 - 18:30</span>
    </div>
    <div className="table">
      <div className="headerDias">
        <span className="dia">Segunda</span>
        <span className="dia">Terça</span>
        <span className="dia">Quarta</span>
        <span className="dia">Quinta</span>
        <span className="dia">Sexta</span>
      </div>
      <div className="content">
        <div className="line">
          <span className="materia">Português</span>
          <span className="materia">Português</span>
          <span className="materia">Matematica</span>
          <span className="materia">Matematica</span>
          <span className="materia">Filosofia</span>
        </div>
        <div className="line">
          <span className="materia">Biologia</span>
          <span className="materia">Biologia</span>
          <span className="materia">História</span>
          <span className="materia">História</span>
          <span className="materia">Português</span>
        </div>
        <div className="line">
          <span className="materia">Sociologia</span>
          <span className="materia">Sociologia</span>
          <span className="materia">Química</span>
          <span className="materia">Química</span>
          <span className="materia">Ed Física</span>
        </div>
        <div className="line">
          <span className="materia">Ed Física</span>
          <span className="materia">Inglês</span>
          <span className="materia">Inglês</span>
          <span className="materia">Física</span>
          <span className="materia">Física</span>
        </div>
        <div className="line">
          <span className="materia">Redes</span>
          <span className="materia">Redes</span>
          <span className="materia">Sistemas</span>
          <span className="materia">Sistemas</span>
          <span className="materia">Linguagem</span>
        </div>
        <div className="line">
          <span className="materia">Portugues</span>
          <span className="materia">Portugues</span>
          <span className="materia">Matematica</span>
          <span className="materia">Matematica</span>
          <span className="materia">Filosofia</span>
        </div>
        <div className="line">
          <span className="materia">Biologia</span>
          <span className="materia">Biologia</span>
          <span className="materia">História</span>
          <span className="materia">História</span>
          <span className="materia">Português</span>
        </div>
        <div className="line">
          <span className="materia">Sociologia</span>
          <span className="materia">Sociologia</span>
          <span className="materia">Química</span>
          <span className="materia">Química</span>
          <span className="materia">Ed Física</span>
        </div>
        <div className="line">
          <span className="materia">Ed Física</span>
          <span className="materia">Inglês</span>
          <span className="materia">Inglês</span>
          <span className="materia">Física</span>
          <span className="materia">Física</span>
        </div>
        <div className="line">
          <span className="materia">Redes</span>
          <span className="materia">Redes</span>
          <span className="materia">Sistemas</span>
          <span className="materia">Sistemas</span>
          <span className="materia">Linguagem</span>
        </div>
      </div>
    </div>
  </div>
);

export default ClassSchedule;
