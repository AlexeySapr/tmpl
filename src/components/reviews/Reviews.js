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
import { Pagination, Keyboard } from 'swiper';

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
        spaceBetween={32}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={true}
        keyboard={true}
        modules={[Pagination, Keyboard]}
        className={s.reviewSwiper}
      >
        <SwiperSlide>
          <ReviewCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus gravida." />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
        gravida at. Proin mollis varius eros ac rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis
        varius eros ac rhoncus. Phasellus volutpat sem leo, sed pulvinar lacus
        gravida at. Proin mollis varius eros ac rhoncus."
          />
        </SwiperSlide>
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
