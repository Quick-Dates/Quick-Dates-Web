/* eslint-disable react/button-has-type */
import React from 'react';

// data
import { DataEventsActivies } from '../../Context/DataActivies';

// styles
import './styles.css';

export default function Modal() {
  return (
    <div className="modal">
      <h2>{DataEventsActivies.eventsData[1].title}</h2>

      <p>{DataEventsActivies.eventsData[1].details}</p>

      <div>
        <span>Pontuação: {DataEventsActivies.eventsData[1].maxValue}</span>

        <span>Data de entrega: {DataEventsActivies.eventsData[0].deliver}</span>

        <span>Tipo de Atividade{DataEventsActivies.eventsData[1].typeEvaluation}</span>
      </div>

      <button>Fechar</button>
    </div>
  );
}
