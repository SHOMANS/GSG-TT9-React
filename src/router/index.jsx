import { useRoutes } from 'react-router-dom';

import { routes } from './routes';
import { useState } from 'react';
import { ROLES } from '../constants';

const Router = () => {
  const [role] = useState(ROLES.GUEST); // guest | user | admin

  const router = useRoutes(routes(role));

  return router;
};

export default Router;
