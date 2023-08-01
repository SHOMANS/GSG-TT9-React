import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import { ROLES } from '../../../constants';
import { useAuthContext } from '../../../contexts/AuthContext';

const UserGuard = () => {
  const { role } = useAuthContext();

  if (role === ROLES.USER) return <Outlet />;
  return <Navigate to={PATHS.HOME} replace={true} />;
};

export default UserGuard;
