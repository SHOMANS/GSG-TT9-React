import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

class Header extends React.Component {
  render() {
    return (
      // className instead of class
      <header className={styles.header}>
        <h1>Header</h1>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>

            <li>
              <Link to='/todo'>Todos</Link>
            </li>

            <li>
              <Link to='/counters'>Counters</Link>
            </li>

            <li>
              <Link to='/lifecycle'>Life Cycle</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
