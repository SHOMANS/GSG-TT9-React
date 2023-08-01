export const API_URL = process.env.REACT_APP_API_URL;

export const GIPHY_URL = process.env.REACT_APP_GIPHY_URL;

export const GIPHY_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const AUTH_API = process.env.REACT_APP_AUTH_API;

if (process.env.NODE_ENV === 'production') {
  console.log('production');
}
