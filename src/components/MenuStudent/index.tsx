import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CalendarIcon from '../../assets/calendario-mobile-icon.svg';
import RankingIcon from '../../assets/ranking-icon.svg';
import SchoolIcon from '../../assets/school.svg';
import ExitIcon from '../../assets/exit.svg';

import './styles.css';
import { useContextAuth } from '../../Context/AuthContext';

export default function MenuStudent() {
  const pathName = useLocation().pathname;
  const { signOut } = useContextAuth();

  function handleClickSignout() {
    signOut();
  }

  return (
    <div className="container">
      <nav className="menu">

        <div>
          <section>
            <Link to="/activities" className={pathName === '/activities' ? 'visited' : ''}><img src={CalendarIcon} alt="" /></Link>
            <p>Avaliações</p>
          </section>
          <section>
            <Link to="/ranking" className={pathName === '/ranking' ? 'visited' : ''}><img src={RankingIcon} alt="" /></Link>
            <p>Ranking</p>
          </section>

        </div>

        <div>

          <section>
            <Link to="/grades" className={pathName === '/grades' ? 'visited' : ''}><img src={SchoolIcon} alt="" /></Link>
            <p>Notas</p>
          </section>
          <section>
            <Link to="/signin" onClick={handleClickSignout}><img src={ExitIcon} alt="" /></Link>
            <p>Sair</p>
          </section>
        </div>
      </nav>
    </div>
  );
}
