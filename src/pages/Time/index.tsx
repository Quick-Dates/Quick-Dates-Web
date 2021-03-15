import React, { FC } from 'react';
import ClassSchedule from '../../components/ClassSchedule';
import Template from '../../components/Template';
import './styles.css';
// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

const Time: FC = () => (
  <div>
    <Helmet>
      <title>Quick Dates | Time</title>
    </Helmet>
    <Template isStudent title="Horário">
      <ClassSchedule />
    </Template>
  </div>
);

export default Time;
