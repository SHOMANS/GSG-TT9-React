export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  COUNTERS: '/counters',
  POSTS: {
    ROOT: '/posts',
    VIEW: `/posts/:id`,
    CREATE: '/posts/create',
    EDIT: '/posts/:id/edit',
  },
  ADMIN: {
    ROOT: '/admin',
    USERS: '/admin/users',
  },
  ERRORS: {
    NOT_FOUND: '404',
  },
};
