/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Template from '../../components/Template';
import PanaImg from '../../assets/pana.svg';

import './styles.css';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { ITask } from '../../interfaces/ITask';
import TaskItem from '../../components/TaskItem';

export default function EditActivity() {
  const { innerWidth: width } = window;
  const [tasks, setTasks] = useState([{}] as ITask[]);

  useEffect(() => {
    api.get("/tasks/teacher")
      .then((response) => {
        setTasks(response.data as ITask[]);
      }).catch((error) => {
        const message = error.response?.data?.message || "Erro ao buscar tarefas";
        toast.error(message);
      });
  }, []);

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Template titleTab="Professor" title="Atividades Marcadas">
      <div className="containerEditActivity">
        <div className="contentEditActivity">
          <div className="card-info">
            <div className="text">
              <h2 className="title-card">Atividades Marcadas</h2>
              <p className="description-card">Aqui você pode visualizar as atividades que foram marcadas, tendo acesso
                as mesmas e as possibilidades de editar ou excluir uma atividade, conforme desejar.
              </p>
            </div>
            <img src={PanaImg} alt="pana" />
          </div>
          <div className="containerDiv">
            <div className="containerList">
              {tasks.map((task) => (
                <TaskItem task={task} removeTask={removeTask} />
              ))}
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </Template>
  );
}
