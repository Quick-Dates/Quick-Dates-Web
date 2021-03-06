/* eslint-disable max-len */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import help from '../../assets/ajuda-mobile-icon.svg';
import schedule from '../../assets/agendar-atividades-icon.svg';
import exit from '../../assets/exit.svg';
import list from '../../assets/agendar-atividades.svg';

import './styles.css';

export default function MenuStudent() {
  const pathName = useLocation().pathname;

  return (
    <div className="containerMenuTeacher">
      <nav className="menu">

        <div>
          <section>
            <Link to="/shedule-activity" className={pathName === '/shedule-activity' ? 'visited' : ''}> <img src={schedule} alt="" /></Link>
            <p>Agendar</p>
          </section>

          <section>
            <Link to="/help/teacher" className={pathName === '../../pages/help/student' || pathName === '/help/teacher' ? 'visited' : ''}><img src={help} alt="" /></Link>
            <p>Ajuda</p>
          </section>
        </div>

        <div>
          <section>
            <Link to="/edit-activity" className={pathName === '../../pages/edit-activity' || pathName === '/edit-activity' ? 'visited' : ''}><img src={list} alt="" /></Link>
            <p>Marcadas</p>
          </section>

          <section>
            <Link to="/"><img src={exit} alt="" /></Link>
            <p>Sair</p>
          </section>
        </div>
      </nav>
    </div>
  );
}
