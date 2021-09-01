import { Form } from "@unform/web";
import React from "react";
import Input from "../../components/Input";
import Template from "../../components/Template";
import "./styles.css";
import Teacher from "../../assets/teacher.svg";
import Today from "../../assets/schedule.svg";

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
      <div className="schedule">
        <div className="contentSchedule1">
          <div className="contentSchedule1Left">
            <p className="textSchedule">
              Aqui você pode agendar atividades para seus alunos, assim ambos
              tem um melhor controle sobre o tempo.
            </p>

            <h3 className="titleContentSchedule1">
              Como marcar uma atividade?
            </h3>

            <p className="textSchedule">
              Aqui você pode agendar atividades para seus alunos, assim ambos
              tem um melhor controle sobre o tempo.
            </p>
          </div>
          <img src={Teacher} alt="" />
        </div>

        <div className="contentSchedule2">
          <div className="contentSchedule2Left">
            <h3 className="titleContentSchedule2">
              Preencha os campos ao lado
            </h3>

            <p className="textSchedule">
              Aqui você fornecerá as informações necessárias para agendar as
              atividades que desejar, desde que não exceda o limite de duas
              atividades avaliativas por dia.
            </p>
            <img src={Today} alt="Today" className="Image" />
          </div>
          <div className="contentSchedule2Right">
            <Form className="form-schedule" onSubmit={handleSubmit}>
              <Input
                list="classes"
                type="text"
                name="class"
                placeholder="Turma"
              />

              <Input
                list="tipoAtividade"
                type="text"
                name="type"
                placeholder="Tipo de avaliação"
              />

              <Input
                type="text"
                name="titulo"
                className="textInput"
                placeholder="Titulo"
              />

              <Input
                type="date"
                name="date"
                className="date-input"
                placeholder="Data"
              />

              <Input
                type="time"
                name="time-first"
                className="timeInput"
                placeholder="Hora de inicio"
              />

              <Input
                type="time"
                name="time-last"
                className="timeInput"
                placeholder="Hora de término"
              />

              <Input
                list="bimestres"
                type="text"
                name="bimestre"
                className="bimestreInput"
                placeholder="Bimestre"
              />

              <datalist id="bimestres">
                <option value="1° Bimestre">1° Bimestre</option>
                <option value="2° Bimestre">2° Bimestre</option>
                <option value="3° Bimestre">3° Bimestre</option>
                <option value="4° Bimestre">4° Bimestre</option>
              </datalist>

              <datalist id="classes">
                <option value="Informática">Informática</option>
                <option value="Secretariado">Secretariado</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Química">Química</option>
              </datalist>
              <Input
                type="number"
                min="1.0"
                max="10.0"
                step="0.1"
                name="score"
                placeholder="Pontuação"
              />

              <datalist id="tipoAtividade">
                <option value="Prova">Prova</option>
                <option value="Lista de exercicio">Lista de exercicio</option>
                <option value="Relatório">Relatório</option>
                <option value="Seminário">Seminário</option>
              </datalist>

              <Input
                type="text"
                name="description"
                className="descricao"
                placeholder="Descrição"
              />

              <button className="buttonScheduleActivity" type="submit">
                Agendar
              </button>
            </Form>
          </div>
        </div>
      </div>

    </Template>
  );
}
