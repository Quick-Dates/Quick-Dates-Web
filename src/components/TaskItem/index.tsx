import React, { useState } from 'react';
import notebookIcon from '../../assets/notebook-blue.svg';
import calendarIcon from '../../assets/calendar-blue.svg';
import evaOptionsIcon from '../../assets/eva-options.svg';
import selectUp from '../../assets/selectUp.svg';
import selectDown from '../../assets/selectDown.svg';
import './styles.css';
import { ITask } from '../../interfaces/ITask';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

interface IProps {
  task: ITask;
  removeTask: (id: number) => void;
}
export default function TaskItem({ task, removeTask }: IProps) {
  const yearNow = new Date().getFullYear();
  const [expand, setExpand] = useState(false);
  const route = useHistory();

  function formatDate(date: string) {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    return `${day}/${month}/${year}`;
  }

  async function handleDeleteTask() {
    api.delete(`/tasks/${task.id}`)
      .then((response) => {
        removeTask(task.id);
        toast.success('Tarefa deletada com sucesso!');
      }).catch((error) => {
        const message = error.response?.data?.message || "Erro ao deletar tarefa";
        toast.error(message);
      });
  }

  function handleNavigateToEdit() {
    route.push(`/shedule-activity`, { id: task.id });
  }

  return (
    <div className={expand ? 'task-item expand' : 'task-item'}>
      <div className="principal">
        <span className="text-principal">
          {(yearNow - task.team?.yearCreation) + 1}° ano {' '}
          {task.team?.course.name.charAt(0).toUpperCase() + task.team?.course.name.substr(1).toLowerCase()} {' '}
          - {task.title}
        </span>
        <img
          src={expand ? selectUp : selectDown}
          alt="icon"
          className="expand-icon"
          onClick={() => setExpand(!expand)}
        />
      </div>
      {expand && (
      <div className="containerExpandTask">
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
            <button className="edit" type="button" onClick={handleNavigateToEdit}>Editar</button>
            <button className="delete" type="button" onClick={handleDeleteTask}>Excluir</button>
          </div>
        </div>
      </div>
      )}

    </div>
  );
}
