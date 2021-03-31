import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/Template';
import './styles.css';

export default function EditActivity() {
  const { innerWidth: width } = window;

  return (
    <>
      {width <= 950 ? (
        <Template title="Professor">
          <div className="containerEditActivity">
            <div className="contentEditActivity">
              <h1 className="titlePage">Atividades</h1>

              <div className="containerList">
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
                <Link to="/ativity-details" className="linkPara"> 2° Informática - prova -  03/10 </Link>
              </div>
            </div>
          </div>
        </Template>
      ) : (
        <Template title="Professor">
          <div className="containerEditActivity">
            <div className="contentEditActivity">

              <h1 className="titlePage">Atividades</h1>

              <div className="containerDiv">
                <div className="containerList">
                  <div>2° Informática - prova -  03/10 </div>
                  <div>2° Informática - prova -  03/10 </div>
                  <div>2° Informática - prova -  03/10 </div>
                  <div>2° Informática - prova -  03/10 </div>
                  <div>2° Informática - prova -  03/10 </div>
                  <div>2° Informática - prova -  03/10 </div>
                </div>

                <div className="containerEdit">

                  <h1 className="titleEdit">PROVA DE REDES DE COMPUTADORES</h1>

                  <p>
                    Escrever um resumo sobre as diferenças que os avaços na tecnologia
                    proveram ao mundo nos ultimos 70 anos.
                  </p>

                  <div className="spanButton">
                    <section className="containerInformations">
                      <span>Pontuação máxima: 8</span>
                      <span>Data de entrega: 03/10</span>
                      <span>tipo de atividade: Resumo</span>
                    </section>

                    <div className="containerButtons">
                      <button className="edit" type="button">Editar</button>
                      <button className="delete" type="button">Excluir</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Template>
      )}
    </>
  );
}
