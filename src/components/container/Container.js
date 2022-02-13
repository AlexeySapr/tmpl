import React from 'react';
import * as s from './Container.module.scss';

const Container = ({ children, contStyles }) => {
  return (
    <div className={s.container} style={contStyles}>
      {children}
    </div>
  );
};

export default Container;
