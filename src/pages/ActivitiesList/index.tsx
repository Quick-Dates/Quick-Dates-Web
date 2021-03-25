import React, { useState } from 'react';
import BigCalendar from '../../components/BigCalendar/index';
import Template from '../../components/Template';
import './styles.css';

// animations
import Lottie from 'react-lottie';
import animation from '../../assets/calendar-animation.json';

export default function ActivitiesList(): JSX.Element {
  const [isAnimation, setAnimation] = useState(true);
  setTimeout(() => { setAnimation(false); }, 8000);// 5500

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
          </div>
        </Template>
      ) }
    </>
  );
}
