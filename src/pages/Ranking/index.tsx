import React, { useEffect, useState } from 'react';
import Template from '../../components/Template';
import CrownGold from '../../assets/crown-gold.svg';
import CrownSilver from '../../assets/crown-silver.svg';
import CrownBronze from '../../assets/crown-bronze.svg';
import PersonIcon from '../../assets/person.svg';
import RankingImg from '../../assets/ranking.svg';
import './styles.css';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { IRanking } from '../../interfaces/IRanking';
import ContainerWarn from '../../components/ContainerWarn';

export default function Ranking() {
  const { innerWidth: width } = window;

  const [ranking, setRanking] = useState([{} as IRanking]);
  const [warn, setWarn] = useState();
  useEffect(() => {
    api.get('/students/ranking').then((response) => {
      setRanking(response.data as IRanking[]);
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

  function iconPosition(position: number) {
    if (position === 1) {
      return <img className="icon" src={CrownGold} alt="Coroa Amarela" />;
    } if (position === 2) {
      return <img className="icon" src={CrownSilver} alt="Coroa Prata" />;
    } if (position === 3) {
      return <img className="icon" src={CrownBronze} alt="Coroa Bronze" />;
    }
    return <img className="icon" src={PersonIcon} alt="Person" />;
  }

  const mobile = width <= 768;
  return (
    <Template titleTab="Ranking" isStudent title="Ranking de alunos">
      <div className="containerRanking">
        { warn && <ContainerWarn warn={warn} /> }
        { !warn && mobile && (
        <div className="card-info-general">
          <h2 className="title-card"> Ranking de Alunos</h2>
          <p className="description-card"> Visualize os 5 alunos que detém as melhores médias gerais de sua escola. </p>
          <img src={RankingImg} alt="Ranking" className="ranking-img" />
        </div>
        )}

        {!warn && ranking.map((item, index) => (
          <div className="role-position">
            <div className="info-general">
              <span className="position">{index + 1}° </span>
              {iconPosition(index + 1)}
              <span className="student-name">{item.name}</span>
            </div>
            { !mobile && <span className="course">{item.teamName}</span> }
            { !mobile && <span className="score">Score: <span className="score-value-green">{item.score}</span> Qpoints</span> }
          </div>
        ))}
      </div>
      <ToastContainer />
    </Template>
  );
}
