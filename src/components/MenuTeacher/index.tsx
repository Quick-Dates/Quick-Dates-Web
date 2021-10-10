import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Schedule from '../../assets/agendar-atividades-icon.svg';
import Exit from '../../assets/exit.svg';
import List from '../../assets/atividades-marcadas-icon.svg';

import './styles.css';
import { useContextAuth } from '../../Context/AuthContext';

export default function MenuStudent() {
  const pathName = useLocation().pathname;
  const { signOut } = useContextAuth();

  function handleClickSignout() {
    signOut();
  }

  return (
    <div className="containerMenuTeacher">
      <nav className="menu">

        <div>
          <section>
            <Link to="/shedule-activity" className={pathName === '/shedule-activity' ? 'visited' : ''}> <img src={Schedule} alt="" /></Link>
            <p>Agendar</p>
          </section>
          <section>
            <Link to="/edit-activity" className={pathName === '/edit-activity' ? 'visited' : ''}><img src={List} alt="" /></Link>
            <p>Marcadas</p>
          </section>
        </div>

        <div>
          <section>
            <Link to="/signin" onClick={handleClickSignout}><img src={Exit} alt="" /></Link>
            <p>Sair</p>
          </section>
        </div>
      </nav>
    </div>
  );
}
