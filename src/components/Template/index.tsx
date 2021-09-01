import React, { ReactNode } from 'react';
import backIcon from '../../assets/back.svg';
import Header from '../Header';
import Footer from '../Footer';
import { SwitchTheme } from '../SwitchTheme';
import './styles.css';

import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';

interface IProps{
  isStudent?: boolean
  children: ReactNode
  title: string
  titleTab: string
}

export default function Template({
  children, isStudent, title, titleTab,
}: IProps) {
  const history = useHistory();

  function handleBackRouter() {
    history.goBack();
  }
  return (
    <div className="template">
      <Helmet>
        <title>Quick Dates | {titleTab}</title>
      </Helmet>
      <Header isStudent={isStudent} />
      <div className="content-page">
        <div className="sub-header">
          <div className="back-container">
            <img src={backIcon} alt="voltar" className="icon-back" onClick={() => handleBackRouter()} />
            <span className="label" onClick={() => handleBackRouter()}> Voltar </span>
          </div>
          <SwitchTheme />
        </div>
        <h1 className="title">{ title }</h1>
        {children}
      </div>
      <Footer />
    </div>
  );
}
