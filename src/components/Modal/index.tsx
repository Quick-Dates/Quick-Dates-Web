import React, { useContext, useEffect, useState } from 'react';
import closeIcon from '../../assets/close.svg';
import notebookIcon from '../../assets/notebook-blue.svg';
import calendarIcon from '../../assets/calendar-blue.svg';
import evaOptionsIcon from '../../assets/eva-options.svg';

import './styles.css';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { ITask } from '../../interfaces/ITask';
import { SituationTaskEnum } from '../../enum/situationTaskEnum';
import TemplateModal from '../TemplateModal';
import formatDate from '../../utils/formatDate';

export default function Modal({ id, setShowModal }: any) {
  const [situation, setSituation] = useState('...');
  const [task, setTask] = useState({} as ITask);

  async function handleChangeStatus() {
    const situationText = situation === 'Concluir' ? 'Desconcluir' : 'Concluir';
    setSituation(situationText);
    api.patch(`/tasks/${task.id}/situation`, { completed: situationText === 'Desconcluir' })
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        const message = error?.response?.data?.message || 'Erro ao alterar o estado da atividade';
        toast.error(message);
      });
  }

  useEffect(() => {
    api.get(`/tasks/${id}/student`)
      .then((response) => {
        setTask(response.data);
        setSituation(response.data.situation !== SituationTaskEnum.Concluida ? 'Concluir' : 'Desconcluir');
      })
      .catch((error) => {
        const message = error?.response?.data?.message || 'Erro ao buscar atividade';
        toast.error(message);
      });
  }, []);

  return (
    <TemplateModal setShowModal={setShowModal}>
      <div className="task-item-modal">

        <h1 className="text-principal">{task.title}</h1>
        <p className="description">
          {task.description}
        </p>
        <div className="spanButton">
          <section className="containerInformations">
            <span className="info">
              <img src={notebookIcon} alt="notebook" className="icon" />
              Pontuação máxima:
              <span className="value"> {task.maximumScore} </span>
            </span>
            <span className="info">
              <img src={calendarIcon} alt="calendario" className="icon" />
              Data inicial:
              <span className="value">
                {formatDate(task.startDate)}
              </span>
            </span>
            <span className="info">
              <img src={calendarIcon} alt="calendario" className="icon" />
              Data de entrega:
              <span className="value">
                {formatDate(task.finalDate)}
              </span>
            </span>
            <span className="info">
              <img src={evaOptionsIcon} alt="eva options" className="icon" />
              Disciplina:
              <span className="value">
                {task.subject}
              </span>
            </span>
          </section>
          <div className="containerButtons">
            <button className={situation === 'Concluir' ? 'buttonAction completed' : 'buttonAction'} onClick={() => handleChangeStatus()}>{situation}</button>
          </div>
        </div>
      </div>
    </TemplateModal>
  );
}
