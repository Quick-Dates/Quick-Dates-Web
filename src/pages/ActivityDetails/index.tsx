/* eslint-disable max-len */
import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function ActivityDeatails() {
  return (
    <Template title="Detahes da Atividade">
      <div className="containerActivityDetails">
        <div>
          <h2 className="titleActivityDeatails">2° Informática - prova -  03/10</h2>

          <p>
            Escrever um resumo sobre as diferenças que os avaços na tecnologia proveram ao mundo nos ultimos 70 anos.
          </p>

          <section className="informations">
            <span>Pontuação máxima: 8</span>
            <span>Data de entrega: 03/10 </span>
            <span>tipo de atividade: Resumo</span>
          </section>

          <section className="buttonsContainer">
            <button className="buttonEdit" type="button">Editar</button>
            <button className="buttonDelete" type="button">Excluir</button>
          </section>
        </div>
      </div>
    </Template>
  );
}
