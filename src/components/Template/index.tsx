import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface IProps{
  // eslint-disable-next-line react/require-default-props
  isStudent?: boolean
  children: ReactNode
}

// eslint-disable-next-line react/prop-types
const Template: FC<IProps> = ({ children, isStudent }: IProps) => (
  <div className="template">
    <Header isStudent={isStudent} />
    {children}
    <Footer />
  </div>
);

export default Template;
