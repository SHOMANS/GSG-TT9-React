export const API_URL = process.env.REACT_APP_API_URL;

export const GIPHY_URL = process.env.REACT_APP_GIPHY_URL;

export const GIPHY_KEY = process.env.REACT_APP_GIPHY_API_KEY;

if (process.env.NODE_ENV === 'production') {
  console.log('production');
}
