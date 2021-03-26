import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function ScheduleActivity() {
  const { innerWidth: width } = window;

  return (
    <>
      {width <= 465 ? (
        <Template title="Professor">
          <div className="containerScheduleActivity">
            <div className="contentScheduleActivity">

              <h1> Agendar atividades </h1>

              <div className="containerInputScheduleActivity">

                <input autoComplete="off" pattern="[A-Za-z]{3}" type="text" name="titulo" id="titulo" placeholder="Título" />

                <input type="data" name="data" id="data" placeholder="Data" />

                <input autoComplete="off" pattern="[A-Za-z]{3}" type="text" name="turma" id="turma" placeholder="Turma" />

                {/* list="turmas"
                <datalist id="turmas">
                  <option value="Informática">Informática</option>
                  <option value="Química">Química</option>
                  <option value="Alimentos">Alimentos</option>
                  <option value="Secretáriado">Secretáriado</option>
                </datalist> */}

                <input autoComplete="off" type="pontuação" name="pontuação" id="pontuação" placeholder="Pontuação" />

                <input autoComplete="off" pattern="[A-Za-z]{3}" type="text" name="type" id="type" placeholder="Tipo de Avaliação" />

                <input autoComplete="off" pattern="[A-Za-z]{3}" type="text" name="descricao" id="descricao" placeholder="Descrição" />

              </div>

              <button className="buttonScheduleActivityMobile" type="button">Agendar</button>
            </div>
          </div>
        </Template>
      ) : (
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
      ) }
    </>

  );
}
