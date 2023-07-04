import React from 'react';

const Typography = ({ variant, children }) => {
  switch (variant) {
    case 'h1':
      return <h1 className='t__h1'>{children}</h1>;
    case 'h2':
      return <h2 className='t__h2'>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    case 'h5':
      return <h5>{children}</h5>;
    case 'h6':
      return <h6>{children}</h6>;
    case 'body1':
      return <p>{children}</p>;
    case 'body2':
      return <p>{children}</p>;
    case 'span':
      return <span>{children}</span>;
    case 'caption':
      return <span>{children}</span>;
    default:
      break;
  }
};

export default Typography;

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export const H1 = ({ children }) => {
  return <h1 className='t__h1'>{children}</h1>;
};
export const H2 = ({ children }) => {
  return <h2 className='t__h2'>{children}</h2>;
};
export const H3 = ({ children }) => {
  return <h3 className='t__h3'>{children}</h3>;
};
export const H4 = ({ children }) => {
  return <h4 className='t__h4'>{children}</h4>;
};
export const H5 = ({ children }) => {
  return <h5 className='t__h5'>{children}</h5>;
};
export const H6 = ({ children }) => {
  return <h6 className='t__h6'>{children}</h6>;
};
