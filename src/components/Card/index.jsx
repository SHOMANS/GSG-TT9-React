import React, { Component } from 'react';
import TitledImage from '../TitledImage';

class Card extends Component {
  render() {
    console.log('from Card render');
    const { title, imageSrc, imageTitle, description, children, actions } =
      this.props;
    return (
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '16px',
          margin: '16px',
          maxWidth: '400px',
          minWidth: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <header>
          <h1>{title}</h1>
        </header>

        {imageSrc && <TitledImage src={imageSrc} title={imageTitle} />}

        <p>{description}</p>

        <section>{children}</section>

        <footer>{actions}</footer>
      </div>
    );
  }
}

export default Card;
