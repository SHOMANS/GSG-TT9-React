// const Header = () => {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// };

// import React, { Component } from 'react';
// class Header extends Component {

import React from 'react';
// import './style.css';

// import css module file
import styles from './style.module.css';

class Header extends React.Component {
  render() {
    return (
      // className instead of class
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
