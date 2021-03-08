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
          <Link to="/ajuda"> Ajuda </Link>
          <Link to="/atividades"> Calendário  </Link>
          <Link to="/horario"> Horário  </Link>
          <Link to="/ementa"> Ementa  </Link>
          <Link to="/ajustes"> Ajustes  </Link>
        </div>
      )
      : (
        <div className="menu">
          <Link to="/ajuda"> Ajuda </Link>
          <Link to="/criar/atividades"> Agendar atividades  </Link>
          <Link to="/informacoes"> Informações  </Link>
        </div>
      )}

  </header>
);

export default Header;
