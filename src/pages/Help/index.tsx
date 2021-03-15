import React, { FC } from 'react';
import SocialMedia from '../../components/SocialMedia';
import Template from '../../components/Template';
import './styles.css';

const Help: FC = () => (
  <div>
    <Template isStudent title="Help">
      <SocialMedia />
    </Template>
  </div>
);

export default Help;
