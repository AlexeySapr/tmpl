import React from 'react';

import * as s from './SliderCard.module.scss';

import womanBefore from '../../images/woman-before.jpg';
import womanAfter from '../../images/woman-after.jpg';

const SliderCard = () => {
  return (
    <div className={s.sliderWrapper}>
      <div className={s.slider}>
        <p className={`${s.card} ${s.date}`}>14.10.2021</p>
        <p className={`${s.card} ${s.name}`}>Ирина</p>
        <h4 className={s.cardTitle}>Заголовок</h4>
        <p className={s.cardContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
          varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
          gravida at. Proin mollis varius eros ac rhoncus.
        </p>
        <ul className={s.imageList}>
          <li className={s.imageItem}>
            <p>До</p>
            <img src={womanBefore} alt="woman" />
          </li>
          <li className={s.imageItem}>
            <p>После</p>
            <img src={womanAfter} alt="woman" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderCard;
