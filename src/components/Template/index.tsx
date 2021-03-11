import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  isStudent?: boolean
  children: ReactNode
}

// eslint-disable-next-line react/prop-types
const Template: FC<IProps> = ({ children, isStudent }: IProps) => (
  <div className="template">
    <Header isStudent={isStudent} />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
);

export default Template;
