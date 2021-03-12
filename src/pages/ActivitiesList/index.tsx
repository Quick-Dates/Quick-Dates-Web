import React, { FC } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import Template from '../../components/Template';
import './styles.css';
// eslint-disable-next-line import/order
import Helmet from 'react-helmet';

const ActivitiesList: FC = () => (
  <div>
    <Helmet>
      <title>Quick Dates | Calendar</title>
    </Helmet>
    <Template isStudent>
      <h1 className="title">Atividades</h1>
      <BigCalendar />
    </Template>
  </div>
);

export default ActivitiesList;
