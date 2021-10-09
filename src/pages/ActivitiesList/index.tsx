import React, { useContext, useEffect, useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import ProgressBar from '../../components/ProgressBar/index';
import NotebookIcon from '../../assets/notebook.svg';
import LearningImg from '../../assets/learning.png';
import NotebookIconError from '../../assets/notebook-error.svg';
import Template from '../../components/Template';
import './styles.css';

import { DataEventsContext } from '../../Context/DataEvents';
import Modal from '../../components/Modal';
import api from '../../services/api';
import { useContextAuth } from '../../Context/AuthContext';
import ModalaAddStudentToTeam from '../../components/ModalAddStudentToTeam';

export default function ActivitiesList(): JSX.Element {
  const authContext = useContextAuth();
  const { innerWidth: width } = window;
  const [showModalAddTeam, setShowModalAddTeam] = useState(false);

  const { isVisible } = useContext(DataEventsContext);

  useEffect(() => {
    api.get(`/students/${authContext.user.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response && error.response.data.message === 'Turma não encontrada') {
          setShowModalAddTeam(true);
        }
      });
  }, []);
  return (
    <Template isStudent title="Atividades Marcadas" titleTab="Calendar">
      {showModalAddTeam
      && <ModalaAddStudentToTeam />}
      <div className="contentActivies">
        <BigCalendar />
        {isVisible && <Modal />}
        <div className="progress-container">
          <div className="card-progress">
            <h1 className="title">Progresso da Semana</h1>
            <p className="description">Aqui consta os progressos que você fez na semana como,
              por exemplo, atividades concluidas.
            </p>
            <div className="card-info-progress">
              <span className="label-progress">
                <img src={NotebookIcon} alt="notebook" />
                Atividades concluidas: <span className="value-progress-done"> 2</span>
              </span>
              <span className="label-progress">
                <img src={NotebookIconError} alt="notebook error" />
                Atividades não conluidas: <span className="value-progress-late"> 1</span>
              </span>
            </div>
            <ProgressBar progress="66.7" />
          </div>
          {width > 768 && <img src={LearningImg} alt="aprender" />}
        </div>
      </div>
    </Template>
  );
}
