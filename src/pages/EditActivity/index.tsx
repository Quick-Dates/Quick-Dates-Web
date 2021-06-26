import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/Template';
import PanaImg from '../../assets/pana.svg';
import notebookIcon from '../../assets/notebook-blue.svg';
import calendarIcon from '../../assets/calendar-blue.svg';
import evaOptionsIcon from '../../assets/eva-options.svg';
import './styles.css';

export default function EditActivity() {
  const { innerWidth: width } = window;

  return (
    <Template titleTab="Professor" title="Atividades Marcadas">
      <div className="containerEditActivity">
        <div className="contentEditActivity">
          <div className="card-info">
            <div className="text">
              <h2 className="title-card">Atividades Marcadas</h2>
              <p className="description-card">Aqui você pode visualizar as atividades que foram marcadas, tendo acesso
                as mesmas e as possibilidades de editar ou excluir uma atividade, conforme desejar.
              </p>
            </div>
            <img src={PanaImg} alt="pana" />
          </div>
          {width <= 950 ? (
            <div className="containerList">
              <Link to="/activity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              <Link to="/activity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              <Link to="/activity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              <Link to="/activity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              <Link to="/activity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              <Link to="/activity-details" className="linkPara"> 3° Informática - Exercício -  03/10 </Link>

            </div>
          ) : (
            <div className="containerDiv">
              <div className="containerList">
                <div>3° Informática - Exericíos </div>
                <div>3° Informática - Exericíos </div>
                <div>3° Informática - Exericíos </div>
                <div>3° Informática - Exericíos </div>
                <div>3° Informática - Exericíos </div>
                <div>3° Informática - Exericíos </div>
              </div>

              <div className="containerEdit">

                <h1 className="titleEdit">Atividade de Matemática</h1>

                <p>
                  Realizar todas as atividades propostas na lista de exercícios de PA e PG.
                </p>

                <div className="spanButton">
                  <section className="containerInformations">
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

                  <div className="containerButtons">
                    <button className="edit" type="button">Editar</button>
                    <button className="delete" type="button">Excluir</button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </Template>
  );
}
