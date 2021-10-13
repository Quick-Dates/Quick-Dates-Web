import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// css
import './index.css';
import api from '../../services/api';
import { ITask } from '../../interfaces/ITask';
import { useContextAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from '../Modal';

export default function BigCalendar({ setShowModalAddTeam }: any): JSX.Element {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([{} as Event]);
  const { signOut } = useContextAuth();
  const route = useHistory();
  const [modalDetail, setModalDetail] = useState(false);
  const [idEventSelected, setIdEventSelected] = useState(false);

  useEffect(() => {
    api.get(`/tasks/student`)
      .then((response) => {
        const tasks = response.data as ITask[];
        setEvents(tasks.map((task: ITask) => ({
          title: task.title,
          start: new Date(`${task.finalDate} ${task.finalTime}`),
          end: new Date(`${task.finalDate} ${task.finalTime}`),
          resource: task.id,
        })));
      })
      .catch((error) => {
        const message = error?.response?.data?.message || 'Erro ao buscar atividades';
        if (message === 'Turma não encontrada') {
          return setShowModalAddTeam(true);
        }
        if (message === 'Aluno não encontrado') {
          signOut();
          return route.push('/signin');
        }
        toast.error(message);
      });
  }, []);

  function handleSelectEvent(event: Event) {
    const id = event.resource;
    setIdEventSelected(id);
    setModalDetail(true);
  }

  return (
    <>
      {modalDetail
      && (<Modal id={idEventSelected} setShowModal={setModalDetail} />)}
      <Calendar
        onSelectEvent={handleSelectEvent}
        events={events}
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
      <ToastContainer />
    </>
  );
}
