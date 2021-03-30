/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */

import React, { useState } from 'react';

export const DataEventsActivies = {
  eventsData: [{
    title: 'Prova português',
    start: new Date(2021, 2, 1, 10, 0), // 10.00 AM
    end: new Date(2021, 2, 1, 14, 0), // 2.00 PM
    details: 'Gramática',
    minValue: 0,
    maxValue: 10,
    typeEvaluation: 'Prova',
    class: '3° Informática',
    deliver: '01/03',
  },
  ],
};

interface DataEvents {
  children: React.ReactNode
}

interface Modal {
  modal: (x: boolean) => void,
  isVisible: boolean
}

export const DataEventsContext = React.createContext({} as Modal);

interface Object {
  title: string;
  start: Date;
  end: Date;
  details: string;
  minValue: number;
  maxValue: number;
  typeEvaluation: string;
  class: string;
}

export default function DataEventsProvider(props: DataEvents) {
  const atividade = [{
    title: 'Prova Matemática',
  }];

  const [isVisible, setIsVisible] = useState(false);

  function modal(x: boolean) {
    setIsVisible(x);
  }

  return (
    <DataEventsContext.Provider value={{ isVisible, modal }}>
      {props.children}
    </DataEventsContext.Provider>
  );
}
