import moment from 'moment';
import React, { FC } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BigCalendar: FC = () => {
  const localizer = momentLocalizer(moment);
  return (
    <Calendar
      events={[]}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      culture="pt-br"
      style={{ height: 500 }}
      messages={{
        next: 'Próximo',
        previous: 'Anterior',
        today: 'Hoje',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
      }}
    />
  );
};

export default BigCalendar;
