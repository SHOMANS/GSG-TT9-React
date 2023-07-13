import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';

class Header extends React.Component {
  render() {
    return (
      // className instead of class
      <header className='header'>
        <h1>Header</h1>

        <nav>
          <ul>
            <li>
              <NavLink to={PATHS.HOME}>
                {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>About</u> : 'About'
                }
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.POSTS.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Posts</u> : 'Posts'
                }
              </NavLink>
            </li>

            {/* 
            <li>
              <NavLink to='/todo'>Todos</NavLink>
            </li>

            <li>
              <NavLink to='/counters'>Counters</NavLink>
            </li>

            <li>
              <NavLink to='/lifecycle'>Life Cycle</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
