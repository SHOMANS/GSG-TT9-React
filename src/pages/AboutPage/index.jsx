import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import TitledImage from '../../components/TitledImage';
// import AboutSection from '../../components/AboutSection';
import Card from '../../components/Card';
import CARDS_DATA from '../../mock/cards';

import './style.css';
import Typo, * as T from '../../components/Typography';

// const IMAGE_SRC =
//   'https://img.freepik.com/free-vector/tree-transparent-background_1308-74201.jpg?w=2000';

const AboutPage = () => {
  return (
    <div>
      {/* <section>
        <img src='/assets/tree.jpg' alt='tree' />
      </section>

      <section className='background__image' /> */}

      <Typo variant='h1'>About Page</Typo>

      <T.H1>About Page</T.H1>
      <T.H2>About Page</T.H2>
      <T.H3>About Page</T.H3>
      <T.H4>About Page</T.H4>
      <T.H5>About Page</T.H5>
      <T.H6>About Page</T.H6>

      {/* 
      <TitledImage src={IMAGE_SRC} title='tree' background />
      <TitledImage src='https://img.freepik.com/free-vector/isolated-tree-white-background_1308-26130.jpg?w=2000' title='tree3' variant='square' background />
      <TitledImage src={IMAGE_SRC} title='tree2' variant='circle' />

      <AboutSection /> */}

      {/* <Card
        title='My Card'
        imageSrc={IMAGE_SRC}
        imageTitle='tree'
        actions={
          <>
            <button>click me</button>
            <button>click me</button>
          </>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit ut saepe earum ullam sunt vitae, dignissimos nemo! Ducimus, voluptate
          quasi. Soluta quae enim accusamus aliquid quidem voluptatum hic eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ut magni alias, distinctio voluptatibus dolore accusantium et quidem maxime ea,
          facilis ipsam minima amet. Tenetur placeat modi dolorum natus repudiandae?
        </p>
        <TitledImage src={IMAGE_SRC} />
      </Card> */}

      {/* <Card title={CARDS_DATA[0].title} imageSrc={CARDS_DATA[0].image} description={CARDS_DATA[0].description} />
      <Card title={CARDS_DATA[1].title} imageSrc={CARDS_DATA[1].image} description={CARDS_DATA[1].description} />
      <Card title={CARDS_DATA[2].title} imageSrc={CARDS_DATA[2].image} description={CARDS_DATA[2].description} /> */}
      {CARDS_DATA.map(({ id, title, image, description }) =>
        image ? (
          <Card
            key={id}
            title={title}
            imageSrc={image}
            description={description}
          />
        ) : null
      )}
    </div>
  );
};

export default AboutPage;
