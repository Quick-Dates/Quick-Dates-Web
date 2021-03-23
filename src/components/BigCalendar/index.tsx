import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// css
import './index.css';

interface Object {
  title: string;
  start: Date;
  end: Date;
  details: string;
  minValue: number;
  maxValue: number;
  typeEvaluation: string;
  class: string;
}

export default function BigCalendar(): JSX.Element {
  const localizer = momentLocalizer(moment);

  const events = [{
    title: 'Prova português',
    start: new Date(2021, 2, 1, 10, 0), // 10.00 AM
    end: new Date(2021, 2, 1, 14, 0), // 2.00 PM
    details: 'Pontuação',
    minValue: 0,
    maxValue: 10,
    typeEvaluation: 'Prova',
    class: '3° Informática',
  },
  {
    title: 'Prova matemática',
    start: new Date(2021, 2, 5, 10, 0), // 10.00 AM
    end: new Date(2021, 2, 5, 14, 0), // 2.00 PM
    details: 'P.A e P.G',
    minValue: 0,
    maxValue: 10,
    typeEvaluation: 'Trabalho',
    class: '3° Informática',
  },
  {
    title: 'Resumo de história',
    start: new Date(2021, 2, 16, 10, 0), // 10.00 AM
    end: new Date(2021, 2, 16, 14, 0), // 2.00 PM
    details: 'Estado novo',
    minValue: 0,
    maxValue: 10,
    typeEvaluation: 'Resumo',
    class: '3° Informática',
  },
  {
    title: 'Trabalho de biologia',
    start: new Date(2021, 2, 30, 10, 0), // 10.00 AM
    end: new Date(2021, 2, 30, 14, 0), // 2.00 PM
    details: 'Fazer a mão',
    minValue: 0,
    maxValue: 10,
    typeEvaluation: 'Trabalho',
    class: '3° Informática',
  }];

  // eslint-disable-next-line @typescript-eslint/ban-types
  function click(event: Object) {
    // eslint-disable-next-line no-console
    console.log(event);
  }

  return (
    <Calendar
      onSelectEvent={(event) => click(event)}
      events={[
        events[0],
        events[1],
        events[2],
        events[3],
      ]}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      culture="pt-br"
      style={{ height: '100%' }}
      messages={{
        next: 'Próximo',
        previous: 'Anterior',
        today: 'Hoje',
        month: 'Mes',
        week: 'Semana',
        day: 'Dia',
      }}
    />
  );
}
