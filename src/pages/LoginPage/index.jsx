import axios from 'axios';
import React, { useState } from 'react';
import { AUTH_API } from '../../config/api';
import { useAuthContext } from '../../contexts/AuthContext';
import { ROLES } from '../../constants';

const LoginPage = () => {
  const { setUser, setToken, setRole } = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(AUTH_API + 'auth/login', formData);
      console.log(res);

      setUser(res.data.data);
      setToken(res.data.data.token);
      setRole(ROLES.USER);

      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('role', ROLES.USER);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>User Name</label>
      <input
        type='text'
        id='username'
        name='username'
        onChange={handleChangeInput}
        value={formData.username}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
        onChange={handleChangeInput}
        value={formData.password}
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginPage;
