import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <p>
          <Link to='/about'>learn more...</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;
