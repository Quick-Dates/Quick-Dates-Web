import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function EditActivity() {
  return (
    <Template title="Professor">

      <h1 id="nomeatividades">Atividades</h1>
      <div className="todas">
        <div className="avaliacoes">
          <h1 id="avaliacao_nome">2° Informática - prova - 03/10</h1>

        </div>
        <div className="avaliacoes">
          <h1 id="avaliacao_nome">2° Informática - prova - 03/10</h1>

        </div>
        <div className="avaliacoes">
          <h1 id="avaliacao_nome">2° Informática - prova - 03/10</h1>

        </div>
        <div className="avaliacoes">
          <h1 id="avaliacao_nome">2° Informática - prova - 03/10</h1>

        </div>
      </div>
      <div className="informacao">
        <h1 id="titulo_informacao">2° Informática - prova -  03/10</h1>
        <h1 id="descricao_informacao">Escrever um resumo sobre as diferenças que os avaços na tecnologia proveram ao mundo nos ultimos 70 anos.</h1>
        <h1 id="pontuacao_informacao">Pontuação máxima: 8</h1>
        <h1 id="data_informacao">Data de entrega: 03/10 </h1>
        <h1 id="tipo_informacao">tipo de atividade: Resumo </h1>

      </div>

    </Template>
  );
}
