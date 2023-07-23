import React from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../../router/paths';

const GuestGuard = ({ role, children }) => {
  if (role === 'user') return <Navigate to={PATHS.POSTS.ROOT} replace={true} />;
  if (role === 'admin')
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />;
  return children;
};

export default GuestGuard;
