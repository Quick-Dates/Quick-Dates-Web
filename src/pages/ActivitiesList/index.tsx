/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import Template from '../../components/Template';
import './styles.css';

// animations
import Lottie from 'react-lottie';
import animation from '../../assets/calendar-animation.json';

import { DataEventsContext } from '../../Context/DataEvents';
import Modal from '../../components/Modal';

export default function ActivitiesList(): JSX.Element {
  const [isAnimation, setAnimation] = useState(true);
  setTimeout(() => { setAnimation(false); }, 2000);// 5500

  const optionsAnimation = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  const { innerWidth: width } = window;

  let breadth = 0;
  let height = 0;

  if (width <= 425) {
    breadth = 300;
    height = 300;
  } else {
    breadth = 400;
    height = 400;
  }

  const { isVisible } = useContext(DataEventsContext);

  // function

  return (

    <>
      {isAnimation ? (
        <div className="contentAnimation">
          <Lottie
            options={optionsAnimation}
            height={height}
            width={breadth}
          />
        </div>
      ) : (
        <Template isStudent title="Calendar">
          <div className="contentActivies">
            <BigCalendar />
            {isVisible && <Modal />}
          </div>
        </Template>
      ) }
    </>
  );
}
