import React from 'react';

import './style.css';

// const TitledImage = ({ background = '', title, src, variant }) => {
//   // const { background = '', title, src, variant } = props;

//   return (
//     <div className={`image__container ${background && 'background__color'}`}>
//       <h2>{title}</h2>
//       <img src={src} alt={title} title={title} className={variant === 'circle' ? 'circle' : 'square'} />
//     </div>
//   );
// };

class TitledImage extends React.Component {
  // constructor(props) {
  //   super(props);
  // } // no need for the constructor

  render() {
    const { background = '', title, src, variant } = this.props;
    return (
      <div className={`image__container ${background && 'background__color'}`}>
        <h2>{title}</h2>
        <img src={src} alt={title} title={title} className={variant === 'circle' ? 'circle' : 'square'} />
      </div>
    );
  }
}

export default TitledImage;
