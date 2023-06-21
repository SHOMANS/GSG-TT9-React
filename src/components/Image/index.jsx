import React from 'react';

import './style.css';

const IMAGE_SRC = 'https://img.freepik.com/free-vector/tree-transparent-background_1308-74201.jpg?w=2000';
const IMAGE_ALT = 'tree';
const IMAGE_STYLES = {
  width: '600px',
};

const Image = () => {
  return <img src={IMAGE_SRC} alt={IMAGE_ALT} title={IMAGE_ALT} style={IMAGE_STYLES} />;
};

export default Image;
