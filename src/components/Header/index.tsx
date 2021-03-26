/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoHeader from '../../assets/logo-header.svg';
import LogoHeaderMobile from '../../assets/logo-mobile.svg';
import LogoMenu from '../../assets/menu-mobile.svg';
import MenuStudent from '../MenuStudent';
import MenuTeacher from '../MenuTeacher';
import './styles.css';

interface IProps{
  isStudent?: boolean
}

export default function Header({ isStudent }: IProps) {
  const pathName = useLocation().pathname;
  const { innerWidth: width } = window;

  const [isVisible, setIsVisble] = useState('none');
  const [count, setCount] = useState(1);
  function setVisible() {
    setCount(count + 1);

    if (count % 2 === 0) {
      setIsVisble('none');
    } else {
      setIsVisble('flex');
    }
  }

  return (

    <>
      {width <= 465 ? (
        <header className="header">
          <div className="logo-header">
            <img src={LogoHeaderMobile} alt="logo-header" />
          </div>

          { isStudent
            ? (
              <div
                role="presentation"
                className="menuResponse"
                onClick={setVisible}
              >
                <img src={LogoMenu} alt="" style={{ width: 58 }} />
                <div style={{ display: `${isVisible}` }}>
                  <MenuStudent />
                </div>
              </div>
            )
            : (
              <div
                role="presentation"
                className="menuResponse"
                onClick={setVisible}
              >
                <img src={LogoMenu} alt="" style={{ width: 58 }} />
                <div style={{ display: `${isVisible}` }}>
                  <MenuTeacher />
                </div>
              </div>
            )}

        </header>
      ) : (
        <header className="header">
          <div className="logo-header">
            <img src={LogoHeader} alt="logo-header" />
          </div>
          { isStudent
            ? (
              <nav className="menu">
                <Link to="/help/student" className={pathName === '/help/student' || pathName === '/help/teacher' ? 'visited' : ''}> Ajuda </Link>

                <Link to="/activities" className={pathName === '/activities' ? 'visited' : ''}> Calendário  </Link>

                <Link to="/time" className={pathName === '/time' ? 'visited' : ''}> Horário  </Link>
                <Link to="/"> Sair  </Link>
              </nav>
            )
            : (
              <nav className="menu">
                <Link to="/help/teacher" className={pathName === '/help' ? 'visited' : ''}> Ajuda </Link>
                <Link to="/create/activities" className={pathName === '/create/activities' ? 'visited' : ''}> Agendar atividades  </Link>
                <Link to="/list/activities" className={pathName === '/list/activities' ? 'visited' : ''}> Ver Atividades  </Link>
                <Link to="/"> Sair  </Link>
              </nav>
            )}

        </header>
      )}
    </>
  );
}
