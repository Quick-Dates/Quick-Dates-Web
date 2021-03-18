import React from 'react';
import ClassSchedule from '../../components/ClassSchedule';
import Template from '../../components/Template';
import './styles.css';
import Helmet from 'react-helmet';

export default function Time() {
  return (
    <div>
      <Helmet>
        <title>Quick Dates | Time</title>
      </Helmet>
      <Template isStudent title="Horário">
        <ClassSchedule />
      </Template>
    </div>
  );
}
