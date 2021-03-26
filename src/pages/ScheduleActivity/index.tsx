import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function ScheduleActivity() {
  return (
    <Template title="Professor">
      <div className="content" id="EditarTarefa">
        <form action="">
          <div className="fundo">
            <h1> Agendar atividades </h1>
            <div className="esquerda">
              <input type="curso" name="turma" id="turma" placeholder="Curso" />
              <input type="ano" name="ano" id="ano" placeholder="Ano" />
              <input type="Título" name="titulo" id="titulo" placeholder="Título" />
              <input type="Pontuação" name="pontuacao" id="pontuacao" placeholder="Pontuação" />
              <input type="tipo" name="tipo" id="tipo" placeholder="Tipo de avaliação" />
            </div>
            <div className="direita">
              <input type="Descricao" name="descricao" id="descricao" placeholder="Descrição" />
            </div>
            <button className="buttonScheduleActivity" type="button">ENVIAR</button>
          </div>

        </form>
      </div>
    </Template>
  );
}
