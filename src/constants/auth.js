export const AUTH_API_PATHS = {
  LOGIN: 'users/login',
  SIGNUP: 'users/signup',
  PROFILE: 'users/profile',
};

export const AUTH_ACTIONS = {
  AUTHORIZE: 'AUTHORIZE',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

export const LOGIN_INPUTS = [
  {
    label: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
  },
];
export const SIGNUP_INPUTS = [
  {
    label: 'User Name',
    type: 'text',
    id: 'username',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
  },
  {
    label: 'Repeat Password',
    type: 'password',
    id: 'rePassword',
  },
];
