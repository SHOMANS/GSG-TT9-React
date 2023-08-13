import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { H1 } from '../components/Typography';

import { PATHS } from './paths';
import AdminGuard from '../components/Guards/AdminGuard';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGuard';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const PostsPage = lazy(() => import('../pages/PostsPage'));
const PostPage = lazy(() => import('../pages/PostPage'));
const EditPostPage = lazy(() => import('../pages/EditPostPage'));
const CreatePostPage = lazy(() => import('../pages/CreatePostPage'));
const CountersPage = lazy(() => import('../pages/CountersPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const FormPage = lazy(() => import('../pages/FormPage'));
const Giffs = lazy(() => import('../pages/Giffs'));

// available for admins only
const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
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
const userPages = [
  {
    path: PATHS.POSTS.ROOT,
    element: <UserGuard />,
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
        path: PATHS.POSTS.FORM,
        element: <FormPage />,
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

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    ),
  },
];

const guestPages = [
  {
    index: true,
    element: (
      <GuestGuard>
        <HomePage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <GuestGuard>
        <AboutPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.COUNTERS,
    element: (
      <GuestGuard>
        <CountersPage />
      </GuestGuard>
    ),
  },
  ...authPages,
];

// available for all roles
const routes = [
  ...guestPages,
  ...userPages,
  ...adminPages,
  {
    path: PATHS.GIFF_SEARCH,
    element: <Giffs test={'false'} test2={true} />,
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
