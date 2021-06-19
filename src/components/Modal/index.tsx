/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import closeIcon from '../../assets/close.svg';
import notebookIcon from '../../assets/notebook-blue.svg';
import calendarIcon from '../../assets/calendar-blue.svg';
import evaOptionsIcon from '../../assets/eva-options.svg';

// data
import { DataEventsActivies } from '../../Context/DataActivies';

// styles
import './styles.css';

import { DataEventsContext } from '../../Context/DataEvents';

export default function Modal() {
  const { modal } = useContext(DataEventsContext);

  const [color, setColor] = useState('#69F6B2');
  const [situation, setSituation] = useState('Concluir');

  function handleChangeStatus() {
    const situationText = situation === 'Concluir' ? 'Desconcluir' : 'Concluir';
    const colorText = situationText === 'Concluir' ? '#69F6B2' : '#1DC3C4';
    setSituation(situationText);
    setColor(colorText);
  }

  return (
    <div className="overlay">
      <div className="modal">
        <img src={closeIcon} alt="fechar" className="close-icon" onClick={() => modal(false)} />
        <h1>{DataEventsActivies.eventsData[0].title}</h1>

        <p>{DataEventsActivies.eventsData[0].details}</p>

        <section>
          <div className="content-modal">
            <span className="info">
              <img src={notebookIcon} alt="notebook" className="icon" />
              Pontuação:
              <span className="value"> {DataEventsActivies.eventsData[0].maxValue} </span>
            </span>

            <span className="info">
              <img src={calendarIcon} alt="calendario" className="icon" />
              Data de entrega:
              <span className="value">
                {DataEventsActivies.eventsData[0].deliver}
              </span>
            </span>

            <span className="info">
              <img src={evaOptionsIcon} alt="eva options" className="icon" />
              Tipo de Atividade:
              <span className="value">
                {DataEventsActivies.eventsData[0].typeEvaluation}
              </span>
            </span>

          </div>
          <button className="buttonAction" style={{ background: color }} onClick={() => handleChangeStatus()}>{situation}</button>
        </section>
      </div>
    </div>
  );
}
