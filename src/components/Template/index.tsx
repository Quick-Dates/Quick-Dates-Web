import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

import Helmet from 'react-helmet';

interface IProps{
  isStudent?: boolean
  children: ReactNode
  title: string
}

export default function Template({ children, isStudent, title }: IProps) {
  return (
    <div className="template">
      <Helmet>
        <title>Quick Dates | {title}</title>
      </Helmet>
      <Header isStudent={isStudent} />
      <div className="content-page">
        {children}
      </div>
      <Footer />
    </div>
  );
}
