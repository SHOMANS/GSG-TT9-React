import { useRoutes } from 'react-router-dom';

import { routes } from './routes';
import { useState } from 'react';

const Router = () => {
  const [role] = useState('user'); // guest | user | admin

  const router = useRoutes(routes(role));

  return router;
};

export default Router;
