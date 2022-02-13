import React from 'react';
import * as s from './Reviews.module.scss';

import ReviewCard from '../reviewCard/ReviewCard';
import Title from '../title/Title';
import Container from '../container/Container';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/swiperStyles.scss';

// import required modules
import { Pagination, Mousewheel, Keyboard } from 'swiper';

const Reviews = () => {
  const containerBaseStyles = {
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  return (
    <Container contStyles={containerBaseStyles}>
      <Title text={'Отзывы'} />
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className={s.mySwiper}
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reviews;
