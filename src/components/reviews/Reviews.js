import React from 'react';
import SliderCard from '../sliderCard/SliderCard';
import Title from '../title/Title';
import Container from '../container/Container';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/swiperStyles.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const Reviews = () => {
  const containerBaseStyles = {
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  return (
    <Container contStyles={containerBaseStyles}>
      <Title text={'Отзывы'} />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reviews;
