/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */

import React, { useState } from 'react';

export const DataEventsActivies = {
  eventsData: [{
    title: 'RESUMO DE REDES DE COMPUTADORES',
    start: new Date(2021, 3, 1, 10, 0), // 10.00 AM
    end: new Date(2021, 3, 1, 14, 0), // 2.00 PM
    details: 'Escrever um resumo sobre as diferenças que os avanços na tecnologia proveram ao mundo nos ultimos 70 anos.',
    minValue: 0,
    maxValue: 8,
    typeEvaluation: 'Resumo',
    class: '3° Informática',
    deliver: '01/04',
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
