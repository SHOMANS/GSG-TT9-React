import { Navigate, Outlet } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import EditPostPage from '../pages/EditPostPage';
import CreatePostPage from '../pages/CreatePostPage';
import CountersPage from '../pages/CountersPage';

import { H1 } from '../components/Typography';

import { PATHS } from './paths';
import AdminGuard from '../components/Guards/AdminGuard';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGuard';
import Giffs from '../pages/Giffs';

// available for admins only
const adminPages = (role) => [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard role={role} />,
    children: [
      {
        index: true,
        element: <H1>Admin</H1>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <H1>Users</H1>,
      },
    ],
  },
];

// available for only users with an account
const userPages = (role) => [
  {
    path: PATHS.POSTS.ROOT,
    element: <UserGuard role={role} />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: PATHS.POSTS.VIEW,
        element: <PostPage />,
      },
      {
        path: PATHS.POSTS.EDIT,
        element: <EditPostPage />,
      },
      {
        path: PATHS.POSTS.CREATE,
        element: <CreatePostPage />,
      },
    ],
  },
];

const guestPages = (role) => [
  {
    index: true,
    element: (
      <GuestGuard role={role}>
        <HomePage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <GuestGuard role={role}>
        <AboutPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.COUNTERS,
    element: (
      <GuestGuard role={role}>
        <CountersPage />
      </GuestGuard>
    ),
  },
];

// available for all roles
const routes = (role) => [
  ...guestPages(role),
  ...userPages(role),
  ...adminPages(role),
  {
    path: PATHS.GIFF_SEARCH,
    element: <Giffs />,
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <H1>Page not found 404</H1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export { adminPages, userPages, routes };
