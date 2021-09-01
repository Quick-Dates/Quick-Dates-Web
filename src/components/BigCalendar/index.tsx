import moment from 'moment';
import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// data
import { DataEventsContext } from '../../Context/DataEvents';
import { DataEventsActivies } from '../../Context/DataActivies';

// css
import './index.css';

export default function BigCalendar(): JSX.Element {
  const localizer = momentLocalizer(moment);
  const { modal } = useContext(DataEventsContext);

  return (
    <Calendar
      onSelectEvent={() => modal(true)}
      events={DataEventsActivies.eventsData}
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
