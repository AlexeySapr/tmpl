import * as React from 'react';
import '../styles/global.scss';

import Results from '../components/results/Results';
import Reviews from '../components/reviews/Reviews';

// markup
const IndexPage = () => {
  return (
    <>
      <Results />
      <Reviews />
    </>
  );
};

export default IndexPage;
