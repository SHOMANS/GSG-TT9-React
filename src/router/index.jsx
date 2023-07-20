import { useRoutes } from 'react-router-dom';

import { adminPages, routes, userPages } from './routes';
import { useState } from 'react';

const Router = () => {
  const [role, setRole] = useState('user'); // guest | user | admin

  // [1,2,3] //arr1
  // [4,5,6] // arr2

  // [arr1,arr2] // [[1,2,3],[4,5,6]]
  // [...arr1,...arr2] // [1,2,3,4,5,6]

  const handleRoles = () => {
    // if (role === 'admin') {
    //   return [...routes, ...adminPages];
    // }

    if (role === 'user') {
      return [...routes, ...userPages];
    }

    return [...routes, ...adminPages(role)];
  };

  const router = useRoutes(handleRoles());

  return router;

  // return (
  //   <Routes>
  //     <Route index element={<HomePage />} />
  //     <Route path={PATHS.ABOUT} element={<AboutPage />} />
  //     <Route path={PATHS.COUNTERS} element={<CountersPage />} />
  //     <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
  //       <Route index element={<PostsPage />} />
  //       <Route path={PATHS.POSTS.VIEW} element={<PostPage />} />
  //       <Route path={PATHS.POSTS.EDIT} element={<EditPostPage />} />
  //       <Route path={PATHS.POSTS.CREATE} element={<CreatePostPage />} />
  //     </Route>

  //     <Route
  //       path={PATHS.ERRORS.NOT_FOUND}
  //       element={<H1>Page not found 404</H1>}
  //     />

  //     <Route
  //       path='*'
  //       element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
  //     />
  //   </Routes>
  // );
};

export default Router;
