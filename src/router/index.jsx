import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';

import { H1 } from '../components/Typography';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='posts' element={<Outlet />}>
        <Route index element={<PostsPage />} />
        <Route path=':id' element={<PostPage />} />
      </Route>

      {/* <Route path='counters' element={<CountersPage />} /> */}
      {/* <Route path='lifecycle' element={<LifeCyclePage counter={10} />} /> */}

      {/* <Route path='todo' element={<Outlet />}>
        <Route index element={<TodoPage />} />

        <Route path=':id' element={<AsideLAyout />}>
          <Route index element={<TodoItemPage />} />
          <Route path=':name' element={<div>Test Nest Page</div>} />
        </Route>
      </Route> */}

      <Route path='404' element={<H1>Page not found 404</H1>} />

      <Route path='*' element={<Navigate to='/404' replace={true} />} />
    </Routes>
  );
};

export default Router;
