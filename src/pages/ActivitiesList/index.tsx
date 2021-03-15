import React, { FC } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import Template from '../../components/Template';
import './styles.css';

const ActivitiesList: FC = () => (
  <div>
    <Template isStudent title="Calendar">
      <h1 className="title">Atividades</h1>
      <BigCalendar />
    </Template>
  </div>
);

export default ActivitiesList;
