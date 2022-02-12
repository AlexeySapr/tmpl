import React from 'react';
import * as s from './Results.module.scss';
import SliderCard from './SliderCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const Results = () => {
  return (
    <div className={s.container}>
      <h1 className={s.headTitle}>Результаты наших клиентов</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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
    </div>
  );
};

export default Results;
