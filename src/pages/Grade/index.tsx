import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ContainerWarn from '../../components/ContainerWarn';
import Template from '../../components/Template';
import { IGrade } from '../../interfaces/IGrade';
import api from '../../services/api';

import './styles.css';

export default function Grade() {
  const [grades, setGrades] = useState([{} as IGrade]);
  const [warn, setWarn] = useState();
  useEffect(() => {
    api.get('/students/grades').then((response) => {
      setGrades(response.data as IGrade[]);
    }).catch((error) => {
      const { message, status } = error?.response?.data;
      if (status === 'warn') {
        setWarn(message);
      } else {
        const messageError = message || 'Erro ao carregar as notas';
        toast.error(messageError);
      }
    });
  }, []);

  return (
    <Template isStudent titleTab="Notas" title="Notas Bimestrais">
      <div className="app-grades">
        {warn ? <ContainerWarn warn={warn} />
          : (
            <div className="container-grades">
              <table>
                <thead>
                  <tr>
                    <th className="large-column">MATÉRIA</th>
                    <th className="medium-colum">B1</th>
                    <th className="medium-colum">B2</th>
                    <th className="medium-colum">B3</th>
                    <th className="medium-colum">B4</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade) => (
                    <tr key={grade.id}>
                      <td className="align-left">{grade.subject}</td>
                      <td> {grade.bimester1}</td>
                      <td> {grade.bimester2}</td>
                      <td> {grade.bimester3}</td>
                      <td> {grade.bimester4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

      </div>
      <ToastContainer />
    </Template>
  );
}
