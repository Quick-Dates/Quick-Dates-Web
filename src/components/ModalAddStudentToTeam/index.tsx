/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable for-direction */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useContextAuth } from '../../Context/AuthContext';
import api from '../../services/api';
import TemplateModal from '../TemplateModal';

export default function ModalaAddStudentToTeam() {
  const [yearOptions, setYearOptions] = useState([{ value: 0, label: '' }]);
  const [yearSelected, setYearSelected] = useState(undefined);
  const [closeModal, setCloseModal] = useState(false);
  const { user } = useContextAuth();

  const loadOptionsYearCreation = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year > currentYear - 3; year--) {
      years.push({ value: year, label: `${(currentYear - year) + 1}° ano` });
    }
    setYearOptions(years);
  };

  useEffect(() => {
    loadOptionsYearCreation();
  }, []);

  const handleClickSave = () => {
    const courseName = user.course;
    const level = 'EMI';
    const yearCreation = +`${yearSelected}`;
    api.put(`/teams/student/${user.id}`, { courseName, level, yearCreation })
      .then((response) => {
        setCloseModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeYear = (event: any) => {
    setYearSelected(event.target.value);
  };

  return (
    <TemplateModal showCloseModal={false} close={closeModal}>
      <h1 className="titleModal">Em qual ano letivo você está atualmente?</h1>
      <select className="dropdownModal" name="years" id="years" placeholder="Selecione"
        onChange={(event) => handleChangeYear(event)} required
      >
        <option value="" disabled selected>Selecione</option>
        {yearOptions.map((year, index) => (
          <option key={index} value={year.value}>
            {year.label}
          </option>
        ))}
      </select>
      <button className="buttonSaveModal" onClick={handleClickSave}>Salvar</button>
    </TemplateModal>
  );
}
