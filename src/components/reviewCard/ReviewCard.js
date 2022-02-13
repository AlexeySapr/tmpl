import React from 'react';
import * as s from './ReviewCard.module.scss';

import womanReview from '../../images/review-foto.jpg';

const ReviewCard = () => {
  return (
    <div className={s.slider}>
      <div className={s.imgWrapper}>
        <img src={womanReview} alt="woman" />
        <p className={s.card}>Ирина</p>
      </div>

      <p className={s.cardContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
        gravida at. Proin mollis varius eros ac rhoncus.
      </p>
      <p className={`${s.card} ${s.date}`}>14.10.2021</p>
    </div>
  );
};

export default ReviewCard;
