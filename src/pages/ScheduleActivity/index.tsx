import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function ScheduleActivity() {
  return (
    <Template title="Professor">
      <div className="containerScheduleActivity">
        <div className="content-shedule">
          <form className="form-schedule">
            <h1 className="title-shedule">Agendar atividades</h1>

            <div className="containerAgendar">

              <input type="text" name="titulo" placeholder="Título" />

              <input type="date" name="Data" className="date-input" placeholder="Data" />

              <datalist id="classes">
                <option value="Informática">Informática</option>
                <option value="Secretariado">Secretariado</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Química">Química</option>
              </datalist>

              <input list="classes" type="text" name="turma" placeholder="Turma" />

              <input type="number" name="pontuacao" placeholder="Pontuação" />

              <input type="text" name="tipo" placeholder="Tipo de avaliação" />

              <input type="text" name="descricao" className="descricao" placeholder="Descrição" />

            </div>
            <button className="buttonScheduleActivity" type="button">Agendar</button>
          </form>
        </div>
      </div>
    </Template>
  );
}
