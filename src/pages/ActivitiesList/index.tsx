import React, { FC } from 'react';
import BigCalendar from '../../components/BigCalendar';
import './styles.css';

const ActivitiesList: FC = () => (
  <div>
    <h1 className="title">Atividades</h1>
    <BigCalendar />
  </div>
);

export default ActivitiesList;
