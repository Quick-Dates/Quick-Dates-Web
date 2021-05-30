import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/Template';
import './styles.css';

export default function EditActivity() {
  const { innerWidth: width } = window;

  return (
    <Template title="Professor">
      <div className="containerEditActivity">
        <div className="contentEditActivity">

          <h1 className="titlePage">Atividades</h1>

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
                <div>3° Informática - resumo -  04/10 </div>
                <div>3° Informática - resumo -  04/10 </div>
                <div>3° Informática - resumo -  04/10 </div>
                <div>3° Informática - resumo -  04/10 </div>
                <div>3° Informática - resumo -  04/10 </div>
                <div>3° Informática - resumo -  04/10 </div>
              </div>

              <div className="containerEdit">

                <h1 className="titleEdit">RESUMO DE REDES DE COMPUTADORES</h1>

                <p>
                  Escrever um resumo sobre as diferenças que os avanços na tecnologia
                  proveram ao mundo nos ultimos 70 anos.
                </p>

                <div className="spanButton">
                  <section className="containerInformations">
                    <span>Pontuação máxima: 8</span>
                    <span>Data de entrega: 04/10</span>
                    <span>tipo de atividade: Resumo</span>
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
