import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

import Helmet from 'react-helmet';

interface IProps{
  isStudent?: boolean
  children: ReactNode
  title: string
}

const Template: FC<IProps> = ({ children, isStudent, title }: IProps) => (
  <div className="template">
    <Helmet>
      <title>Quick Dates | {title}</title>
    </Helmet>
    <Header isStudent={isStudent} />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
);

export default Template;
