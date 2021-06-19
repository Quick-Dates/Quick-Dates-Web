/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import Template from '../../components/Template';
import './styles.css';

interface IProps{
  user:string
}

export default function Ranking() {
  const { user }:IProps = useParams();

  return (
    <Template titleTab="Ranking" isStudent={user === 'student' ? true : false} title="Ranking">
      <div className="centrali">    <p className="textee">Ainda não sei como vou FAZER ESSE RANKING</p>  </div>
    </Template>
  );
}
