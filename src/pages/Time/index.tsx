import React from 'react';
import ClassSchedule from '../../components/ClassSchedule';
import Template from '../../components/Template';
import './styles.css';

export default function Time() {
  return (
    <Template isStudent title="Horário" titleTab="Horários">
      <ClassSchedule />
    </Template>
  );
}
