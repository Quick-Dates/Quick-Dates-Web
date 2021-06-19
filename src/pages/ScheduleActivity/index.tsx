import { Form } from '@unform/web';
import React from 'react';
import Input from '../../components/Input';
import Template from '../../components/Template';
import './styles.css';

interface DataForm {
  title: string;
  date: string;
  class: string;
  score: number;
  type: string;
  description: string;
}

export default function ScheduleActivity() {
  function handleSubmit(data: DataForm) {
    console.table(data);
  }
  return (
    <Template title="Agendar Atividade" titleTab="Professor">
      <div className="containerScheduleActivity">
        <div className="content-shedule">
          <Form className="form-schedule" onSubmit={handleSubmit}>
            <h1 className="title-shedule">Agendar atividades</h1>

            <div className="containerAgendar">

              <Input type="text" name="title" placeholder="Título" />

              <Input type="date" name="date" className="date-input" placeholder="Data" />

              <datalist id="classes">
                <option value="Informática">Informática</option>
                <option value="Secretariado">Secretariado</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Química">Química</option>
              </datalist>

              <Input list="classes" type="text" name="class" placeholder="Turma" />

              <Input type="number" name="score" placeholder="Pontuação" />

              <Input type="text" name="type" placeholder="Tipo de avaliação" />

              <Input type="text" name="description" className="descricao" placeholder="Descrição" />

            </div>
            <button className="buttonScheduleActivity" type="submit">Agendar</button>
          </Form>
        </div>
      </div>
    </Template>
  );
}
