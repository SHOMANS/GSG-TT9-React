import React from 'react';
import './style.css';

const Button = ({ children, variant, bgColor = 'orange', color = 'white' }) => {
  const style = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: variant === 'circle' ? 50 : 10,
  };

  return (
    <button className='styled__button' style={style}>
      {children}
    </button>
  );
};

export default Button;
