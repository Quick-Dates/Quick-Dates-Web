import React, { FC } from 'react';
import Template from '../../components/Template';
import './styles.css';
// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

const Time: FC = () => (
  <div>
    <Helmet>
      <title>Quick Dates | Time</title>
    </Helmet>
    <Template isStudent>
      <h1 className="title">Horários</h1>
    </Template>
  </div>
);

export default Time;
