/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';

// data
import { DataEventsActivies } from '../../Context/DataActivies';

// styles
import './styles.css';

import { DataEventsContext } from '../../Context/DataEvents';

export default function Modal() {
  const { modal } = useContext(DataEventsContext);

  const [text, setText] = useState(' ');
  const [color, setColor] = useState('gray');
  const [radius, setRadius] = useState('.5');

  function check() {
    setText('V');
    setColor('darkgreen');
    setRadius('1');
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h2>{DataEventsActivies.eventsData[1].title}</h2>

        <p>{DataEventsActivies.eventsData[1].details}</p>

        <section>
          <div>
            <span>Pontuação: {DataEventsActivies.eventsData[1].maxValue}</span>

            <span>Data de entrega: {DataEventsActivies.eventsData[0].deliver}</span>

            <span>Tipo de Atividade: {DataEventsActivies.eventsData[1].typeEvaluation}</span>

            <button
              onClick={check}
              style={{
                marginTop: '1rem',
                width: '2rem',
                height: '2rem',
                color: '#fff',
                border: 0,
                borderRadius: `${radius}rem`,
                backgroundColor: `${color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {text}
            </button>
          </div>
          <button className="buttonExit" onClick={(event) => modal(false)}>Fechar</button>

        </section>
      </div>
    </div>
  );
}
