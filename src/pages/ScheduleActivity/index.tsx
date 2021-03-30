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
          <div className="content-shedule">
            <form>
              <div className="fundo">

                <h1 className="title-shedule">Agendar atividades</h1>

                <div className="containerAgendar">

                  <input type="text" name="titulo" placeholder="Título" />

                  <input type="date" name="Data" className="date-input" placeholder="Data" />

                  <input type="text" name="turma" placeholder="Turma" />

                  <input type="number" name="pontuacao" placeholder="Pontuação" />

                  <input type="text" name="tipo" placeholder="Tipo de avaliação" />

                  <input type="text" name="descricao" className="descricao" placeholder="Descrição" />

                </div>
                <button className="buttonScheduleActivity" type="button">Agendar</button>
              </div>
            </form>
          </div>
        </Template>
      ) }
    </>
  );
}
