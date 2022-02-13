import React from 'react';
import * as s from './Title.module.scss';

const Title = ({ text }) => {
  return <h1 className={s.headTitle}>{text}</h1>;
};

export default Title;
