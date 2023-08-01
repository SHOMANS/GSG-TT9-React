import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../contexts/AuthContext';
import { ROLES } from '../../constants';

const Header = () => {
  const { role, user, setUser, setToken, setRole } = useAuthContext();

  const handleLogout = () => {
    setUser(null);
    setToken('');
    setRole(ROLES.GUEST);
  };

  return (
    // className instead of class
    <header className='header'>
      <h1>Header</h1>

      <nav>
        {role === ROLES.GUEST ? (
          <ul>
            <li>
              <NavLink to={PATHS.LOGIN}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Login</u> : 'Login'
                }
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.SIGNUP}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Sign up</u> : 'Sign up'
                }
              </NavLink>
            </li>
          </ul>
        ) : (
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
              <NavLink to={PATHS.GIFF_SEARCH}>
                {({ isActive, isPending }) => (isActive ? <u>GIFF</u> : 'GIFF')}
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.COUNTERS}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Counters</u> : 'Counters'
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
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <h4>Welcome {user?.username}</h4>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
