/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';

// data
import { DataEventsActivies } from '../../Context/DataActivies';

// styles
import './styles.css';

import { DataEventsContext } from '../../Context/DataEvents';

export default function Modal() {
  const { modal } = useContext(DataEventsContext);

  return (
    <div className="overlay">
      <div className="modal">
        <h2>{DataEventsActivies.eventsData[1].title}</h2>

        <p>{DataEventsActivies.eventsData[1].details}</p>

        <section>
          <div>
            <span>Pontuação: {DataEventsActivies.eventsData[1].maxValue}</span>

            <span>Data de entrega: {DataEventsActivies.eventsData[0].deliver}</span>

            <span>Tipo de Atividade{DataEventsActivies.eventsData[1].typeEvaluation}</span>
          </div>

          <button onClick={(event) => modal(false)}>Fechar</button>
        </section>
      </div>
    </div>
  );
}
