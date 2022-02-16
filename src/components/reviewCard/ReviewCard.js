import React from 'react';
import * as s from './ReviewCard.module.scss';

import womanReview from '../../images/review-foto.jpg';

const ReviewCard = ({ text }) => {
  return (
    <div className={s.slider}>
      <div className={s.imgWrapper}>
        <img src={womanReview} alt="woman" />
        <p className={s.card}>Ирина</p>
      </div>

      <div className={s.contentWrapper}>
        <p className={s.cardContent}>
          {text ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis'}
        </p>
        <p className={`${s.card} ${s.date}`}>14.10.2021</p>
      </div>
    </div>
  );
};

export default ReviewCard;
