import React, { useEffect, useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import ProgressBar from '../../components/ProgressBar/index';
import NotebookIcon from '../../assets/notebook.svg';
import LearningImg from '../../assets/learning.png';
import NotebookIconError from '../../assets/notebook-error.svg';
import Template from '../../components/Template';
import './styles.css';

import ModalaAddStudentToTeam from '../../components/ModalAddStudentToTeam';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { IStatisticsTask } from '../../interfaces/IStatisticsTask';
import { useContextAuth } from '../../Context/AuthContext';

export default function ActivitiesList(): JSX.Element {
  const { innerWidth: width } = window;
  const { signOut } = useContextAuth();
  const [statisticTask, setStatisticTask] = useState({} as IStatisticsTask);
  const [reloadCalendar, setReloadCalendar] = useState(false);
  const [showModalAddTeam, setShowModal] = useState(false);
  function setShowModalAddTeam(value: boolean): void {
    setReloadCalendar(true);
    setShowModal(value);
    setReloadCalendar(false);
  }
  useEffect(() => {
    api.get('/tasks/statistics-week').then((response) => {
      setStatisticTask(response.data as IStatisticsTask);
    }).catch((error) => {
      const message = error.response?.data?.message || 'Erro ao carregar as estatísticas';
      toast.error(message);
      if (error.response.status === 401) {
        signOut();
      }
    });
  }, []);
  return (
    <Template isStudent title="Atividades Marcadas" titleTab="Calendar">
      {showModalAddTeam
      && <ModalaAddStudentToTeam setShowModalAddTeam={setShowModalAddTeam} />}
      <div className="contentActivies">
        {!reloadCalendar && (<BigCalendar setShowModalAddTeam={setShowModalAddTeam} />)}

        <div className="progress-container">
          <div className="card-progress">
            <h1 className="title">Progresso da Semana</h1>
            <p className="description">Aqui consta os progressos que você fez na semana como,
              por exemplo, atividades concluidas.
            </p>
            <div className="card-info-progress">
              <span className="label-progress">
                <img src={NotebookIcon} alt="notebook" />
                Atividades totais: <span className="value-progress-done"> {statisticTask.length}</span>
              </span>
              <span className="label-progress">
                <img src={NotebookIcon} alt="notebook" />
                Atividades concluídas: <span className="value-progress-done"> {statisticTask.completed}</span>
              </span>
              <span className="label-progress">
                <img src={NotebookIconError} alt="notebook error" />
                Atividades não concluídas: <span className="value-progress-late"> {statisticTask.inProgress}</span>
              </span>
            </div>
            <ProgressBar progress={statisticTask.successPercentage?.toFixed(2)} />
          </div>
          {width > 768 && <img src={LearningImg} alt="aprender" />}
        </div>
      </div>
    </Template>
  );
}
