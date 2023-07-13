import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import EditPostPage from '../pages/EditPostPage';
import CreatePostPage from '../pages/CreatePostPage';

import { H1 } from '../components/Typography';
import { PATHS } from './paths';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
        <Route index element={<PostsPage />} />
        <Route path={PATHS.POSTS.VIEW} element={<PostPage />} />
        <Route path={PATHS.POSTS.EDIT} element={<EditPostPage />} />
        <Route path={PATHS.POSTS.CREATE} element={<CreatePostPage />} />
      </Route>

      <Route
        path={PATHS.ERRORS.NOT_FOUND}
        element={<H1>Page not found 404</H1>}
      />

      <Route
        path='*'
        element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
      />
    </Routes>
  );
};

export default Router;
