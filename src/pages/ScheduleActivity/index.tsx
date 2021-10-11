import { Form } from "@unform/web";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Template from "../../components/Template";
import "./styles.css";
import Teacher from "../../assets/teacher.svg";
import Today from "../../assets/schedule.svg";
import api from "../../services/api";
import { ICourse } from "../../interfaces/ICourse";
import { ITeam } from "../../interfaces/ITeam";
import { toast, ToastContainer } from "react-toastify";
import { ITask } from "../../interfaces/ITask";

export default function ScheduleActivity() {
  const [optionsCourses, setOptionsCourses] = useState([{ label: '', value: undefined }]);
  const [optionsTeams, setOptionsTeams] = useState([{ label: '', value: undefined }]);

  useEffect(() => {
    api.get("/teams/courses")
      .then((response) => {
        setOptionsCourses(response.data
          .map((course: ICourse) => {
            const label = course.name.charAt(0).toUpperCase() + course.name.substr(1).toLowerCase();
            return { label, value: course.id };
          }));
      }).catch((error) => {
        const message = error.response?.data?.message || "Erro ao buscar cursos";
        toast.error(message);
      });
  }, []);

  function handleChangeCourse(event: React.ChangeEvent<HTMLInputElement>) {
    const courseLabel = event.target.value;
    const course = optionsCourses.find((course) => course.label === courseLabel);
    if (course) {
      api.get(`/teams/${course.value}`)
        .then((response) => {
          setOptionsTeams(response.data
            .map((team: ITeam) => ({ label: team.name, value: team.id })));
        }).catch((error) => {
          const message = error.response?.data?.message || "Erro ao buscar turmas";
          toast.error(message);
        });
    }
  }

  function handleSubmit(data: ITask) {
    const team = optionsTeams.find((team) => team.label === data.team as any);
    api.post(`/tasks/team/${team?.value}`, data).then(() => {
      toast.success("Tarefa cadastrada com sucesso!");
    }).catch((error) => {
      const message = error.response?.data?.message || "Erro ao cadastrar tarefa";
      toast.error(message);
    });
  }
  return (
    <Template title="Agendar Atividade" titleTab="Professor">
      <div className="schedule">
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
                list="courses"
                type="text"
                name="team"
                aria-label="Curso"
                required
                onChange={handleChangeCourse}
              />

              <datalist id="courses">
                {optionsCourses.map((option, index) => (
                  <option key={index} data-value={option.value}> {option.label} </option>
                ))}
              </datalist>

              <Input
                list="teams"
                type="text"
                required
                name="team"
                aria-label="Turma"
              />

              <datalist id="teams">
                {optionsTeams.map((option, index) => (
                  <option key={index} data-value={option.value}> {option.label} </option>
                ))}
              </datalist>

              <Input
                type="text"
                name="title"
                required
                className="textInput"
                aria-label="Titulo"
              />

              <Input
                type="text"
                name="description"
                required
                className="descricao"
                aria-label="Descrição"
              />

              <Input
                type="text"
                name="subject"
                required
                className="descricao"
                aria-label="Disciplina"
              />

              <Input
                type="date"
                name="startDate"
                required
                className="date-input"
                aria-label="Data Inicio"
              />

              <Input
                type="date"
                name="finalDate"
                className="date-input"
                aria-label="Data Final"
                required
              />

              <Input
                type="time"
                name="startTime"
                className="timeInput"
                aria-label="Hora de inicio"
                required
              />

              <Input
                type="time"
                name="finalTime"
                className="timeInput"
                aria-label="Hora de término"
                required
              />

              <Input
                type="number"
                min="1.0"
                max="10.0"
                step="0.1"
                name="maximumScore"
                aria-label="Pontuação"
                required
              />

              <button className="buttonScheduleActivity" type="submit">
                Agendar
              </button>
            </Form>
          </div>
        </div>
        <div className="contentSchedule1">
          <div className="contentSchedule1Left">
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
      </div>
      <ToastContainer />
    </Template>
  );
}
