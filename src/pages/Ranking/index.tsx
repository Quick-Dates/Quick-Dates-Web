import React from 'react';
import Template from '../../components/Template';
import CrownGold from '../../assets/crown-gold.svg';
import CrownSilver from '../../assets/crown-silver.svg';
import CrownBronze from '../../assets/crown-bronze.svg';
import PersonIcon from '../../assets/person.svg';
import RankingImg from '../../assets/ranking.svg';
import './styles.css';

export default function Ranking() {
  const { innerWidth: width } = window;

  const mobile = width <= 768;
  return (
    <Template titleTab="Ranking" isStudent title="Ranking de alunos">
      <div className="containerRanking">
        { mobile && (
        <div className="card-info-general">
          <h2 className="title-card"> Ranking de Alunos</h2>
          <p className="description-card"> Visualize os 5 alunos que detém as melhores médias gerais de sua escola. </p>
          <img src={RankingImg} alt="Ranking" className="ranking-img" />
        </div>
        )}

        <div className="role-position">
          <div className="info-general">
            <span className="position">1° </span>
            <img className="icon" src={CrownGold} alt="Coroa Amarela" />
            <span className="student-name">Willian Fernandes</span>
          </div>
          { !mobile && <span className="course">3° Informática</span> }
          { !mobile && <span className="score">Score: <span className="score-value-green">3500</span> Qpoints</span> }
        </div>
        <div className="role-position">
          <div className="info-general">
            <span className="position">2° </span>
            <img className="icon" src={CrownSilver} alt="Coroa Prata" />
            <span className="student-name">Maria Silva</span>
          </div>
          { !mobile && <span className="course">3° Secretariado</span> }
          { !mobile && <span className="score">Score: <span className="score-value-green">3300</span> Qpoints</span> }
        </div>
        <div className="role-position">
          <div className="info-general">
            <span className="position">3° </span>
            <img className="icon" src={CrownBronze} alt="Coroa Bronze" />
            <span className="student-name">Fernanda Castro</span>
          </div>
          { !mobile && <span className="course">3° Informática</span> }
          { !mobile && <span className="score">Score: <span className="score-value-green">3000</span> Qpoints</span> }
        </div>
        <div className="role-position">
          <div className="info-general">
            <span className="position">4° </span>
            <img className="icon" src={PersonIcon} alt="Pessoa" />
            <span className="student-name">Vitor Manoel</span>
          </div>
          { !mobile && <span className="course">3° Informática</span> }
          { !mobile && <span className="score">Score: <span className="score-value-yellow">2900</span> Qpoints</span> }
        </div>
        <div className="role-position">
          <div className="info-general">
            <span className="position">5° </span>
            <img className="icon" src={PersonIcon} alt="Pessoa" />
            <span className="student-name">Lukas Matias</span>
          </div>
          { !mobile && <span className="course">3° Informática</span> }
          { !mobile && <span className="score">Score: <span className="score-value-yellow">2800</span> Qpoints</span> }
        </div>
      </div>
    </Template>
  );
}
