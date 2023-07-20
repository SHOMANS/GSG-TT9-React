import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const AdminGuard = ({ role }) => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (role !== 'admin') {
  //     // navigate to home page
  //     navigate(PATHS.HOME);
  //     console.log('navigate to home page');
  //   }
  // }, [navigate, role]);

  if (role === 'admin') return <Outlet />;
  return <Navigate to={PATHS.HOME} replace={true} />;
};

export default AdminGuard;
