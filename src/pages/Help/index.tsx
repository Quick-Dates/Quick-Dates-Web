import React, { FC } from 'react';
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
      <h1 className="title">Ajuda</h1>
    </Template>
  </div>
);

export default Help;
