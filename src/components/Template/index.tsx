import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  isStudent?: boolean
  children: ReactNode
  title: string
}

// eslint-disable-next-line react/prop-types
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
