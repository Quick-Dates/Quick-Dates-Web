/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import ProgressBar from '../../components/ProgressBar/index';
import NotebookIcon from '../../assets/notebook.svg';
import LearningImg from '../../assets/learning.png';
import NotebookIconError from '../../assets/notebook-error.svg';
import Template from '../../components/Template';
import './styles.css';

// animations
import Lottie from 'react-lottie';
import animation from '../../assets/calendar-animation.json';

import { DataEventsContext } from '../../Context/DataEvents';
import Modal from '../../components/Modal';

export default function ActivitiesList(): JSX.Element {
  const { innerWidth: width } = window;

  let breadth = 0;
  let height = 0;

  if (width <= 425) {
    breadth = 300;
    height = 300;
  } else {
    breadth = 400;
    height = 400;
  }

  const { isVisible } = useContext(DataEventsContext);

  return (
    <Template isStudent title="Atividades marcadas" titleTab="Calendar">
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
