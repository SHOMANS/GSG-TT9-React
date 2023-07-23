import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/paths';

const UserGuard = ({ role }) => {
  if (role === 'user') return <Outlet />;
  return <Navigate to={PATHS.HOME} replace={true} />;
};

export default UserGuard;
