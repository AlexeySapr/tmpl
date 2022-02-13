import React from 'react';
import ResultCard from '../resultCard/ResultCard';
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

const Results = () => {
  return (
    <Container>
      <Title text={'Результаты наших клиентов'} />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
        <SwiperSlide>
          <ResultCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Results;
