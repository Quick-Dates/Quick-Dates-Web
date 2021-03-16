/* eslint-disable no-unneeded-ternary */
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import SocialMedia from '../../components/SocialMedia';
import Template from '../../components/Template';
import './styles.css';

interface IProps{
  user:string
}

const Help: FC = () => {
  const { user }:IProps = useParams();
  return (
    <div>
      <Template isStudent={user === 'student' ? true : false} title="Help">
        <SocialMedia />
      </Template>
    </div>
  );
};

export default Help;
