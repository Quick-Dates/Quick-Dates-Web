import React, { FC } from 'react';
import SocialMedia from '../../components/SocialMedia';
import Template from '../../components/Template';
import './styles.css';
// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

const Help: FC = () => (
  <div>
    <Helmet>
      <title>Quick Dates | Help</title>
    </Helmet>
    <Template isStudent>
      <SocialMedia />
    </Template>
  </div>
);

export default Help;
