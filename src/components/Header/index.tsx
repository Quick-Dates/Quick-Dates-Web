import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/logo-header.svg';
import './styles.css';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  isStudent?: boolean
}

const Header: FC<IProps> = ({ isStudent }: IProps) => (
  <header className="header">
    <div className="logo">
      <img src={LogoHeader} alt="logo" />
    </div>
    { isStudent
      ? (
        <div className="menu">
          <Link to="/help"> Ajuda </Link>
          <Link to="/activities"> Calendário  </Link>
          <Link to="/time"> Horário  </Link>
          <Link to="/"> Sair  </Link>
        </div>
      )
      : (
        <div className="menu">
          <Link to="/help"> Ajuda </Link>
          <Link to="/create/activities"> Agendar atividades  </Link>
          <Link to="/list/activities"> Ver Atividades  </Link>
          <Link to="/"> Sair  </Link>
        </div>
      )}

  </header>
);

export default Header;
