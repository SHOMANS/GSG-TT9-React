import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from '../../components/Image';
import AboutSection from '../../components/AboutSection';

const AboutPage = () => {
  return (
    <div>
      <Header />

      <h1>About Page</h1>

      <form>
        {/* htmlFor instead of for in label */}
        <label htmlFor='name'>
          Username:
          <input type='text' id='name' />
        </label>
      </form>

      <Image />

      <AboutSection />

      <Footer />
    </div>
  );
};

export default AboutPage;
