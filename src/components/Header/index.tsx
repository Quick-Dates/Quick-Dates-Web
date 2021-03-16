import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoHeader from '../../assets/logo-header.svg';
import './styles.css';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  isStudent?: boolean
}

const Header: FC<IProps> = ({ isStudent }: IProps) => {
  const pathName = useLocation().pathname;
  return (

    <header className="header">
      <div className="logo">
        <img src={LogoHeader} alt="logo" />
      </div>
      { isStudent
        ? (
          <nav className="menu">
            <Link to="/help/student" className={pathName === '/help' ? 'visited' : ''}> Ajuda </Link>
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
  );
};

export default Header;
