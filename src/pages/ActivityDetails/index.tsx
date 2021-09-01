import React from 'react';
import Template from '../../components/Template';
import notebookIcon from '../../assets/notebook-blue.svg';
import calendarIcon from '../../assets/calendar-blue.svg';
import evaOptionsIcon from '../../assets/eva-options.svg';
import './styles.css';

export default function ActivityDeatails() {
  return (
    <Template titleTab="Detalhes da Atividade" title="Detalhes da Atividade">
      <div className="containerActivityDetails">
        <div className="contentActivityDetails">
          <h1 className="titleActivityDeatails">Atividade de Matemática </h1>

          <p>
            Realizar todas as atividades propostas na lista de exercícios de PA e PG.
          </p>

          <div className="containerButtonSpan">
            <section className="informations">
              <span className="info">
                <img src={notebookIcon} alt="notebook" className="icon" />
                Pontuação máxima:
                <span className="value"> 8 </span>
              </span>

              <span className="info">
                <img src={calendarIcon} alt="calendario" className="icon" />
                Data de entrega:
                <span className="value">
                  04/10
                </span>
              </span>
              <span className="info">
                <img src={evaOptionsIcon} alt="eva options" className="icon" />
                Tipo de Atividade:
                <span className="value">
                  Resumo
                </span>
              </span>
            </section>

            <section className="buttonsContainer">
              <button className="buttonEdit" type="button">Editar</button>
              <button className="buttonDelete" type="button">Excluir</button>
            </section>
          </div>
        </div>
      </div>
    </Template>
  );
}
