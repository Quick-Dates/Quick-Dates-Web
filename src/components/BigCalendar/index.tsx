import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// data
import { DataEventsActivies } from '../../Context/DataActivies';

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
  // eslint-disable-next-line @typescript-eslint/ban-types
  function click(event: Object) {
    // eslint-disable-next-line no-console
    console.log(event);
  }

  return (
    <Calendar
      onSelectEvent={(event) => click(event)}
      events={[
        DataEventsActivies.eventsData[0],
        DataEventsActivies.eventsData[1],
        DataEventsActivies.eventsData[2],
        DataEventsActivies.eventsData[3],
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
