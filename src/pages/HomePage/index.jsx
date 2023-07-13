import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { PATHS } from '../../router/paths';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <p>
          <Link to={PATHS.ABOUT}>learn more...</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;
