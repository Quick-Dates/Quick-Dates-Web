import React, { FC, useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import Template from '../../components/Template';
import './styles.css';

// animations
// eslint-disable-next-line import/order
import Lottie from 'react-lottie';
import animation from '../../assets/calendar-animation.json';

export default function ActivitiesList() {
  const [isAnimation, setAnimation] = useState(true);

  setTimeout(() => { setAnimation(false); }, 8000);

  const optionsAnimation = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (

    <>
      {isAnimation ? (
        <div className="content">
          <Lottie
            options={optionsAnimation}
            height={600}
            width={600}
          />
        </div>
      ) : (
        <Template isStudent title="Calendar">
          <div className="content">
            <BigCalendar />
          </div>
        </Template>
      ) }
    </>
  );
}
