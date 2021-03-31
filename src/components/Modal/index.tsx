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
  const [count, setCount] = useState(1);

  function check() {
    // setText('V');
    // setColor('darkgreen');
    // setRadius('1');

    setCount(count + 1);

    if (count % 2 === 0) {
      setText('V');
      setColor('darkgreen');
      setRadius('1');
    } else {
      setText(' ');
      setColor('gray');
      setRadius('.5');
    }
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h1>{DataEventsActivies.eventsData[0].title}</h1>

        <p>{DataEventsActivies.eventsData[0].details}</p>

        <section>
          <div>
            <span>Pontuação: {DataEventsActivies.eventsData[0].maxValue}</span>

            <span>Data de entrega: {DataEventsActivies.eventsData[0].deliver}</span>

            <span>Tipo de Atividade: {DataEventsActivies.eventsData[0].typeEvaluation}</span>

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
